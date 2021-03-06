const gridContainer = document.getElementById('grid-container');
const div = [];
const sliderBox = document.querySelector('.slider-box');
const colorBox = document.querySelector('.color-picker')
const slider = document.querySelector('#slider');
const colorButton = document.querySelector('.color-button');
const resetButton = document.querySelector('.reset-button');
const randomButton = document.querySelector('.random');
const sliderValue = document.createElement('div');

// creates initial grid
let gridSize = 16;
let color = '#000';
createGrid();

//removes current and creates new one based on input on slider
slider.addEventListener('input',() => {
    for (let i=0; i<div.length; i++) {
        div[i].remove();
    }
    gridSize = slider.value;
    createGrid();
})

//replaces color with the value of colorButton input
colorButton.addEventListener('input',() => {
    color = colorButton.value;
    for(const single of div) {
        single.removeEventListener('mouseenter',randomColor);
        single.addEventListener('mouseenter',addHover);
    }
    return color;
})

// clears grid when clear button is clicked
resetButton.addEventListener('click',() => {
    for (const single of div) {
        single.style.backgroundColor = '#ffffff';
        single.style.removeProperty('opacity');
        single.classList.remove('hover');
    }
})

// adds translate effect when reset button is clicked 
randomButton.addEventListener('mousedown',(e) => {
    e.target.style.transform = 'translatey(2px)';
})
randomButton.addEventListener('mouseup',(e) => {
    e.target.style.transform = null;
})

resetButton.addEventListener('mousedown',(e) => {
    e.target.style.transform = 'translatey(2px)';
})
resetButton.addEventListener('mouseup',(e) => {
    e.target.style.transform = null;
})

// creates grid and slider and also effects on grid
function createGrid() {
    for (let i=0; i<gridSize*gridSize; i++) {
        div[i] = document.createElement('div');
        div[i].classList.add('grid-box');
        div[i].style.width = `${600/gridSize}px`;
        gridContainer.appendChild(div[i]);
    }

    //gives hover effect on grid elements 
    for(const single of div) {
        single.addEventListener('mouseenter',addHover);
    }

    //shows slider value on page 
    sliderValue.textContent = `${slider.value} x ${slider.value}`;
    sliderBox.appendChild(sliderValue);

    randomButton.addEventListener('click',randomHover);
}

function addHover(e) {
    e.target.classList.add('hover');
    let opacity = parseFloat(getComputedStyle(e.target).opacity);
    if (opacity <= 1){
        e.target.style.backgroundColor = color;
        e.target.style.opacity = opacity + 0.2;
    }
}

function randomHover() {
    for(const single of div) {
        single.addEventListener('mouseenter',randomColor);
        }
}

// picks random color using rgb (ranInt,ranInt,ranInt)
function randomColor (e) {
    e.target.style.backgroundColor = `rgb(${ranInt()},${ranInt()},${ranInt()})`;
}

// gets random integer from 0-255
function ranInt () {
    return Math.floor(Math.random()*256);
}