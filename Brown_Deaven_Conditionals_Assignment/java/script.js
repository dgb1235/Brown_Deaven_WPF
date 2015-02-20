//Deaven Brown
//February 19 2015
//Conditionals Assignment

//Create our variables with prompts
var userNetIncome = prompt("This is a monthly savings calculator; what is your average take-home salary per month?");
var userBills = prompt("How much do you owe in bills each month?");
var userSavings = prompt("You do have a savings account, yes? If no leave blank");
var savingsInterest = prompt("If you have a savings account, what is the yearly interest rate? (whole number)") / 100;
var percentToSavings = prompt("Final question, what percent of your left over money do you / would you put into your savings account?");
var savingsPercent = percentToSavings / 100;
//Calculate
var leftOver = userNetIncome - userBills;
var intoSavings = leftOver * savingsPercent;
var yearlyInterest = intoSavings * 12 * savingsInterest;
var monthlyInterest =  yearlyInterest / 12;
//If your net monthly income is greater than or equal to 2 times your monthly bills
(userNetIncome >= 2 * userBills && userSavings === "yes") ? console.log("Wise choice because you make $" + monthlyInterest + " per month and " + yearlyInterest + " per year in your savings account.") : console.log("You're missing out on a free $" + monthlyInterest + " per month, just for having a savings account and putting " + percentToSavings + "% in every month. That's " + yearlyInterest + " per year.");
//If your savings account will make you more than 25 dollars per month
if(monthlyInterest > 25){
    console.log("You should definitely have a savings account.");
}
//If your savings account will make more than 1 dollars per month
else if(monthlyInterest > 1){
    console.log("Having a savings account can't hurt you.");
}
//If your savings account will make less than 1 dollars per month
else{
    console.log("You don't really need a savings account.");
}
//How the user can make a savings account if they do not already have one
if(userSavings === "" || "no"){
    console.log("If you would like to start a savings account today, contact your bank for more information.");
}
//If the user missed a prompt other that if they have a savings account
(userNetIncome === "" || userBills === "" || savingsInterest === "" || percentToSavings === "") ? console.log("Oops, I can't make a correct calculation without all of your information.") : console.log("Thank you for using the free monthly savings account calculator.");