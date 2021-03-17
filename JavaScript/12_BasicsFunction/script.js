/*****Introduction to Function */
/* function doSomething (hay) {
    console.log("hello, hay");
 
}

doSomething(goodbye);
doSomething();
doSomething();
doSomething(); */

/* function singSong() {
    console.log("Twinkle, twinkle, little star,");
    console.log("How I wonder what you are!");
    console.log("Up abode the world so high,");
    console.log("Like a diamond in the the sky.");
}

singSong();
singSong();
singSong();
singSong(); */

/******Arguments */

/* function squire(num) {
    console.log(num * num);    
}

squire(100);
squire(3); */

/* function sayHello(nameFirst, nameSecond) {
    console.log('Say hello to ' + nameFirst, 'and ' + nameSecond);    
}

sayHello('john', 'mike'); */

/* function area(length, width) {
    console.log(length * width);
}
area(9, 2);

function greet(person1, person2, person3) {
    console.log("hi " + person1);
    console.log("hi " + person2);
    console.log("hi " + person3);
}
greet("Harry", "Ron", "Hermione"); */

/********The RETURN reyword */

/* function square (x) { 
    console.log(x * x);
}
square(4); */

/* function square2 (x) {
    return x * x;
}

var n = square2(2);

console.log(n);

"4 squared" */
/* function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";
var capital = capitalize(city);

var city = prompt("Please write a city?");

function capitalize(str) {
    if (typeof str === "number") {
        return alert("that`s not a string!");
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
    
}


var capital = capitalize(city); */

/* function test (x, y) {
    return y - x;
}


console.log (test (10, 40));

function test2 (x) {
    return x * 2;
    console.log(x);
    return x/2;
  }

console.log(test2(40)); */
/****is Even */

/* function isEven (num) {
    //return true is even
    if (num % 2 === 0) {
        return true;
    } else {
    //return false otherwise
        return false;
    }  
} */

/* function isEven (num) {
    return num % 2 === 0;
}   */

/****factorial */

/* function factorial (num) {
    //define a result variable
    var result = 1;
    //calculate factorial and store value in result
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    //return the result variable
    return result;
}


function factorial (num) {
    //define a result variable
    var result = num;
    //calculate factorial and store value in result
    for (var i = num; i >= 1; i--) {
        result *= i;
    }
    //return the result variable
    return result;
} */
//factorial (4)  4 x 3 x 2 x 1

/*******kebabToSnake */

/* function kebabToSnake(str) {
    //replace all  '-' with '_' s
    var newStr = str.replace(/-/g, "_");
    return newStr;
    
}  */

/********Scope Code Along */

/* function doMath() {
    var x = 40;
    console.log(x);
}
doMath(); // 40
x; // is not defined

var y = 99;
// y => 99;
function doMoreMath() {
    console.log(y);
}

doMoreMath(); // 99 global scope chaine

function doMoreMath() {
    y = 100;
    console.log(y);
}

doMoreMath(); // 100
//y => 100 */

/* var num = 8;
function doMath() {
    num += 1;
    if (num % 5 === 0) {
        return true;
    } else {
        return false;
    }
    
}

num += 1;
console.log(doMath()); */

/******Higher Order Functions */

/* function singSong() {
    console.log("Twinkle, twinkle, little star,");
    console.log("How I wonder what you are!");    
}

setInterval(singSong, 1000); */

/* function printHeart() {
  console.log("<3");
}

printHeart();

function greet(name) {
  console.log(`Hi ${name}`);
}

const newName = "Peter";

greet(newName); */

/* function rant(message) {
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
  console.log(message.toUpperCase());
}

rant("I hate beets");

function repeat(str, numTimes) {
  let result = " ";
  for (let i = 0; i < numTimes; i++) {
    result += str;
  }
}
repeat("Hi", 5);
console.log(result); */

/* function isSnakeEyes(x, y) {
  if (x === 1 && y === 1) {
    console.log(`Snake Eyes!`);
  } else {
    console.log(`Not Snake Eyes!`);
  }
}

isSnakeEyes(2, 2); */

function multiply(x, y) {
  return x * y;
}

function isShortsWeather(temperature) {
  if (temperature >= 75) {
    return true;
  } else {
    return false;
  }
}

console.log(isShortsWeather(80));
console.log(isShortsWeather(75));
console.log(isShortsWeather(74));

function lastElement(arr) {
  if (arr[arr.length - 1] === undefined) {
    return null;
  }
  return arr[arr.length - 1];
}

lastElement([1, 2]);
lastElement([1]);
lastElement([]);

function capitalize(str) {
  let strCap;
  strCap = str.replace(str[0], str[0].toUpperCase());
  return strCap.toString();
}

let word = "eggplant";

console.log(capitalize(word));

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray([2, 2, 2, 2]));
console.log(sumArray([50, 50, 1]));

function returnDay(day) {
  if (day === 1) {
    return "Monday";
  } else if (day === 2) {
    return "Tuesday";
  } else if (day === 3) {
    return "Wednesday";
  } else if (day === 4) {
    return "Thursday";
  } else if (day === 5) {
    return "Friday";
  } else if (day === 6) {
    return "Saturday";
  } else if (day === 7) {
    return "Sunday";
  } else {
    return null;
  }
}

let days = 8;

console.log(returnDay(days));
