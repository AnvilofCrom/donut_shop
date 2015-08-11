'use strict';
// this is the donutShop constructor
var donutShop = function (location, min, max, avgNuts) {
  this.location = location;
  this.min      = min;
  this.max      = max;
  this.avgNuts  = avgNuts;

  // per Hour, for 11 hours (7am - 6pm)
  // Create a for loop to represent 11 hours, so that the function this.demand is run the correct number of times.
  // then you need to store the values and add them up.
  //
  // Random number generator with starting and ending points
  //
  // Math.floor(Math.random()*((y-x)+1)+x);
  // where x is the starting number (smaller number)
  // and   y is the ending number (larger number)
  //
  this.demand = function () {
      return Math.floor(Math.random()*((this.max-this.min)+1)+this.min) * this.avgNuts;
};







};
// Instantiate new objects to represent donutShop
var downtown  = new donutShop ('Downtown', 8, 43, 4.50);
console.log(downtown.demand());
var caphill   = new donutShop ('Capitol Hill', 4, 37, 2.00);
console.log(caphill.demand());
var slakeunion= new donutShop ('South Lake Union', 9, 23, 6.33);
console.log(slakeunion.demand());
var wedgewood = new donutShop ('Wedgewood', 2, 28, 1.25);
console.log(wedgewood.demand());
var ballard   = new donutShop ('Ballard', 8, 58, 3.75);
console.log(ballard.demand());
// downtown.demand();
