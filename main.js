console.log("test!");
$(document).ready(function() {
  player1keys();
  player2keys();
});




// $(".piece").addClass("p1motion");
// $(".piece2").animate({width: "1200px"});
// $(".p1motion").css("left",("10px"));
function player1keys(){
  var counter = 0;
  $(document).keyup(function (e){
    for(i=0; i < 10; i++){
      if(counter%2 === 0){
        if(e.which == 49){
          $(".piece").css("left",("+=2")); //
        }
      }
      else if(counter%2 === 1){
        if(e.which == 50){
          $(".piece").css("left",("+=2"));
        }
      }
      counter++;
    }
  });
}

function player2keys(){
  var counter = 0;
  $(document).keyup(function (e){
    for(i=0; i < 10; i++){
      if(counter%2 === 0){
        if(e.which == 48){
          $(".piece2").css("left",("+=2")); //
        }
      }
      else if(counter%2 === 1){
        if(e.which == 57){
          $(".piece2").css("left",("+=2"));
        }
      }
      counter++;
    }
  });
}
