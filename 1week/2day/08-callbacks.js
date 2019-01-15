function myCallBack(p) {
  console.log(`callback function invoked with paramater: ${p}`);
}

function callWithPotato(fun) {
  console.log('fun = ', fun);
  fun('potato');
}

callWithPotato(myCallBack);
callWithPotato((param) => {
  console.log(`lambda callback invoked with: ${param}`)
});