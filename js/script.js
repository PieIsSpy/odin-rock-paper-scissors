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

document.getElementById("human-score").innerText = humanScore;
document.getElementById("computer-score").innerText = computerScore;

function setVisualChoice(player, choice) {
    var img;
    var text;
    if (player === "Human") {
        img = "human-img";
        text = "human-choice";
    }
    else {
        img = "computer-img";
        text = "computer-choice";
    }

    document.getElementById(img).src=pics[choice];
    document.getElementById(text).innerText = choices[choice];

    if (choice == 0 && Math.random() < .1) {
        document.getElementById(img).src=pics[3];
        document.getElementById(text).innerText = "The " + choices[choice];
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
    switch(verdict) {
        case 0:
            document.getElementById("winner").innerText = "Draw!"
            break;
        case 1:
            document.getElementById("winner").innerText = "Computer Wins!"
            computerScore++;
            break;
        case 2:
            document.getElementById("winner").innerText = "Human Wins!"
            humanScore++;
            break;
    }
    document.getElementById("human-score").innerText = humanScore;
    document.getElementById("computer-score").innerText = computerScore;
}

function playRound() {
    computer = getComputerChoice();
    checkRound(human, computer);
}