const DEFAULT_GRID_SIZE = 16;
const CONTAINER = document.getElementById("canvas-container");
const CONTAINER_HEIGHT = CONTAINER.clientHeight;
const CONTAINER_WIDTH = CONTAINER.clientWidth;
createGrid(DEFAULT_GRID_SIZE);

document.addEventListener('mouseover', function(e){
    if(e.target.id === "pixel"){
        let currentBrushColor = document.getElementById("brush-color");
        e.target.style.backgroundColor = currentBrushColor.value;
    }
});

function createGrid(gridSize) {
    clearGrid();
    for(j = 0; j < gridSize; j++){
        const row = document.createElement("div");
        row.className = "row";
        CONTAINER.appendChild(row);

        for(let i = 0; i < gridSize; i++){
            const col = document.createElement("div");
            col.style.flexGrow = 1;
            col.style.height = `${(CONTAINER_HEIGHT / gridSize)}px`
            col.style.width = `${(CONTAINER_WIDTH / gridSize)}px`
            col.id = "pixel";
            col.style.backgroundColor = document.getElementById("background-color").value;
            row.appendChild(col);
        }
    }
    let pixel = document.getElementById("pixel");
    pixel.backgroundColor = document.getElementById("background-color").value;
}

function clearGrid() {
    const canvasContainer = document.getElementById("canvas-container");
    while (canvasContainer.lastElementChild) {
        canvasContainer.removeChild(canvasContainer.lastElementChild);
    }
}