//Deaven Brown
//February 26, 2015
//Functions Assignment

//Declare variables
var numberOne = number(1);
var numberTwo = number(1);
var numberThree = number(1);
var numberFour = number(1);
var numberFive = number(1);
var powerBall = number(1);
//Declare functions
function number(para){
    var variable =  para * Math.round(Math.random() * 59);
    return variable;
}
//Log outcome
console.log("Your winning numbers for tonight's PowerBall are " + numberOne + ", " + numberTwo + ", " + numberThree + ", " + numberFour + ", " + numberFive + ", and your winning PowerBall number is " + ", " + powerBall + ". Thank you for playing!")