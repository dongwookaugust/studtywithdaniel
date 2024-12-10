// function numToString() {
//   let num = 123;

//   let str = String(num);
//   console.log("num to str =", str);

//   let str1 = num.toString();
//   console.log("num to str1 = ", str1);
// }

// function strToNum() {
//   let str = "-456";
//   let str1 = "4.56";

//   let num = Number(str);
//   console.log("str to num = ", num);

//   let num1 = parseInt(str, 10);
//   console.log("str to parseint num =", num1);

//   let num2 = parseFloat(str1);
//   console.log("str to parsefloat num=", num2);
// }

// function strToBoolean() {
//   let str = "true";
//   let str1 = "carrot";
//   let str2 = "false";
//   let str3 = "";
//   let num = 0;
//   let num1 = -0;
//   let exNull = null;
//   let exUndifined = undefined;
//   let exNan = NaN;

//   let bool = Boolean(str);
//   let bool1 = Boolean(str1);

//   let bool2 = Boolean(str2);
//   let bool3 = Boolean(str3);
//   let bool4 = Boolean(num);
//   let bool5 = Boolean(num1);
//   let bool6 = Boolean(exNull);
//   let bool7 = Boolean(exUndifined);
//   let bool8 = Boolean(exNan);

//   let bool9 = Boolean(true);
//   let bool10 = Boolean(false);

//   console.log(bool);
//   console.log(bool1);
//   console.log(bool2);
//   console.log(bool3);
//   console.log(bool4);
//   console.log(bool5);
//   console.log(bool6);
//   console.log(bool7);
//   console.log(bool8);
//   console.log(bool9);
//   console.log(bool10);

//Boolean(false)
// }
// numToString();
// strToNum();
// strToBoolean();

function strToNum() {
  let value1 = null;
  let value2 = undefined;

  console.log(Number(value1));
  console.log(Number(value2));

  let str1 = "42px";
  let str2 = "42.56px";

  console.log(parseInt(str1));
  console.log(parseFloat(str2));

  let x = "hello";
  let y = 5;

  console.log(x - y);

  let x1 = "5";
  let y1 = true;

  console.log(x1 + y1);
  console.log(Number(x1) + Number(y1));
}
strToNum();
