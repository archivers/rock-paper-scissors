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

function hoomanPlay() {
  let hoomanSelection = prompt("Rock, Paper, or Scissor");
  hoomanSelection = hoomanSelection.toLowerCase();

  if(hoomanSelection === "rock" || hoomanSelection === "paper" || hoomanSelection === "scissor") {
    return hoomanSelection;
  } else {
    alert("DETECTED PEBKAC, PLEASE ENTER A CORRECT INPUT");
    return hoomanPlay();
  }
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection === "rock" && computerSelection === "scissor" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissor" && computerSelection === "paper") {
    console.log("You Won! " + playerSelection + " beats " + computerSelection);
    globalThis.roshambo.stats.wins++;
  } else if(playerSelection === computerSelection) {
    console.log("You Tied! You both picked " + playerSelection);
    globalThis.roshambo.stats.ties++;
  } else {
    console.log("You Lost! " + computerSelection + " beats " + playerSelection);
    globalThis.roshambo.stats.loses++;
  }
}

function game() {
  initializeGame();
  
  for (let i = 0; i < 5; i++) {
    playRound(hoomanPlay(),computerPlay());
    document.getElementById("gameWins").textContent = globalThis.roshambo.stats.wins;
    document.getElementById("gameTies").textContent = globalThis.roshambo.stats.ties;
    document.getElementById("gameLoses").textContent = globalThis.roshambo.stats.loses;
   
  }

  if(globalThis.roshambo.stats.wins > globalThis.roshambo.stats.loses) {
      alert("You beat the robot, hail human superiority");
    } else if (globalThis.roshambo.stats.loses > globalThis.roshambo.stats.wins) {
      alert("You lost, skynet has taken over the world");
    } else{
      alert("You tied, shame on you");
    }
}

function initializeGame() {
  globalThis.roshambo.stats.wins = 0;
  globalThis.roshambo.stats.ties = 0;
  globalThis.roshambo.stats.loses = 0;
}
