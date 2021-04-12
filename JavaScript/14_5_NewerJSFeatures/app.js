function rollDie(numSides = 6) {
  /* if (numSides === undefined) {
    numSides = 6;
  } */
  return Math.floor(Math.random() * numSides) + 1;
}
function greet(msg = "Hey", person = "Hey, there", mark = "!") {
  console.log(`${person} ${msg} ${mark}`);
}
console.log(`gi`);
