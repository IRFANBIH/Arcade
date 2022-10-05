let box = document.querySelectorAll(".box");
let playing = document.querySelector("#playing");
let reset = document.querySelector("#reset");
let winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

];

let possibly = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let currentPlayer = "X" ;
let running = false;

gameStart()
checkWinner()

function gameStart(){
    box.forEach(box => box.addEventListener("click", boxClicked))
    reset.addEventListener("click", restartGame)
    playing.textContent = `${currentPlayer} is playing`;
    running = true;


}

function boxClicked(){
    let container = this.getAttribute("container");

    if(possibly[container]!= " " || !running){
        return;
    }

    updateBox(this, container);
    checkWinner();


}

function updateBox(box, score ){
    possibly[score] = currentPlayer;
    box.textContent = currentPlayer;


}

function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    playing.textContent = `${currentPlayer} is playing`;


}

function checkWinner(){
    let win = false;

    for(let i = 0; i < winner.length; i++){
        let condition = winner[i];
        let boxA = possibly[condition[0]];
        let boxB = possibly[condition[1]];
        let boxC = possibly[condition[2]];
        

        if(boxA == " " || boxB == " " || boxC == " "){
            continue;
        }
        if(boxA == boxB && boxB == boxC){
            win = true;
            break;
        }
    }

    if(win){
        playing.textContent= `${currentPlayer} wins!`;
        running = false;
    }
    else if(possibly.includes("")){
        changePlayer.textContent = "draw!";
    }
    else{
        changePlayer();
    }


}

function restartGame(){
    currentPlayer = "X" ; 
    possibly = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    changePlayer.textContent = `${currentPlayer} is playing`;
    box.forEach(box => box.textContent = "");
    running = true


}