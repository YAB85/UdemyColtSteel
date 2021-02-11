//console.log('arrays');

/*******Arrays */

/* var friends = ["Charlie", "Liz", "David", "Mattias"];

friends[0] = "Chuck";
friends[4] = "Amelie";

var color = [];

var color = new Array() //uncommon

//Arrays can hold any type of data

var random_collection = [49, true, "Hermione", null];

//Arrays have a LENGTH property 

var nums = [48, 37, 89, 24];
nums.length; //4  */

/*****Arrays methods */
/* var nums = [48, 37, 89, 24];

nums[4] = 54;

nums = [48, 37, 89, 24, 54];

//OR

nums.push(66);

console.log(nums);

var colors = ["red", "orange", "yellow"];
colors.push("green");

var colors = ["red", "orange", "yellow"];
colors.pop();
//["red", "orange"]

//pop() returns the removed element
var col = colors.pop();  //orange
console.log(col);

var colors = ["red", "orange", "yellow"];
colors.unshift("infrared")
//["infrared", "red", "orange", "yellow"]

var colors = ["red", "orange", "yellow"];
colors.shift();
//["orange", "yellow"]

//shift() also returns the removed element
var col = colors.shift();  //orange

var friends = ["Charlie", "Liz", "David", "Mattias", "Liz"];

friends.indexOf("David"); //2
friends.indexOf("Liz"); //1, not 4 


//returns -1 if the element is not present
friends.indexOf("Hagrid"); // -1

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
//use slice to copy the 2nd and 3d fruits
//specify index where the new array starts(1) and ends(3)
var citrus = fruits.slice(1, 3);

//this does not alter the original fruits array
//citrus contains ['Orange','Lemon']
//fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

//you can also use slice() to copy an entire array
var nums = [1,2,3];
var otherNums = nums.slice();
//both arrays are [1,2,3] */

/*****Arrays Quiz */

/* var numbers = [22, 67, 33, 96, 88];

console.log(numbers[numbers.length]); //-1
 */
/*******Array Iteration */

/****For LOOP */

/* var colors = ["red", "orange", "yellow", "green"];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]); 
}

arr.forEach(someFunction)

var colors = ["red", "orange","yellow", "green"];

colors.forEach(function(color){
//color is a placeholder, call it whatever you want
  console.log(color);
}); */

/*******Exercise forEach */

/* var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var colors = ["red", "orange", "yellow", "green"];

numbers.forEach(function(color) {
  if (color % 3 === 0){
    console.log(color);
  }
}) */

/*let arr = [{id:1, name:'John'}, {id:2, name:'Mark'}, {id:3, name:'Ann'}, {id:4, name:'Rute'}];

arr.forEach(function(item, index) {
  console.log (`ID: ${item.id}, name: ${item.name}; + index: ${index}`);
}) */

/******Array Problem Set */

/*******printReverse*****/

/* var print = [1, 2, 3, 4];
var printReverse = print.reverse();

printReverse.forEach(function (item) {
  console.log(`${item}`);
})
 */
/* function printReverse2(arr) {
  for (var i = arr.length - 1; i >= 0; i--){
    console.log(arr[i]);
  }
}

printReverse2([3, 6, 2, 5]); */

/******isUniform */

/* function isUniform(arr) {
  var first = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if( arr[i] !== first) {
      return false;
    }
  }
  return true;
}


function isUniform(arr) {
  var first = arr[0];
  arr.forEach(function (element) { //stop here because is false
    if(element !== first) {
      return false;
      }
  });
  return true;
} */

/*********sumArray ******/

/* function sumArray (arr) {
  var total = 0;
  arr.forEach(function (element) {
    total += element;
    });
    return total;
}



console.log(sumArray([1, 2, 3])); */

/******max */

/* function max(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(max([1, 2, 3, 5, 10, 9])); */

/* var nums = [54, 65, 77, 34];

nums.forEach(function(num){
  console.log(num);
});

function myForEach (arr, func) {
  //loop through array 
  for(var i = 0; i < arr.length; i++) {
    //call func for each item in array
    func(arr[i]);
  }
}

var colors = ["red", "orange", "yellow"];

//myForEach(colors, function () {console.log(num);})

(function () { 
  console.log("Im a function!");
 })();


Array.prototype.myForEach = function (func) { 
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }
}

var friends = ["charlie", "dave", "maddy", "caitlin"];

friends.myForEach(alert);

 */

/* let movieLine = ["tom", "nancy"];
console.log(movieLine);

movieLine[2] = "pablo";

movieLine.push("oliver");
movieLine.push("eva");
movieLine.push("harry", "hermione");

movieLine.pop();
movieLine.pop();
movieLine.pop();
movieLine.pop();
console.log(movieLine); */

/* const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!
planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");

console.log(planets); */

/* let cats = ["blue", "kitty"];

let dogs = ["rusty", "wyatt"];

let pets = cats.concat(dogs);

console.log(pets); */

let names = "Bobby";

/* let arrName = names.toLowerCase();
let reverse =
  [...names].reverse().charAt(0).toUpperCase + join("").toLowerCase();
let newName = reverse.charAt(0).toUpperCase();

console.log(reverse);
console.log(newName); */

const toTitleCase = (phrase) => {
  return phrase
    .toLowerCase()
    .split(" ")
    .reverse()
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

let result = toTitleCase("maRy hAd a lIttLe LaMb");
console.log(result);

let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

let newColors = colors.slice(2, 5);

console.log(colors, newColors);

let nums = [1, 70, 100, 2500, 9, -12, 0, 34];

console.log(nums.sort());

const gameBoard = [
  ["X", "0", "X"],
  ["0", null, "X"],
  ["0", "", "X"],
];

console.log(gameBoard[1][1]);

const airplaneSeats = [
  ["Ruth", "Anthony", "Stevie"],
  ["Amelia", "Pedro", "Maya"],
  ["Xavier", "Ananya", "Luis"],
  ["Luke", null, "Deniz"],
  ["Rin", "Sakura", "Francisco"],
];

const airplaneSeats2 = [
  ["Ruth", "Anthony", "Stevie"],
  ["Amelia", "Pedro", "Maya"],
  ["Xavier", "Ananya", "Luis"],
  ["Luke", null, "Deniz"],
  ["Rin", "Sakura", "Francisco"],
];
console.log(airplaneSeats[3].splice(1, 1, "Hugo"));
