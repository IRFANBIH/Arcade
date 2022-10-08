export const winCombo= [
    [0, 1, 2], // horizontal
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // vertical
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonal check
    [2, 4, 6]
];

//check for winner//

export function checkWin(currentPlayer, blockElements){
    let winGame =[];

    winCombo.some(combination => {
        
        winGame.push(combination.every(index => {
            return blockElements[index].classList.contains(currentPlayer);
        }));
    })
    return winGame || null;
} 