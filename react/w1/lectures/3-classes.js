// class syntax
class ClassName {
  // PascalCase
  constructor(param1, param2 = "default value") {
    this.prop1 = param1;
    this.prop2 = param2;
    // make as many properties as you want
  }

  // add methods here
  method1() {
    // how can you print the properties of the object here?
    console.log("method1");
  }
}

let objFromClass = new ClassName("prop1 value");

// console.log(objFromClass);

// monopoly
let player1 = {
  name: "Michael",
  money: "100000",
  houses: [],
  roll() {
    console.log(`rolling dice`);
  },
  method1() {
    console.log("another one");
  },
  balance() {
    console.log(`${this.name} has ${this.money} amount of money left.`);
  },
};

let player2 = {
  name: "Kristen",
  money: "100000",
  houses: [],
  roll() {
    console.log(`rolling dice`);
  },
  method1() {
    console.log("another one");
  },
  balance() {
    console.log(`${this.name} has ${this.money} amount of money left.`);
  },
};

let player3 = {
  name: "Katherine",
  money: "100000",
  houses: [],
  roll() {
    console.log(`rolling dice`);
  },
  method1() {
    console.log("another one");
  },
  balance() {
    console.log(`${this.name} has ${this.money} amount of money left.`);
  },
};

let player4 = {
  name: "Serena",
  money: "100000",
  houses: [],
  roll() {
    console.log(`rolling dice`);
  },
  method1() {
    console.log("another one");
  },
  balance() {
    console.log(`${this.name} has ${this.money} amount of money left.`);
  },
};

class Player {
  constructor(name, money = 10000, houses = []) {
    this.name = name;
    this.money = money;
    this.houses = houses;
  }

  roll() {
    console.log(`Rolling dice`);
  }

  balance() {
    console.log(`${this.name} has ${this.money} amount of money left.`);
  }

  method1() {
    console.log("another one");
  }
}

let p1 = new Player("Michael");
let p2 = new Player("Katherine");
let p3 = new Player("Serena");
let p4 = new Player("Kristen");

// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);

// What is Object Oriented Programming?
// OOP: APIE
// Abstraction
// Encapsulation
// Inheritance
// Polymorphism

// inheritance
class Vehicle {
  constructor(type = "Car") {
    this.type = type;
    this.motorCapacity = "2.4L";
  }

  getType() {
    console.log("car");
  }
}

class Motorcycle extends Vehicle {
  constructor(type = "motorcycle", numWheels = 2) {
    super(type);
    this.numWheels = numWheels;
  }

  getType() {
    console.log("Motorcycle");
  }
}

let vehicle2 = new Vehicle();
// vehicle2.getType();
let bike = new Motorcycle();
// bike.getType();

// console.log(vehicle2);
// console.log(bike);
