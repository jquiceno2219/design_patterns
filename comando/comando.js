// Receiver: El objeto que realiza la acción
class Light {
  turnOn() {
    console.log("Luz encendida");
  }

  turnOff() {
    console.log("Luz apagada");
  }
}

// Command interface
class Command {
  execute() {}
}

// Concrete Command para encender la luz
class TurnOnLightCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

// Concrete Command para apagar la luz
class TurnOffLightCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

// Invoker: maneja los comandos
class RemoteControl {
  constructor() {
    this.command = null;
  }

  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

// Uso
const livingRoomLight = new Light();
const turnOnCommand = new TurnOnLightCommand(livingRoomLight);
const turnOffCommand = new TurnOffLightCommand(livingRoomLight);

const remoteControl = new RemoteControl();

remoteControl.setCommand(turnOnCommand);
remoteControl.pressButton(); // Enciende la luz

remoteControl.setCommand(turnOffCommand);
remoteControl.pressButton(); // Apaga la luz
