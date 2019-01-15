let arr = [ 25, 13, 14, 52, 89];

arr.__proto__.customForEach = function(cb) {
  for(let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
}

// arr.forEach((element ) => {
//   console.log(element);
// })

arr.customForEach((element, index) => {
  console.log(`element = ${element} at index = ${index}`);
});