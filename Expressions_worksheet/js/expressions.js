// Deaven Brown
// February 11 2015
// Expressions Worksheet

// Add add alert to test
//alert("Javascript works!");

// Dog Years
// Give Sparky an age
var actualAge = 4;
// Multiply Sparky's age by 7 to have his age in "dog years"
var dogYears = actualAge * 7;
// Show Sparky's age in console
console.log("Sparky is " + actualAge + " human years old which is " + dogYears + " in dog years.");

// Slice of Pie part 1
// Given
var slicesPerPizza = 8;
var partyPeople = 16;
var pizzaOrdered = 5;
// Find how much pizza each person ate using math
var slicesPerPerson = pizzaOrdered * slicesPerPizza / partyPeople;
// Show have much pizza each person ate at the party
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the the party.");

// Slices of Pie part 2
// Using previous givens and modulo to find the amount of pizza remaining for Sparky
var slicesForSparky = pizzaOrdered * slicesPerPizza % partyPeople;
// Show in console how much pizza sparky gets
console.log("Sparky got " + slicesForSparky + " slices of pizza.");

// Average Shopping Bill
// Given
var weeklyTotals = [120, 140, 175, 180, 213];
// Find total amount spent on groceries over 5 weeks
var total = weeklyTotals[0] + weeklyTotals[1] + weeklyTotals[2] + weeklyTotals[3] + weeklyTotals [4];
// Find average amount spent on groceries over 5 weeks
var average = total / 5;
// Log results to console
console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average + " per week.");
