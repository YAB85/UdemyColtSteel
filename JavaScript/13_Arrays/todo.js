window.setTimeout(function() {
    
    var todos = ["Buy New Turtle"];
    var input = prompt("What would you like to do?");

    while (input !== "quit") {
    //handle input
        if(input === "list"){
            listTodo();
        }else if (input === "new") {
            addTodo();
        }else if (input === "delete") {
            deleteTodo();
        }
    //ask again for new input
    input = prompt("What would you like to do?");
    }
    console.log("Ok, you quit the app");    

function listTodo() {
        console.log("***********");
        //add forEach.method for our arr. 
        todos.forEach(function (todo, i) {
            console.log(i + ": "  + todo);
        });
        console.log("***********");
}

function addTodo() {
        //ask for new todo
        var newTodo = prompt("Enter new todo");
        // add to todos arrays
        todos.push(newTodo);
        console.log("Added Todo");
}

function deleteTodo () {
        //ask for index of todo to be delete

        var index = prompt("Enter index of todo to delete");
        //delete that todo
        todos.splice(index, 1);
        console.log("Deleted Todo");
}
    
    // put all of your JS code from the lecture here
}, 500);