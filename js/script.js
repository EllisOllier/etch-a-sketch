document.addEventListener('mouseover', function(e){
    if(e.target.id === "pixel"){
        let currentBrushColor = document.getElementById("brush-color");
        e.target.style.backgroundColor = currentBrushColor.value;
    }
});
const container = document.getElementById("canvas-container");
function createGrid(gridSize) {
    clearGrid();
    for(j = 0; j < gridSize; j++){
        const row = document.createElement("div");
        row.className = "row";
        row.border = "1px solid red";
        container.appendChild(row);

        for(let i = 0; i < gridSize; i++){
            const col = document.createElement("div");
            col.style.border = "1px solid black";
            col.style.flexGrow = 1;
            col.style.height = `${400 / gridSize}px`
            col.style.width = `${400 / gridSize}px`
            col.id = "pixel";
            col.style.backgroundColor = document.getElementById("background-color").value;
            row.appendChild(col);
        }
    }
    
}

function clearGrid() {
    const canvasContainer = document.getElementById("canvas-container");
    while (canvasContainer.lastElementChild) {
        canvasContainer.removeChild(canvasContainer.lastElementChild);
    }
}