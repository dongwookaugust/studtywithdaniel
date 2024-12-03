// Perform different actions based on specific conditions.
// if else => Used when there is a range value
// switch => Used when have to choose one

function checkGrade() {
  let score = 85;

  if (score >= 90) {
    console.log("Grade : A");
  } else if (score >= 80) {
    console.log("Grade : B");
  } else if (score >= 70) {
    console.log("Grade : C");
  } else if (score >= 60) {
    console.log("Grade : D");
  } else if (score >= 50) {
    console.log("Grade : E");
  } else {
    console.log("Grade : F");
  }
}

function orderFood() {
  let chooseNum = 22;

  switch (chooseNum) {
    case 1:
      console.log("You ordered Ramyun");
      break;
    case 2:
      console.log("You oredered Kimbab");
      break;
    case 3:
      console.log("You oredered Sushi");
      break;
    case 4:
      console.log("You oredered a cup of Coffee");
      break;
    default:
      console.log("We don't have this menu");
  }
}

function haveMoney() {
  let money = 3500;

  if (money > 4500) {
    console.log("You can order latte");
  } else if (money > 3000) {
    console.log("You can order Americano");
  } else {
    console.log("You can not order");
  }
}

function monyCalculate() {
  let money = 6000;
  let needBal = 1000;

  if (money - needBal >= 5000) {
    console.log("You can order latte");
  } else if (money - needBal >= 3000) {
    console.log("You can order Americano");
  } else {
    console.log("You can not order");
  }
}

function skill() {
  let selectSkill = 2;

  switch (selectSkill) {
    case 1:
      console.log("bash");
      break;
    case 2:
      console.log("icebolt");
      break;
    case 3:
      console.log("thunderbolt");
      break;
  }
}

function weekly() {
  let days = 2;

  switch (days) {
    case 1:
      console.log("Today is monday");
      break;
    case 2:
      console.log("Today is Tuesday");
      break;
    case 3:
      console.log("Today is Wednesday");
      break;
    case 4:
      console.log("Today is Thursday");
      break;
    case 5:
      console.log("Today is Friday");
      break;
    case 6:
      console.log("Today is Saturday");
      break;
    case 7:
      console.log("Today is Sunday");
      break;
  }
}

checkGrade();
orderFood();
haveMoney();
skill();
weekly();
monyCalculate();
