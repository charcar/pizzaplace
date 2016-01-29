describe('Pizza', function() {
  it("creates a pizza object with the given properties", function() {
    var testPizza = new Pizza ("small", 3);
    expect(testPizza.girth).to.equal("small");
    expect(testPizza.toppings).to.equal(3);
  });
  it("will calculate the total cost of the pie", function() {
    var testPizza = new Pizza ("small",4);
    expect(testPizza.totalCost()).to.equal(12.00);
  });
});
