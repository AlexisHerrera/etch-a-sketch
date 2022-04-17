const grid = document.querySelector('.grid');

// functions to create the grid
function appendDivsTo(numberOfDivs, parentElement) {
    for (let i = 0; i < numberOfDivs; i++) {
        let gridRow = document.createElement("div");
        parentElement.append(gridRow);
    }
}

function createGrid(grid, rows, columns) {
    appendDivsTo(rows, grid);
    const gridRows = grid.childNodes;
    gridRows.forEach(row => appendDivsTo(columns, row));
}

function addClassToChildren(parentElement, tagName) {
    parentElement.childNodes.forEach(childElement => childElement.className = tagName)
}

function addTagsToGrid(grid) {
    addClassToChildren(grid, "grid-row");
    grid.childNodes.forEach(row => addClassToChildren(row, "cell"));
}

// grid creation
createGrid(grid, 16, 16);
addTagsToGrid(grid);
