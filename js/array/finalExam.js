function usePush() {
  let numbers = [];

  let addNum = numbers.push(10, 20, 30, 40);
  console.log(numbers);
}
usePush();

function usePop() {
  let fruits = ["apple", "banana", "mango"];

  let delFruit = fruits.pop();
  console.log(fruits);
  console.log(delFruit);
}
usePop();

function useShift() {
  let colors = ["red", "green", "blue"];

  let delColor = colors.shift();
  console.log(delColor);
  console.log(colors);
}
useShift();

function useUnshift() {
  let animals = ["dog", "cat"];

  animals.unshift("rabbit", "hamster");
  console.log(animals);

  function addAnimal(...animal) {
    animals.unshift(...animal);
  }
  console.log(animals);
  addAnimal("rabbit", "hamster");
}
useUnshift();

function useSplice() {
  let names = ["John", "Jane", "Mark"];

  let newNames = names.splice(1, 1, "Doe", "Smith");
  console.log(names);
}
useSplice();

function useSlice() {
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  let changeDays = days.slice(1, 4);
  console.log(changeDays);
}
useSlice();

function useIndexof() {
  let items = ["pen", "pencil", "notebook", "eraser"];

  let findItem = items.indexOf("notebook");
  console.log(findItem);
}
useIndexof();

function useIncludes() {
  let fruits = ["apple", "banana", "mango"];

  let checkFruits = fruits.includes("banana");
  console.log(checkFruits);
}
useIncludes();

function useFilter() {
  let numbers = [5, 10, 15, 20, 25];

  let chcekNum = numbers.filter((num) => num > 10);
  console.log(chcekNum);
}
useFilter();

function useJoin() {
  let words = ["Hello", "world"];

  let sentence = words.join(" ");
  console.log(sentence);
}
useJoin();

function useReverse() {
  let numbers = [1, 2, 3, 4, 5];

  let reverseNum = numbers.reverse();
  console.log(reverseNum);
}
useReverse();

function useConcat() {
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];

  let newArray = arr1.concat(arr2);
  console.log(newArray);
}
useConcat();

function useSort() {
  let numbers = [40, 10, 30, 20];

  let sortNum = numbers.sort((a, b) => a - b);
  console.log(sortNum);
}
useSort();

function useEvery() {
  let numbers = [6, 7, 8, 9];

  let checkNum = numbers.every((num) => num > 5);
  console.log(checkNum);
}
useEvery();

function useSome() {
  let numbers = [5, 10, 15, 20];

  let checkNum = numbers.some((num) => num > 10);
  console.log(checkNum);
}
useSome();

function useFind() {
  let numbers = [10, 15, 25, 30];

  let checkNum = numbers.find((num) => num > 20);
  console.log(checkNum);
}
useFind();

function useFindIndex() {
  let numbers = [10, 20, 30, 40];

  let checkIndex = numbers.findIndex((num) => num > 30);
  console.log(checkIndex);
}
useFindIndex();

function useReduce() {
  let numbers = [5, 10, 15, 20];

  let sum = numbers.reduce((a, b) => a + b, 0);
  console.log(sum);
}
useReduce();

function useLoop() {
  let numbers = [1, 2, 3, 4];

  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);
  }
}
useLoop();

function useForEach() {
  let fruits = ["apple", "banana", "mango"];

  fruits.forEach((fruit) => {
    console.log(fruit + "!");
  });
}
useForEach();

function useForOF() {
  let numbers = [1, 2, 3, 4, 5, 6];

  for (let number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
    }
  }
}
useForOF();

function useMap() {
  let animals = ["dog", "cat", "rabbit"];

  let upperAnimals = animals.map((animal) => animal.toUpperCase());
  console.log(upperAnimals);
}
useMap();

function doubleNum() {
  let numbers = [2, 3, 4];

  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] ** 2);
  }
}
doubleNum();

function doubleNum1() {
  let numbers = [2, 3, 4];

  let doubleNum = numbers.forEach((num) => {
    console.log(num ** 2);
  });
}
doubleNum1();

function doubleNum2() {
  let numbers = [2, 3, 4];

  let doublenum = numbers.map((num) => num ** 2);
  console.log(doublenum);
}
doubleNum2();
