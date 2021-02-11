/****My example */


/* alert("this is work");

var button = document.querySelector("button");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  


/* function toggle() {
    //var body = document.querySelector("body");
    document.body.style.background = getRandomColor();
} 

button.addEventListener("click", toggle);*/

/*******Example ColtSteel */

var button = document.querySelector("button");

var isPurple = false;

/* button.addEventListener("click", function () {
    if(isPurple) {
        document.body.style.background = "white";
        isPurple = false;
    } else {
        document.body.style.background = "purple";
        isPurple = true;
    }
    //if white
        //make it purple
    //else
        //make it white
    

  }); */

button.addEventListener("click", function () {
    document.body.classList.toggle("purple");
});