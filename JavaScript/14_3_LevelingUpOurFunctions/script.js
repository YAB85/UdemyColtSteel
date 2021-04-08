/*********Function scope ******** */
/* var name = "John";

function getName() {
  name = "Nick";
  return name;
}
console.log(name);

console.log(getName(name));
console.log(name); */

/* ******* Block scope******** */
/* let radius = 8;

if (radius > 0) {
  const PI = 3.14;
  var msg = "Hiii!";
}

console.log(radius);

console.log(msg); */

/***********Lexical Scope******** */

/* function bankRobbery() {
  const heroes = ["Spiderman", "Wolverine", "Black Panther"];
  function cryForHelp() {
    for (let hero of heroes) {
      console.log(`Please help us, ${hero.toUpperCase()}`);
    }
  }
  cryForHelp();
}

console.log(bankRobbery()); */

/* ********** Function expressions ************** */

/* function add(x, y) {
  return x + y;
}

let num1 = add(5, 6);
let num2 = add(8, 10);
console.log(num1);
console.log(num2);

const square = function (x, y) {
  return x * y;
};

console.log(square(num1, num2)); */

/* const square = (num) => {
  return num * num;
};

console.log(square(4));
console.log(square(3)); */

/* ******Function higher order functions***** */

/* function callTwice(func) {
  func();
  func();
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callTwice(rollDie);
 */

/* function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log(`Congrats, I am a good fucntion!`);
      console.log(`You win a million dollars`);
    };
  } else {
    return function () {
      alert(`You have been by a computer!`);
    };
  }
}

function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const isChild = makeBetweenFunc(10, 20);

console.log(isChild(10));
 */

/* const myMath = {
  PI: 3.14159,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  },
};

console.log(myMath.square(3));
console.log(myMath.cube(3));
 */

/* const square = {
  area(side) {
    return side * side;
  },
  perimeter(side) {
    return side * 4;
  },
};

console.log(square.area(10));
console.log(square.perimeter(10)); */
/* 
const person = {
  name: `Blue Steel`,
  color: `grey`,
  breed: `scotish fold`,
  meow() {
    console.log(this.color);
  }
};

const hen = {
  name: `Helen`,
  eggCount: 0,
  layAnEgg() {
    this.eggCount += 1;
    return `EGG`;
  }
}; */

try {
  hello.toUpperCase();
} catch {
  console.log(`wrong`);
}

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log(`Please pass the string next time!`);
  }
}
