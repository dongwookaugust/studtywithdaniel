function numToString() {
  let num = 123;
  let str = String(num);
  console.log("num to str =", str);
  let str1 = num.toString();
  console.log("num to str1 = ", str1);
}

function strToNum() {
  let str = "456";
  let str1 = "4.56";
  let num = Number(str);
  console.log("str to num = ", num);

  let num1 = parseInt(str, 10);
  console.log("str to parseint num =", num1);

  let num2 = parseFloat(str1);
  console.log("str to parsefloat num=", num2);
}

function strToBoolean() {
  let str = "true";

  let bool = Boolean(str);
  console.log(bool);
}
numToString();
strToNum();
strToBoolean();
