const container = document.querySelector('.container');
const colorPicker = document.querySelector('.color-picker');
const clearButton = document.querySelector('.clear');
const colorButton = document.querySelector('.same-color');
const rainbowButton = document.querySelector('.rainbow');
const sizePicker = document.querySelector('.size-picker');
const sizeDisplay = document.querySelector('.size-display');

function createGrid (gridSize) {
    gridSize = sizePicker.value;
    height = (container.offsetHeight - 2) / gridSize;
    width = height;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');
            div.setAttribute(
                'style', `height: ${height}px;
                width: ${width}px`
                );
            div.classList.add('box');
            container.appendChild(div);
        }
    }
    colorGrid();
}

function colorGrid () {
    const divs = document.querySelectorAll('.box');

    divs.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = `${colorPicker.value}`;
        });
    });
}

function rainbowGrid () {
    const divs = document.querySelectorAll('.box');

    divs.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = `rgb(
                ${Math.floor(Math.random() * 256)},
                ${Math.floor(Math.random() * 256)},
                ${Math.floor(Math.random() * 256)})`;
        });
    });
}

function clearGrid() {
    const divs = document.querySelectorAll('.box');
    
    divs.forEach((div) => {
        div.style.backgroundColor = 'rgb(255,255,255)';
    });
}



createGrid();
sizeDisplay.textContent = `${sizePicker.value} x ${sizePicker.value}`;

clearButton.addEventListener('click', clearGrid);
colorButton.addEventListener('click', colorGrid);
rainbowButton.addEventListener('click', rainbowGrid);
sizePicker.addEventListener('input', () => {
    gridSize = sizePicker.value;
    sizeDisplay.textContent = `${gridSize} x ${gridSize}`;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid();
});

