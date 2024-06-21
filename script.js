function getComputerChoice() {
    let possible = ["rock","paper","scissors"]
    let randnum = Math.floor(Math.random()*3);
    let compchoice = possible[randnum]
    return compchoice
}

getComputerChoice()