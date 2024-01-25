const container = document.querySelector('#container');
const resetButton = document.querySelector('#reset-button');

const createGrid = (size) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.setAttribute("style", "border: solid; width: 960px; height: 960px; display: flex;")
    for (let i = 1; i <= size; i++) {
        let column = document.createElement('div');
        column.classList.add('column');

        for (let j = 1; j <= size; j++) {
            let row = document.createElement('div');
            row.classList.add('row', 'tile');
            row.addEventListener('mouseenter', () => {row.style.backgroundColor = 'black'});
            column.appendChild(row);
        };

        wrapper.appendChild(column);
    };
    container.appendChild(wrapper);
};

createGrid(16);


resetButton.addEventListener('click', () => {
    let userSize = Number(prompt("What size you want cuh?"))
    
    while (userSize > 100 || userSize < 2) {
        userSize = Number(prompt("Yo cuh min is 2 and max is 100. Don't make my job harder."));
    };

    const wrapper = document.querySelector('.wrapper');
    wrapper.remove();
    createGrid(userSize);
});
