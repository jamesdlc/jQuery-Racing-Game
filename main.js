console.log("test!");

$(document).ready(function(){
  var counter = 0;
  player1keys();
  player2keys();

  counter++;
  // if (counter === 43){
  //   alert("player 1 wins!");
  //   return false;
  // }
});

function player1keys(){
  $(document).keyup(function (e){
    if(e.which == 49){
      $(".p1").css("left",("+=23px"));
    }
    if(e.which == 50){
      $(".p1").css("left",("+=23px"));
    }
    if($(".p1").offset().left >= 600){
      $(".p1").removeClass("startingpiece").addClass("addKhaledP1");
    }
  });
}

function player2keys(){
  $(document).keyup(function (e){
    if(e.which == 48){
      $(".p2").css("left",("+=23px")); //
    }
    if(e.which == 57){
      $(".p2").css("left",("+=23px"));
    }
    if($(".p2").offset().left >= 900){
      $(".p2").removeClass("startingpiece").addClass("winning");
    }
  });
}
