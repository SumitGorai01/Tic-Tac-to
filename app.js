let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let turnO = true; //playero.playerx
let result = document.querySelector(".result");

 

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


 
// reset game
const resetGame = () => {
    turnO = true;
    enableBoxes();
    result.innerText = "";

    
}

// to click on boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box is click");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
          
        }
        else {
            box.innerText = "X";
            turnO = true;
            
        }
        box.disabled = true;
        checkWinner();
    });

});

// disable boxes after win
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

// to disable boxesc
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    
    }
}

// to show winner
const showwinner = (winner) => {
    result.innerText = winner;
    disableBoxes();
}

//  to check winner
const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val);
            }

        }
    }
}

// reset button
resetBtn.addEventListener("click", resetGame);