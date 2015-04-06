describe('queenAttack', function() {
  it("is false if the coordinates are not horizontally, vertically, or diagonally in line with each other", function() {
    expect(queenAttack([1, 1], [2, 3])).to.equal(false);
  });

  it("is true if the coordinates are horizontally in line", function() {
    expect(queenAttack([1, 1], [2, 1])).to.equal(true);
  });

  it("is true if the coordinates are vertically in line", function() {
    expect(queenAttack([1, 1], [1, 2])).to.equal(true);
  });

  it("is true if the coordinates sum is equal", function() {
    expect(queenAttack([2, 4], [1, 5])).to.equal(true);
  });

  // it("is true if the coordinates subtract 1", function() {
  //   expect(queenAttack([2, 4], [1, 3])).to.equal(true);
  // });
});
