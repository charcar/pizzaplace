function Pizza(girth, toppings) {
  this.girth = girth;
  this.toppings = toppings;
  this.totalCost;
}

Pizza.prototype.totalCost = function() {
  var base = 0;
  var cost = 0;
  var toppingCost = 0;

  if (this.girth === "small") {
    base = 10;
  } else if (this.girth === "medium") {
    base = 15;
  } else if (this.girth === "large") {
    base = 20;
  }
  toppingCost = (this.toppings * .5 );
  cost = base + toppingCost;
  this.totalCost = cost;
  return cost;
};
//
// END OF BUSINESS LOGIC
//
// gather input from data fields
//
// create new pizza object
//
// do the math! and return the cost!
