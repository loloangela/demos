function testEquality(one, two) {
  console.log(`one is type: ${typeof(one)} and value: ${one}
two is type: ${typeof(two)} and value: ${two}
  one == two returns: ${one == two}
  one === two returns ${one === two}`)
}

testEquality(0, '0');
testEquality('true', true);
testEquality(null, null);
testEquality(null, undefined);
testEquality(NaN, NaN);
testEquality(['a', 'b'], 'ab');
testEquality({a: 'test'}, {a: 'test'});
