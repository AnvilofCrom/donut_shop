'use strict';
// this is the Donutshop constructor
var Donutshop = function (location, min, max, avgNutz) {
  this.location = location;
  this.min      = min;
  this.max      = max;
  this.avgNutz  = avgNutz;
  this.totalNutzDay = [];
  this.sumNutzDay = 0;
}

// calculate hourly customers from min and max customers
Donutshop.prototype.hourlyCustomers = function() {
  return Math.floor((Math.random()*(this.max - this.min) +1) + this.min);

}

// calculate hourly donuts purchased by hourly customers * average donuts per customer value
Donutshop.prototype.hourlyNutz = function() {
  return Math.round(this.avgNutz * this.hourlyCustomers());

}

// build a table array of hourlyNutz
Donutshop.prototype.donutsForEveryHour = function() {
  for (var i = 0; i < 12; i ++){
    this.totalNutzDay[i] = this.hourlyNutz();

  }

}
// Add Daily total of all donuts sold for the day hours to array
Donutshop.prototype.hourlyTotal = function() {
  for (var i = 0; i < this.totalNutzDay.length; i++){
    this.sumNutzDay += this.totalNutzDay[i];

  }

}
//Prototype function that builds the
Donutshop.prototype.render = function() {

      //writes location on html page
      var getTable = document.getElementById("donuts");
      var newRow = document.createElement("tr");
      //newRow.id = this.location;
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
}

// Instantiate new objects to represent Donutshop
var downtown  = new Donutshop ('Downtown', 8, 43, 4.50);
var caphill   = new Donutshop ('Capitol Hill', 4, 37, 2.00);
var slakeunion= new Donutshop ('South Lake Union', 9, 23, 6.33);
var wedgewood = new Donutshop ('Wedgewood', 2, 28, 1.25);
var ballard   = new Donutshop ('Ballard', 8, 58, 3.75);

downtown.donutsForEveryHour();
caphill.donutsForEveryHour();
slakeunion.donutsForEveryHour();
wedgewood.donutsForEveryHour();
ballard.donutsForEveryHour();

downtown.render();
caphill.render();
slakeunion.render();
wedgewood.render();
ballard.render();

//Button function to add new location isn't working
var newLocationButton = document.getElementById("add-new-location");

var userSubmittedSite = function(siteInput, minInput, maxInput, salesInput) {
  var userInput = new Location(siteInput, minInput, maxInput, salesInput);
  return userInput;
};

// var storeInput = function() {
//   var siteInput = document.getElementById('location').value;
//   var minInput = document.getElementById('min').value;
//   var maxInput = document.getElementById('max').value;
//   var salesInput = document.getElementById('avgNutz').value;
//   var userInput = userSubmittedSite(siteInput, minInput, maxInput, salesInput);
// //         renderAll();

// }

// var createStoreForm = document.getElementById("add-new-location");
// createStoreForm.addEventListener('click', storeInput);

// Sound that plays when button is clicked taken from Stackoverflow
// http://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
 var play = function (){
       var audio = document.getElementById("audio");
       audio.play() }


// var donutShopObjects = [downtown, caphill, slakeunion, wedgewood, ballard];

// newLocationButton.addEventListener("click", newLocationSubmit);

