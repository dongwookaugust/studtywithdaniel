class Car {
  constructor(windows) {
    this.windows = windows;
  }
  company() {
    throw new Error("You must implement the company method in the subclass!");
  }

  color() {
    throw new Error("You must implement the color method in the subclass!");
  }
}

class Truck extends Car {
  constructor() {
    super();
    this.windows = "six";
  }
  company() {
    return "The truck made from toyota!";
  }
  color() {
    return "The Truck is red!";
  }
}

class Coupe extends Car {
  constructor() {
    super();
    this.windows = "four";
  }
  company() {
    return "The coupe made from Kia!";
  }
  color() {
    return "The coupe is gray!";
  }
}

const truck = new Truck();
const coupe = new Coupe();

console.log(truck.company());
console.log(truck.color());
console.log(coupe.company());
console.log(coupe.color());
console.log(coupe.windows);
console.log(truck.windows);
