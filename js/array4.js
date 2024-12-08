function useJoin() {
  let fruit = ["apple", "banan", "orange"];

  let commaFruit = fruit.join();
  console.log(commaFruit);
  let hypenFruit = fruit.join("-");
  console.log(hypenFruit);
  let stringFruit = fruit.join("/test/");
  console.log(stringFruit);
  let stringFruit1 = fruit.join("/22/");
  console.log(stringFruit1);
}
useJoin();

function useReverse() {
  let animals = ["dog", "cat", "pig"];

  let reverseAnimals = animals.reverse();
  console.log(reverseAnimals);
}
useReverse();

function useConcat() {
  let animals = ["dog", "cat", "pig"];
  let animals2 = ["elephant", "rabbit", "cow"];

  let newArray = animals.concat(animals2);
  console.log(newArray);
  let newArray2 = animals.concat("bird");
  console.log(newArray2);
}
useConcat();

function useSort() {
  let strings = ["banana", "apple", "carrot"];
  let numbers = [20, 30, 40];

  let sortString = strings.sort();
  console.log(sortString);
  let sortNumber = numbers.sort((a, b) => a - b);
  console.log(sortNumber);
}
useSort();
