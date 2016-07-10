console.log("Sanity Check!");

$(document).ready(function(){
  var player1 = new Player("test", 49, 50, "p1");
  var player2 = new Player("test", 48, 57, "p2");
  playerMoveListener(player1, player2);
  console.log(player1.$racer.offset().left, player2);
  winChecker(player1, player2);
});

function Player(name, key1, key2, racerid) {
  this.name = name;
  this.keys = [key1, key2];
  this.$racer = $("." + racerid); // this.$racer to indicate jQuery (naming convention)
  this.wins = 0;
  this.losses = 0;
  this.move = function(){
    this.$racer.css("left",("+=23px"));
  };
}

function playerMoveListener(p1, p2){
    $(document).keyup(function (e){
      if (p1.keys.indexOf(e.which) !== -1 ){
          p1.move();
      } // if doesn't equal -1 then they are player1keys
      else if (p2.keys.indexOf(e.which) !== -1){
          p2.move();
      }
    });
}
function winChecker(player1, player2){
  if(player1.$racer.offset().left > 500){
    console.log(player1.$racer.offset());
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
