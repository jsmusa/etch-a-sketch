const gridContainer = document.getElementById('grid-container');
const div = [];

console.log(gridContainer)

for (i=0; i<16*16; i++) {
    div[i] = document.createElement('div');
    div[i].className = 'grid-box';
    div[i].style.width = `${640/16}px`;
    gridContainer.appendChild(div[i]);
}

