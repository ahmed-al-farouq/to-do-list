import './style.css';
import changeState from './js/changeState.js';
import {
  add, removeAllCompleted, edit, remove,
} from './js/addRemove.js';

class List {
  constructor() {
    const newList = JSON.parse(localStorage.getItem('newList'));
    if (newList) {
      this.listObj = newList;
    } else {
      this.listObj = [];
    }
  }

  createItems(listContainer) {
    const inputField = document.querySelector('.input-container');
    const clearSelectedBtn = document.getElementById('clear-selected');
    inputField.addEventListener('submit', (e) => {
      e.preventDefault();
      return add(this.listObj);
    });
    clearSelectedBtn.addEventListener('click', () => removeAllCompleted(this.listObj));
    if (this.listObj.length) {
      this.listObj.forEach((task) => {
        const li = document.createElement('li');
        li.id = task.index;
        li.className = 'list_item';
        // checkbox
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        // description
        const desc = document.createElement('input');
        desc.className = 'desc';
        desc.type = 'text';
        li.append(checkBox, desc);
        // Icon
        li.innerHTML += `
        <i class="fas fa-ellipsis-v" id="move-icon"></i>
        <i class="fas fa-trash d-none" id="trash-icon"></i>
        `;
        if (task.completed) {
          li.childNodes[0].checked = 'true';
          li.childNodes[1].classList.add('line-through');
        }
        li.childNodes[1].value = task.description;
        li.childNodes[0].addEventListener('change', () => changeState(li.childNodes[0], task.index, this.listObj));
        li.childNodes[1].addEventListener('click', () => {
          li.classList.add('editing-state');
          li.childNodes[3].classList.add('d-none');
          li.childNodes[5].classList.remove('d-none');
        });
        li.childNodes[1].addEventListener('blur', () => {
          li.classList.remove('editing-state');
          setTimeout(() => {
            li.childNodes[3].classList.remove('d-none');
            li.childNodes[5].classList.add('d-none');
          }, 400);
        });
        li.childNodes[1].addEventListener('input', () => edit(li.childNodes[1], task.index, this.listObj));
        li.childNodes[5].addEventListener('click', () => remove(this.listObj, task.index));
        return listContainer.append(li);
      });
    } else {
      const emptyList = document.createElement('h2');
      emptyList.className = 'empty-list';
      emptyList.textContent = 'Add Something today';
      listContainer.append(emptyList);
    }
  }
}

const mainListContainer = document.getElementById('list');
const list = new List();
list.createItems(mainListContainer);