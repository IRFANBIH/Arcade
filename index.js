import { profile, setHoverEffect, markedBox, changeTurns, endGame, drawGame} from "./module/functions.js";
import {GAME} from "./module/variables.js";
import {checkWin, winCombo} from "./module/win.js";
//Game Buttons//
GAME.startButton.addEventListener("click", startGame);
GAME.restartButton.addEventListener("click", startGame);
GAME.drawButton.addEventListener("click", startGame);

profile()
 

// Start The Game//

function startGame(){
    setHoverEffect();

    //Make Click
    GAME.blockElements.forEach(box => {
        box.classList.remove(GAME.xClass);
        box.classList.remove(GAME.yClass);
        box.classList.remove("win");
        box.addEventListener('click',boxClicked, {once: true})
    })
    GAME.startScreen.classList.add("hide");
    GAME.winElement.classList.remove("show");
    GAME.drawElement.classList.remove("show");
    GAME.winnerPlayer.children.length ? GAME.winnerPlayer.removeChild(GAME.winner): null;
}  

//box clicked

function boxClicked(e){
    const box = e.target;
    const currentPlayer = GAME.turn ? GAME.yClass : GAME.xClass;
    markedBox(box, currentPlayer);

    //Check Winner//
    let final = checkWin(currentPlayer, GAME.blockElements).filter((win,index)=>{
        if(win){

            winCombo[index].map(i=>{
                GAME.blockElements[i].classList.add('win')
            })
            
            
            //set winner//
        GAME.winner = GAME.blockElements[winCombo[index][0]].cloneNode(true);
        return win !== false;
          
        }
    });
    //checking draw or win
    if(final.length){
        endGame(false, GAME.winElement, GAME.drawElement);
        GAME.winnerPlayer.append(GAME.winner);
    }else if(drawGame(final)){
        endGame(true, GAME.winElement, GAME.drawElement);
    }



      
    
    

    GAME.turn = changeTurns(GAME.turn);
    setHoverEffect();
}
    