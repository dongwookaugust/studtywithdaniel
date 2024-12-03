let number = [1, 2, 3, 4, 5];
console.log(number);

let num = [1, 2, 3];
num.length = 0;
console.log(num);

let num1 = [1, 2, 3];
num = [];
console.log(num);

let num2 = [1, 2, 3];
num.splice(0);
console.log(num);

let fruits = ["Apple", "Banana", "Cherry"];

console.log("\nUsing for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("\nUsing forEach() :");
fruits.forEach((fruits) => {
  console.log(fruits);
});

console.log("\nUsing for...of : ");
for (let fruit of fruits) {
  console.log(fruit);
}

console.log("\nUsing for map() :");
fruits.map((fruit) => {
  console.log(fruit);
});
