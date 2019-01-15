
let arr = [25, 2, 15, 347, 81, 12, 88];

// don't do this, they have one built in, it should look similar to this
arr.__proto__.customFilter = function(cb) {
  const filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i)) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
}

function filterOdd(ele) {
  return (ele % 2) === 0;
}

// the filter method does not mutate the original array
// it creates a new one with the filtered contents
let filteredArr = arr.filter(filterOdd);

console.log(filteredArr);

let customFiltered = arr.customFilter(filterOdd);
console.log(customFiltered);