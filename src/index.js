import './style.css';

function component() {
  const list = [
    {
      description: 'Finish to do list project',
      completed: false,
      index: 0,
    },
    {
      description: 'Clean the kitchen',
      completed: false,
      index: 0,
    },
  ];

  const ul = document.createElement('ul');
  ul.className = 'list';
  // Title
  const title = document.createElement('h2');
  title.innerHTML = 'Today\'s To Do <i class="fas fa-sync-alt"></i>';
  title.className = 'title';
  ul.appendChild(title);
  // Input
  const inputContainer = document.createElement('div');
  const input = document.createElement('input');
  inputContainer.className = 'input-container';
  input.type = 'text';
  input.placeholder = 'Add to your list...';
  input.className = 'task-input';
  inputContainer.appendChild(input);
  inputContainer.innerHTML += '<i class="fas fa-level-down-alt"></i>';
  ul.appendChild(inputContainer);
  // Add Btn
  const btnSubmit = document.createElement('button');
  btnSubmit.className = 'btn';
  btnSubmit.textContent = 'Clear all completed';

  list.map((task) => {
    const li = document.createElement('li');
    li.id = task.index;
    li.className = 'list_item';
    li.innerHTML = `    
    <input type="checkbox" value=${task.completed}/>
    <p>${task.description}</p>
    <i class="fas fa-ellipsis-v"></i>
    `;
    return ul.appendChild(li);
  });
  ul.appendChild(btnSubmit);
  return ul;
}

const div = document.getElementById('list-container');
div.appendChild(component());