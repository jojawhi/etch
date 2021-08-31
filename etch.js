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



/*
function setRandomBackground() {
    const randomColour = Math.floor(Math.random()*16777215).toString(16);
    gridCell.addEventListener("mouseover", () => {
        gridCell.style.backgroundColor = "#" + randomColour;
    });
}
*/

// Grid Functions

let numberOfRows = 20;
let numberOfColumns = 20;


function setRows(numberOfRows) {
    gridContainer.style.cssText = `grid-template-rows: repeat(${numberOfRows}, minmax(10px, 50%))`;
}

function setColumns(numberOfColumns) {
    gridContainer.style.cssText = `grid-template-columns: repeat(${numberOfColumns}, minmax(10px, 50%))`;
}


function createCell() {
    let gridCell = document.createElement("div");
    gridCell.classList.add("cell");

    // Single colour default
    gridCell.addEventListener("mouseover", () => {
        gridCell.style.backgroundColor = "teal";
    });

    let timesHovered = 0;

    gridCell.addEventListener("mouseover", () => {
        timesHovered++;
    })
    

    gridContainer.appendChild(gridCell);
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

setRows(numberOfRows);
setColumns(numberOfColumns);
createGrid();

const cells = document.querySelectorAll(".cell");



// Buttons

const customGridBtn = document.querySelector("#customGridBtn");

customGridBtn.addEventListener("click", () => {

    numberOfRows = document.getElementById("rowInput").value;
    numberOfColumns = document.getElementById("colInput").value;

    setRows(numberOfRows);
    setColumns(numberOfColumns);

    gridContainer.textContent = "";
    createGrid();

});


// Full Clear and Selective Erase, currently works on first load but not after making custom grid or 64x64 or 100x100

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
    cells.forEach(item => {
        item.style.backgroundColor = "";
    })
});

const eraserBtn = document.querySelector("#eraserBtn");
eraserBtn.addEventListener("click", () =>{
    cells.forEach(item => {
        item.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "";
        });
    });
});


//Random colour mode, currently works on first load but not after making custom grid or 64x64 or 100x100

const funkyBtn = document.querySelector("#funkyBtn");
funkyBtn.addEventListener("click", () => {
    cells.forEach(item => {
        item.addEventListener("mouseover", (e) => {
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            let randomColour = `rgb(${red}, ${green}, ${blue})`;

            e.target.style.backgroundColor = randomColour;
        });
    });
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



// Fade to black, does not work yet
const darkModeBtn = document.querySelector("#darkModeBtn")
darkModeBtn.addEventListener("click", () => {
    
    cells.forEach(item => {
        item.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `var(--neutral-${timesHovered})`;
        });
    });

});
