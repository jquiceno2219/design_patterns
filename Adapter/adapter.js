// Posee un método attack que calcula el ataque según el nivel
class Soldier {
    constructor(level) {
      this.level = level;
    }
  
    attack() {
      return this.level * 1;
    }
  }
  
  class Jedi {
    constructor(level) {
      this.level = level;
    }
  
    //método que calcula el ataque basado en su nivel, pero con una mecánica diferente (multiplica el nivel por 100).
    attackWithSaber() {
      return this.level * 100;
    }
  }
  
  //permite que una instancia de jedi pueda funcionar con el metodo attack de soldier
  class JediAdapter {
    constructor(jedi) {
      this.jedi = jedi;
    }
  
    //Implementa el método attack esperado por Soldier, pero internamente llama al método attackWithSaber de Jedi.
    attack() {
      return this.jedi.attackWithSaber();
    }
  }

const soldier = new Soldier(5);
console.log(soldier.attack()); // Output: 5

const jedi = new Jedi(5);
const adaptedJedi = new JediAdapter(jedi);
console.log(adaptedJedi.attack()); // Output: 500