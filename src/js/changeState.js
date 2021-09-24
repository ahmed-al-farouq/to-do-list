import list from '../index';

const changeState = (checkBox, index) => {
  console.log(checkBox.checked);
  if (checkBox.checked) {
    list.listObj[index-1].completed = true;
  } else {
    list.listObj[index-1].completed = false;
  }
  return localStorage.setItem('newList', JSON.stringify(list.listObj));
}

export default changeState;