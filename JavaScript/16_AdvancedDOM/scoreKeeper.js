"use strict";
// add way for change h1
var displayPlayer2 = document.querySelector("#displayPlayer2");
var displayPlayer1 = document.querySelector("#displayPlayer1");
//add var for button
var p1Button = document.getElementById("btnPlayer1");
var p2Button = document.getElementById("btnPlayer2");


var resetButton = document.getElementById("reset");

//begins for score
var p1Score = 0;
var p2Score = 0;
//use this for if method
var gameOver = false;
var winningScore = 5;

//

var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

p1Button.addEventListener("click", function () {
    if (!gameOver) {
      p1Score++;
      if (p1Score === winningScore) {
        gameOver = true;
        displayPlayer1.classList.add("winner");
      }
      displayPlayer1.textContent = p1Score;
    }
})

p2Button.addEventListener("click", function () {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      gameOver = true;
      displayPlayer2.classList.add("winner");
    }
    displayPlayer2.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function () {
    reset();
});

numInput.addEventListener("change", function () {
    if(this.value >= 0) {
      winningScore = Number(this.value);
      winningScoreDisplay.textContent = this.value;
      reset();
    } else {
      alert("Change to positive number!!!");
    }
    
})


function reset () {
    p1Score = 0;
    p2Score = 0;
    displayPlayer1.textContent = 0;
    displayPlayer2.textContent = 0;
    displayPlayer1.classList.remove("winner");
    displayPlayer2.classList.remove("winner");
    gameOver = false;
}