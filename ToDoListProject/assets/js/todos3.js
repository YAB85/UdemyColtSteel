const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

//we create class with prototype value 'item'
class item {
    constructor (itemName) {
        //create the item div method
        this.createDiv(itemName);
    }

    createDiv(itemName) {
        //input for create
        let input = document.createElement('input');
        //create value, disable(true or false), add classList and value('text')
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";


        //create method for div and add class itemBox
        let itemBox = document.createElement('div');
        //itemBox -> className -> item
        itemBox.classList.add('item');

        //create a method for button RESET
        let editButton = document.createElement('button');
        //add InnerHTML with value EDIT
        editButton.innerHTML = "EDIT";
        //add className -> removeButton
        editButton.classList.add('editButton');

        //do the sane for button REMOVE
        //create a method for button REMOVE
        let removeButton = document.createElement('button');
        //add InnerHTML with value EDIT
        removeButton.innerHTML = "REMOVE";
        //add className -> removeButton
        removeButton.classList.add('removeButton');


        //add method to call all child in var -> container
        container.appendChild(itemBox);

        //call className -> input
        itemBox.appendChild(input);
        //call className -> editButton
        itemBox.appendChild(editButton);
        //call className -> removeButton
        itemBox.appendChild(removeButton);

        //add callback function to use input type
        editButton.addEventListener('click', () => this.edit(input));

        //add callback function to use button REMOVE
        removeButton.addEventListener('click', () => this.remove(itemBox));


    }
    edit(input) {
        input.disabled = !input.disabled;
    }

    remove(item) {
        container.removeChild(item);
    }
}

function check () {
    if(input.value != "") {
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check);

window.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13) {
        check();
    }
})