// way to repeat code until a condition is met
// what are the types of loops
// for loop - Used when the number of repetitions is clear
// while loop - Repeat until certain conditions are met
// do while loop - similar while loop but if the condition is false excutes at least once
// for in loop - Repeat all properties of an object, access property values ​​through each property name
// for of loop - used to iterate over the values of an iterable object (array, string, map, set)
// break - End repetition when encountered true
// continue - Skip if true is encountered

function forLoop() {
  for (let i = 0; i <= 9; i++) {
    console.log(i);
  }
  console.log("-----for loop end-----");
}

function whileLoop() {
  let i = 6;

  while (i <= 5) {
    console.log(i);
    i++;
  }
  console.log("-----while loop end-----");
}

function doWhileLoop() {
  let i = 6;
  do {
    console.log(i);
    i++;
  } while (i < 5);
  console.log("-----do while loop end-----");
}

function forInLoop() {
  let user = { name: "august", age: 38, nationality: "korean" };
  for (let key in user) {
    // user.name is same as user["name"]
    console.log(key, user[key]);
  }
  console.log("-----for in loop end-----");
}

function forOfLoop() {
  let fruits = ["apple", "banana", "tomato"];

  for (let fruit of fruits) {
    console.log(fruit);
  }
  // what are the 2 other ways of looping in array and what are their differences?
  console.log("-----for of loop end-----");
}
function forOfLoop1() {
  let greetings = "hello";

  for (let greeting of greetings) {
    console.log(greeting);
  }
  console.log("-----for of loop end-----");
}
function useBreak() {
  for (let i = 0; i <= 10; i++) {
    if (i === 7) {
      break; // exit loop
    }

    console.log(i);
  }
  console.log("-----use break end-----");
}

function useContinue() {
  for (let i = 0; i <= 9; i++) {
    if (i % 2 === 0) {
      // modulus, whole number not decimal
      continue;
    }

    console.log(i);
  }
  console.log("-----use continue end-----");
}

function multiplication() {
  for (let x = 2; x <= 9; x++) {
    for (let y = 1; y <= 9; y++) {
      console.log(`${x}*${y}=${x * y}`);
    }
  }
}
forLoop();
whileLoop();
doWhileLoop();
forInLoop();
forOfLoop();
forOfLoop1();
useBreak();
useContinue();
multiplication();
