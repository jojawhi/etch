const gridContainer = document.querySelector("#gridContainer");

let colorChoice = "black";



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
    gridContainer.style.cssText = `grid-template-rows: repeat(${numberOfRows}, minmax(5px, 50%))`;
}

function setColumns(numberOfColumns) {
    gridContainer.style.cssText = `grid-template-columns: repeat(${numberOfColumns}, minmax(5px, 50%))`;
}

function createCell() {
    let gridCell = document.createElement("div");
    gridCell.classList.add("cell");
    
    // Single colour default

    gridCell.addEventListener("mouseover", () => {
        gridCell.style.backgroundColor = `${colorChoice}`;
    });
    
    gridCell.addEventListener("touchstart", (e) => {
        e.target.style.backgroundColor = `${colorChoice}`;
    });

    gridCell.addEventListener("touchmove", (e) => {
        e.preventDefault();
        e.target.style.backgroundColor = `${colorChoice}`;
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

createGrid(40);



// Buttons

// Full Clear and Selective Erase, now works after resizing grid, but cannot go back to colour picker

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(item => {
        item.style.backgroundColor = "#ffffff";
    })
});

const eraserBtn = document.querySelector("#eraserBtn");
eraserBtn.addEventListener("click", () =>{
    const cells = document.querySelectorAll(".cell");
    cells.forEach(item => {
        item.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "";
        });
    });
});


//Random colour mode, currently works on first load but not after resizing grid

const funkyBtn = document.querySelector("#funkyBtn");
funkyBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
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
    gridSizeText.textContent = sizeSlider.value + " x " + sizeSlider.value;
});

const sizeSliderLabel = document.querySelector("#sizeSliderLabel");
const gridSizeText = document.createElement("span");
gridSizeText.textContent = sizeSlider.value + " x " + sizeSlider.value;
sizeSliderLabel.appendChild(gridSizeText);


// Colour picker

//This solution taken from github repo of rlmoser99, don't fully understand how it works yet
// Also does not work after selecting eraser or random colour mode
const inputColor = document.querySelector("#inputColor");

function userColorSelection(event) {
    colorChoice = event.target.value;
    //the below allows you to switch back to this after choosing another mode
    const cells = document.querySelectorAll(".cell");
    cells.forEach(item => {
        item.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `${colorChoice}`;
        });
    });
}

inputColor.addEventListener("change", userColorSelection, false);
inputColor.addEventListener("input", userColorSelection, false);
inputColor.addEventListener("click", userColorSelection, false);


// Grid Lines

const gridLinesBtn = document.querySelector("#gridLinesBtn");

gridLinesBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell"); //adding this here made it work after resizing
    cells.forEach(item => {
        item.classList.toggle("cellNoBorder");
    });
    
    if (gridLinesBtn.textContent === "Grid Lines Off") {
        gridLinesBtn.textContent = "Grid Lines On";
    } else if (gridLinesBtn.textContent === "Grid Lines On") {
        gridLinesBtn.textContent = "Grid Lines Off";
    }
});



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