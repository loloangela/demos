// we can use if statements to determine if something should be executed or not
let a = false;
let b = false;
// if and b are both true
if(a && b) {
  console.log('a and b are both true');
} else if (a && !b) { // can have 0 or more else if statements
  console.log('a is true and b is false')
} else { // can have 0 or 1 else statement
  console.log('default none of the others were true')
}

// we can use while loops to continuously execute something
let w = false;
while(w) {
  console.log('while loop');
  const random = Math.floor(Math.random() * 5); // get random number
  if(random === 3) {
    w = false;
  }
}
console.log('while loop over');


let doW = false;

// always executes at least once because it runs the code then checks
// the condition instead of checking the condition first
do {
  console.log('do while');
  const random = Math.floor(Math.random() * 5); // get random number
  if(random === 3) {
    doW = false;
  } else {
    doW = true;
  }
} while (doW);

// use a for if you are trying to iterate a known number of times
for(let i =0; i < 5; i++) {
  console.log(`for loop i = ${i}`);
}
console.log('for loop over');


let switchCase = "hello";
switch (switchCase) {
  case "hello":
    console.log('world');
    break;
  case 5:
    console.log('number');
    break;
  default:
    console.log('default')
    break;
}


// ternary is basically an if else statement
let result = ( 50 < 25) ? 't' : false;
console.log(result);