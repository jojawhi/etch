const gridContainer = document.querySelector("#gridContainer");

function createCells(numberOfCells) {
    
    let i = 0;

    while (i < numberOfCells) {
        let gridCell = document.createElement("div");
        gridCell.classList.add("cell")
        gridContainer.appendChild(gridCell);
        i++;
    }

}

createCells(16);