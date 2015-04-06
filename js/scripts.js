

var queenAttack = function(queen, opponent) {
  var q1 = queen[1];
  var q0 = queen[0];
  var opp1 = opponent[1];
  var opp0 = opponent[0];

  var queenSum = q0 + q1;
  var opponentSum = opp0 + opp1;

  if ((queen[1] === opponent[1]) || (queen[0] === opponent[0]) || (queenSum === opponentSum)) {
    return true;
  // } else if (){
  //   return true;
  } else {
    return false;
  }
};
