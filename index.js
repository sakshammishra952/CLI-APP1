var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("Whats your name? ");
console.log("Welcome " + userName + ", to DO YOU KNOW Saksham?");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You were right!");
    score++;
  }
  else {
    console.log("No, correct answer is: " + answer);
    score--;
  }
  console.log("Current score: " + score);
  console.log("----------");
}
{
  var questionOne =
  {
    question: "In which city is my college? ",
    answer: "Guna"
  }
  var questionTwo =
  {
    question: "Which color I wear the most? ",
    answer: "Black"
  }
  var questionThree =
  {
    question: "Which company's phone do I own? ",
    answer: "Realme"
  }
  var questionFour =
  {
    question: "What is the name of my favourite film? ",
    answer: "Fight Club"
  }
  var questionFive =
  {
    question: "What is the name of my favourite director? ",
    answer: "David Fincher"
  }
}
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}
console.log("Your final score is: " + score);