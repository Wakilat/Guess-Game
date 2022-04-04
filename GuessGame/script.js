"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector(".submit").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "🚫No Guess";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "✔Correct Guess👏";
    document.querySelector(".secret").textContent = secretNumber;
    // document.querySelector("img").textContent = "/smile.jpeg";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".secret").style.width = "15rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highest-score").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈Guessed Too High!" : "📉Guessed Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😢You lose the game!";
      //   document.querySelector("img").textContent = "/sad.jpeg";
      document.querySelector("body").style.backgroundColor = "rgb(206, 18, 18)";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Guess the secret number😁";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".secret").style.width = "8rem";
  document.querySelector(".secret").textContent = "?";
  document.querySelector(".guess").value = "";
});
