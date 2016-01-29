describe("pizza", function() {
  it("instantiates a pizza object with the given properties", function() {
    var testPizza = new Pizza("small", "cheese");
    expect(testPizza.girth).to.equal("small");
    expect(testPizza.toppings).to.equal("cheese");
    expect(testPizza.totalCost).to.equal(0);

  });
});
