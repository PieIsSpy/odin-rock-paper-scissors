const pics = [
    "https://minecraft.wiki/images/Cobblestone_JE5_BE3.png?29624",
    "https://minecraft.wiki/images/Paper_JE2_BE2.png?9c3be",
    "https://minecraft.wiki/images/Shears_JE2_BE2.png?163c5",
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/The_Rock_2023.jpg"
];

const choices = ["Rock", "Paper", "Scissors"];
var humanScore = 0;
var computerScore = 0;
var human;

const human_score = document.querySelector("#human-score");
const computer_score = document.querySelector("#computer-score");

human_score.textContent = humanScore;
computer_score.textContent = computerScore;

function setVisualChoice(player, choice) {
    var img;
    var text;
    if (player === "Human") {
        img = document.querySelector("#human-img");
        text = document.querySelector("#human-choice");
    }
    else {
        img = document.querySelector("#computer-img");
        text = document.querySelector("#computer-choice");
    }

    if (choice == 0 && Math.random() < .05) {
        img.src = pics[3];
        text.textContent = "The " + choices[choice];
    }
    else {
        img.src = pics[choice];
        text.textContent = choices[choice];
    }
}

function getComputerChoice() {
    var num = Math.floor(Math.random() * 3);
    setVisualChoice("Computer", num);
    return choices[num];
}

function getHumanChoice(choice) {
    setVisualChoice("Human", choice)
    human =  choices[choice];
    playRound();
}

function getVerdict(humanChoice, computerChoice) {
    if (humanChoice === "Rock") {
        if (computerChoice === "Paper") {
            return 1;
        }
        else if (computerChoice === "Scissors") {
			return 2;
        }
        else {
			return 0;
        }
    }

    if (humanChoice === "Paper") {
        if (computerChoice === "Scissors") {
			return 1;
        }
        else if (computerChoice === "Rock") {
			return 2;
        }
        else {
			return 0;
        }
    }

    if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
			return 1;
        }
        else if (computerChoice === "Paper") {
			return 2;
        }
        else {
			return 0;
        }
    }
}

function checkRound(humanChoice, computerChoice) {
    var verdict = getVerdict(humanChoice, computerChoice);
    var winner = document.querySelector("#winner");
    switch(verdict) {
        case 0:
            winner.textContent = "Draw!";
            break;
        case 1:
            winner.textContent = "Computer Wins!";
            computerScore++;
            break;
        case 2:
            winner.textContent = "Human Wins!";
            humanScore++;
            break;
    }
    human_score.textContent = humanScore;
    computer_score.textContent = computerScore;
}

function playRound() {
    computer = getComputerChoice();
    checkRound(human, computer);
}