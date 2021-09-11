const gridContainer = document.querySelector("#gridContainer");
const pageContainer = document.querySelector("#pageContainer");


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
    
    // attempts at touch functionality, not working yet

    gridCell.addEventListener("touchstart", (e) => {
        e.target.style.backgroundColor = `${colorChoice}`;
    });

    gridCell.addEventListener("touchmove", (e) => {
        
        /*
        e.preventDefault();
        e.target.style.backgroundColor = `${colorChoice}`;
        */

        //Emulate mouse movement (solution from Jesse)
        const touchLocation = e.originalEvent ? e.originalEvent.changedTouches[0] : e.touches[0];
        const target = document.elementFromPoint(touchLocation.clientX, touchLocation.clientY);

        if (target) {
            target.style.backgroundColor = `${colorChoice}`;
        }

    });

    gridContainer.appendChild(gridCell);
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

// Full Clear and Selective Erase

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(item => {
        item.style.backgroundColor = "transparent";
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


//Random colour mode

const funkyBtn = document.querySelector("#funkyBtn");
funkyBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(item => {
        item.addEventListener("mouseover", (e) => {
            
            //RGB random colour, brighter
            /*
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            let randomColour = `rgb(${red}, ${green}, ${blue})`;
            */

            
            //HSL random colour, more muted
            /*
            let hue = Math.floor(Math.random() * 360);
            let saturation = Math.floor(Math.random() * 100);
            let lightness = Math.floor(Math.random() * 50);
            */
            let randomColor = `hsl(${Math.floor(Math.random() * 360)}, 80%, 70%)`;
            

            e.target.style.backgroundColor = randomColor;
        });

        item.addEventListener("touchmove", (e) => {
        
            /*
            e.preventDefault();
            e.target.style.backgroundColor = `${colorChoice}`;
            */
    
            //Emulate mouse movement (solution from Jesse)
            const touchLocation = e.originalEvent ? e.originalEvent.changedTouches[0] : e.touches[0];
            const target = document.elementFromPoint(touchLocation.clientX, touchLocation.clientY);
    
            if (target) {
                target.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 80%, 70%)`;
            }
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

//This solution adapted from github repo of rlmoser99
const inputColor = document.querySelector("#inputColor");

function userColorSelection(event) {
    colorChoice = event.target.value;
    //the below allows you to switch back to this after choosing another mode
    const cells = document.querySelectorAll(".cell");
    cells.forEach(item => {
        item.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `${colorChoice}`;
        });

        item.addEventListener("touchmove", (e) => {
    
            //Emulate mouse movement (solution from Jesse)
            const touchLocation = e.originalEvent ? e.originalEvent.changedTouches[0] : e.touches[0];
            const target = document.elementFromPoint(touchLocation.clientX, touchLocation.clientY);
    
            if (target) {
                target.style.backgroundColor = `${colorChoice}`;
            }
    
        });
    });  
}

inputColor.addEventListener("change", userColorSelection, false);
inputColor.addEventListener("input", userColorSelection, false);
inputColor.addEventListener("click", userColorSelection, false);


// Shading mode, currently only goes to 0.1 opacity

const shadingBtn = document.querySelector("#shadingBtn")

shadingBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(item => {
        let timesHovered = 0;
        item.addEventListener("mouseover", (e) => {
            timesHovered++;
            if (timesHovered <= 10) {
                e.target.style.backgroundColor = `var(--grey-${timesHovered})`;
            } else if (timesHovered > 10) {
                e.target.style.backgroundColor = `var(--grey-10)`;
            } 
        });
    });
});



//Dark Mode

const buttons = document.querySelectorAll("button.btn");
const darkModeBtn = document.querySelector("#darkModeBtn");
const titleText = document.querySelector("#titleText");
const lightSide = document.querySelector("#lightSide");
const darkSide = document.querySelector("#darkSide");

let darkMode = false;

darkModeBtn.addEventListener("click", () => {
    
    gridContainer.classList.toggle("darkGrid");

    const cells = document.querySelectorAll(".cell");
    cells.forEach(item => {
        item.classList.toggle("darkCell");
    });

    buttons.forEach(item => {
        item.classList.toggle("darkBtn");
    });

    pageContainer.classList.toggle("darkPage");
    sizeSlider.classList.toggle("darkSlider");
    sizeSliderLabel.classList.toggle("darkLabel");
    titleText.classList.toggle("darkLabel");

    if (darkMode === false) {
        darkMode = true;
        darkSide.classList.add("activeMode");
    } else if (darkMode === true) {
        darkMode = false;
        darkSide.classList.remove("activeMode");
        lightSide.classList.add("activeMode");
    }

});


// Grid Lines

const gridLinesBtn = document.querySelector("#gridLinesBtn");

gridLinesBtn.addEventListener("click", () => {

    const cells = document.querySelectorAll(".cell"); //adding this here made it work after resizing
    
    if (darkMode === false) {
        cells.forEach(item => {
            item.classList.toggle("cellNoBorder");
        });
    } else if (darkMode === true) {
        cells.forEach(item => {
            item.classList.toggle("darkCell");
            item.classList.toggle("cellNoBorder");
        });
    }
   
    if (gridLinesBtn.textContent === "Grid Lines Off") {
        gridLinesBtn.textContent = "Grid Lines On";
    } else if (gridLinesBtn.textContent === "Grid Lines On") {
        gridLinesBtn.textContent = "Grid Lines Off";
    }

});




/*
To do:
- add touch screen support (still not sure how)
- final tweaks on desktop layout
*/