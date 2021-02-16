/*********Objects */

/* var person = {
    name: "Travis",
    age: 21,
    city: "LA"
};

console.log(person["name"]);
console.log(person.name); */

//you cannot use dot notation if the property starts with a number

//someObject.1blah //invalid
//someObject["1blah"] // valid!!

/* person["age"] += 1;

person.city = "London";

console.log(person); */
/* var posts = [
    {
        title: "Cats are mediocre",
        author: "Colt",
        comments: ["Awesome post", "terrible post"]
    },
    {
        title: "Cats are actually awesome",
        author: "Cat Luvr",
        comments: ["<3", "Go to hell I hate you"]
    }
] */

//posts.length -> 2

//posts[0].title -> "Cats are mediocre"

/* var someObject = {
    friends: [
        {name: "Malfloy"},
        {name: "Grabbe"},
        {name: "Goyle"},
    ],
    color:"baby blue",
    isEvil: true
};

someObject.friends[0].name = "John"; */

/*********Movies Database Exercise */
/* var movies = [
    {title: "In Bruges", 
    hasWatched: true,
    rating: 5
    },
    {title: "Frozen", 
    hasWatched: false,
    rating: 4.5
    },
    {title: "Les Miserable", 
    hasWatched: false,
    rating: 4
    },
    {title: "Aliens", 
    hasWatched: true,
    rating: 5
    },
]

movies.forEach(function (movie) {
    console.log(buildString(movie));
  })

function buildString (movie) {
    var result = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    } 
        result += "\"" + movie.title + "\" - ";
        result += movie.rating + " stars";
        return result;
  } */

/********Adding Methods to Objects */
/* var obj = {
     name: "Chick",
     age: 45,
     isCool: false,
     friends: ["bob", "tina"],
     add: function(x,y) {
        return x + y;
     }
 }

console.log(obj.add(10, 5));

function speak () {
    return "WOOF!";
}

var dogSpace ={};
dogSpace.speak = function () {
    return "WOOF!";
}

var comments = {};

comments.data = ["Good Job!", "Bye!", "Lame...", "Ok!"];




comments.printer = function () {
    this.data.forEach(function(el) {
        console.log(el);
    });
  }

 */

const restaurant = {
  name: "Ichiran Ramen",
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: "Brooklyn",
  state: "NY",
  zipcode: "11206",
};

//YOUR CODE GOES DOWN HERE:
const fullAddress =
  restaurant.address +
  ", " +
  restaurant.city +
  ", " +
  restaurant.state +
  " " +
  restaurant.zipcode;

console.log(fullAddress);
