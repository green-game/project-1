const cells = document.querySelectorAll(".cell");
//style connect
const statusText = document.querySelector("#statusText");
//stats of play
const restartBtn = document.querySelector("#restartBtn");
//restart connect
//win object
const winConditions = [
    //arrays to win it all
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
//board
let options = ["", "", "", "", "", "", "", "", ""];
//blank board above used as a pre set
let currentPlayer = "X";
//player 
let running = false;
//change to true to start
//below to start
initializeGame();
//start function
function initializeGame(){
    //connection to ccs
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    //connection to a const 
    restartBtn.addEventListener("click", restartGame);
    //turn
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
//changes the blank
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
//
    if(options[cellIndex] != "" || !running){
        return;
    }
//
    updateCell(this, cellIndex);
    checkWinner();
}
//UPDATES THE CELL
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
//player changeer
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}
//win checker
function checkWinner(){
    let roundWon = false;
    //neads three option

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];
     //the three condition
        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        //the win
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }
//win for
    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    //our draw if it has nothing 
    else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    //changes to second for the win
    else{
        changePlayer();
    }
}
//finaly our restart function
function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}
//dont forget to finsh read me
//dont forget to finush commet
//and dont forget to check
//