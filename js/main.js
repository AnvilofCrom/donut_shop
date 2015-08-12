'use strict';
// this is the Donutshop constructor
var Donutshop = function (location, min, max, avgNutz) {
  this.location = location;
  this.min      = min;
  this.max      = max;
  this.avgNutz  = avgNutz;
  this.totalNutzDay = [];
  this.sumNutzDay = 0;
};

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

Donutshop.prototype.hourlyCustomers = function() {
  return Math.floor((Math.random()*(this.max - this.min) +1) + this.min);
};

Donutshop.prototype.hourlyNutz = function() {
  return this.avgNutz * this.hourlyCustomers();

}

Donutshop.prototype.donutsForEveryHour = function() {

  for (var i = 0; i < 12; i ++){

    this.totalNutzDay[i] = this.hourlyNutz();

  }

}

Donutshop.prototype.hourlyTotal = function() {
  for (var i = 0; i < this.totalNutzDay.length; i++){
    this.sumNutzDay += this.totalNutzDay[i];

  }

}


Donutshop.prototype.render = function() {

      //writes location on html page
      var getTable = document.getElementById("donuts");
      var newRow = document.createElement("tr");
      newRow.id = this.location;
      newRow.innerHTML = this.location;
      getTable.appendChild(newRow);

      // writes hours to html page
      for (var i = 0; i < this.totalNutzDay.length; i++){
        var newCell = document.createElement("td");
        newCell.innerHTML = this.totalNutzDay[i];
        newRow.appendChild(newCell);
        this.sumNutzDay += this.totalNutzDay[i];
      }

      //writes daily totals on html page
      var total = document.createElement("td");
      total.innerHTML = this.sumNutzDay;
      newRow.appendChild(total);
};

// Instantiate new objects to represent Donutshop
var downtown  = new Donutshop ('Downtown', 8, 43, 4.50);
console.log(downtown.hourlyNutz());
var caphill   = new Donutshop ('Capitol Hill', 4, 37, 2.00);
console.log(caphill.hourlyNutz());
var slakeunion= new Donutshop ('South Lake Union', 9, 23, 6.33);
console.log(slakeunion.hourlyNutz());
var wedgewood = new Donutshop ('Wedgewood', 2, 28, 1.25);
console.log(wedgewood.hourlyNutz());
var ballard   = new Donutshop ('Ballard', 8, 58, 3.75);
console.log(ballard.hourlyNutz());

downtown.donutsForEveryHour();
downtown.render();

caphill.donutsForEveryHour();
caphill.render();

slakeunion.donutsForEveryHour();
slakeunion.render();

wedgewood.donutsForEveryHour();
wedgewood.render();

ballard.donutsForEveryHour();
ballard.render();

