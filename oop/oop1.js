// 1. what is js?
// 2. what are variables? difference between const, let and var
// 3. what are primitive data types?
// 4. what are operators and different types? what is difference between == and ===
// 5. what are conditionals?
// 6. What are loops, and types of loops
// 7. What are arrays?
//       - how to initialize
//       - how to remove an item
//       - how to add an item
//       - how to loop in an array
// 8. What is casting?
//   - how to change a string to a number
//   - how to change number into a string
//   - how to change string to a boolean
// ---------

// public - access everywhere
// protected - access within class and child class
// private - only access in the class

// 1. create private variable called "name" which is a string inside Fried Chicken class
// 2. create a protected variable called "weight" which is a number inside fried chicken class
// 3. create a public function cook in fried chicken class, that calls heatUp function and after that it console log "The (name of class) is now cooking"
// 4. create a protected function heatUp in fried chicken class that console log "starting fire for (name of class)"
// 5. create a private function called done in fried chicken class that console log "(name of class) is done" and call it inside the cook function as the last step.

class Chicken {
  // instantiate a class
  constructor(receipe, time) {
    this.receipe = receipe;
    this.time = time;
  }
}
class FriedChicken extends Chicken {
  // used when creating new object from class
  // set the default values

  #name;
  _weight;

  constructor(receipe, time, name, weight) {
    super(receipe, time);
    this.#name = name;
    this._weight = weight;
  }

  cook() {
    console.log(
      `The ${this.#name} is now cooking with a weight of ${this._weight} kg.`
    );
    this._heatUp();
    this.#done();
  }

  _heatUp() {
    console.log(`Starting fire for ${this.#name}`);
  }

  #done() {
    console.log(`${this.#name} is done`);
  }
}

class ChickenSoup extends Chicken {
  constructor() {
    super();
    this.receipe = "boiled";
    this.time = "1 hour";
  }
}
// update example
// yangyongFriedChicken - 20mins, fried
// originalFriedChicken - 35mins, fried
const yangyongFriedChicken = new FriedChicken(
  "fried",
  "30min",
  "yangyong Fried Chicken",
  "1.2"
);
const originalFriedChicken = new FriedChicken(
  "fried",
  "25min",
  "original Fried Chicken",
  "1"
);
yangyongFriedChicken.time = "45mins";
const friedChicken = new FriedChicken();
const chickenSoup = new ChickenSoup();

// programming languages - Java, c#
// scripting language - javascript, typescript - not as strict as programming language
// method/functions - when we call it, we use ()
originalFriedChicken.cook();
console.log("orig chicken name: ", originalFriedChicken._weight);
yangyongFriedChicken.cook();
// yangyongFriedChicken._weight();

// console.log(friedChicken.receipe)
// console.log(chickenSoup.receipe);
// console.log(`It takes ${friedChicken.time} to make fired chicken`);
// console.log(`It takes ${chickenSoup.time} to make chicken soup`);
// console.log(yangyongFriedChicken.time);
console
  .log
  // `It takes ${yangyongFriedChicken.time} to make yangyonFired chicken` // template literal - use backtick to combine string
  // "It takes " + yangyongFriedChicken.time + " to make ${yanyongFriedChicken.name} Chicken"
  ();

// console.log(`It takes ${originalFriedChicken.time} to make original chicken`);
// console.log(
//   `Weight of yangyongFriedChicken: ${yangyongFriedChicken._weight} kg`
// );
// // console.log(`Weight of yangyongFriedChicken: ${yangyongFriedChicken.#name} kg`);
// console.log(`Weight of fried chicken: ${friedChicken._weight} kg`);
// console.log(`Weight of fried chicken: ${friedChicken.cook} kg`);
// console.log(`Weight of fried chicken: ${friedChicken._heatUp} kg`);
// // console.log(`Weight of fried chicken: ${friedChicken.#done} kg`);
