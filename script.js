const gridContainer = document.getElementById('grid-container');
const div = [];
const slider = document.querySelector('#slider');
let gridSize = 16;

createGrid();

slider.addEventListener('input',() => {
    for (let i=0; i<div.length; i++) {
        div[i].remove();
    }
    gridSize = slider.value;
    createGrid();
})

// creates grid elements
function createGrid() {
    for (let i=0; i<gridSize*gridSize; i++) {
        div[i] = document.createElement('div');
        div[i].classList.add('grid-box');
        div[i].style.width = `${400/gridSize}px`;
        gridContainer.appendChild(div[i]);
    }

    //gives hover effect on grid elements 
    for(const single of div) {
    single.addEventListener('mouseenter',addHover);
    }
}

function addHover(e) {
    e.target.classList.add('hover');
    let opacity = parseFloat(getComputedStyle(e.target).opacity);
    if (opacity <= 1){
        e.target.style.opacity = opacity + 0.1;
    }
}

