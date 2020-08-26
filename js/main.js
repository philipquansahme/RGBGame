var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
var colorDisplay = document.getElementById("colordisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.background = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.background = "block";   
    }
});

resetButton.addEventListener("click", function(){
    //generate all new colours
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    //change colors squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    this.textContent = "New Colour";
});

// console.log(colorDisplay.textContent);
// console.log(colorDisplay.innerHTML);
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to sqaures
    squares[i].style.background = colors[i];

    //add click listeners to colors
    squares[i].addEventListener("click", function(){
        // grab color of clicked sqaure
        var clickedColor = this.style.background;

        //compare color to picked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again?";
        }else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

//Change Colour Function
function changeColors(color){
    //looping through all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.background = color;
    }
}

//Pick Colour Function
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//Generate Random Colour Function
function generateRandomColors(num){
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());   
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255    
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}