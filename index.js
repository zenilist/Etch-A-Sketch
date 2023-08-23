const container = document.querySelector(".grid-container");
const default_square_size = 16;
const grid_height_width = 512;

createGrid(default_square_size);

function removeGrid() {
    let lastChild = container.lastElementChild;
    while (lastChild) {
        container.removeChild(lastChild);
        lastChild = container.lastElementChild;
    }
}

function createGrid(size = 16) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.style.height = `${grid_height_width / size}px`;
        div.style.width = `${grid_height_width / size}px`;
        div.classList.add("grid-square");
        div.addEventListener("mouseover", function () {
            div.style.backgroundColor = "black";
        })
        container.appendChild(div);
    }
}
function resize() {
    let size = prompt("Input new grid size (limit 1-100) ");

    removeGrid();
    createGrid(size);

}

