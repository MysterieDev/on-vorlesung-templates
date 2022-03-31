let selectedChoice;

const allPlayerChoices = document.querySelectorAll('.choice');

const choices = ["rock", "paper", "scissors"]

const winsAgainstObject = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

function playTheGame(enemyChoice){

    if(!selectedChoice){
        console.log("pls pick a choice")
        return;
    }

    if(winsAgainstObject[selectedChoice] === enemyChoice){
        console.log("you win");
    }
    if(selectedChoice === enemyChoice){
        console.log("you have a draw");
    }
    if(winsAgainstObject[enemyChoice] === selectedChoice){
        console.log("you lost");
    }

}

for(let choice of allPlayerChoices){
    choice.addEventListener('click', selectChoice);
}

function selectChoice(e){
    selectedChoice = e.target.id;
    markSelectedChoice(e.target);
}

function markSelectedChoice(imgEl){
    imgEl.parentElement.classList.add('selected');
}