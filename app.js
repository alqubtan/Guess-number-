"use strict";

var message = document.querySelector(".message");

var setMessage = function (msg) {
  message.textContent = msg;
};

var guess = document.querySelector(".guess");

var checkBtn = document.querySelector(".check");

var secretNumber = Math.trunc(Math.random() * 20 + 1);

var hiddenNumber = document.querySelector(".number");

var score = 20;

var scoreResult = document.querySelector(".score");

var highScore = 0;
var hiscoreResult = document.querySelector(".highscore");

scoreResult.textContent = score;

checkBtn.addEventListener("click", function () {
  var guessNumber = Number(guess.value);

  if (!guessNumber) {
    setMessage("🔔 Enter a valid number");
  } else {
    if (guessNumber == secretNumber) {
      setMessage("🏆 Correct Number!");
      document.querySelector("body").style.backgroundColor = "#5BB318";
      document.querySelector(".number").style.width = "30rem";
      hiddenNumber = document.querySelector(".number").textContent =
        secretNumber;

      if (score > highScore) {
        highScore = score;
        hiscoreResult.textContent = highScore;
      }
    } else if (guessNumber !== secretNumber) {
      if (score > 1) {
        setMessage(guessNumber > secretNumber ? "📉 Too High" : "📈 To Low");
        score--;
        scoreResult.textContent = score;
      } else {
        scoreResult.textContent = 0;
        setMessage("🧩 You lost the game");
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // reset input
  guess.value = "";
  // reset secret number
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  // reset secret number;
  hiddenNumber = document.querySelector(".number").textContent = "?";

  // reset background
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "12rem";

  score = 20;
  scoreResult.textContent = score;
  setMessage("Start guessing...");
});
