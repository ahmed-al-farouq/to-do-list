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
      index: list.length,
    });
    window.location.reload();
  }
  return localStorage.setItem('newList', JSON.stringify(list));
};

export const remove = (list, index) => {
  const newList = list.filter((item) => item.index !== index);
  localStorage.setItem('newList', JSON.stringify(newList));
  return window.location.reload();
};

export const edit = (desc, index, list) => {
  list[index - 1].description = desc.value;
  return localStorage.setItem('newList', JSON.stringify(list));
};

export const removeAllCompleted = (list) => {
  const newList = list.filter((task) => task.completed === false);
  localStorage.setItem('newList', JSON.stringify(newList));
  return window.location.reload();
};