let X_class='x' //James Robinson // x as x's
let Y_class='y' // Travis Etienne // y as o's
let selectedCharacter = document.querySelectorAll(".img .id") // Running Back Selected Hopefully // 
let turn = undefined
let blockElements = document.querySelectorAll('[data-cell]');
let boardElement = document.getElementById("board");
let startButton = document.getElementById("startButton");
let startPage = document.querySelector(".startGame")



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
    startPage.classList.add("hide");


}
