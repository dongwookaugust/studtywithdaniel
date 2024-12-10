// function useJoin() {
//   let fruits = ["apple", "banana", "cherry", "date"];

//   let exFruits = fruits.join();
//   let exFruits1 = fruits.join("|");
//   let exFruits2 = fruits.join("");
//   console.log(exFruits);
//   console.log(exFruits1);
//   console.log(exFruits2);
// }
// useJoin();

// function useReverse() {
//   let numbers = [1, 2, 3, 4, 5];

//   let reverseNum = numbers.reverse();
//   console.log(reverseNum);
// }
// useReverse();

// function useConcat() {
//   let colors1 = ["red", "blue"];
//   let colors2 = ["green", "yellow"];

//   let newColors = colors1.concat(colors2);
//   console.log(newColors);
//   let addColors = newColors.concat("orange");
//   console.log(addColors);
// }
// useConcat();

// function useSort() {
//   let names = ["John", "Anna", "Zoe", "Chris"];

//   let exNames = names.sort();
//   console.log(exNames);
//   let exNames1 = exNames.reverse();
//   console.log(exNames1);
// }
// useSort();

// function useSort1() {
//   let scores = [45, 2, 89, 32, 5];

//   let exScores = scores.sort((a, b) => a - b);
//   console.log(exScores);
//   let exScores1 = scores.sort((a, b) => b - a);
//   console.log(exScores1);
// }
// useSort1();

function useJoin() {
  let words = ["JavaScript", "is", "fun"];

  let exWords = words.join(" ");
  console.log(exWords);
  console.log(exWords.toUpperCase());
}
useJoin();

function useReverse1() {
  let numbers = [10, 20, 30, 40, 50];

  let revNum = numbers.reverse();
  console.log(revNum);
  let maxNum = Math.max(...revNum);
  console.log(maxNum);
}
useReverse1();

function useConcat1() {
  let fruits = ["apple", "banana"];
  let vegetables = ["carrot", "broccoli"];

  let foods = fruits.concat(vegetables);
  console.log(foods);
  let addFoods = foods.concat("grape");
  console.log(addFoods);
}
useConcat1();

function useSort1() {
  let names = ["Charlie", "Alice", "Bob"];

  let exNames = names.sort().reverse();
  console.log(exNames);

  let firstIndex = exNames[0];
  console.log(firstIndex);
  let lastIndex = exNames[exNames.length - 1];
  console.log(lastIndex);
}
useSort1();
