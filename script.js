let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => { //To Generate Computer Choice
    const options = ["rock", "paper", "scissors"]
    const randomIdx = Math.floor(Math.random() * 3); //to generate random number between 0 to 2
    return options[randomIdx]
}
const draw = () => { //draw game
    msg.innerText = "Game Was Draw!! Play Again"
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++; //to update User Score
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} Beats ${compChoice}`
        msg.style.backgroundColor = "green";
    } else {
        compScore++; //to update Comp User
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} Beats Your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        draw(); //draw game
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true; //Paper,Scissors
        } else if (userChoice === "paper") {
            userWin = compChoice == "scissors" ? false : true; //Scissors,Rock
        } else {
            userWin = compChoice == "rock" ? false : true; //rock,Scissors
        }
        showWinner(userWin, userChoice, compChoice);
    }

}
choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })

})