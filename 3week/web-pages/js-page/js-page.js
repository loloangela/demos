const eleTwo = document.getElementById('two');
eleTwo.style.borderColor = 'red';

function addItem(event) {
  console.log('adding item to list');
  event.preventDefault(); // prevent default form functionality

  const newItemInput = document.getElementById('new-item-input');

  const itemList = document.getElementById('item-list');

  /**.innerHTML whatever I supply gets rendered as html
  this allows html injection*/
  // itemList.innerHTML += `<li>${newItemInput.value}</li>`

  /*to prevent html injection we should construct new elements
  and use innerText*/
  const li = document.createElement('li');
  li.innerText = newItemInput.value;
  itemList.appendChild(li);

  newItemInput.value = '';

}

function hovered() {
  console.log('hovered over')
}