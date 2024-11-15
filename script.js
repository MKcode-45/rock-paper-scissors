function getComputerChoice(){
  const computerOptions = ["rock", "paper", "scissors"];
  return computerOptions[Math.floor(Math.random()*computerOptions.length)];
}

//The two variables initialize human and computer scores

  let humanScore = 0;
  let computerScore = 0;

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    
    button.addEventListener("click", (event) => {
    let humanChoice = event.target.id;

    function playRound(humanChoice, computerChoice) {

      if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock"){
        ++computerScore;
      } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){
        ++humanScore;
      } else {
          computerScore;
          humanScore;
        }

        const choice = document.querySelector("#choice");
        choice.firstElementChild.textContent = `You chose ${humanChoice}, the computer chose ${computerChoice}.`;
        
        const gameScore = document.querySelector("#scores");
        gameScore.firstElementChild.textContent = `Player: ${humanScore}`;
        gameScore.lastElementChild.textContent = `Computer: ${computerScore}`;

        const gameWinner = document.querySelector(".final-score");

        if(humanScore === 5){
          gameWinner.firstElementChild.textContent = "Congragulations you win!";
        } 

        if(computerScore === 5){
          gameWinner.firstElementChild.textContent = "Sorry you lose.";      
        }
    }

       if(computerScore === 5 || humanScore === 5){
        return;      
        }

       playRound(humanChoice, getComputerChoice());
    });
  });

