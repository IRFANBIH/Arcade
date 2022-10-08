export let GAME = {
    xClass: 'x', //James Robinson
    yClass: 'y', //Travis Etienne
    selectedProfile: document.querySelectorAll(".img .id"),
    turn:undefined,
    blockElements: document.querySelectorAll('[dataCell]'),
    boardElement: document.getElementById("board"),
    startButton: document.getElementById("startButton"),
    startScreen: document.querySelector(".startGame"),
    winner: null,
    winElement: document.querySelector(".winMessage"),
    drawElement: document.querySelector(".drawMessage"),
    winnerPlayer: document.querySelector(".winMessage .winner"),
    restartButton: document.getElementById("restartButton"),
    drawButton: document.getElementById("drawButton")

}