//Deaven Brown
//February 26, 2015
//Functions Assignment

//Ask user which lottery numbers they would like to see
var userChoice = prompt("Would you like to see the numbers for the Florida lottery or for the PowerBall?");
//Make variables to hold the randomly generated numbers
var one = number();
var two = number();
var three = number();
var four = number();
var five = number();
var six = number();
//Make variable to hold PowerBall number
var powerBall = power();
//Declare function to verify the user wrote something into the prompt for userChoice
function makeSure(choice) {
    //Made a variable to count how many times the user had tried to fill in userChoice
    var tries = 1;
    //While userChoice is empty write another prompt
    while (choice === "") {
        choice = prompt("I really need an answer. Which would you like to see:\nFlorida lottery or PowerBall?");
        //If the user could not fill out the prompt after 5 tries log "Never mind!" and break from loop
        if(tries === 5){
            console.log("Never mind!");
            break;
        }
        //Increase tries by one each time this loop is ran to act as a counter
        tries = tries + 1;
    }
    //Return the value of choice
    return choice;
}
//If the user wants to see the results of the Powerball (modified for grammatical errors)
if (userChoice === "PowerBall" || userChoice === "powerball" || userChoice === "Powerball") {
    //Create a function that will produce a random number between 1 and 59
    function number() {
        var random = Math.round(Math.random() * 59);
        return random;
    }

    //Made a function for the PowerBall number so that it's value cannot be greater than 35.
    function power() {
        var random = Math.round(Math.random() * 35);
        //Return the value
        return random;
    }
    //Log in the console the winning numbers
    console.log("The winning numbers for tonight's PowerBall are " + one + ", " + two + ", " + three + ", " + four + ", " + five + ", and your winning PowerBall number is " + powerBall + ". Thank you for playing!");
}
//If the user wants to see the results of the Florida lottery
else if (userChoice === "Florida lottery" || userChoice === "Florida" || userChoice === "florida lottery"){
    //Made a function for the florida lottery so that it's value cannot be greater than 53
    function number() {
        var random = Math.round(Math.random() * 53);
        //Return the value
        return random;
    }
    //Log in the console the winning numbers
    console.log("The winning numbers for tonight's Florida lottery are " + one + ", " + two + ", " + three + ", " + four + ", " + five + ", and " + six + ". Thank you for playing!");
}
//Set userChoice equal to choice in the event the user did not enter anything the first time
userChoice = makeSure(userChoice);
//Run function
makeSure();
