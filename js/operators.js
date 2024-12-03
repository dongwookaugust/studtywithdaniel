//Symbols for mathematical calculations and logical judgment

function arithmetic() {
  let a = 10;
  let b = 5;

  let addEx = a + b;
  console.log("a+b=", addEx);

  let subEx = a - b;
  console.log("a-b=", subEx);

  let multiEx = a * b;
  console.log("a*b=", multiEx);

  let diviEx = a / b;
  console.log("a/b=", diviEx);
}

function comparison() {
  let a = 5;
  let b = "5";
  let c = 10;
  let d = "10";
  let e = 5;

  console.log("==", a == b); // == just check value
  console.log("===", a === b); // === check value and type, false(a primitive type is number and b is string not match type)
  console.log("!=", a != d); // !=  is not same and just check value
  console.log("!==", a !== c);
  // !==  is not same and also check the type, true(a primitive type is number and d is string, also value is not same)
  // if i use e that result is false
  console.log("<", a <= d); //  less than or equal
  console.log(">", a >= d); // lager than or equal

  if (d === 10) {
    console.log("d was same as 10");
  } else {
    console.log("d was not same 10;");
  }
}

function assignment() {
  let a = 1;
  let b = "welcome ";
  let c = [5, 10, 15];

  counter = a + 1;
  console.log(counter);

  a += 1;
  console.log(a);

  a *= 2;
  console.log(a);

  a /= 2;
  console.log(a);

  b += "back";
  console.log(b);

  c.length += 2;
  c[3] = 20;
  c[4] = 25;
  // c.push(20,25)
  // if i use push that result was [ 5, 10, 15, <2 empty items>, 20, 25 ]
  console.log(c);

  c.length -= 1;
  console.log(c);
}

function ternary() {
  let age = 20;
  //
  let checkAge = age >= 18 ? "Adult" : "Minor";
  console.log(checkAge);
}

function ternary1() {
  let coffee = 2000;

  let payCoffee = coffee >= 3500 ? "expensive" : "cheep";
  console.log(payCoffee);
}

function ternary2() {
  let a = 10;
  let b = 15;

  let checkA = a >= b ? "Good(true)" : "Bad(false)";
  console.log(checkA);
}

function logicalOp() {}

arithmetic();
comparioson();
assignment();
ternary();
ternary1();
ternary2();
