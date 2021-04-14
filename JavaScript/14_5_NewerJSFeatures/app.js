function rollDie(numSides = 6) {
  /* if (numSides === undefined) {
    numSides = 6;
  } */
  return Math.floor(Math.random() * numSides) + 1;
}

/* function greet(msg = "Hey", person = "Hey, there", mark = "!") {
  console.log(`${person} ${msg} ${mark}`);
}
 */

const cats = [`Blue`, `Scout`, `Rocket`];

const dogs = [`Rusty`, `Wyatt`];

const allPets = [`Pukky`, ...dogs, ...cats];

console.log(allPets);

const items = {
  x: 2,
  y: 3,
  v: 45
};

const newItem = { ...items };

console.log(newItem);

function sum() {
  let arr = [...arguments];
  return arr.reduce((total, el) => total + el);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
const scores = [992812, 122312, 12312, 12312, 3213, 4324, 2342];

const [gold, silver, bronze] = scores;

console.log(gold, silver, bronze);
const user = {
  email: `sdfsdf@dfsd.net`,
  password: "sdfs3rdsfs",
  firstName: "Harley",
  lastName: "Milk",
  born: 1930,
  died: 1978,
  bio: "sdfdsf sdfs sfdf sdfsdf sdf"
};

const { firstName: x, lastName: y } = user;
console.log(x);
