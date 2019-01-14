/*
  var supports global and function scopes
  let and const support "global", function, and block scopes
*/
// if a variable is declared outside of all functions it is "global"
var g = 10;
let h = 'hello';
const c = 'world'; // const has the same scoping as let but cannot be reasigned
// c = '5'; // this would give an Error
function scopes() {
  // with var the declaration of a will be hoisted to the top of it's scope
  // envision var a; right here
  console.log(g);
  // let and const are block scoped, var is function scoped
  if(true) {
    var a = 5;
    let b = 10;
  }
  console.log(a);
  // the following would give a reference errror becasue let is block scoped
  // console.log('b = ' + b);
}

scopes();