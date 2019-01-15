let arr = [
  { "first:name": 'blake', "last:name": 'kruppa', role: 'trainer', location: 'tampa'},
  { "first:name": 'justin', "last:name": 'clark', role: 'associate', location: 'tampa'},
  { "first:name": 'lori', "last:name": 'oliver', role: 'associate', location: 'tampa'},
  { "first:name": 'john', "last:name": 'goncalves', role: 'associate', location: 'tampa'},
]

let converedArr = arr.map(ele => {
  return {
    fullName: `${ele["first:name"]} ${ele["last:name"]}`,
    trainingLocation: ele.location
  }
});

console.log(converedArr);