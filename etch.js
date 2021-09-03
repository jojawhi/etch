const gridContainer = document.querySelector("#gridContainer");

const inputColor = document.querySelector("#inputColor");

let colorChoice = black;



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
        gridCell.style.backgroundColor = `${colorChoice}`;
    });
    

    gridContainer.appendChild(gridCell);

    /*
    gridCell.addEventListener("mouseover", (e) => {
        let timesHovered = 0;
        timesHovered++;
        e.style.backgroundColor = `var(--neutral-${timesHovered})`;
    });
    */
}

function createGrid(gridNumber) {

    setRows(gridNumber);
    setColumns(gridNumber);

    let gridArea = gridNumber * gridNumber;

    let i = 0;

    while (i < gridArea) {
        createCell();
        i++;
    }

}

createGrid(20);

const cells = document.querySelectorAll(".cell");



// Buttons

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


// Slider

const sizeSlider = document.querySelector("#sizeSlider");

function changeGridSize() {
    gridContainer.textContent = "";
    createGrid(sizeSlider.value);
}

sizeSlider.addEventListener("input", () => {
    changeGridSize();
});


/*
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
*/

/*
// Fade to black, does not work yet
const darkModeBtn = document.querySelector("#darkModeBtn")
darkModeBtn.addEventListener("click", () => {
    
    cells.forEach(item => {
        item.addEventListener("mouseover", (e) => {
            let timesHovered = 0;
            timeHovered++;
            e.target.style.backgroundColor = `var(--neutral-${timesHovered})`;
        });
    });
});
*/