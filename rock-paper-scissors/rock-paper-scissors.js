let selectedChoice;
let enemyChoice;

const allPlayerChoices = document.querySelectorAll('.choice');
const enemy = document.querySelector('#enemy');
const btn = document.querySelector('#startButton');
const resultMessage = document.querySelector('#resultMessage');

const scoreWon = document.querySelector('#won');
const scoreDraw = document.querySelector('#draw');
const scoreLost = document.querySelector('#lost');

const choices = ["rock", "paper", "scissors"];

const winsAgainstObject = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

const scoreboard ={
    won: 0,
    draw: 0,
    lost: 0
}

function playTheGame(){

    if(!selectedChoice){
        alert("pls pick a choice")
        return;
    }

    enemyTurn();

    if(winsAgainstObject[selectedChoice] === enemyChoice){
        setMessage('YOU WIN');
        scoreboard.won = scoreboard.won + 1
    }
    if(selectedChoice === enemyChoice){
        setMessage('DRAW');
        scoreboard.draw = scoreboard.draw + 1
    }
    if(winsAgainstObject[enemyChoice] === selectedChoice){
        setMessage('YOU LOST');
        scoreboard.lost = scoreboard.lost + 1
    }

    setScoreboard();
}

function setMessage(msg){
    resultMessage.innerHTML = msg
}

function setScoreboard(){
    scoreWon.innerHTML = scoreboard.won;
    scoreDraw.innerHTML = scoreboard.draw;
    scoreLost.innerHTML = scoreboard.lost;
}

for(let choice of allPlayerChoices){
    choice.addEventListener('click', selectChoice);
}

function selectChoice(e){
    selectedChoice = e.target.id;
    markSelectedChoice(e.target);
    activateStartButton();
}

function activateStartButton(){
    btn.disabled = false;
    btn.textContent = 'Start game';
    btn.onclick = playTheGame; //btn.addEventListener('click, playTheGame)
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
    enemy.src = enemyChoice + '.png';
}

function getRandomInt(){
    return Math.floor(Math.random()*choices.length); // 2.99999999999999 --> 2
}