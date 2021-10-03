const listContainer = document.getElementById('list');
const dragIcon = document.getElementById('drag-icon');

// Functions
export const allowDrag = () => {
  listContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log('we are over the contianer');
  });
}

export const dragStart = () => {

}

export const dragOver = () => {

}

export const drop = () => {

}
