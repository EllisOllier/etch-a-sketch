document.addEventListener('mouseover', function(e){
    if(e.target.id === "pixel"){
        let currentBrushColor = document.getElementById("brush-color");
        e.target.style.backgroundColor = currentBrushColor.value;
    }
});

function createGrid(gridSize) {
    for(let i = 0; i < gridSize * gridSize; i++){
        let element = document.createElement("div");
        element.style.width = "50px";
        element.style.height = "50px";
        element.style.border = "1px solid black";
        element.id = "pixel";
        element.style.backgroundColor = document.getElementById("background-color").value;
        document.getElementById('canvas-container').appendChild(element);
        
    }
}

function clearGrid() {
    const canvasContainer = document.getElementById("canvas-container");
    while (canvasContainer.lastElementChild) {
        canvasContainer.removeChild(canvasContainer.lastElementChild);
    }
}