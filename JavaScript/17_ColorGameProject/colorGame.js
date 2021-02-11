"use strict";
var game = {};

game.init = function () {
    setupModeButton();
    setupSquares();
    reset();
}

//add value to fix problem with mode game and quantity squares in mode game
var numSquares = 6;
//create arr with random color
var colors = [];
//add function pickColor()
var pickedColor;
//selectors for manipulation DOM
var squares = document.querySelectorAll(".square");
//add input to catch element in squares
var colorDisplay = document.getElementById("colorDisplay");
//add information to UX -> inform user for right choise
var messageDisplay = document.querySelector("#message");
//add information about color that we want to find is square
var h1 = document.querySelector("h1");
//button for start new game
var resetButton = document.querySelector("#reset");
//add two button for change level game(easy or hasr)
/* var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn"); */

var modeButtons = document.querySelectorAll(".mode");

game.init();




function setupModeButton () {
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
            });
    }
}

function setupSquares () { 
    for(var i = 0; i < squares.length; i++) {
        //add initial colors to square
        squares[i].style.backgroundColor = colors[i];
    
        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            // grab color of clicked square
            var clickedColor = this.style.background;
        
            //compare color to pickedColor
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play again?";
                changeColors(clickedColor);
                h1.style.background = pickedColor;
            } else {
                //add method to change background color to empty space
                this.style.background = "#232323";
                messageDisplay.textContent = "Try again!";
            }
        });
    }
      
 }

 function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new randon color from array
    pickedColor = pickColor();
    //change color display to match picked Color
    colorDisplay.textContent = pickedColor;
    //change textContent to default value
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i = 0; i < squares.length; i++) {
        //add initial colors to square
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        //change display.style to default value(black)
    }
    h1.style.backgroundColor = "steelblue";
 }; 
 

 resetButton.addEventListener("click", function () {
    reset();
})
   //view the num of color in display
 //colorDisplay.textContent = pickedColor;
 //view -> change colors than user guess the color
function changeColors (color) {
         //loop though all squares
         for(var i = 0; i < squares.length; i++) {
             //change each color to match given color
             squares[i].style.background = color;
         }
}
     //create a random color for user, what he must guess
 
function pickColor () {
         var random =  Math.floor(Math.random() * colors.length);
         return colors[random];
}
     
     //random colors in square to give the use choise to guess
function generateRandomColors (num) {
         //make an array
         var arr = [];
         //add num random colors to array
         for (var i = 0; i < num; i++) {
             arr.push(randomColor());
             //get random color and push to arr
         }
         //return that array
         return arr;
}
     
     //create random colors for square
     
function randomColor () {
         //pick a "red" 0 - 255
         var r = Math.floor(Math.random() * 256)
         //pick a "green" 0 - 255
         var g = Math.floor(Math.random() * 256)
         //pick a "blue" 0 - 255
         var b = Math.floor(Math.random() * 256)
         return `rgb(${r}, ${g}, ${b})`; 
         //return "rgb(" + r + "," + g + "," + b + ")"; 
}
 


//add function to control easyBtn
/* easyBtn.addEventListener("click", function(){
    //add method to change active button to easy game
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    //add function to generate three colors squares
    numSquares = 3
    colors = generateRandomColors(numSquares);
    //add function pickColor()
    pickedColor = pickColor();
    //add function to change UX DOM text in h1
    colorDisplay.textContent = pickedColor;
    //add method to hidden 3 squares for easy game
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

})
 */
//add function to control hardBtn
/* hardBtn.addEventListener("click", function(){
    //add method to change active button to easy game
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    //add function to generate three colors squares
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    //add function pickColor()
    pickedColor = pickColor();
    //add function to change UX DOM text in h1
    colorDisplay.textContent = pickedColor;
    //add method to show 6 squares for hard game
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
        }
    
}) */
//create function that it must reset the guess result

 /* //generate all new colors
 colors = generateRandomColors(numSquares);
 //pick a new randon color from array
 pickedColor = pickColor();
 //change color display to match picked Color
 colorDisplay.textContent = pickedColor;

 messageDisplay.textContent = "";
 //change colors of squares
 for(var i = 0; i <squares.length; i++) {
     //add initial colors to square
     squares[i].style.backgroundColor = colors[i];
 }
 //change textContent to default value
 this.textContent = "New Colors";
 //change display.style to default value(black)
 h1.style.backgroundColor = "steelblue"; */










