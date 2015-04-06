function queenAttack(queen, opponent) {
  var q1 = queen[1];
  var q0 = queen[0];
  var opp1 = opponent[1];
  var opp0 = opponent[0];

  var queenSum = q0 + q1;
  var opponentSum = opp0 + opp1;

  var diff0 = q0 - opp0;
  var diff1 = q1 - opp1;

  if ((q1 === opp1) || (q0 === opp0) || (queenSum === opponentSum) || (diff0 === diff1)) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#queen").submit(function(event){
    var queen0 = parseInt($("input#queen0").val());
    var queen1 = parseInt($("input#queen1").val());
    var opp0 = parseInt($("input#opponent0").val());
    var opp1 = parseInt($("input#opponent1").val());

    var queen = [queen0, queen1];
    var opponent = [opp0, opp1];

    var result = queenAttack(queen, opponent);

    $(".not").empty();

    if (!result) {
      $(".not").text("not");
    }

    $("#result").show();
    event.preventDefault();
  });
});
