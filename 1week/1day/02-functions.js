// First we need to declare the function and its parameters;
function add(one, two) {
  console.log('one = ' + one);
  console.log('two = ' + two);
  return one + two;
}

// then we can invoke the function
let result = add(5, 6);
console.log(result);

// we can also use arrow notation to create functions
let arrowAdd = (one, two) => {
  return one + two;
}

let arrowResult = arrowAdd(25, 2);
console.log('arrow result = ' + arrowResult);

