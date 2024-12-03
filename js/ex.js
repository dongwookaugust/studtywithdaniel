// check on arrays
// different ways to loop in array
// what is pascal case, camel case, kebab case, screaming snake cas and snake case and when do we use it?

// const - you cannot change after declaration.
// let - you can change after declaration.
const name = "august";
let phoneNum = 12345;

// reserved words
let exampleString = "a";
let exampleNumber = 1;
let exampleBoolean = true;
let undefinedExam;
let nullExample = null;
let bigint = 11112111111211121112312313123123n;

// name = "Daniel";
// phoneNum = 6789;

// console.log("name: ", name);
// console.log("phoneNum: ", phoneNum);

function user() {
  const name = "august";
  let phoneNum = 2234;
}

function ridetaxi() {
  let money = 3000;

  if (money > 5000) {
    return "take taxi";
  } else {
    return "walk";
  }
}
console.log(ridetaxi());

function loop() {
  let result = "";
  for (let i = 0; i < 10; i++) {
    result += i + " ";
  }
  return result;
}

console.log(loop());

function testBlockScope() {
  if (true) {
    let message = "Hello";
    const greeting = "Hi";
    console.log(message);
    console.log(greeting);
  }
  // console.log(message);
  // console.log(greeting);
}
testBlockScope();
