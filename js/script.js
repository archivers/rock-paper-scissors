globalThis.roshambo = {stats:{wins:0, ties:0, loses:0}};

function computerPlay() {
  let computerSelection = "";
  let fistSelector = Math.round(Math.random()*2);//randomly generates a number from 0 to 2

  if(fistSelector === 0) {
    computerSelection = "rock";
  } else if (fistSelector === 1) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissor";
  }
  
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection === "rock" && computerSelection === "scissor" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissor" && computerSelection === "paper") {
    console.log("You Won! " + playerSelection + " beats " + computerSelection);
    globalThis.roshambo.stats.wins++;
    updateScore(getWinsDiv());
  } else if(playerSelection === computerSelection) {
    console.log("You Tied! You both picked " + playerSelection);
    globalThis.roshambo.stats.ties++;
    updateScore(getTiesDiv());
  } else {
    console.log("You Lost! " + computerSelection + " beats " + playerSelection);
    globalThis.roshambo.stats.loses++;
    updateScore(getLosesDiv());
  }
}

function game() {
  initializeGame();
}

function initializeGame() {
  globalThis.roshambo.stats.wins = 0;
  globalThis.roshambo.stats.ties = 0;
  globalThis.roshambo.stats.loses = 0;

  let wins = getWinsDiv();
  wins.textContent = "";
  let ties = getTiesDiv();
  ties.textContent = "";
  let loses = getLosesDiv();
  loses.textContent = "";
  winner = getWinnerDiv();
  winner.textContent = "";
}

function getWinsDiv() {
  return document.getElementById("gameWins");
}

function getTiesDiv() {
  return document.getElementById("gameTies");
}

function getLosesDiv() {
  return document.getElementById("gameLoses");
}

function getWinnerDiv() {
  return document.getElementById("winner");
}

function updateScore(div) {
  let temp = div.textContent;
  div.textContent = (+temp)+1;
}

function checkForWinner() {
  return (globalThis.roshambo.stats.wins >= 5 || globalThis.roshambo.stats.loses >= 5);
}

function getWinner() {
  if(checkForWinner()){
    if (globalThis.roshambo.stats.wins >= 5) {
      return "player";}
    else return "skynet";
  }
  else return "";
}

function updateWinner() {
  if (checkForWinner()) {
    const winner = getWinnerDiv();
    winner.textContent = getWinner();

    alert("Thank you for playing! " + winner.textContent.toUpperCase() + " is the winner!");

    initializeGame();
  }
}

const rockButt = document.getElementById("rock");
rockButt.addEventListener('click', ()=>playRound('rock', computerPlay()));

const paperButt = document.getElementById("paper");
paperButt.addEventListener('click', ()=>playRound('paper', computerPlay()));

const scissorButt = document.getElementById("scissor");
scissorButt.addEventListener('click', ()=>playRound('scissor', computerPlay()));

const buttons = document.querySelectorAll("button");
for(let button of buttons) {
  button.addEventListener('click', ()=>updateWinner());
}