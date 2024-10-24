//Created function to get computer choice
//Function will choose three random numbers which are equal to rock paper or scissors
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
    if(computerChoice === 0){
      return "rock";
    }
    if(computerChoice === 1){
      return "paper";
    }
   if(computerChoice === 2){
      return "scissors";
    }
}
  
//A function that takes the human choice
function getHumanChoice(){
    let result = prompt("To play, choose rock, paper or scissors").toLocaleLowerCase();
    return result;
}

//Game play function
function playGame(){

    //The two variables initialize human and computer scores

    let humanScore = 0;
    let computerScore = 0;

    //Function runs a single round of the game
    
 function playRound(humanChoice, computerChoice) {
  
   var win = `You win! ${humanChoice} beats ${computerChoice}`;
   var lose = `You lose! ${computerChoice} beats ${humanChoice}`;

   //The conditions determine the winner of each round
   //Score is increased depending on the winner
   
   if (humanChoice === "rock" && computerChoice === "paper"){
     ++computerScore;
     console.log(lose);
     } else if (humanChoice === "rock" && computerChoice === "scissors"){
     ++humanScore;
     console.log(win);
     } else if (humanChoice === "paper" && computerChoice === "scissors"){
     ++computerScore;
     console.log(lose);
     } else if (humanChoice === "paper" && computerChoice === "rock"){
     ++humanScore;
     console.log(win);
     } else if (humanChoice === "scissors" && computerChoice === "rock"){
     ++computerScore;
     console.log(lose);
     } else if (humanChoice === "scissors" && computerChoice === "paper"){
     ++humanScore;
     console.log(win);
     } else {
     console.log("It's a tie")
     }

     //Prints the score to the console after each round
     console.log(`You: ${humanScore} `+ ` Computer: ${computerScore}`);
    }

// playRound function is called five times to play five rounds
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

 //champion function anounces the winner after all five rounds are played
 //It compares the two score variables to determine the winner

    function champion(){
        if (humanScore > computerScore){
            console.log("WELL DONE YOU WIN!");
        } else if(humanScore === computerScore){
            console.log("It's a tie reload to play again.")
        }
        else {console.log("SORRY, YOU LOOSE.");}
    }
   
    champion();
 }
 
 playGame();
