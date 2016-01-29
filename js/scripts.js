// Business Logic
function Pizza(girth, toppings) {
  this.girth = girth;
  this.toppings = [];
  this.totalCost = 0;
}



// cost calculator prototype method
// for each topping push to toppings []
Pizza.prototype.toppings(allToppings) {
}

Pizza.prototype.totalCost() {
  if (this.girth = "small") {
    base = 10;
    toppingCost = (this.toppings.length * ".5");
    this.totalCost = base + toppingCost;
  } else if (this.girth = "medium") {
    base = 15;
    toppingCost = (this.toppings.length * ".5");
    this.totalCost = base + toppingCost;
  } else if (this.girth = "large") {
    base = 20;
    toppingCost = (this.toppings.length * ".5");
    this.totalCost = base + toppingCost;
  } else {
    this.totalCost = this.totalCost;
  };
};
