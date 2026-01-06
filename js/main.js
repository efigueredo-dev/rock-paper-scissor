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
    return console.log(computerChoice);
}

// Get the player's choice
function getHumanChoice() {
    let humanChoice = prompt('Please, write your choice (Rock, Paper or Scissor):');
    humanChoice = humanChoice.toLowerCase();

    return console.log(humanChoice);
}
