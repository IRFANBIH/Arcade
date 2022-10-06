let X_class='x' //James Robinson // x as x's
let Y_class='y' // Travis Etienne // y as o's
let selectedCharacter = document.querySelectorAll(".img .id") // Running Back Selected Hopefully // 
let turn = undefined
let blockElements = document.querySelectorAll('[data-cell]');
let boardElement = document.getElementById("board");
let startButton = document.getElementById("startButton");
let startPage = document.querySelector(".startGame");
let container = document.querySelector(".container")
let message = document.querySelector(".textMessage")
let winner = null;
let winCombo = [
    [0, 1, 2], //horizontal
    [3, 4, 5], //horizontal
    [6, 7, 8], //horizontal
    [0, 3, 6], //vertical
    [1, 4, 7], //vertical
    [2, 5, 8], //vertical
    [0, 4, 8], //diagonal
    [2, 4, 6] //diagonal
];

function checkWin(currentPlayer, blockElements){
    let win = [];
    let winText = document.getElementsByClassName("textMessage")[0]
    winCombo.some( combination => {
        win.push(combination.every(index => {
            return blockElements[index].classList.contains(currentPlayer); 
        }))
        if(win){
            winText.innerText = `${currentPlayer} is the winner!!!`
        }


    })
    return win || null
}
 








/** selector */

function characterSelector(){
    selectedCharacter.forEach(img=>{
        img.addEventListener("click",i=>{
        let target = i.target.dataset.id;
        removecharacterSelector(selectedCharacter);
        document.querySelector(`[data-id = '${target}']`).classList.add("selected")

        //Changing players??
        turn = target =='x'||target == 'x' ? true : false;

    });
    });  

}
characterSelector()
 
// removes the selector from the other img //
function removecharacterSelector(img){
    [].forEach.call(img,function(el){
        el.classList.remove("selected");
    })
}
// makes the hover image//
function setHover(){
    boardElement.classList.remove('x');
    boardElement.classList.remove('y');
    if(turn){
        boardElement.classList.add('x');
    }else{
        boardElement.classList.add('y');
    }

}

/** Game Buttons */
startButton.addEventListener("click", startGame);


/* START GAME */
function startGame(){
    setHover();
    
    //add click///

    blockElements.forEach(box => {
        box.addEventListener('click',boxClicked,{once:true})
    })
    startPage.classList.add("hide");
    container.classList.remove("hide");
    message.classList.remove("hide")

}

function boxClicked(i){
    let box = i.target;
    let currentPlayer = turn ? 'x' : 'y'
    placedBox(box, currentPlayer);
    let outcome = checkWin(currentPlayer, blockElements).filter((win, index)=>{
        if(win){
            winCombo[index].map(i=>{
                blockElements[i].classList.add('win');
            })



            winner = blockElements[winCombo[index][0]];
        return win !== false;
        }

    });

    if(outcome.length){
        gameEnd(false) 

    }else{

    }
    
    turn = changeTurns(turn);
    setHover();
}


function placedBox(box,currentPlayer){

    box.classList.add(currentPlayer)


}

function changeTurns(turn){
    return turn= !turn;
}



//game is over //

function gameEnd(draw, win,){
    if(!draw){
        win.classList.add("show");

    }else{
        draw.classList.add("show");
        

    }



}



