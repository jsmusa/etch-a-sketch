const gridContainer = document.getElementById('grid-container');
const div = [];
let gridSize = 16;

for (i=0; i<gridSize*gridSize; i++) {
    div[i] = document.createElement('div');
    div[i].classList.add('grid-box');
    div[i].style.width = `${400/gridSize}px`;
    gridContainer.appendChild(div[i]);
}

div[0].classList.add = 'hover';

for(const single of div) {
    single.addEventListener('mouseenter',(e) => {
        e.target.classList.add('hover');
    })
}