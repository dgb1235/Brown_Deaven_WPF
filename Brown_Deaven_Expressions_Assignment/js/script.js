//Deaven Brown
//February 12 2015
//Expressions Assignment

//Let the user decide how many employees Tony has
var employees = prompt("How many employees (10+) does Tony have?");
//50% make pizza, 30% roll dough, 10 percent wait tables, the rest
var makingPizza = employees / 2;
var rollingDough = employees * 3 / 10;
var waitingTables = employees / 10;
var washingDishes = employees - (makingPizza + rollingDough + waitingTables);
//Use previous variables to calculate how many pizzas can be made per hour/day
var pizzaPerHour = makingPizza * 6;
var pizzaPerDay = pizzaPerHour * 10;
//Use an array to hold all logging parts
var loggingArray = [employees, makingPizza, rollingDough, waitingTables, washingDishes, pizzaPerHour, pizzaPerDay];
//Show final calculations and results in console
console.log("Tony has " + loggingArray[0] + " employees at his pizzeria. Everybody is trained to make pizza, but on any given day 50% (" + loggingArray[1] + ") are baking, 30% (" + loggingArray[2] + ") are rolling dough, 10% (" + loggingArray[3] + ") are waiting tables, and the rest (" + loggingArray[4] + ") are washing dishes. If the employees can make 6 pizzas per hour, Tony's Pizzeria will produce " + loggingArray[5] +" pizzas in an hour, totaling " + loggingArray[6] + " pizzas in a 10 hour day.");
