console.log("test!");

$(document).ready(function(){
  var counter = 0;
  player1keys();
  player2keys();
  counter++;
  if (counter === 43){
    alert("player 1 wins!");
    return false;
  }
});

function player1keys(){
  $(document).keyup(function (e){
    if(e.which == 49){
      $(".piece").css("left",("+=15px"));
    }
    if(e.which == 50){
      $(".piece").css("left",("+=15px"));
    }
  });
}

function player2keys(){
  $(document).keyup(function (e){
    if(e.which == 48){
      $(".piece2").css("left",("+=15px")); //
    }
    if(e.which == 57){
      $(".piece2").css("left",("+=15px"));
    }
  });
}
