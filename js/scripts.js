

var queenAttack = function(queen, opponent) {
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
