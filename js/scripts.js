var queenAttack = function(queen, opponent) {
  if ((queen[1] === opponent[1]) || (queen[0] === opponent[0])) {
    return true;
  } else {
    return false;
  }
};
