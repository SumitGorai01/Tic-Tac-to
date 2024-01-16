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
            box.innerText = 'O';
            box.classList.add('o-selection');
            turnO = false;
          
        }
        else {
            box.innerText = 'X';
            box.classList.add('x-selection');
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
    Swal.fire({
        title: "Congratulations!",
        text: "You Won the match . Winner is :  "  + winner,
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Re-Start",
    }).then((result) => {
        // You can add further actions after the alert is dismissed if needed
        if (result.isConfirmed) {
            if (document.getElementById("result")) {  
                document.getElementById("result").innerText = winner;
            }
            disableBoxes();            
        }
        else if (result.dismiss === Swal.DismissReason.cancel) {
            // User clicked "Re-Start"
            autoReset();
        }
    });
}

const autoReset = () => {
    // This could include resetting game state, clearing the board, etc.
    if (document.getElementById("result")) {
        document.getElementById("result").innerText = "";
    }
    enableBoxes(); // Implement enableBoxes() to reset the game state
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