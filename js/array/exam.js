// function usePush() {
//   let foods = ["pizza", "burger"];

//   let favoriteFoods = foods.push("pasta", "sushi");
//   console.log(foods);
// }
// usePush();

// function usePop() {
//   let num = [10, 20, 30, 40, 50];

//   let delNum = num.pop();
//   console.log(delNum);
//   console.log(num);
// }
// usePop();

// function useShift() {
//   let fruits = ["apple", "banana", "cherry"];

//   let delFruits = fruits.shift();
//   console.log(delFruits);
//   console.log(fruits);
// }
// useShift();

// function useUnshift() {
//   let hobby = ["hiking", "readeing"];

//   let addHobby = hobby.unshift("shopping", "cooking");
//   console.log(hobby);
// }
// useUnshift();

// function useSplice() {
//   let color = ["red", "green", "blue"];

//   let changeColor = color.splice(1, 1, "yellow", "purple");
//   console.log(color);
// }
// useSplice();

// function useSlice() {
//   let name = ["Alice", "Bob", "Charlie", "David"];

//   let pickName = name.slice(1, 3);
//   console.log(pickName);
// }
// useSlice();

// function useIncludes() {
//   let sports = ["yoga", "running", "cycling"];

//   let findSports = sports.includes("running");
//   console.log(findSports);
// }
// useIncludes();

// function useFilter() {
//   let age = [12, 17, 22, 18, 14, 30];

//   let checkAge = age.filter((age) => age >= 18);
//   console.log(checkAge);
// }
// useFilter();
// ----------------------------------------------------------------------------------------------------
function usePush1() {
  // 입력받아 토끼 추가
  let animals = ["dog", "cat"];

  function addAnimals(...animal) {
    animals.push(...animal);
    console.log(animals);
  }
  addAnimals("rabbit");
}

usePush1();

function usePop1() {
  //맨뒤에 숫자 지우고 20이상이면 high 아니면  low
  let num = [5, 10, 15, 20, 25];

  let delNum = num.pop();

  if (delNum > 20) {
    console.log("High");
  } else {
    console.log("Low");
  }
}
usePop1();

function useShift1() {
  //맨 앞에 이름 지우고 지운 이름 새로운 배열에 넣기
  let names = ["John", "Alice", "Bob", "Charlie"];
  let delName = [names.shift()];

  console.log(names);
  console.log(delName);
}
useShift1();

function useUnshift1() {
  //"yellow" 추가
  let colors = ["red", "blue", "green"];

  let newColors = colors.unshift("yellow");
  console.log(colors);
}
useUnshift1();

function useSplice1() {
  //"banana", "cherry" 삭제 "grape", "kiwi" 그 자리에 넣기
  let fruits = ["apple", "banana", "cherry", "date", "fig"];

  let newFruits = fruits.splice(1, 2, "grape", "kiwi");
  console.log(fruits);
}
useSplice1();

function useSlice1() {
  //반으로 잘라서 새로운 배열 두가지 만들기
  let num = [1, 2, 3, 4, 5, 6, 7, 8];

  let frontNum = num.slice(0, 4);
  let backNum = num.slice(4);

  console.log(frontNum);
  console.log(backNum);
}
useSlice1();

function useIncludes1() {
  //배열에 moon이 추가되있으면 found moon 없으면 no moon 출력
  let planet = ["sun", "moon", "star"];

  if (planet.includes("moon")) {
    console.log("Found Moon");
  } else {
    console.log("No Moon");
  }
}
useIncludes1();

function useFilter1() {
  let students = [
    //50점이상인 학생 찾기
    { name: "Alice", score: 45 },
    { name: "Bob", score: 78 },
    { name: "Charlie", score: 88 },
    { name: "David", score: 30 },
  ];

  let checkGrade = students.filter((student) => student.score >= 50);
  console.log(checkGrade);
}
useFilter1();

function useIndexOf() {
  //ford가 몇번째 인덱스인지 확인하고 짝수인지 홀수인지 출력
  let car = ["Toyota", "Hyundai", "Ford", "BMW"];

  let foundCar = car.indexOf("Ford");
}
useIndexOf();
