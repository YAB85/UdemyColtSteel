"use strict";

/* let elements = [];

for (let i = 0; i < 10; i++) {
  elements[i] = i + 1;
}
console.log(elements);

for (let i = 0; i < 6; i++) {
  console.log("Da ba deeda ba daa");
} */

/* for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log("Foo");
  } else if (i % 4 === 0) {
    console.log("Bar");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("Foo bar");
  }
} */

/* let arr = [];

for (let i = 25; i >= 0; i -= 5) {
  //arr.push(i);
  console.log(i);
}

console.log(arr); */

//const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

/* for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
} */

/* for (let i = 1; i < 3; i++) {
  console.log(`First level --- ${i}`);
  for (let j = 1; j < 4; j++) {
    console.log(`Second level -- ${j}`);
    for (let k = 1; k < 5; k++) {
      console.log(`Third level - ${k}`);
    }
  }
} */
/* let str = "";

for (let i = 0; i < 8; i++) {
  str += "#";
  console.log(str);
}

let num = 0;

while (num < 10) {
  console.log(num);
  num++;
} */

/* let maximum = +prompt("Enter the maximum number!");
while (!maximum) {
  maximum = +prompt("Enter a valid number!");
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = +prompt("Enter your first guess!");

let attemps = 1;

while (+guess !== targetNum) {
  if (guess === "q") break;
  attemps++;
  if (guess > targetNum) {
    guess = prompt("Too high! Enter a new guess:");
  } else {
    guess = prompt("Too low! Enter a new guess:");
  }
}
if (+guess === "q") {
  console.log("Ok, you quit!");
} else {
  console.log(`You got a number by ${attemps} guess`);
} */

//console.log(targetNum);
/* while (maximum) {
  if (!maximum) {
  }
} */

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numbers) {
  console.log(num);
} */

const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60,
};

/* for (let person in testScores) {
  console.log(`${person} : ${testScores[person]}`);
}
 */

let total = 0;
let scores = Object.values(testScores);

for (let score of scores) {
  total += score;
  //total / testScores.length;
}

console.log(total / scores.length);
