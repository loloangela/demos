function outer() {
  let a = 5;
  let b = 20;

  return (newValue) => {
    if (newValue) {
      a = newValue;
    }
    return a;
  }
}

let inner = outer();

console.log(inner());
console.log(inner('hello'));
console.log(inner());
