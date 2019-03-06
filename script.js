

$( "button" ).click(function() {
  var console = $(".console").val();
  var age = parseInt($(".age").val());
  if (console === "Genesis" && age < 18) {
    $(".message").text("Sub Zero");
  } 
 else if (console === "PS4" && age <18) {
     $(".message").text("Kenshi");
 } else if (console === "Genesis" && age >18) {
     $(".message").text("Liu Kang");
 } else if (console === "PS4" && age >18) {
     $(".message").text("Bo Rai Cho");
} else {
    $(".message").text("Fatality!!! Try Again");
}
});


