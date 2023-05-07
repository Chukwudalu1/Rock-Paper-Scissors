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
        return console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }else {
        return console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }

}
const playerSelection = prompt('Rock, Paper or Scissor?: ');
console.log(playRound(playerSelection, computerSelection()));