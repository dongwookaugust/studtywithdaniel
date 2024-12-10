function useReduce() {
  let numbers = [1, 2, 3, 4];

  // let total = 0;

  // numbers.forEach((number) => {
  //   total = total + number;
  // });
  // console.log(total);

  const total = numbers.reduce((acc, cur) => acc + cur, 0);
  console.log(total);
}
useReduce();

function useReduce1() {
  const num = [10, 4, 2, 8];

  const smallest = num.reduce((acc, cur) => (cur < acc ? cur : acc));
  console.log(smallest);
}
useReduce1();

function useRedece2() {
  const cart = [
    { name: "사과", price: 500 },
    { name: "바나나", price: 700 },
    { name: "레몬", price: 300 },
  ];

  const sum = cart.reduce((acc, cur) => cur.price + acc, 0);
  console.log(sum);
}
useRedece2();

function useReduce4() {
  let numbers = [5, 10, 15, 20];

  let addNum = numbers.reduce((acc, cur) => acc + cur, 0);
  console.log(addNum);
}
useReduce4();
