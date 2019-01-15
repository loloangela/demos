let arr = [5, 25, "hello", { a: 'object'}, 2];
console.log(arr);

let index3 = arr[3];
console.log(index3);

arr.push('potato');

console.log(arr);

arr.unshift('egg');
console.log(arr);

    // index, num elements to delete, new elements
arr.splice(2, 0, "sweet potato");
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(`index = ${i}, element = ${arr[i]}`);
}

// Enhanced For Loop, For Each Loop
for (const element of arr) {
  console.log(element);
}