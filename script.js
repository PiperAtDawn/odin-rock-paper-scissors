const choices = ["Rock", "Paper", "Scissors"];

const computerPlay = () => {
    return (choices[Math.floor(Math.random() * 3)]);
}

const compareChoices = (choice1, choice2) => {
    const index1 = choices.indexOf(choice1);
    const index2 = choices.indexOf(choice2);
    if (index1 > index2) return 1;
    else {
        if (index1 < index2) return 2;
        else return 0;
    }
}

const chooseWinner = (playerSelection, computerSelection) => {
    const winner = compareChoices(playerSelection, computerSelection);
    switch (winner) {
        case 0:
            console.log(`Tie! You both selected ${playerSelection}!`);
            break;
        case 1:
            console.log(`Player wins! ${playerSelection} beats ${computerSelection}!`)
            break;
        case 2:
            console.log(`Computer wins! ${computerSelection} beats ${playerSelection}!`)
            break;
        default:
            console.log("Sorry, something went wrong!");
    }
    return winner;
}

const playRound = () => {
    let playerSelection = "";
    
    while (!choices.includes(playerSelection)) {
        playerSelection = prompt("Please choose Rock, Paper or Scissors!");
        playerSelection.toLowerCase();
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1);
        if (!choices.includes(playerSelection)) {
            console.log("Incorrect value!");
        }
    }
    const computerSelection = computerPlay();
    return chooseWinner(playerSelection, computerSelection);
}

const game = () => {
    let tally = [0, 0, 0];
    for (i = 0; i < 5; i++){
        tally[playRound()]++;
    }
    console.log(`Ties: ${tally[0]}. Player: ${tally[1]}. Computer: ${tally[2]}`);
    if (tally[1]>tally[2]) {
        console.log("Player wins!");
    }
    else if (tally[1]<tally[2]) {
            console.log("Computer wins!")
        }
        else {
            console.log("It's a tie!");
        }
}

game();