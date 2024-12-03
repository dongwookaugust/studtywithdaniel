class Device {
  constructor(button) {
    this.button = button;
  }
  turnOn() {
    throw new Error("You must implement the turnOn method in the subclass!");
  }

  turnOff() {
    throw new Error("You must implement the turnOff method in the subclass!");
  }
}

class Smartphone extends Device {
  constructor() {
    super();
    this.button = 3;
  }
  turnOn() {
    return "The smartphone is now ON.";
  }

  turnOff() {
    return "The smartphone is now OFF.";
  }
}

class Laptop extends Device {
  constructor(button) {
    super();
    this.button = 2;
  }
  turnOn() {
    return "The laptop is booting up.";
  }

  turnOff() {
    return "The laptop is shutting down.";
  }
}

const phone = new Smartphone();
const laptop = new Laptop();

console.log(phone.turnOn());
console.log(phone.turnOff());
console.log(laptop.turnOn());
console.log(laptop.turnOff());
console.log(phone.button);
console.log(laptop.button);
