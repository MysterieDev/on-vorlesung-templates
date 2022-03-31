let selectedChoice;

const allPlayerChoices = document.querySelectorAll('.choice');



const choices = ["rock", "paper", "scissors"]

const winsAgainstObject = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

function playTheGame(enemyChoice){

    if(winsAgainstObject[choice] === enemyChoice){
        console.log("you win");
    }
    if(choice === enemyChoice){
        console.log("you have a draw");
    }
    if(winsAgainstObject[enemyChoice] === choice){
        console.log("you lost");
    }

}

for(let choice of allPlayerChoices){
    choice.addEventListener('click', selectChoice);
}

function selectChoice(e){
    selectedChoice = e.target.id;
    console.log(selectedChoice)
}