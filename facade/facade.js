class CPU {
    start() {
      console.log('Starting CPU');
    }
    shutdown() {
      console.log('Shutting down CPU');
    }
  }
  
  class RAM {
    start() {
      console.log('Starting RAM');
    }
    shutdown() {
      console.log('Shutting down RAM');
    }
  }
  
  class PSU {
    start() {
      console.log('Starting PSU');
    }
    shutdown() {
      console.log('Shutting down PSU');
    }
  }
  
  class ComputerFacade {
    constructor() {
      this.cpu = new CPU();
      this.ram = new RAM();
      this.psu = new PSU();
    }
  
    start() {
      this.cpu.start();
      this.ram.start();
      this.psu.start();
    }
  
    shutdown() {
      this.cpu.shutdown();
      this.ram.shutdown();
      this.psu.shutdown();
    }
  }

  module.exports = ComputerFacade;


// Using the ComputerFacade
const myComputer = new ComputerFacade();
myComputer.start(); // Start the computer
console.log('Working on the computer...');
myComputer.shutdown(); // Shut down the computer

