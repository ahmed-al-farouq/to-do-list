import './style.css';
import changeState  from './js/changeState';

class List {
  constructor() {
    let newList = JSON.parse(localStorage.getItem('newList'));
    if(newList){
      this.listObj = newList;
    } else {
      this.listObj = [
        {
          description: 'Finish to do list project',
          completed: false,
          index: 1,
        },
        {
          description: 'Clean the kitchen',
          completed: false,
          index: 2,
        },
        {
          description: 'Clean the Bathroom',
          completed: false,
          index: 3,
        },
        {
          description: 'Clean the Bed',
          completed: false,
          index: 4,
        },
      ];
    }
  }

  createItems (listContainer) {
    let newList = this.listObj.filter((task) => task.completed === false);
    newList.forEach((task) => {
      const li = document.createElement('li');
      li.id = task.index;
      li.className = 'list_item';
      // checkbox
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      console.log(checkBox.checked)
      // description
      const desc = document.createElement('p');
      desc.textContent = task.description;
      li.append(checkBox, desc);
      // Icon
      li.innerHTML += `
      <i class="fas fa-ellipsis-v"></i>
      `;
      li.childNodes[0].addEventListener('change', () => changeState(li.childNodes[0], task.index));
      return listContainer.append(li);
    })
  }
}

const mainListContainer = document.getElementById('list');
const list = new List();
list.createItems(mainListContainer);

export default list;
/* 
  What should I do :
  1) structure
    ** Array of objects (list)
      ==> description (string)
      ==> completed (boolean)
      ==> index (num starts from 1)
    ** class
      ==> interate the array
      ==> Save to local storage
  2) Ineractive
    ** Change content
    ** Drag & Drop
    ** Add & Remove
    ** Remove All
*/