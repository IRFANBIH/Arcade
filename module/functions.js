import { GAME } from "./variables.js";

/** Make your Selected Character */

export function profile(){
    GAME.selectedProfile.forEach(img => {
        img.addEventListener("click", e => {
            let target = e.target.dataset.id;
            removeSelection(GAME.selectedProfile);
            document.querySelector(`[data-id='${target}']`).classList.add("selected");
            //Set Turns
            GAME.turn = target == 'y' ? true:false;
        }); 
    })
  
}  


function removeSelection(img){
    [].forEach.call(img, function(el){
        el.classList.remove("selected");
    })
}

// hover effect on the box
export function setHoverEffect(){
    GAME.boardElement.classList.remove(GAME.xClass);
    GAME.boardElement.classList.remove(GAME.yClass);
    if(GAME.turn){
        GAME.boardElement.classList.add(GAME.yClass);
    }else{
        GAME.boardElement.classList.add(GAME.xClass);
    }
}


// adds box mark


export function markedBox(box,currentPlayer){
    box.classList.add(currentPlayer)
}

//swap players function

export function changeTurns(turn){
    return turn = !turn;
}


export function endGame(draw, winElement, drawElement){
    if(!draw){
        winElement.classList.add("show");

    }else{
        drawElement.classList.add("show");

    }

}

//check the draw 

export function drawGame(final){
    if(final.length) return;
    return [...GAME.blockElements].every(box =>{
        return box.classList.contains(GAME.xClass)||
        box.classList.contains(GAME.yClass)
    })
}