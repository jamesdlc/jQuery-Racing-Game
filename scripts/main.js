var active = true;
$(document).ready(function(){
  console.log("Sanity Check!");
  // further stretch goal: create a Game object that takes two players. store active in game, as well as a score array [3,5];
  // cool
  var player1 = new Player("Player 1", 49, 50, "p1");
  var player2 = new Player("Player 2", 48, 57, "p2");
  playerMoveListener(player1, player2);

  // handles reset of board
  $('.reset').on("click", handleReset);
});

function handleReset(e){ // reset button works by removing/adding classes, values, and text
  // TODO: can we run this as an object method?
  $(".p1sizing").css("left",("0"));
  $(".p1sizing").addClass("starting");
  $(".p1sizing").removeClass("losing");

  // TODO: can we run this as an object method?
  $(".p2sizing").css("left",("0"));
  $(".p2sizing").removeClass("losing");
  $(".p2sizing").addClass("starting");

  $(".showWinner").text("");
  active = true;
}

//TODO: add player input
function Player(name, key1, key2, classSelector) {
  this.name = name;
  this.keys = [key1, key2]; //array that accepts ASCII codes
  this.$selector = $("." + classSelector); // $ to indicate  attribute is accessing jQuery (naming convention)
  this.wins = 0;
  this.move = function(){
    this.$selector.css("left",("+=23px"));
  };

}
function playerMoveListener(player1, player2){ //function will exectute Player.move
  $(document).keyup(function (e){
    imageChanger(player1, player2);
    if (player1.keys.indexOf(e.which) !== -1  && active){ /*checking the indexOf keys indexes that !== -1*/
      player1.move();
      winChecker(player1);
      // scoreBoard(player1);
    }
    else if (player2.keys.indexOf(e.which) !== -1 && active){
      player2.move();
      winChecker(player2);
    }
    scoreBoard(player1,player2);
  });
}
function winChecker(p){   //displays winner name at the bottom of the screen after crossing the finish line
  if (p.$selector.offset().left > 1350){
    console.log(p.name + " Wins!");
    $(".showWinner").text(p.name + " wins!");

  }
}
function scoreBoard(player1,player2){  //TODO: Fix incrementer! scoreboard doesn't reflect correct record
  if (player1.$selector.offset().left > 1350 && active){
    player1.wins +=1;
    $(".win1").text(player1.wins);
    active = false;
    // execute code here to stop people from being able to race.
  }
  if (player2.$selector.offset().left > 1350 && active){
    player2.wins +=1;
    $(".win2").text(player2.wins);
    active = false;
    // execute code here to stop people from being able to race.
  }

  // if (player.$selector.offset().left > 1350 && active){
  //   player.wins +=1;
  //   $(player.winSelector).text(player.wins);
  //   active = false;
  //   // execute code here to stop people from being able to race.
  // }

}
function imageChanger(player1, player2){ //function that changes DJ Khaled's facial expression depending on winning or losing
  if (player1.$selector.offset().left < player2.$selector.offset().left){
    player1.$selector.removeClass("starting").addClass("losing");
    player2.$selector.removeClass("losing").addClass("starting");
  }
  else if (player1.$selector.offset().left > player2.$selector.offset().left){
    player2.$selector.removeClass("starting").addClass("losing");
    player1.$selector.removeClass("losing").addClass("starting");
  }
}
