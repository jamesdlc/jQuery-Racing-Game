console.log("test!");
$(document).ready(function() {

  player1keys();



});




// $(".piece").addClass("p1motion");
// $(".piece2").animate({width: "1200px"});
// $(".p1motion").css("left",("10px"));
function player1keys(){
  var counter = 0;
  $(document).keyup(function (e){
    for(i=0; i < 10; i++){
      if(counter%2 === 0){
        if(e.which == 48){
          $(".piece").css("left",("+=1")); //
        }
      }
      else if(counter%2 === 1){
        if(e.which == 57){
          $(".piece").css("left",("+=1"));
        }
      }
      counter++;
    }
  });
}
