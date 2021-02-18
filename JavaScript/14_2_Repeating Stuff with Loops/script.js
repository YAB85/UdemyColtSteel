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
let str = "";

for (let i = 0; i < 8; i++) {
  str += "#";
  console.log(str);
}

let num = 0;

while (num < 10) {
  console.log(num);
  num++;
}
