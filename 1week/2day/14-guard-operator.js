const a = null;
const b = 'hello';
// if a is a falsy value it returns a, if a is truthy it returns b
const c = a && b;
console.log(c);

function printName(obj) {
  console.log(obj && obj.name);
}

printName({name: 'mohamed'});
printName(null);