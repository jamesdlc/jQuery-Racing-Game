console.log("Sanity Check!");

$(document).ready(function(){
  var player1 = new Player("Player 1", 49, 50, "p1");
  var player2 = new Player("Player 2", 48, 57, "p2");
  playerMoveListener(player1, player2);
  $('.btn').on("click", function handleClick(e){ // reset button works by removing classes, values, and text
    $(".p1art").css("left",("0"));
  });
});

function Player(name, key1, key2, classSelector) {
  this.name = name;
  this.keys = [key1, key2]; //array that accepts ASCII codes
  this.$selector = $("." + classSelector); // this.$racer to indicate jQuery (naming convention)
  this.wins = 0;
  this.losses = 0;
  this.move = function(){
    this.$selector.css("left",("+=23px"));
  };
}

function playerMoveListener(player1, player2){ //function will exectute Player.move
    $(document).keyup(function (e){
      imageChanger(player1, player2);
      if (player1.keys.indexOf(e.which) !== -1 ){ /*checking the indexOf keys indexes that !== -1*/
          player1.move();
          winChecker(player1);
      }
      else if (player2.keys.indexOf(e.which) !== -1){
          player2.move();
          winChecker(player2);
      }
    });
}
function winChecker(p){
  if (p.$selector.offset().left > 600){
    p.wins += 1;
    console.log(p.move.queue);
    p.$selector.removeClass("p1");
}
}
function imageChanger(player1, player2){ //function that changes DJ Khaled's facial expression depending on winning or losing
  if (player1.$selector.offset().left < player2.$selector.offset().left){
     player1.$selector.removeClass("startingpiece").addClass("addKhaledP1");
     player2.$selector.removeClass("addKhaledP1").addClass("startingpiece");
   }
  else if (player1.$selector.offset().left > player2.$selector.offset().left){
    player2.$selector.removeClass("startingpiece").addClass("addKhaledP1");
    player1.$selector.removeClass("addKhaledP1").addClass("startingpiece");
  }
}
// function stopMvmt(p) {
//     p.selector.clearQueue();
//     p.selector.clearQueue();
//     $(document).off("keyup");
//   }
