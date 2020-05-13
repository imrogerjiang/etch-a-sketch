function colorCell(e){
    if(rainbow){
        const rainbowrgb = makeRainbow(currentColor, 0.2, 127);
        this.style.backgroundColor = `rgb(${rainbowrgb[0]}, ${rainbowrgb[1]}, ${rainbowrgb[2]})`;
        currentColor++;
    } else {
        this.style.backgroundColor = 
            getComputedStyle(document.documentElement)
            .getPropertyValue('--dark-fg-color');
    }
}

function reset(e){
    // Get user input grid size
    const gridSizeInput = document.getElementById("gridSizeInput");
    if(Math.floor(gridSizeInput.value)){
        gridSize=Math.floor(gridSizeInput.value);
    }
    gridSizeInput.value = "";

    while(sketchContainer.hasChildNodes()){
        sketchContainer.firstChild.remove();
    }

    generateGrid(sketchContainer);
}

function generateGrid(sketchContainer){
    // Sets size of rows and columns
    sketchContainer.style.gridTemplate = 
        `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`;
    
    sketchCells = [];
    for(i=0; i<gridSize*gridSize; i++){
        sketchCells.push(document.createElement("div"));
        sketchCells[i].classList.add("sketchCell");
        sketchCells[i].addEventListener("mouseenter", colorCell);
        sketchContainer.appendChild(sketchCells[i]);
    }
}

let gridSize = 8;
let rainbow = true;
let currentColor = 0;

const gridSizeBtn = document.getElementById("gridSizeBtn");

const sketchContainer = document.getElementById("sketchContainer");
generateGrid(sketchContainer)

// Change grid size by pressing "Enter"
document.getElementById("gridSizeInput").addEventListener(
    "keyup",
    function (e) {
        if(e.key == "Enter"){
            gridSizeBtn.click();
        };
    }
)

gridSizeBtn.addEventListener("click", reset);


