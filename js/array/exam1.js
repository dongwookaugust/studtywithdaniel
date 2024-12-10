function useForLoop() {
  // 두배로 변형
  const numbers = [1, 2, 3, 4, 5];
  const doubleNum = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      doubleNum.push(numbers[i]);
    }
  }
  console.log(doubleNum);
}
useForLoop();

function useForOf() {
  //배열 만들기
  const fruits = ["apple", "banana", "cherry"];

  for (let fruit of fruits) {
    console.log(fruit);
  }
}
useForOf();

function useForEach() {
  //좋아하는 색상 만들기
  let colors = ["red", "green", "blue"];

  colors.forEach((color) => console.log(`My favorite color is ${color}`));
}
useForEach();

function useMap() {
  //대문자로 변형하기
  let words = ["hello", "world", "javascript"];

  let upperWords = words.map((word) => word.toUpperCase());
  console.log(upperWords);
}
useMap();

function useLoop1() {
  //짝수만 출력하기
  let num = [1, 2, 3, 4, 5, 6];

  let evenNum = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      evenNum.push(num[i]);
    }
  }
  console.log(evenNum);
}
useLoop1();

function useForOf1() {
  //소문자 만들기
  let names = ["Alice", "Bob", "CHARLIE"];

  for (let name of names) {
    console.log(name.toLowerCase());
  }
}
useForOf1();

function useForEach1() {
  //제곱만들기
  let numbers = [2, 3, 4];

  let doubleNum = numbers.forEach((num) => {
    console.log(num ** 2);
  });
}
useForEach1();

function useMap1() {
  //fullname 만들기
  let names = ["Alice", "Bobby"];

  let fullNames = names.map((name) => name + "Brown");
  console.log(fullNames);
}
useMap1();
function useForLoop2() {
  //홀,짝 합 만들기
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let evenNum = 0;
  let oddNum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNum += numbers[i];
    } else {
      oddNum += numbers[i];
    }
  }
  console.log(evenNum);
  console.log(oddNum);
}
useForLoop2();

function useForEach2() {
  // 소개만들기
  const peoples = [
    { name: "Alice", age: 20 },
    { name: "Brown", age: 25 },
    { name: "Bobby", age: 18 },
  ];

  let persons = peoples.forEach((people) => {
    console.log(`My name is ${people.name} and age is ${people.age}`);
  });
}
useForEach2();
