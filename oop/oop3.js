class Transport {
  constructor(wheels) {
    this.wheels = wheels;
  }
  move() {
    throw new Error("You must implement the move method in the subclass!");
  }
}

class Car extends Transport {
  constructor() {
    super();
    this.wheels = "four";
  }

  move() {
    return "The car drives on the road.";
  }
}

class Airplane extends Transport {
  move() {
    return "The airplane flies in the sky.";
  }
}

const car = new Car();
const airplane = new Airplane();
console.log(car.move());
console.log(airplane.move());
console.log(`car has ${car.wheels} wheels`);
console.log(car.wheels);
