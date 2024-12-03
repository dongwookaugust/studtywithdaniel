// Different ways to loop in array

let fruits = ["Apple", "Banana", "Cherry"];
// Using the length of array
console.log("\nUsing for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using callback function
console.log("\nUsing forEach() :");
fruits.forEach((fruits) => {
  console.log(fruits);
});

// Using iterable object
console.log("\nUsing for...of : ");
for (let fruit of fruits) {
  console.log(fruit);
}

// Using callback function and return new array
console.log("\nUsing for map() :");
const upperfruit = fruits.map((fruit) => {
  return fruit.toUpperCase(); // 과일 이름을 대문자로 변환
});

console.log("Transformed Fruits:", upperfruit);
