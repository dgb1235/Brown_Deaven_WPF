//Deaven Brown
//February 26, 2015
//Functions Assignment

//Declare variables
var numberOne = number();
var numberTwo = number();
var numberThree = number();
var numberFour = number();
var numberFive = number();
var powerBall = power();
//Declare functions
function number(){
    var random = Math.round(Math.random() * 59);
    return random;
}
function power(){
    var random = Math.round(Math.random() * 35);
    return random
}
//Log outcome
console.log("Your winning numbers for tonight's PowerBall are " + numberOne + ", " + numberTwo + ", " + numberThree + ", " + numberFour + ", " + numberFive + ", and your winning PowerBall number is " + ", " + powerBall + ". Thank you for playing!")