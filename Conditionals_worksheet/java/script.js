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
    console.log("Welcome, " + userName + "!");
}
//if the username matches the correct name but the password does not match the correct password
else if(userName === correctName && userPass != correctPass){
    console.log("Password does not match our records.");
}
//if the username does not match the correct name but the password matches the correct password
else{
    console.log("User not found. Try again.");
}
/*
I made this else statement because I wanted to console.log the above statement if the
user input is not correct. Doing so makes the machine log it even if the password is correct
I had originally made an else if statement that does the exact same task this simple else
statement does, but it was more coding that was needed and it made nothing happen if neither
the username or password matched. Doing this delivers a result no matter the condition
and still fulfills the requirement of logging if the username does not match and the pass does.
*/

//Movie Ticket Price
//Givens
//Prompt for what time the user wants to see the movie and their age
var movieTime = prompt('What time would you like to see your movie?');
var userAge = prompt('Pardon me, what is your age?');
//Make variable holding ticket prices. Not needed, but I'll do it just because
var fullPrice = "$12.00";
var discountPrice = "7.00";
//if the users age is greater than or equal to 55
if(userAge >= 55){
    console.log("You are eligible for the senior citizen discount. The ticket price is " + discountPrice + ".");
}
//if the users age is not greater than or equal to 55, but the movie time falls between 3 and 5 o'clock
else if(movieTime >= 3 && movieTime <= 5){
    console.log("Your movie time falls between 3 and 5 o'clock. The ticket price is " + discountPrice + ".");
}
//If the users age is less than 55 and the movie does not fall between 3 and 5 o'clock
else{
    console.log("There are no discounts for that time. The ticket price is " + fullPrice + ".");
}