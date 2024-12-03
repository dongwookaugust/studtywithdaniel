// variable is name space for storing data.
// It's like a box with a tag attached, so when we clean, we can put items into the box by tag.

// const cannot be changed once it is set, like user id
// let can change, like password.

function typeExample() {
  const name = "august";
  let phoneNum = 22342684;

  // name = "Daniel"; Error because cannot be chanege const value.
  phoneNum = 11224545;
  console.log(name);
  console.log(phoneNum);
}

typeExample();
