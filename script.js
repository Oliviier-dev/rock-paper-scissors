choices = ['rock', 'paper', 'scissor']

// let playerSelection = prompt("Your choice: rock, paper, scissor").toLowerCase();
// let computerSelection = choices[(Math.floor(Math.random() * 3))];

// playerVictory = `You Won! ${playerSelection} beats ${computerSelection}`;
// computerVictory = `You lose! ${computerSelection} beats ${playerSelection}`;


// function getComputerChoice (){
//     return choices[(Math.floor(Math.random() * 3))];
// }

function playRound (playerSelection, computerSelection){
    if (playerSelection == 'rock' && computerSelection == 'scissor'){
        return 'player';
    } else if (playerSelection == 'scissor' && computerSelection == 'paper'){
        return 'player';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'player';
    } else if (playerSelection == computerSelection){
        return "It's a Tie"
    } else {
        return 'computer';
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
 function game () {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++){
        let playerSelection = prompt("Your choice: rock, paper, scissor").toLowerCase();
        let computerSelection = choices[(Math.floor(Math.random() * 3))];

        let winner = playRound(playerSelection, computerSelection)

        console.log(`Round : ${i}`);
        console.log(`player:${playerSelection},computer:${computerSelection}`);
        console.log(winner);

        if (winner == 'player'){
            playerScore++;
        } else if (winner == 'computer'){
            computerScore++;
        } else {
            continue;
        }
    }

    if (playerScore > computerScore){
        console.log(`You have ${playerScore} and computer has ${computerScore}, you won`);
    } else if (playerScore < computerScore){
        console.log(`You have ${playerScore} and computer has ${computerScore}, you Lost`);
    } else {
        console.log ("It's a Tie game");
    }

 }

 game();