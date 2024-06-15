// Memento class
class Memento {
    constructor(state) {
        this.state = JSON.parse(JSON.stringify(state)); // Deep copy the state
    }

    getState() {
        return this.state;
    }
}

// Originator (Canvas) class
class Canvas {
    constructor() {
        this.shapes = [];
    }

    addShape(shape) {
        console.log(`Canvas: Adding shape ${JSON.stringify(shape)}`);
        this.shapes.push(shape);
    }

    getShapes() {
        return this.shapes;
    }

    saveStateToMemento() {
        console.log('Canvas: Saving state to Memento.');
        return new Memento(this.shapes);
    }

    restoreStateFromMemento(memento) {
        this.shapes = memento.getState();
        console.log(`Canvas: State after restoring from Memento: ${JSON.stringify(this.shapes)}`);
    }
}

// Caretaker class
class Caretaker {
    constructor() {
        this.mementoList = [];
    }

    add(memento) {
        this.mementoList.push(memento);
    }

    get(index) {
        return this.mementoList[index];
    }
}

// Usage
const canvas = new Canvas();
const caretaker = new Caretaker();

// User draws shapes
canvas.addShape({type: 'circle', x: 10, y: 10, radius: 5});
caretaker.add(canvas.saveStateToMemento());

canvas.addShape({type: 'square', x: 20, y: 20, side: 10});
caretaker.add(canvas.saveStateToMemento());

canvas.addShape({type: 'triangle', x: 30, y: 30, base: 10, height: 15});

// Display current shapes
console.log(`Current Shapes: ${JSON.stringify(canvas.getShapes())}`);

// User decides to undo the last change
canvas.restoreStateFromMemento(caretaker.get(1));
console.log(`Restored Shapes: ${JSON.stringify(canvas.getShapes())}`);

// User decides to undo another change
canvas.restoreStateFromMemento(caretaker.get(0));
console.log(`Restored Shapes: ${JSON.stringify(canvas.getShapes())}`);
