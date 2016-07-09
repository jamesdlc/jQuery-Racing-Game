console.log("test!");

$(document).ready(function() {
  $(document).keyup(function (e){
    if(e.which == 48){
      // $(".piece").animate({width: "1000px"});
      // $(".piece2").animate({width: "1200px"});
      $(".piece").addClass("p1motion");
    }
  });
});
