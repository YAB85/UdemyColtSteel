/* let firstName = prompt("Your first name is ?");
let lastName = prompt("Your last name is ?");
let ageUser = prompt("Your age is ?");
console.log(`Your full name is ${firstName} ${lastName}`);
console.log(`You are ${ageUser} years old`);


//ColtSteel

var firstName = prompt("Your first name is ?");
var lastName = prompt("Your last name is ?");
var ageUser = prompt("Your age is ?");
var fullName = firstName + " " + lastName;
console.log("Your full name is" + fullName);
console.log("You are " + age + " years old"); */

/* let age = prompt("Please, write your full age?");
let calculateAge = age * 365;
alert(`Your age is ${age}. You live in this year is ${calculateAge} days old`); */

/***********Boolean Logic */

/* var x = 99;

x == "99" //true performs type coercion

x === "99" //false strong equile 

var y = null;

y == undefined // true

y === undefined //false

true == "1" // true

0 == false // true

null == undefined // true

NaN == NaN //false */

/********** logical Operators */

// && (and) x<10 && x!== 5 -> false
// || (or) y>9 || x === 5 -> true
// ! (not) !(x === y) -> true

/* var x = 10;
var y = "a";

console.log (y === "b" || x >= 10); // true

var x = 3;
var y = 8;

(!( x == "3"  || x === y )  && !( y != 8  && x <= y ) ); */

/* !"hello World" // false
!!"hello world" // true
!"" //true
!!"" //fasle
!0 //true
!!0 //false */

/***Falsy Values */
//false
//0
//""
//null
//undefined
//NaN

/* var str = " ";
var msg = "haha!";
var isFunny = "false";

console.log (!((str || msg) && isFunny)); // false */

/*******Conditionals */

// if
//if else
//else

/* 1 < 2 //true
2 > 1 // true
1 <= 10 // true
10 >= 1 // true
1 === 1 //true
1 == "1" // true
2 < 3 && 5 > 1 // true
1 > 3 || 9 > 8 // true */

// Get age and convert it to a Number (prompt always returns a String)
//var age = Number(prompt("What is your age?"));

// If age is negative
/* if(age < 0) {
 console.log("Come back once you're out of the womb");
} */

// If age is 21
/* if(age === 21) {
 console.log("Happy 21st Birthday!");
} */

// If age is odd
//(not evenly divisible by two)
/* if(age % 2 !== 0) {
 console.log("Your age is odd!");
} */

// If age is a perfect square
/* if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
} */

/* console.log("hi");

const btn = document.querySelector(".btn_toggle");

btn.addEventListener("click", function () {
  console.log("click");
  const toggle = document.getElementsByTagName("li");
  for (let i = 0; i < toggle.lenght; i++) {
    toggle[i].classList.add("green");
    console.log("li");
  }
}); */

let day = "Friday";

if (day === "Friday" || day === "Saturday" || day === "Sunday") {
  console.log("good day");
} else {
  console.log("work day");
}
