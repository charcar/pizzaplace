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
// END OF BUSINESS LOGIC

$(document).ready(function() {
  $(form#pizzaPlaceOrder).submit(function(event) {
    event.preventDefault();
// gather input from size selection
    var size = $("select#pizzaSizeSelected").val();
// gather input from number of toppings selected
    var toppingsPrice = input[type="checkbox"]:checked).length);
// create new pizza object
    yourOrder = new Pizza(size, toppingsPrice);
// do the math! and return the cost!
    return yourOrder;
  });
});
