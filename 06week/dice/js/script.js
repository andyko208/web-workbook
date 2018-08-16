var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}
//console.log("Computer chooses: " + computerChoice);
var play = function(userChoice,   computerChoice)
{
  if (userChoice === computerChoice)
  {
    return "You Tied!";
  }
  else if(userChoice === "rock")
  {
    if(computerChoice === "scissors"){
      return "You Won!";
    }
    else if(computerChoice === "paper"){
      return "You Lost!";
    }
  }
  else if(userChoice === "paper")
  {
    if(computerChoice === "rock"){
      return "You Won!";
    }
    else if(computerChoice === "scissors"){
      return "You Lost!"
    }
  }
  else if(userChoice == "scissors")
  {
    if(computerChoice === "paper"){
        return "You Won!";
    }
    else if(computerChoice === "rock"){
      return "You Lost!";
    }
  }
} //closes compare function
document.write("You chose: " + userChoice + "<br>");
document.write("Computer chose: " + computerChoice + "<br>");
document.write(play(userChoice, computerChoice));
