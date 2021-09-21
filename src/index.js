import "./style.css";

function component() {
  const list = [
    {
      description: "Finish to do list project",
      completed: false,
      index: 0,
    },
    {
      description: "Clean the kitchen",
      completed: false,
      index: 0,
    },
  ];
  
  const ul = document.createElement('ul');
  ul.className = 'list';
  const title = document.createElement('h2');
  title.textContent = "Today's To Do";
  title.className = 'title'
  ul.appendChild(title);
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Add to your list...';
  input.className = 'task-input';
  ul.appendChild(input);
  const btnSubmit = document.createElement('button');
  btnSubmit.className = 'btn';
  btnSubmit.textContent = 'Clear all completed';

  list.map(task => {
    const li = document.createElement('li');
    li.id = task.index;
    li.className = 'list_item';
    li.innerHTML = `    
    <input type="checkbox" value=${task.completed}/>
    <p>${task.description}</p>
    `;
    return ul.appendChild(li);
  });
  ul.appendChild(btnSubmit);
  return ul;
}

const div = document.getElementById('list-container');
div.appendChild(component());