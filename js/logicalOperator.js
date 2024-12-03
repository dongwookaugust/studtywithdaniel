// && => Both condition must be true,
//If any one is not true, it returns false.
// or => If either one is true, it returns true
// ! => opposite
// Nullish Coalescing Operator => It returns when the left operand is null or undefined
function andExam() {
  const Gender = "Male";
  const national = "Korea";

  if (Gender === "Male" && national === "Korea") {
    console.log("He is Korean man");
  } else {
    console.log("He is not Korean Man");
  }
}

function andExam2() {
  const name = "Hoon";
  const national = "Korea";

  if (name !== "Daniel" && national !== "Canada") {
    console.log("He is Not Daniel");
  } else {
    console.log("He is Daniel");
  }
}

function orExam() {
  let soju = "drink";
  let whiskey = "cannot drink";

  if (soju === "drink" || whiskey === "drink") {
    console.log("He can drink liquors");
  } else {
    console.log("He can not drink liquors");
  }
}

function notEx() {
  let a = true;
  let b = false;

  console.log(!a);
  console.log(!b);
}

function notEx1() {
  let a = "Daniel";

  if (a === "Leon") {
    console.log("He is Leon");
  } else if (a === "Kelly") {
    console.log("She is Kelly");
  } else {
    console.log("I don't know");
  }
}

function nullEx() {
  let name1 = null;
  let name2 = "August";

  let setName1 = name1 ?? "Guest";
  let setName2 = name2 ?? "Guest";

  console.log(setName1);
  console.log(setName2);

  const gender = "male";
  const name = "leon";
  // check if gender is male and if name is leon or daniel then say canadian if name is august say korean
  if (gender === "male" && (name === "leon" || name === "daniel")) {
    console.log("He says Canadian");
  }
}

function nullEx1(name) {
  let name = name ?? "Guest";
  console.log(`Welcome ${name}`);
}

andExam();
andExam2();
orExam();
notEx();
nullEx();
nullEx1(null);
nullEx1(undefined);
nullEx1("August");
