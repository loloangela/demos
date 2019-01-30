function bubble(event, id) {
  console.log(id);
}

document.getElementById('one-c') // get the element
  .addEventListener('click', () => {
    console.log(1);
  },
    true // true will set to capturing instead of bubbling which would be default
  );
document.getElementById('two-c')
  .addEventListener('click', (event) => {
    event.stopPropagation();
    console.log(event);
    console.log(2);
  },
    true
  );
document.getElementById('three-c')
  .addEventListener('click', () => {
    console.log(3);
  },
    true
  );
document.getElementById('four-c')
  .addEventListener('click', () => {
    console.log(4);
  },
    true
  );