const choices = ['rock', 'paper', 'scissors'];
const winners = [];

// plays game
function game() {
    for(let i = 1; i <= 5; i++) {
        playRound(i);
    }
    logWins();
}

//plays a round of rock, paper, scissors
function playRound(round) {
    const userSelection = userChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(userSelection, computerSelection);
    winners.push(winner);
    logRound(userSelection, computerSelection, winner, round);
}

// gets input from user
function userChoice() {
    let input = prompt('What is your choice?');

    while (input == null) {
        input = prompt('What is your choice?');
    }
    input = input.toLowerCase();
    
    let check = validateInput(input);

    while (check == false) {
       input = prompt('Spelling needs to be exact. Capitalization does not matter.');
       input.toLowerCase();

       while (input == null) {
        input = prompt('Type Rock, Paper, or Scissors');
       }
    }
    return input;
}

// gets input from computer
function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
    if (choiceP == choiceC) {
        return 'Tie';
    } else if (
        (choiceP === 'rock' && choiceC == 'scissors') || 
        (choiceP === 'paper' && choiceC == 'rock') ||
        (choiceP === 'scissors' && choiceC == 'paper')
    ) {
        return 'Player';
    } else {
        return 'Computer';
    }
}

function logWins() {
    let playerWins = winners.filter(item => item == 'Player').length;
    let computerWins = winners.filter(item => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    console.log('Results:')
    console.log('Player Wins: ', playerWins);
    console.log('Computer Wins: ', computerWins);
    console.log('Ties: ', ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round:', round)
    console.log('Player Chose:', playerChoice);
    console.log('Computer Chose:', computerChoice);
    console.log(winner, 'Won the Round');
    console.log('------------------------');
}

game();



