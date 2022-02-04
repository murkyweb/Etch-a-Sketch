const container = document.querySelector('.container');

function createGrid () {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const div = document.createElement('div');
            div.classList.add('box');
            container.appendChild(div);
        }
    }
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
colorGrid();
