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
//if the amount of miles left is less than 200
else{
    console.log("You only have " + gallonsLeft + " gallons of gas in your tank, better get gas now while you can!");
}

//Check the Login!
//Givens
//Make prompts for the user to input username and password
var userName = prompt("Please enter your username.");
var userPass = prompt("Please enter your password.");
//Make prompts storing the correct username and password
var correctName = "Lee Lewis";
var correctPass = "fullsailSDI";
//if the username matches the correct name and the password matches the correct password
if(userName === correctName && userPass === correctPass){
    console.log("Welcome, " + userName + "!")
}
//if the username does not match the correct name but the password matches the correct password
else if(userName != correctName && userPass === correctPass){
    console.log("User not found. Try again.")
}
//if the username matches the correct name but the password does not match the correct password
else if(userName === correctName && userPass != correctPass){
    console.log("Password does not match our records.")
}
//Nothing will happen if none of the inputs match

