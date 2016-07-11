console.log("Sanity Check!");
var winner = false;
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
      if (p1.keys.indexOf(e.which) !== -1 ){ //checking for the value of e.which in the indexOf keys
        // if doesn't equal -1 then they are playerkeys
          p1.move();
          winChecker(p1);
      } 
      else if (p2.keys.indexOf(e.which) !== -1){
          p2.move();
          winChecker(p2);
      }
    });
}
function winChecker(p){
  if(p.$racer.offset().left > 500){
    p.wins += 1;
    console.log(p.wins);
    winner = true;
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
