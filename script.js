//Function to allow computer play
const getcomputerChoice = function (){
    const choice = Math.floor(Math.random()*3);
    //let result = '';
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

function Winner(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It is a Tie"
    }
    else if(
        (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors")||
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper")||
        (playerSelection.toLowerCase() === "paper" && computerSelection==="Rock")
    ){
        return "Player"
    }
    else{
        return "Computer"
    }
}
function playRound(playerSelection, computerSelection){
    const resultChecker = Winner(playerSelection, computerSelection);
    if (resultChecker == "It is a Tie") {
        return "Tie";
    }
    else if (resultChecker == "Player"){
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

/* function getPlayerChoice(){
    let Input = false;
    while (Input == false) {
        const playerChoice = prompt("Rock, Paper, or Scissors");
        if (playerChoice == null) 
            continue;{
        }
        const choiceLower = playerChoice.toLowerCase();
        if (choice.includes(choiceLower)){
            Input = true;
            return choiceLower;
        }
    }
 }
*/

function game() {
    let playerScore =0;
    let computerScore = 0;
    console.log("Welcome to the game, lets Play!")
    for (let i = 1; i <6; i++) {
        console.log("Round", i,"- Make your pick: Rock, Paper, Scissors:");
        const playerSelection = "Scissors"//prompt("Please select: Rock, Paper, or Scissors: ");
        const computerSelection = getcomputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        if (Winner(playerSelection, computerSelection) == "Player") {
            playerScore++; //
        }
        else if (Winner(playerSelection, computerSelection) == "Computer") {
            computerScore++; 
        }
    }
    if (playerScore > computerScore) {   
        console.log("Player Wins");
    }
    else if (computerScore > playerScore) {
        console.log("Computer Wins");
    }
    else{
        console.log("It was a Tie");
    }
    console.log(`The end of the game........Player score: ${playerScore} Computer Score: ${computerScore}`);
}
game();



/*const prompts = document.getElementById("Prompt Message")
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

rockBtn.addEventListener("click", () => {console.log("Rock")});
paperBtn.addEventListener("click", () => {console.log("Paper")});
scissorsBtn.addEventListener("click", () => {console.log("Scissors")});*/