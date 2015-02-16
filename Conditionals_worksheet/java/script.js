//Deaven Brown
//February 16, 2015
//Conditionals Worksheet

//Last Chance for Gas!
//Givens
var gasEfficiency = 21;
var gaugeReading = 0.52;
var tankCapacity = 15;
//Find how much gas is in the tank
var gallonsLeft = tankCapacity * gaugeReading;
var milesLeft = gallonsLeft * gasEfficiency;
//if the amount of miles left is greater than or equal to 200
if(milesLeft >= 200){
    console.log("Yes, you can make it without stopping for gas");
}
//if the amount of miles left is les than 200
else{
    console.log("You only have " + gallonsLeft + " gallons of gas in your tank, better get gas now while you can!");
}