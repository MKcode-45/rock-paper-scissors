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
  