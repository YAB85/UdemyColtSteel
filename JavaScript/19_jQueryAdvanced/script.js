/* $("#submit").click(function () {
    console.log("another click");
    
})

$("button").click(function () {
    console.log("someone click a button");
    
})
$("button").click(function () {
    $(this).css("background", "pink");    
})
$("button").click(function () {
    var text = $(this).text();
    console.log ("You clicked " + text);    
}) */

/* $('input[type="text"]').keypress(function () {
    console.log("text input keypress!");
  });


$('input[type="text"]').keypress(function (event) {
    if(event.which === 13) {
        alert("you hit enter")
    }
      }); */
/* $('button').on('click', function () {
    $(this).css("color", "pink");
});

$('h1').on("click", function () {
    $(this).css("color", "purple");
  }) */

$("button").on("mouseenter", function() {
    $(this).css("font-weight", "bold");
});
$("button").on("mouseleave", function() {
    $(this).css("font-weight", "normal");
});