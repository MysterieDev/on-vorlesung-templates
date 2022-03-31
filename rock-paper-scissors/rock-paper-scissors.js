let selectedChoice;
let enemyChoice;

const allPlayerChoices = document.querySelectorAll('.choice');

const choices = ["rock", "paper", "scissors"];

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
    removeSelection();
    imgEl.parentElement.classList.add('selected');
}

function removeSelection(){
    for(let choice of allPlayerChoices){
        choice.parentElement.classList.remove('selected');
    }
}

function enemyTurn(){
    const choiceNumber = getRandomInt(); // 0, 1 oder 2
    enemyChoice = choices[choiceNumber];
}

function getRandomInt(){
    return Math.floor(Math.random()*choices.length); // 2.99999999999999 --> 2
}