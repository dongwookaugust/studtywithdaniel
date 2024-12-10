// function useJoin() {
//   let fruit = ["apple", "banan", "orange"];

//   let commaFruit = fruit.join();
//   console.log(commaFruit);
//   let hypenFruit = fruit.join("-");
//   console.log(hypenFruit);
//   let stringFruit = fruit.join("/test/");
//   console.log(stringFruit);
//   let stringFruit1 = fruit.join("/22/");
//   console.log(stringFruit1);
// }
// useJoin();

// function useReverse() {
//   let animals = ["dog", "cat", "pig"];

//   let reverseAnimals = animals.reverse();
//   console.log(reverseAnimals);
// }
// useReverse();

// function useConcat() {
//   let animals = ["dog", "cat", "pig"];
//   let animals2 = ["elephant", "rabbit", "cow"];

//   let newArray = animals.concat(animals2);
//   console.log(newArray);
//   let newArray2 = animals.concat("bird");
//   console.log(newArray2);
// }
// useConcat();

// function useSort() {
//   let strings = ["banana", "apple", "carrot"];
//   let numbers = [20, 30, 40];

//   let sortString = strings.sort();
//   console.log(sortString);
//   let sortNumber = numbers.sort((a, b) => a - b);
//   console.log(sortNumber);
// }
// useSort();

function useReduce() {
  let numbers = [1, 2, 3, 4];

  let sum = numbers.reduce((acc, cur) => acc + cur, 0);
  console.log(sum);
}
useReduce();

function useReduce1() {
  let num = [1, 2, 3, 4];

  let sum = num.reduce((acc, cur) => acc * cur, 1);
  console.log(sum);
}
useReduce1();

function useReduce2() {
  let num = [1, 5, 3, 9, 2];

  let max = num.reduce((acc, cur) => (cur > acc ? cur : acc));
  console.log(max);
}
useReduce2();
