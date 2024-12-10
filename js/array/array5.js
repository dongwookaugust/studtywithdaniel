// function useEvery() {
//   const nums = [2, 4, 6];
//   const names = ["Anna", "Bob", "Charlie", "Dave"];
//   const empty = [];
//   const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 },
//   ];
//   const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];

//   const checkNums = nums.every((num) => num % 2 === 0);
//   const checkName = names.every((name) => name.length <= 5);
//   const checkArray = empty.every((num) => num > 0);
//   const checkUsers = users.every((user) => user.age >= 18);
//   const checkMatrix = matrix.every((row) => row.every((num) => num < 10));

//   console.log(checkNums);
//   console.log(checkName);
//   console.log(checkArray);
//   console.log(checkUsers);
//   console.log(checkMatrix);
// }
// useEvery();
// console.log("-------End use every--------");

// function useSome() {
//   const nums = [1, 3, 5];
//   const numbers = [-1, -2, 0, 3, -5];
//   const names = ["Anna", "Bob", "Charlie", "Dave"];
//   const emptyArray = [];
//   const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 17 },
//     { name: "Charlie", age: 35 },
//   ];
//   const matrix = [
//     [1, 2, 3],
//     [10, 20, 30],
//     [7, 8, 9],
//   ];

//   const checkNums = nums.some((num) => num % 2 === 0);
//   const checkNumbers = numbers.some((num) => num > 0);
//   const checkNames = names.some((name) => name.length > 5);
//   const checkEmptyArray = emptyArray.some((num) => num > 0);
//   const checkUsers = users.some((user) => user.age < 18);
//   const checkMatrix = matrix.some((row) => row.some((num) => num >= 20));

//   console.log(checkNums);
//   console.log(checkNumbers);
//   console.log(checkNames);
//   console.log(checkEmptyArray);
//   console.log(checkUsers);
//   console.log(checkMatrix);
// }
// useSome();

// function useFind() {
//   const nums = [4, 5, 6, 7, 8];
//   const numbers = [-1, -2, 0, 3, -5];
//   const names = ["Anna", "Bob", "Charlie", "Dave"];
//   const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 17 },
//     { name: "Charlie", age: 35 },
//   ];
//   const numbers2 = [10, 20, 30, 40];
//   const matrix = [
//     [1, 2, 3],
//     [10, 20, 30],
//     [7, 8, 9],
//   ];

//   const checkNums = nums.find((num) => num > 5);
//   const checkNumbers = numbers.find((number) => number > 0);
//   const checkNames = names.find((name) => name.length > 5);
//   const checkUsers = users.find((user) => user.age < 18);
//   const checkNumber2 = numbers2.find((num) => num % 10 === 0);
//   const checkNumber3 = numbers.find((num) => num > 10);
//   const checkMatrix = matrix.find((row) => row.some((num) => num > 20));

//   console.log(checkNums);
//   console.log(checkNumbers);
//   console.log(checkNames);
//   console.log(checkUsers);
//   console.log(checkNumber2);
//   console.log(checkNumber3);
//   console.log(checkMatrix);
// }
// useFind();
function useFindIndex() {
  const nums = [4, 5, 6];
  const numbers = [-10, -5, 0, 3, -2];
  const users = [
    { id: 1, name: "Alice", active: false },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true },
  ];
  const matrix = [
    [1, 2, 3],
    [10, 20, 30],
    [7, 8, 9],
  ];
  const tasks = [
    { id: 1, status: "incomplete" },
    { id: 2, status: "incomplete" },
    { id: 3, status: "complete" },
  ];

  const menuItems = [
    { id: 1, name: "Home", selected: false },
    { id: 2, name: "About", selected: false },
    { id: 3, name: "Contact", selected: true },
  ];

  const checkNum = nums.findIndex((num) => num > 5);
  const checkPositve = numbers.findIndex((num) => num > 0);
  const checkUser = users.findIndex((user) => user.active);
  const checkNum1 = nums.findIndex((num) => num > 10);
  const checkMatrix = matrix.findIndex((row) => row.some((num) => num > 20));
  const checkStatus = tasks.findIndex((task) => task.status === "incomplete");
  if (checkStatus !== -1) {
    tasks[checkStatus].status = "complete";
  }
  const checkItems = menuItems.findIndex((item) => item.selected);

  console.log(checkNum);
  console.log(checkPositve);
  console.log(checkUser);
  console.log(checkNum1);
  console.log(checkMatrix);
  console.log(tasks);
  console.log(checkItems);
}
useFindIndex();
