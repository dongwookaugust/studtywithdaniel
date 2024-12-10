function usePush() {
  let fruits = ["apple", "banana"];

  const newLength = fruits.push("cherry");
  console.log(fruits);
  console.log(newLength);

  if (!fruits.includes("mango")) {
    fruits.push("mango");
  }
  console.log(fruits);
  console.log("=====use push end =====");
}
// usePush();

function usePush2() {
  let cart = [];

  function addCart(...item) {
    // ...item means can take multiple strings as arguments
    cart.push(...item);
    console.log(`Added ${item}. cart now: ${cart}`);
  }
  addCart("note");
  addCart("milk", "clothes");
  console.log("=====use push2 end =====");
}
// usePush2();

function usePop() {
  let foods = ["porkvally", "rice", "soybeansoup", "curry"];

  let lastFood = foods.pop();
  console.log(lastFood);
  let lastFood1 = foods.pop();
  console.log(lastFood1);
  console.log(`Use pop : remain food is ${foods}`);
  console.log("=====use pop end =====");
}
// usePop();

function useShift() {
  let foods = ["porkvally", "rice", "soybeansoup", "curry"];

  let shiftFoods = foods.shift();
  console.log(shiftFoods);
  console.log(`Use shift : remain food is ${foods}`);
  console.log("=====use shift end =====");
}
// useShift();

function useUnshift() {
  let foods = ["porkvally", "curry", "cake"];

  let addedMenu = foods.unshift("gamjatang", "jjambbong");
  console.log(`use UnShift : add new menu is ${foods}`);
  console.log(addedMenu);
  console.log("=====use unshift end =====");
}
// useUnshift();

function useSplice() {
  let foods = ["porkvally", "rice", "soybeansoup", "curry"];

  let reduceFood = foods.splice(1, 1);
  console.log(reduceFood);
  console.log(`delete = ${foods}`);
  let addedFood = foods.splice(1, 0, "cake");
  console.log(`added = ${foods}`);
  let changedFood = foods.splice(1, 1, "sushi");
  console.log(`change = ${foods}`);
  let deleteFood = foods.splice(1);
  console.log(foods);
  console.log("=====use splice end =====");
}

// useSplice();

function useIncludes() {
  let foods = ["porkvally", "rice", "soybeansoup", "curry"];

  if (!foods.includes("ramyun")) {
    foods.push("ramyun");
  }
  console.log(foods);
  console.log("=====use includes end =====");
}
// useIncludes();

function useSlice() {
  let foods = [
    "porkvally",
    "rice",
    "soybeansoup",
    "curry",
    "cake",
    "jjambbong",
  ];

  let sliceFoods = foods.slice(1, 3);
  console.log(sliceFoods);
  let sliceFood1 = foods.slice(1);
  console.log(sliceFood1);
  let sliceFood2 = foods.slice(2, 10);
  console.log(sliceFood2);
  let sliceFood3 = foods.slice(-4, -1);
  console.log(sliceFood3);
  let sliceFood4 = foods.slice();
  console.log(sliceFood4);
}
// useSlice();
function useFilter() {
  let foods = [
    "porkvally",
    "rice",
    "soybeansoup",
    "curry",
    "cake",
    "jjambbong",
  ];
  const context = { keyWord: "c" };

  let filterFood = foods.filter((foods) => foods.startsWith("c"));
  console.log(filterFood);
  let filterFood1 = foods.filter((foods) => foods.length > 4);
  console.log(filterFood1);
  let filterFood2 = foods.filter((foods, index) => index % 2 === 0);
  console.log(filterFood2);
  let filterFood3 = foods.filter(function (food) {
    return food.includes(this.keyWord);
  }, context);
  console.log(filterFood3);
}
useFilter();
