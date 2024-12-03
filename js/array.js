//Array is an ordered set of data(list like object)

let foods = ["chicken", "pizza", "kimbab"];
//add elemnet to end of array
foods.push("rice", "soup");
console.log("push=", foods);

//delete element to end of array
foods.pop();
console.log("\npop=", foods);

//delete element to beginning of array
foods.shift();
console.log("\nshift=", foods);

//add element to beginning of array
foods.unshift("hamburger");
console.log("\nunshift=", foods);

//delet a specified number of elements starting from a given index.
foods.splice(1, 2);
console.log("\nsplice=", foods);

//add two element at index 1
foods.splice(1, 0, "coffee", "cake");
console.log("\nAdd using splice=", foods);

//add sushi after delete index 1
foods.splice(1, 1, "sushi");
console.log("\nChange using splice=", foods);

//check a specific value is include
let includeFoods = foods.includes("hamburger");
console.log("\nUse include =", includeFoods);

//return the index of a specific element..
let foodIndexOF = foods.indexOf("sushi");
console.log("\nUse index of=", foodIndexOF);

//make new array copy from foods
let newFoods = foods.slice(0, 2);
console.log("\nUse slice=", newFoods);

//array consisting only of elements that meet the conditions
let filterFoods = foods.filter((foods) => foods.length > 5);
console.log("\nfilter=", filterFoods);

//testtest
