export const add = (list) => {
  const inputField = document.querySelector('.input-container .task-input');
  const spanalert = document.querySelector('.input-container .alert');
  if (inputField.value === '') {
    spanalert.textContent = 'Please, Type something to add';
  } else {
    spanalert.textContent = '';
    list.push({
      description: inputField.value,
      completed: false,
      index: list.length + 1,
    });
    localStorage.setItem('newList', JSON.stringify(list));
  }
  return window.location.reload();
};

export const remove = (list, index) => {
  const listFilterd = list.filter((item) => item.index !== index);
  const newList = listFilterd.map((item, index) => {
    item.index = index + 1;
    return item;
  });
  localStorage.setItem('newList', JSON.stringify(newList));
  return window.location.reload();
};

export const edit = (desc, index, list) => {
  list[index - 1].description = desc.value;
  return localStorage.setItem('newList', JSON.stringify(list));
};

export const removeAllCompleted = (list) => {
  const filterList = list.filter((task) => task.completed === false);
  const newList = filterList.map((item, index) => {
    item.index = index + 1;
    return item;
  });
  localStorage.setItem('newList', JSON.stringify(newList));
  return window.location.reload();
};