let computerScore = 0;
let playerScore = 0;

const computerSelection = function (){
    const choice = Math.floor(Math.random()*3);
    let result = '';
    switch (choice) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}
//computerSelection();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){ 
        console.log('Draw! It is a tie');
    }if((playerSelection == 'Scissors' && computerSelection == 'Paper')|| (playerSelection == 'Paper' && computerSelection == 'Rock')|| (playerSelection == 'Rock' && computerSelection == 'Scissors')){ 
        playerScore++;
        return console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }if ((computerSelection == 'Scissors' && playerSelection == 'Paper')|| (computerSelection == 'Paper' && playerSelection == 'Rock')|| (computerSelection == 'Rock' && playerSelection == 'Scissors')){
        computerScore++;
        return console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }

}
const playerSelection = prompt('Rock, Paper or Scissor?: ');
console.log(playRound(playerSelection, computerSelection()));

function game() {
    for (let i = 0; i <=5; i++) {
        return playRound;   
    }
    if (playerScore > computerScore) {
        console.log('You win! The game is over');
    } else {
        console.log('Game over, You Lose!');
    }
}
game();