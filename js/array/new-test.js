const people = [
  {
    name: "August",
    age: 19,
  },
  {
    name: "Leon",
    age: 12,
  },
  {
    name: "Daniel",
    age: 20,
  },
];

let isKellyHere = people.find((personName) => {
  console.log({ personName });
  return personName.name === "Daniel";
});

// false
console.log("kelly is here: ", isKellyHere);

const kelly = {
  name: "Kelly",
  age: 21,
};

// add kelly to people

isKellyHere = // check again
  // true
  console.log("kelly is here: ", isKellyHere);
