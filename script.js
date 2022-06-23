const gridContainer = document.getElementById('grid-container');
const div = [];
const slider = document.querySelector('#slider');
let gridSize = 16;

slider.addEventListener('input',() => {
    gridSize = slider.value;
    console.log(gridSize);
})

// creates grid elements
for (i=0; i<gridSize*gridSize; i++) {
    div[i] = document.createElement('div');
    div[i].classList.add('grid-box');
    div[i].style.width = `${400/gridSize}px`;
    gridContainer.appendChild(div[i]);
}

//gives hover effect on grid elements 
for(const single of div) {
    single.addEventListener('mouseenter',addHover);
}

function addHover(e) {
    e.target.classList.add('hover');
    let opacity = parseFloat(getComputedStyle(e.target).opacity);
    if (opacity <= 1){
        e.target.style.opacity = opacity + 0.1;
    }
}

