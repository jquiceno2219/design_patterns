class Color {
    constructor(name) {
      this.name = name
    }
}  
class colorFactory {
    constructor(name) {
      this.colors = {};
    }
    create(name) {
      let color = this.colors[name];
      if (color) return color;
      this.colors[name] = new Color(name);
      return this.colors[name];
    }
};
exports.module = {colorFactory};

// Create an instance of the colorFactory
const factory = new colorFactory();

// Create some Color instances
const red1 = factory.create('red');
const blue1 = factory.create('blue');
const red2 = factory.create('red');
const blue2 = factory.create('blue');
const green1 = factory.create('green');

// Check if the colors are reused
console.log(red1 === red2);  // true
console.log(blue1 === blue2);  // true
console.log(red1 === green1);  // false
// Print out the color names
console.log(red1.name);  // red
console.log(blue1.name);  // blue
console.log(green1.name);  // green

