

var queenAttack = function(queen, opponent) {
  var queenSum = queen[0] + queen[1];
  var opponentSum = opponent[0] + opponent[1];
  if ((queen[1] === opponent[1]) || (queen[0] === opponent[0]) || (queenSum === opponentSum)) {
    return true;
  } else {
    return false;
  }
};
