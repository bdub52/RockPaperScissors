const choices = ['rock', 'paper', 'scissors'];
const winners = [];
let round = 0;

//plays game
// function game() {
//     for(let i = 1; i <= 5; i++) {
//         playRound(i);
//     }
//     logWins();
// }


// plays a round of rock, paper, scissors
function playRound(playerChoice) {
    const userSelection = playerChoice;
    console.log(userSelection);
    
    const computerSelection = computerChoice();
    console.log(computerSelection);
    
    const winner = checkWinner(userSelection, computerSelection);
    console.log(winner);

    winners.push(winner);
    console.log(winners);

    logRound(userSelection, computerSelection, winner);

    let playerWins = winners.filter(item => item == 'Player wins!').length;
    let computerWins = winners.filter(item => item == 'Computer wins!').length;
    let ties = winners.filter((item) => item == 'Tie').length;

    // perhaps do a validation in same method when a cpu/player gets to 5 points.

    if (playerWins == 5) {
        console.log('Player got to 5 points first! They win.');
    }
    if (computerWins == 5) {
        console.log('Computer got to 5 points first! It wins.');
    }
    if (playerWins == 4 && computerWins == 4) {
        console.log('');
    }

};

// gets input from computer
function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
};

function validateInput(choice) {
    return choices.includes(choice);
};

function checkWinner(playerChoice, computerChoice) {

    const tie = `Tie`;
    const playerWins = `Player wins!`;
    const computerWins = `Computer wins!`;
    
    if (playerChoice === computerChoice) {
        return tie;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return playerWins;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return playerWins;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return playerWins;
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        return computerWins;
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        return computerWins;
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        return computerWins;
    }


};

const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', () => playRound('rock'));

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', () => playRound('paper'));

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', () => playRound('scissors'));



function logWins() {
    let playerWins = winners.filter(item => item == 'Player wins!').length;
    let computerWins = winners.filter(item => item == 'Computer wins!').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    console.log('Results:')
    console.log('Player Wins: ', playerWins);
    console.log('Computer Wins: ', computerWins);
    console.log('Ties: ', ties);
};

function logRound(playerChoice, computerChoice, winner) {
    round ++;
    const getParent = document.getElementById('bigContainer');
    let isBoxScoreThere = document.getElementById('boxScore');
    let computerWins = winners.filter(item => item == 'Computer wins!').length;
    let playerWins = winners.filter(item => item == 'Player Wins!').length;
    let ties = winners.filter(item => item == 'Tie');

    // check if the box score elements exist, and if so, just update values.
    if (!isBoxScoreThere)
    {
        let boxScore = `
        <div id="boxScore">
          <div id="round">Round: ${round}</div>
          <div id="playerPick">Player chose: ${playerChoice}</div>
          <div id="compPick">Computer chose: ${computerChoice}</div>
          <div id="winner">Winner: ${winner}</div>
          <div id="separator">-------------------------------</div>
          <div id="playerPoints">Player points: ${playerWins} </div>
          <div id="computerPoints">Computer points: ${computerWins}</div>
          <div id="ties">Ties: ${ties}</div>
        </div>
    `
        getParent.insertAdjacentHTML('beforeend', boxScore);
    }
    else 
    {
        updateScore(round, playerChoice, computerChoice, winner);
    }

};

function updateScore(round, playerPick, cpuPick, winner) {
    let computerWins = winners.filter(item => item == 'Computer wins!').length;
    let playerWins = winners.filter(item => item == 'Player wins!').length;
    let ties = winners.filter(item => item == 'Tie').length;

    document.getElementById('round').textContent = `Round: ${round}`;
    document.getElementById('playerPick').textContent = `Player chose: ${playerPick}`;
    document.getElementById('compPick').textContent = `Computer chose: ${cpuPick}`;
    document.getElementById('winner').textContent = `Winner: ${winner}`;
    document.getElementById('playerPoints').textContent =  `Player points: ${playerWins}`;
    document.getElementById('computerPoints').textContent = `Computer points: ${computerWins}`;
    document.getElementById('ties').textContent = `Ties: ${ties}`;

    if (playerWins == 5) 
    {
        alert('Player wins the game!');
    }
    if (computerWins == 5)
    {
        alert('Computer wins the game!');
    }

};

// game();



