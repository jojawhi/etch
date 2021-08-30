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

//Random colour mode

const funkyBtn = document.querySelector("#funkyBtn");

funkyBtn.addEventListener("click", () => {
    alert("funkyBtn pressed");
});

function setRandomBackground() {
    const randomColour = Math.floor(Math.random()*16777215).toString(16);
    gridCell.addEventListener("mouseenter", () => {
        gridCell.style.backgroundColor = "#" + randomColour + " !important";
    });
}

// Grid Functions

let numberOfRows = 0;
let numberOfColumns = 0;

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
    
    //Random colour
    /*
    const randomColour = Math.floor(Math.random()*16777215).toString(16);
    gridCell.addEventListener("mouseenter", () => {
        gridCell.style.backgroundColor = "#" + randomColour;
    });
    */

    
    gridCell.addEventListener("mouseenter", () => {
        gridCell.classList.add("hoverCell");
    });
    
    /*
    gridCell.addEventListener("mouseleave", () => {
        gridCell.classList.remove("hoverCell");
    });
    */
}


function createGrid() {

    let i = 0;

    if (numberOfRows <= 100 && numberOfRows >= 2 && numberOfColumns <= 100 && numberOfColumns >= 2) {
        while (i < (numberOfRows * numberOfColumns)) {
            createCell();
            i++;
        }
    } else {
        alert("Please enter a number between 2 and 100.")
    }
}

const customGridBtn = document.querySelector("#customGridBtn");

customGridBtn.addEventListener("click", () => {

    numberOfRows = document.getElementById("rowInput").value;
    numberOfColumns = document.getElementById("colInput").value;

    setRows(numberOfRows);
    setColumns(numberOfColumns);

    gridContainer.textContent = "";
    createGrid();

});

// Auto-generate buttons

const grid64Btn = document.querySelector("#grid64Btn");
grid64Btn.addEventListener("click", () => {

    numberOfRows = 64;
    numberOfColumns = 64;

    setRows(numberOfRows);
    setColumns(numberOfColumns);
    gridContainer.textContent = "";
    createGrid();
});



const grid100Btn = document.querySelector("#grid100Btn");
grid100Btn.addEventListener("click", () => {

    numberOfRows = 100;
    numberOfColumns = 100;

    setRows(numberOfRows);
    setColumns(numberOfColumns);
    gridContainer.textContent = "";
    createGrid();
});


