const changeState = (checkBox, index, list) => {
  if (checkBox.checked) {
    list[index - 1].completed = true;
  } else {
    list[index - 1].completed = false;
  }
  return localStorage.setItem('newList', JSON.stringify(list));
};

export default changeState;