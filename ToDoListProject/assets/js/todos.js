//Check off specific Todos by Clicking
//change li -> ul -> add .on -> "click" + "li" 
$("ul").on("click", "li", function () {
    $(this).toggleClass('completed');
});

//Click on X to delete ToDo
//change span -> ul -> add .on -> "click" + "span"
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove()
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        //clear input value
        $(this).val("");
        //create a new li and add to ul
        $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`)
        
    }
    
});
//add method to button plus for hidden input 
$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
});


//use event to get method and when use function .stopPropagation()


 /* //if li is gray 
        //turn it black
    //else 
        //turn it gray

    if($(this).css("color") === "rgb(128, 128, 128)") {
            $(this).css({
            color: "black",
            textDecoration: "none"
        });    
      }else {
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
      } */