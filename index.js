var readlineSync = require("readline-sync");
var questionOne = {
  question: "What is Phoebe’s surname \n a. buffay \t b. Geller  \n c.tribbiani  \t d. Green \n? ",
  answer: "a"
};
var questionTwo = {
  question: " What is the name of the café? \n a.Central Perk  \t b.Paulo cafe  \n c. Baali's  \t d. Mocha \n",
  answer: "a"
};
var questionThree = {
  question: " In which city is Friends set? \n a.jakarta  \t b.new york  \n c.delhi  \t d. tokyo \n",
  answer: "b"
};
var questionFour = {
  question: "Which character has a twin sister called Ursula? \n a. phoebe \t b. Monica  \n c.Ross  \t d. Joey \n? ",
  answer: "a"
};
var questionFive = {
  question: "Which character shares an apartment with Chandler Bing in season one?\n a.Ross  \t b.Joey \n c.russ \t d. gunther \n",
  answer: "b"
};
var questionSix = {
  question: "Which character was very overweight as a teenager?\n a.monica  \t b. rachel  \n c. phoebe \t d.chandler  \n",
  answer: "a"
};
var questionSeven = {
  question: "Which character has an ex-wife called Carol?\n a.Ross \t b. Chandler  \n c.Joey  \t d.Paolo  \n",
  answer: "a"
};
var questionEight = {
  question: "What is the name of Ross’s second wife?\n a. Carol \t b.Emily  \n c. Rachel \t d.Julie  \n",
  answer: "b"
};
var questionNine = {
  question: "What is the name of Ross and Carol’s baby? \n a.Ben  \t b.Jack  \n c.Judy  \t d.George  \n",
  answer: "a"
};
var questionTen = {
  question: "What is the name of Phoebe’s brother? \n a. jack  \t b.Frank  \n c.Alistor  \t d. Peter \n",
  answer: "b"
};
var score = 0;
var highScore = 10;
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer == answer) {
    console.log("you are right");
    score = score + 1;
  } else {
    console.log("you are wrong")
  }
}

play(questionOne.question, questionOne.answer);
play(questionTwo.question, questionTwo.answer);
play(questionThree.question, questionThree.answer);
play(questionFour.question, questionFour.answer);
play(questionFive.question, questionFive.answer);
play(questionSix.question, questionSix.answer);
play(questionSeven.question, questionSeven.answer);
play(questionEight.question, questionEight.answer);
play(questionNine.question, questionNine.answer);
play(questionTen.question, questionTen.answer);
console.log("your final score is " + score);
if (score < highScore) {
  console.log("your score is " + score + " and highscorer is Shreya who scored " + highScore + "If you have highest score...Please send me screenshot and I will update your name");
} else {
  console.log("Congratulations!!!!you are high scorer.");
}