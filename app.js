const container = document.querySelector(".container");
const gridContainer = document.querySelector(".gridContainer");
const clrScreenBtn = document.querySelector(".clr_screen");
const numBoxSelection = document.querySelector(".box-selection");
const numBox = 16;
const colorPicker = document.querySelector(".colorPicker")
const boxes = document.querySelector(".box");
let defaultColor = "black";
let colorBtnClicked = false;

function createGrid(numBox) {
    gridContainer.textContent = '';
    for (let i = 0; i < numBox; i++){
        const row = document.createElement('div');
        row.className = 'row';
        gridContainer.appendChild(row);
        for(let j = 0; j < numBox; j++){
            const square = document.createElement('div');
            // square.setAttribute('style', 'height: 20px; width: 20px; background: blue');
            square.className = 'box';
            row.appendChild(square);
            square.addEventListener('mouseenter', changeColor);
            clrScreenBtn.addEventListener("click", () => {
                square.style.backgroundColor = "white";
                colorBtnClicked = false;
            })
        }
    }
}

function changeColor(e) {
    console.log(e.target);
    if(colorBtnClicked === true){
        e.target.style.backgroundColor = randomColor();
    } else {
        e.target.style.backgroundColor = defaultColor;
    }
    // e.target.style.backgroundColor = defaultColor;
}

function randomColor() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    // defaultColor = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

// function tenPercentBlack() {

// }

colorPicker.addEventListener('click', () => {
    colorBtnClicked = true;
});
// colorPicker.onclick = function(){
//     colorBtnClicked = true;
// }

numBoxSelection.addEventListener('click', () => {
    let userNumBox = prompt("Please Enter Number of Boxes per side for grid:")
    if(userNumBox > 100 ) {
        userNumBox = prompt("Please choose a number less than or equal to 100")
    }
    createGrid(userNumBox);
})

createGrid(numBox);



