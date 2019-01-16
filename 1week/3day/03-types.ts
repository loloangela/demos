// a can either contain a number or a string
// this is a complex type
let a: number | string = 5;
a = 'hello';

console.log(a);

function add(one: number, two: number): number {
  return one + two;
}

a = add(5, 25);
console.log(a);