console.log(`hi`);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const nums = numbers.filter((n) => {
  return n < 10;
});
console.log(nums);

/* 
function print(element) {
  console.log(element);
}

numbers.forEach(print); */

const movies = [
  {
    title: "Amadeus",
    score: 99
  },
  {
    title: "Stand By Me",
    score: 85
  },
  {
    title: "Parasite",
    score: 95
  },
  {
    title: "Alien",
    score: 90
  }
];

const bestRaited = movies.reduce((bestMovie, currMovie) => {
  if (currMovie.score > bestMovie.score) {
    return currMovie;
  }
  return bestMovie;
});

const goodmovies = movies.filter((m) => {
  return m.score > 80;
});

console.log(goodmovies);

const newObj = movies.filter((m) => m.score > 80).map((m) => m.title);
console.log(newObj);
/* movies.forEach((movie) => {
  console.log(`${movie.title} - ${movie.score}/100`);
});

for (let el of movies) {
  console.log(`${el.score}`);
}

const texts = [`rolf`, "lol", "omg", `ttyl`];
const caps = texts.map((t) => {
  return t.toUpperCase();
});

console.log(texts);
console.log(caps);

const doubles = numbers.map((num) => {
  return num * 2;
});

const newObj = movies.map((movie) => {
  return movie.title;
});

function cleanNames(arr) {
  const newNames = arr.map((str) => {
    return str.trim();
  });
  return newNames;
}

let stWords = [
  `  timothee`,
  "  darth_hater",
  "sassyfrassy   ",
  " elton john  "
];

console.log(cleanNames(stWords));

const greet = (str) => {
  return console.log(`"Hey ${str}!"`);
};

greet(`Harrid`);
 */

/* setTimeout(() => {
  console.log(`hi`);
}, 3000);

setInterval(() => {
  console.log(number);
}, 2000);
 */

const validUserNames = (str) => {
  return str.filter((s) => {
    return s.length < 10;
  });
};

let arr = [`mark`, `staceysmom21323`, `q21389089123`, `carrie98`, `MoanaFan`];

console.log(validUserNames(arr));

const arr1 = [2, 4, 6, 8];
const arr2 = [1, 4, 6, 8];
const arr3 = [1, 2, 3];

const allEvens = (arr) => {
  return arr.every((n) => {
    return n % 2 === 0;
  });
};

console.log(allEvens(arr1));
console.log(allEvens(arr2));
console.log(allEvens(arr3));

const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

const total = prices.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(total);

const person = {
  name: `Jack`,
  surname: `Bobby`,
  fullName: function () {
    console.log(`${this.name} ${this.surname}`);
  }
};
