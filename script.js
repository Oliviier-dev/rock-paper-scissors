let choices = ['rock', 'paper', 'scissor']
let btns = document.querySelectorAll('.btn');
let choice;
let buttons = document.querySelector('.buttons');

// let playerSelection = prompt("Your choice: rock, paper, scissor").toLowerCase();
// let computerSelection = choices[(Math.floor(Math.random() * 3))];
let computerSelection;

let outputDiv = document.createElement('div');
outputDiv.id = 'output';

// // playerVictory = `You Won! ${playerSelection} beats ${computerSelection}`;
// // computerVictory = `You lose! ${computerSelection} beats ${playerSelection}`;

let winnerMessageArea = document.createElement('p');
outputDiv.appendChild(winnerMessageArea);


// // function getComputerChoice (){
// //     return choices[(Math.floor(Math.random() * 3))];
// // }

// function play(choice){
//     let playerSelection = choice;
//     let computerSelection = choices[(Math.floor(Math.random() * 3))];
//     console.log(playRound(playerSelection, computerSelection));

// }

function playRound (playerSelection){
    computerSelection = choices[(Math.floor(Math.random() * 3))];
    buttons.appendChild(outputDiv);

    if (playerSelection == 'rock' && computerSelection == 'scissor'){
        //console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
        outputDiv.innerHTML = `You Won! ${playerSelection} beats ${computerSelection}`;
        return 'player';
    } else if (playerSelection == 'scissor' && computerSelection == 'paper'){
        //console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
        outputDiv.innerHTML = `You Won! ${playerSelection} beats ${computerSelection}`;
        return 'player';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        //console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
        outputDiv.innerHTML = `You Won! ${playerSelection} beats ${computerSelection}`;
        return 'player';
    } else if (playerSelection == computerSelection){
        //console.log("It's a Tie");
        outputDiv.innerHTML = `It's a tie! ${computerSelection} vs ${playerSelection}`;
        return "It's a Tie"
    } else {
        //console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        outputDiv.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}`;
        return 'computer';
    }
}

let result;
let playerScore = 0;
let computerScore = 0;
let plays = 0;

 function game (playerChoice) {

    let maxPlays = 5;

    if (maxPlays > plays){
        result = playRound(playerChoice);
        if (result == "player"){
            playerScore++;
            plays++;
            winnerMessageArea.textContent = `player has: ${playerScore} and computer has: ${computerScore}`;
        } else if (result == "computer"){
            computerScore++;
            plays++;
        } else{
            plays++;
        }

        if (maxPlays == plays){
            winnerMessageArea.textContent=(`You have ${playerScore} and computer has ${computerScore}`);
            outputDiv.appendChild(winnerMessageArea);
        }
     }
    
 }

btns.forEach(btn =>{
    let playerSelection = btn.classList.item(0);
    btn.addEventListener("click", () => game(playerSelection));
})
