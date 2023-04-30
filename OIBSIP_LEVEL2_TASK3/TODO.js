const input = document.getElementById('input');
const addButton = document.getElementById('addButton');
const list = document.getElementById('list');

addButton.addEventListener('click', addItem);

function addItem() {
  if (input.value.trim() !== '') {
    const listItem = document.createElement('li');
    const itemText = document.createElement('span');
    itemText.textContent = input.value;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      list.removeChild(this.parentNode);
    });
    listItem.appendChild(itemText);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    input.value = '';
  }
}