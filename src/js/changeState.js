const changeState = (checkBox, index, list) => {
  const desc = document.getElementsByClassName('desc');
  if (checkBox.checked) {
    list[index - 1].completed = true;
  } else {
    list[index - 1].completed = false;
  }
  if (desc[index - 1].classList.contains('line-through')) {
    desc[index - 1].classList.remove('line-through');
  } else {
    desc[index - 1].classList.add('line-through');
  }
  return localStorage.setItem('newList', JSON.stringify(list));
};

export default changeState;