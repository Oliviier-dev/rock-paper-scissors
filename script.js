choices = ['rock', 'paper', 'scissor']

let playerSelection = prompt("Your choice: rock, paper, scissor");
let computerSelection = choices[(Math.floor(Math.random() * 3))];

playerVictory = `You Won! ${playerSelection} beats ${computerSelection}`;
computerVictory = `You lose! ${computerSelection} beats ${playerSelection}`;


// function getComputerChoice (){
//     return choices[(Math.floor(Math.random() * 3))];
// }

function playRound (playerSelection, computerSelection){
    if (playerSelection == 'rock' && computerSelection == 'scissor'){
        return playerVictory;
    } else if (playerSelection == 'scissor' && computerSelection == 'paper'){
        return playerVictory;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return playerVictory;
    } else if (playerSelection == computerSelection){
        return "It's a Tie"
    } else {
        return computerVictory;
    }
}

// function game() {
//     playRound(playerSelection, computerSelection);
// }

// function game (){
//     playerScore = 0;
//     computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         console.log (`Round : ${i}`)
//         playRound(playerSelection, computerSelection);
//         console.log("player:" + playerSelection);
//         console.log("computer:" + computerSelection);
//         if (playRound() == playerVictory){
//             playerScore ++;
//         } else if (playRound() == computerVictory){
//             computerScore ++;
//         } else{
//             continue;
//         }
//     }

//     if (playerScore > computerScore){
//         console.log("Human W");
//     } else if (playerScore < computerScore){
//         console.log("Human L");
//     } else {
//         console.log("Tie");
//     }

// }

console.log("player:" + playerSelection);
console.log("computer:" + computerSelection);
console.log(playRound(playerSelection, computerSelection));