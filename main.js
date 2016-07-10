console.log("test!");

$(document).ready(function(){
  player1keys();
  player2keys();

});

function player1keys(){
  var counter = 0;
  $(document).keyup(function (e){
    if(e.which == 49){
      $(".piece").css("left",("+=30px"));
      counter++;
    }
    if(e.which == 50){
      $(".piece").css("left",("+=30px"));
      counter++;
    }
    if (counter === 43){
      alert("player 1 wins!");
      return false;
    }
  });
}

function player2keys(){
  $(document).keyup(function (e){
    if(e.which == 48){
      $(".piece2").css("left",("+=30px")); //
      counter++;
    }
    if(e.which == 57){
      $(".piece2").css("left",("+=30px"));
      counter++;
    }
  });
}
