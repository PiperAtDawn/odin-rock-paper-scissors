const choices = ["Rock", "Paper", "Scissors"];
let score = [0, 0]; // Player, Computer
let round = 1;

const roundNumber = document.querySelector("#round");
const scoreText = document.querySelector("#score");
const roundResults = document.querySelector("#round-results");
const playButtons = document.querySelectorAll(".play-button");
const letsPlay = document.querySelector("#letsPlay");
const resetButton = document.querySelector("#reset-button");

const finish = () => {
    playButtons.forEach(button => {
        button.disabled = true;
    });
    if (score[0] > score[1]) {
        letsPlay.textContent = "Congradulations! You won!";
    }
    else letsPlay.textContent = "The computer won! Better luck next time!";
    resetButton.textContent = "Play again";
}

const reset = () => {
    resetButton.textContent = "Reset";
    round = 1;
    score = [0, 0];
    letsPlay.textContent = "Let's play!";
    roundNumber.textContent = "Round 1";
    playButtons.forEach(button => {
        button.disabled = false;
    });
    roundResults.textContent = "None";
    scoreText.textContent = "None";
}

resetButton.addEventListener ("click", reset);

const updateScore = (winner) => {
    score[winner]++;
    scoreText.textContent = `Player: ${score[0]}, Computer: ${score[1]}`;
    round++;
    if (score[0] === 5 || score[1] === 5) roundNumber.textContent = "Game over!";
    else roundNumber.textContent = `Round ${round}`;
}

const computerPlay = () => {
    return (choices[Math.floor(Math.random() * 3)]);
}

// Returns 0 if it's a tie, 1 if player won, 2 if computer won
const compareChoices = (choice1, choice2) => {
    const index1 = choices.indexOf(choice1);
    const index2 = choices.indexOf(choice2);
    if (index1 > index2) return 1;
    else {
        if (index1 < index2) return 2;
        else return 0;
    }
}

const playRound = (playerSelection) => {
    const computerSelection = computerPlay();
    const winner = compareChoices(playerSelection, computerSelection);
    switch (winner) {
        case 0:
            roundResults.textContent = "Tie! Try again!";
            break;
        case 1:
            roundResults.textContent = `Player won! ${playerSelection} beats ${computerSelection}!`;
            updateScore(0);
            break;
        case 2:
            roundResults.textContent = `Computer won! ${computerSelection} beats ${playerSelection}!`;
            updateScore(1);
            break;
        default:
            break;
    }
    if (score[0] === 5 || score[1] === 5) finish();
}

playButtons.forEach(button => {
    button.addEventListener("click", () => playRound(button.textContent));
});