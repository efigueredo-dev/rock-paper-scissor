// Declare global variables
let humanScore = 0;
let computerScore = 0;

// Round's logic
function playRound(humanChoice, computerChoice) {
    console.log('Player picked: ', humanChoice);
    console.log('Computer picked: ', computerChoice);

    if (humanChoice === computerChoice) {
        console.log("This round it's a tie");
    } else if ((humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissor" && computerChoice === "paper")) {
        console.log("YOU WIN! ", humanChoice, " beats ", computerChoice);
        humanScore += 1;
    } else {
        console.log("YOU LOSE! ", computerChoice, " beats ", humanChoice);
        computerScore += 1;
    }

    console.log("Player Score: ", humanScore);
    console.log("Computer Score: ", computerScore);
}

// Get the computer's choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissor';
            break;

        default:
            break;
    }
    return computerChoice;
}

// Get the player's choice
function getHumanChoice() {
    let humanChoice = prompt('Please, write your choice (Rock, Paper or Scissor):');
    humanChoice = humanChoice.toLowerCase();

    return humanChoice;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
