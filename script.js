function colorCell(e){
    this.classList.add("sketchCellGrey");
}

function generateGrid(sketchContainer){
    const n = 4;
    sketchCells = [];

    for(i=0; i<n*n; i++){
        sketchCells.push(document.createElement("div"));
        sketchCells[i].classList.add("sketchCell");
        sketchCells[i].addEventListener("mouseenter", colorCell);
        sketchContainer.appendChild(sketchCells[i]);
    }
}

sketchContainer = document.getElementById("sketchContainer");
generateGrid(sketchContainer)