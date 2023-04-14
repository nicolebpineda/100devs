// Tic-Tac-Toe

// Turns
    const maxTurns = 9;
    let turnCounter = 1;
    let playerTurn = '';

// Board
    const board = document.querySelectorAll('td')

// Log space clicked on board
    const squareClicked = element => {
        console.log(element.target.id)
        while(turnCounter <= maxTurns) {
        if (playerTurn === 'x'){
            turnCounter++;
            element.target.innerText = 'X';
            playerTurn = 'o';
            doucment.querySelector('h1').innerText = `Turn ${turnCounter} X`;
        } else {
            turnCounter++;
            element.target.innerText = 'O';
            playerTurn = 'x';
            document.querySelector('h1').innerText = `Turn ${turnCounter} O`;
        }
        break;
    }
}
  

// Identify space clicked on board
    for (let square of board){
        square.addEventListener('click', squareClicked);
    }








// document.querySelector('tr').addEventListener('click', addXO)

// // let whereBox = document.getElementsByClassName('tr').addEventListener('click', run)
// // the value need to be whatever box the person clicks on

// function addXO(){
//     document.querySelector(`.${squareClicked}`).innerText = 'X'
//     // document.querySelector('tr').innerText = '0'
// }







// testing zone
// document.querySelector('tr').addEventListener('click', test)
// function test(){
//     document.querySelector('.r1').innerText = 'test'
// }