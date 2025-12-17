const choices = ["Rock", "Paper", "Scissors"];
var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    var num = Math.floor(Math.random() * 3);
    return choices[num];
}

function getHumanChoice() {
    for (let i = 0; i < 3; i++) {
        console.log((i+1) + " - " + choices[i]);
    }
    var num = prompt("Choose a number");

    return choices[num-1];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock") {
        if (computerChoice === "Paper") {
            console.log("Computer Wins!");
            computerScore++;
        }
        else if (computerChoice === "Scissors") {
            console.log("Human Wins!")
            humanScore++;
        }
        else {
            console.log("Draw!")
        }
    }
    if (humanChoice === "Paper") {
        if (computerChoice === "Scissors") {
            console.log("Computer Wins!");
            computerScore++;
        }
        else if (computerChoice === "Rock") {
            console.log("Human Wins!")
            humanScore++;
        }
        else {
            console.log("Draw!")
        }
    }
    if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
            console.log("Computer Wins!");
            computerScore++;
        }
        else if (computerChoice === "Paper") {
            console.log("Human Wins!")
            humanScore++;
        }
        else {
            console.log("Draw!")
        }
    }
}

do {
    human = getHumanChoice();
    computer = getComputerChoice();

    if (typeof human != "undefined") {
        console.log("Human: " + human);
        console.log("Computer: " + computer);
        playRound(human, computer);

        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
    }
} while (typeof human === "string");