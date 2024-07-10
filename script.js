function getComputerChoice() {
    let possible = ["rock", "paper", "scissors"]
    let randnum = Math.floor(Math.random() * 3);
    // let compchoice = possible[randnum]
    // return compchoice
    return randnum
}

function getHumanChoice() {
    let humanchoice = prompt("Please select rock, paper, or scissors")
    return humanchoice
}

function playRound(humanchoice, compchoice) {
    humanchoice = humanchoice.toLowerCase();
    let humanvalue = 3;

    if (humanchoice == "rock")
        humanvalue = 0;
    else if (humanchoice == "paper")
        humanvalue = 1;
    else if (humanchoice == "scissors")
        humanvalue = 2;

    let compobj = "rock";
    if (compchoice == 1)
        compobj = "paper";
    else if (compchoice == 2)
        compobj = "scissors";


    let result = 0
    let message = ""
    if (humanvalue == 3) {
        result = 3
        message = "Please choose rock, paper, or scissors."
    }
    else if (humanvalue == compchoice) {
        message = "The result is a draw!"
    }
    else if (humanvalue + 1 == compchoice || humanvalue - 2 == compchoice) {
        result = 1
        message = "You lose! " + compobj[0].toUpperCase() + compobj.slice(1) + " beats " + humanchoice[0].toUpperCase() + humanchoice.slice(1) + "."
    }
    else {
        result = 2
        message = "You win! " + humanchoice[0].toUpperCase() + humanchoice.slice(1) + " beats " + compobj[0].toUpperCase() + compobj.slice(1) + "."
    }
    return [result, message];
}

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
//     for (let round = 1; round <= 5; round++) {
//         let humanchoice = getHumanChoice()
//         let compchoice = getComputerChoice()
//         let result = playRound(humanchoice,compchoice)
//         if (result == 1) {
//             computerScore += 1
//         }
//         else if (result == 2) {
//             humanScore += 1
//         }
//         else if (result == 3) {
//             round -= 1
//         }
//         console.log("Your score is "+ humanScore)
//         console.log("The computer's score is "+ computerScore)
//     }

// }
let humanScore = 0;
let computerScore = 0;
let round = 0;
const resultsContainer = document.querySelector("#resultsContainer");
const resultsMessage = document.createElement("div");
const scoreCounter = document.createElement("div");
resultsMessage.classList.add("resultsMessage");
scoreCounter.classList.add("scoreCounter")
resultsContainer.appendChild(resultsMessage);
resultsContainer.appendChild(scoreCounter)

const buttons = document.querySelectorAll("button")


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.id
        round += 1;

        if (round <= 5) {

            let compchoice = getComputerChoice()
            const [result, message] = playRound(playerSelection, compchoice)

            resultsMessage.textContent = message;
            if (result == 1) {
                computerScore += 1
            }
            else if (result == 2) {
                humanScore += 1
            }
            else if (result == 3) {
                round -= 1
            }
            scoreCounter.textContent = "The score is " + humanScore + " to " + computerScore + "."
        }
        else {
            if (humanScore > computerScore) {
                resultsMessage.textContent = "You are the winner!"
            }
            else if (humanScore < computerScore) {
                resultsMessage.textContent = "The computer is the winner!";

            }
            else {
            resultsMessage.textContent = "The match is a draw!";
            }
            round = 0;
            computerScore = 0;
            humanScore = 0;
        }

    });
});
// playGame()