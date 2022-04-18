const grid = document.querySelector('.grid');

// functions to create the grid
function appendDivsTo(numberOfDivs, parentElement) {
    for (let i = 0; i < numberOfDivs; i++) {
        let gridRow = document.createElement("div");
        parentElement.append(gridRow);
    }
}

function createGrid(grid, rows, columns) {
    appendDivsTo(rows*columns, grid);
}

function addClassToChildren(parentElement, tagName) {
    parentElement.childNodes.forEach(childElement => childElement.className = tagName)
}

function addTagsToGrid(grid) {
    addClassToChildren(grid, "cell");
}

// grid creation
createGrid(grid, 16, 16);
addTagsToGrid(grid);

let cells = document.querySelectorAll(".cell");

function paintCell() {
    this.classList.add("painted");
}

cells.forEach(cell => cell.addEventListener("click", paintCell));