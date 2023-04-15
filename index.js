const resultMessage = document.querySelector(".result-message");
const computerChoiceDisplay = document.querySelector('.computer-choice');
const possibleChoices = document.querySelectorAll('.btn');

let yourScore = document.querySelector(".your-score");
let computerScore = document.querySelector(".computer-score");
let userChoice;

let yourPoints = 0;
let computerPoints = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    getComputerChoice();
    displayWinner();

    if (yourPoints + computerPoints === 5) {
        yourPoints = 0;
        computerPoints = 0;
    }
}));

// functions 
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    switch (randomNumber) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }
    computerChoiceDisplay.innerHTML = `The computer chose ${computerChoice} and you chose ${userChoice}`;
}

function displayWinner() {
    console.log(`Computer choice: ${computerChoice}\nUser Choice: ${userChoice}`);

    if (userChoice === computerChoice) {
        msg = 'It\'s a tie!';
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        msg = 'You won!';
        yourPoints++;
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        msg = 'You won!';
        yourPoints++;
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        msg = 'You won!';
        yourPoints++
    }
    else {
        msg = 'You lost...';
        computerPoints++;
    }
    resultMessage.innerHTML = msg;
    yourScore.innerHTML = yourPoints;
    computerScore.innerHTML = computerPoints;
}

