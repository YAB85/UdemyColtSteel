"use strict";

/* let elements = [];

for (let i = 0; i < 10; i++) {
  elements[i] = i + 1;
}
console.log(elements);

for (let i = 0; i < 6; i++) {
  console.log("Da ba deeda ba daa");
} */

for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log("Foo");
  } else if (i % 4 === 0) {
    console.log("Bar");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("Foo bar");
  }
}
