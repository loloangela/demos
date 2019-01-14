let string = "hello"; // you can use double quotes
let str = 'world'; // you can use single quotes(typically the most preferred)
let num = 5;

let templateLiteral = `
template literals were introduced with ES6
and allow for mulit line strings
they also allow for string interpolation
for instance
string = ${string}
str = ${str}
num = ${num}
25 * 3241234 = ${25 * 3241234}
bassicaly inside of the dollar brackets you can put any JS expression you want
`
console.log(templateLiteral);