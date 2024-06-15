// Define Pizza interface
class Pizza {
    getDescription() {}
    getPrice() {}
}

// Define PizzaDecorator interface
class PizzaDecorator extends Pizza {
    constructor(pizza) {
        super();
        this.pizza = pizza;
    }

    getDescription() {
        return this.pizza.getDescription();
    }

    getPrice() {
        return this.pizza.getPrice();
    }
}

// Define PizzaShop class
class PizzaShop {
    static main() {
        let margherita = new Margherita();
        margherita = new Cheese(margherita);
        margherita = new Toppings(margherita);
        console.log(margherita.getDescription());
        console.log(margherita.getPrice());
    }
}

// Define Toppings decorator
class Toppings extends PizzaDecorator {
    constructor(pizza) {
        super(pizza);
    }

    getDescription() {
        return super.getDescription() + " with extra toppings";
    }

    getPrice() {
        return super.getPrice() + 50.00;
    }
}

// Define Margherita Pizza
class Margherita extends Pizza {
    getDescription() {
        return "This is a Margherita Pizza";
    }

    getPrice() {
        return 400.00;
    }
}

// Define FarmHouse Pizza
class FarmHouse extends Pizza {
    getDescription() {
        return "This is a Farm House Pizza";
    }

    getPrice() {
        return 500.00;
    }
}

// Define Cheese decorator
class Cheese extends PizzaDecorator {
    constructor(pizza) {
        super(pizza);
    }

    getDescription() {
        return super.getDescription() + " with extra cheese";
    }

    getPrice() {
        return super.getPrice() + 10.00;
    }
}

// Run the main method
PizzaShop.main();
