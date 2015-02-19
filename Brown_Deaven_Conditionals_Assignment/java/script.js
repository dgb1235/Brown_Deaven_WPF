//Deaven Brown
//February 19 2015
//Conditionals Assignment

//Create our variables with prompts
var userNetIncome = prompt("This is a monthly spending calculator; what is your average take-home salary per month?");
var userBills = prompt("How much do you owe in bills each month?");
var userSavings = prompt("Do you do have a savings account, yes? If no leave blank");
var savingsInterest = prompt("If you have a savings account, what is the yearly interest rate? (whole number)") / 100;
var percentToSavings = prompt("Final question, what percent of your left over money do you / would you put into your savings account?");
var savingsPercent = percentToSavings / 100;
//Calculate
var leftOver = userNetIncome - userBills;
var intoSavings = leftOver * savingsPercent;
var yearlyInterest = intoSavings * 12 * savingsInterest;
var madeInSavings =  yearlyInterest / 12;
//Make a ternary operator
(userNetIncome >= 2 * userBills && userSavings === "yes") ? console.log("Good, wise choice because you make $" + madeInSavings + " per month in your savings account.") : console.log("You're missing out on a free $" + madeInSavings + " per month, just for having a savings account and putting " + percentToSavings + "% in every month.");
