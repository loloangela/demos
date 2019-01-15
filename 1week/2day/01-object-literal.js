let bike = {
  frontGrears: 3,
  backGears: 7,
  material: 'aluminum'
};

console.log(bike);

// we can use dot notation to access fields
console.log(`bike material is: ${bike.material}`);

// we can also use bracket notation
console.log(`bike number of front gears is ${bike["frontGrears"]}`);

// in JS you can dynamically add fields to objects
bike.height = 24;
console.log(`bike height: ${bike.height}`);