// function usePush() {
//   let fruits = ["apple", "banana"];

//   let addFruits = fruits.push("grape", "orange");
//   console.log(fruits);
// }
// usePush();

// function usePop() {
//   let numbers = [1, 2, 3, 4];

//   let num = numbers.pop();
//   console.log(num);
//   console.log(numbers);
// }
// usePop();

// function useShift() {
//   let colors = ["red", "green", "blue"];

//   let newColors = colors.shift();
//   console.log(newColors);
//   console.log(colors);
// }
// useShift();

// function useUnshift() {
//   let animals = ["dog", "cat"];

//   let addAnimals = animals.unshift("rabbit", "hamster");
//   console.log(animals);

//   function addAnimals1(...animal) {
//     animals.unshift(...animal);
//     console.log(`test ${animals}`);
//   }

//   addAnimals1("rabbit", "hamster");
// }
// useUnshift();

// function useSplice() {
//   let names = ["John", "Jane", "Mark"];

//   let changeNames = names.splice(1, 1, "Doe", "Smith");
//   console.log(names);
// }
// useSplice();

// function useSlice() {
//   let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

//   let sliceDays = days.slice(1, 4);
//   console.log(sliceDays);
// }
// useSlice();

// function useIndexOf() {
//   let items = ["pen", "pencil", "notebook", "eraser"];

//   let checkItems = items.indexOf("notebook");
//   console.log(checkItems);
// }
// useIndexOf();

// function useIncludes() {
//   let fruits = ["apple", "banana", "mango"];

//   let checkFruits = fruits.includes("banana");
//   console.log(checkFruits);
// }
// useIncludes();

// function useFilter() {
//   let numbers = [5, 10, 15, 20, 25];

//   let checkNum = numbers.filter((num) => num > 15);
//   console.log(checkNum);
// }
// useFilter();

// function useJoin() {
//   let words = ["Hello", "world"];

//   let newWords = words.join(" ");
//   console.log(newWords);
// }
// useJoin();

// function useReverse() {
//   let numbers = [1, 2, 3, 4, 5];

//   let revNum = numbers.reverse();
//   console.log(revNum);
// }
// useReverse();

// function useConcat() {
//   let arr1 = [1, 2, 3];
//   let arr2 = [4, 5, 6];

//   let newArray = arr1.concat(arr2);
//   console.log(newArray);
// }
// useConcat();

// function useSort() {
//   let numbers = [40, 10, 30, 20];

//   let newNum = numbers.sort((a, b) => a - b);
//   console.log(newNum);
// }
// useSort();

// function useEvery() {
//   let numbers = [2, 4, 6, 8];

//   let checkNum = numbers.every((num) => num % 2 === 0);
//   console.log(checkNum);
// }
// useEvery();

// function useSome() {
//   let numbers = [1, 3, 5, 7];

//   let checkNum = numbers.some((num) => num % 2 === 0);
//   console.log(checkNum);
// }
// useSome();

// function useFind() {
//   let numbers = [10, 20, 30, 40];

//   let findNum = numbers.find((num) => num > 20);
//   console.log(findNum);
// }
// useFind();

// function useFindIndex() {
//   let numbers = [10, 20, 30, 40];

//   let findNumIdx = numbers.findIndex((num) => num > 30);
//   console.log(findNumIdx);
// }
// useFindIndex();

// function UseForLoop() {
//   let numbers = [10, 20, 30, 40];

//   for (let i = 0; i < numbers.length; i++) {
//     console.log(i, numbers[i]);
//   }
// }
// UseForLoop();

// function useForEach() {
//   let numbers = [1, 2, 3, 4];

//   numbers.forEach((num) => {
//     console.log(num * 2);
//   });
// }
// useForEach();

// function useForOf() {
//   let numbers = [5, 10, 15, 20, 25];

//   for (let num of numbers) {
//     if (num % 2 === 1) {
//       console.log(num);
//     }
//   }
// }
// useForOf();

// function useMap() {
//   let words = ["hello", "world", "javascript"];

//   let upperWords = words.map((word) => word.toUpperCase());
//   console.log(upperWords);
// }
// useMap();

// function doubleNum() {
//   let numbers = [1, 2, 3, 4];

//   for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] ** 2);
//   }
//   numbers.forEach((num) => {
//     console.log(num ** 2);
//   });

//   let doubleNum = numbers.map((num) => num ** 2);
//   console.log(doubleNum);
// }
// doubleNum();

// function addNum() {
//   let numbers = [5, 10, 15, 20];
//   let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);
// numbers.forEach((num) => (num += sum));
// console.log(sum);
//   for (let num of numbers) {
//     sum += num;
//   }
//   console.log(sum);
// }

// addNum();

// function addNum2() {
//   let numbers = [10, 20, 30];

//   let sum = 0;
//   numbers.forEach((num) => {
//     console.log(num + 2);
//   });

//   let addNum = numbers.map((num) => num + 2);
//   console.log(addNum);
// }
// addNum2();

// function findNum() {
//   let numbers = [3, 6, 9, 10, 12, 15];

//   for (let num of numbers) {
//     if (num % 3 === 0) {
//       console.log(num);
//     }
//   }
// }
// findNum();
// function addString() {
//   let words = ["hello", "world", "javascript"];

//   words.forEach((word) => {
//     console.log(word + "!");
//   });

//   let addStr = words.map((word) => word + "!");
//   console.log(addStr);
// }
// addString();

function add5() {
  let numbers = [1, 2, 3, 4];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = numbers[i] + 5;
    console.log(sum);
  }
}
add5();

function addStr() {
  let animals = ["dog", "cat", "rabbit"];

  animals.forEach((animal) => {
    console.log(animal + "!");
  });
}
addStr();

function doubleNum1(newNum) {
  let numbers = [2, 3, 4];

  for (let num of numbers) {
    console.log(num ** newNum);
  }
}
doubleNum1(3);

function upperStr() {
  let words = ["hello", "world", "javascript"];

  let upperwords = words.map((word) => word.toUpperCase());
  console.log(upperwords);
}
upperStr();
