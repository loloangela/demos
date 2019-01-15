/**
 * In a boolean context if we have a non boolean type
 * JS will use a set of rules to determine if it should be true or false
 * 0, '', null, undefined, NaN, false are the values that evaluate to false
 * everything else evaluates to true
 */
function truthyFalsy(val) {
  console.log(`The value ${val}
  is of type ${typeof(val)}
  and has a truthy falsy value of ${!!val}`) // !! forces val into a boolean
}

truthyFalsy(0);
truthyFalsy('0');
truthyFalsy("hello");
truthyFalsy(truthyFalsy);
truthyFalsy(true);
truthyFalsy({});
truthyFalsy(null);
truthyFalsy(undefined);
truthyFalsy(NaN);
truthyFalsy(-1);
truthyFalsy(1);
truthyFalsy(`template literal ${true}`);
truthyFalsy(`false`);


if ('hello') {
  console.log('hello is truthy')
}

