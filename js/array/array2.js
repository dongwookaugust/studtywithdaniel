// Different ways to loop in array

let fruits = ["Apple", "Banana", "Cherry"];
// Using the length of array
console.log("\nUsing for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
function useForLoop2() {
  let fruits = ["Apple", "Banana", "Cherry"];

  for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
  }
}
useForLoop2();
// Using callback function
console.log("\nUsing forEach() :");
fruits.forEach((fruit) => {
  console.log(fruit);
});

// Using iterable object(short cut of for loop)
console.log("\nUsing for...of : ");
for (let fruit of fruits) {
  console.log(fruit);
}

// Using callback function and return new array
console.log("\nUsing for map :");
const upperFruit = fruits.map((fruits) => fruits.toUpperCase());
console.log("\nmap=", upperFruit);
