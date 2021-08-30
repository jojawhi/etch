const gridContainer = document.querySelector("#gridContainer");

/*
function createCells(numberOfCells) {
    
    let i = 0;

    while (i < numberOfCells) {
        let gridCell = document.createElement("div");
        gridCell.classList.add("cell")
        gridContainer.appendChild(gridCell);
        gridCell.addEventListener("mouseenter", () => {
            gridCell.classList.add("hoverCell");
        });
        gridCell.addEventListener("mouseleave", () => {
            gridCell.classList.remove("hoverCell");
        });
        i++;
    }

}

createCells(16);
*/

function setRows(numberOfRows) {
    gridContainer.style.cssText = `grid-template-rows: repeat(${numberOfRows}, minmax(10px, 50%))`;
}

function setColumns(numberOfColumns) {
    gridContainer.style.cssText = `grid-template-columns: repeat(${numberOfColumns}, minmax(10px, 50%))`;
}

function createCell() {
    let gridCell = document.createElement("div");
    gridCell.classList.add("cell");
    gridContainer.appendChild(gridCell);
    gridCell.addEventListener("mouseenter", () => {
        gridCell.classList.add("hoverCell");
    });
    gridCell.addEventListener("mouseleave", () => {
        gridCell.classList.remove("hoverCell");
    });
}

function createGrid() {

    let numberOfCells = prompt("How many CELLS do you want per side?");
    setRows(numberOfCells);
    setColumns(numberOfCells);

    let i = 0;

    while (i < (numberOfCells * numberOfCells)) {
        createCell();
        i++;
    }
}

createGrid();






