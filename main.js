console.log("Sanity Check!");
$(document).ready(function(){
  var player1 = new Player("test", 49, 50, "p1");
  var player2 = new Player("test", 48, 57, "p2");
  playerMoveListener(player1, player2);
  console.log(player1.$racer.offset().left, player2);
});

function Player(name, key1, key2, racerid) {
  this.name = name;
  this.keys = [key1, key2]; //array that accepts ASCII codes
  this.$racer = $("." + racerid); // this.$racer to indicate jQuery (naming convention)
  this.wins = 0;
  this.losses = 0;
  this.move = function(){
  this.$racer.css("left",("+=23px"));
  };
}

function playerMoveListener(p1, p2){ //function will exectute Player.move
    $(document).keyup(function (e){
      imageChanger(p1, p2);
      if (p1.keys.indexOf(e.which) !== -1 ){
          p1.move();
          winChecker(p1);
      } // if doesn't equal -1 then they are player1keys
      else if (p2.keys.indexOf(e.which) !== -1){
          p2.move();
          winChecker(p2);
      }
    });
}
function winChecker(p){
  if(p.$racer.offset().left > 500){
    console.log("here");
  }
}
function imageChanger(p1, p2){ //function that changes DJ Khaled's facial expression depending on winning or losing
  if(p1.$racer.offset().left < p2.$racer.offset().left){
     p1.$racer.removeClass("startingpiece").addClass("addKhaledP1");
     p2.$racer.removeClass("addKhaledP1").addClass("startingpiece");
   }
  else if(p1.$racer.offset().left > p2.$racer.offset().left){
    p2.$racer.removeClass("startingpiece").addClass("addKhaledP1");
    p1.$racer.removeClass("addKhaledP1").addClass("startingpiece");
  }
}
//
// function player1keys(){
//   $(document).keyup(function (e){
//     if(e.which == 49){
//       $(".p1").css("left",("+=23px"));
//     }
//     if(e.which == 50){
//       $(".p1").css("left",("+=23px"));
//     }
//     if($(".p1").offset().left >= 600){
//       $(".p1").removeClass("startingpiece").addClass("addKhaledP1");
//     }
//     if($(".p1").offset().left >= 1250){
//       alert("Player 1 Wins");
//     }
//   });
// }
//
// function player2keys(){
//   $(document).keyup(function (e){
//     if(e.which == 48){
//       $(".p2").css("left",("+=23px")); //
//     }
//     if(e.which == 57){
//       $(".p2").css("left",("+=23px"));
//     }
//     if($(".p2").offset().left >= 900){
//       $(".p2").removeClass("startingpiece").addClass("winning");
//     }
//   });
// }
