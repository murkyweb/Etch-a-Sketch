const container = document.querySelector('.container');
const button = document.querySelector('button');
let gridSize = 16;

function createGrid (gridSize) {
    gridSize = prompt('Enter a number: (MAX 35)', 16);
    if (gridSize > 35) {
        alert('Number must be 35 or lower!');
        return;
    } 
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');
            div.setAttribute(
                'style', `height: ${container.offsetHeight / gridSize}px;
                width: ${container.offsetHeight / gridSize}px`
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
            div.classList.add('color');
        });
    });
}

createGrid();

button.addEventListener('click', () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid();
});
