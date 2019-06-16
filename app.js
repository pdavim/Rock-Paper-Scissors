let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_dic = document.querySelector(".score-board");
const result_div = document.querySelector(".result >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumer = Math.floor(Math.random() * 3);
  return choices[randomNumer];
  console.log(randomNumer);
}
// console.log(getComputerChoice())

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML =
    convertToWord(user) + " beats " + convertToWord(computer) + ". You Win!!";
  document.getElementById(user).classList.add("green-glow");
  setTimeout(function() {
    document.getElementById(user).classList.remove("green-glow");
  }, 1000);
}

function losses(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML =
    convertToWord(user) + " loses " + convertToWord(computer) + ". You Lost!!";
  document.getElementById(user).classList.add("red-glow");
  setTimeout(function() {
    document.getElementById(user).classList.remove("red-glow");
  }, 1000);
}

function draw(user, computer) {
  result_div.innerHTML =
    convertToWord(user) + " Equals " + convertToWord(computer) + ". Its draw!!";
  document.getElementById(user).classList.add("grey-glow");
  setTimeout(function() {
    document.getElementById(user).classList.remove("grey-glow");
  }, 1000);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      losses(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
  // console.log('User Choice => ' + userChoice)
  // console.log('Computer Choice => ' + computerChoice)
}

function main() {
  rock_div.addEventListener("click", function() {
    game("r");
    // console.log('you clicked on rock!')
  });

  paper_div.addEventListener("click", function() {
    game("p");
    // console.log('you clickedd on paper!')
  });

  scissor_div.addEventListener("click", function() {
    game("s");
    // console.log('you clicked on scissors!')
  });
}

main();
