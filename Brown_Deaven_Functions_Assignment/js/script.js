//Deaven Brown
//February 26, 2015
//Functions Assignment

//Ask user which lottery numbers they would like to see
var userChoice = prompt("Would you like to see the numbers for the Florida lottery or for the PowerBall?");
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
//Make a function to get random numbers
function num(min, max){
    //Build an array to house the numbers given by the function
    var randomArray = [];
    //Create a loop that gives us six random numbers
    for (var i = 0; i < 6; i++) {
        //Create the formula to find a random number
        var r = Math.random() * (max - min) + min;
        //Round the random number to the nearest whole number
        r = Math.round(r);
        //Set the value of randomArray equal to each of the output values of r
        randomArray[i] = r;
    }
    //Return the value of randomArray
    return randomArray;
}
//If the user wants to see the results of the PowerBall (modified for grammatical errors)
if (userChoice === "PowerBall" || userChoice === "powerball" || userChoice === "Powerball") {
    //Create variable using the above function to get a random number between 1 and 59
    var numbers = num(1, 59);
    //Create variable using the above function to get a random number between 35
    var powerBall = num(1, 35);
    //If any numbers match get new numbers
    if (numbers [0] === numbers [1] || numbers [0] === numbers [2] || numbers [0] === numbers[3] || numbers[0] === numbers[4] || numbers [1] === numbers [2] || numbers [1] === numbers [3] || numbers [1] === numbers[4] || numbers [2] === numbers [3] || numbers [2] === numbers [4] || numbers [3] === numbers [4]){
        num(1, 59);
    }
    //Log in the console the winning numbers using the first 5 numbers of the array
    console.log("The winning numbers for tonight's PowerBall are " + numbers [0] + ", " + numbers [1] + ", " + numbers[2] + ", " + numbers [3] + ", " + numbers [4] + ", and your winning PowerBall number is " + powerBall [0]+ ". Thank you for playing!");
}
//If the user wants to see the results of the Florida lottery
else if (userChoice === "Florida lottery" || userChoice === "Florida" || userChoice === "florida lottery"){
    //Create variable using the above function to get a random number between 1 and 53
    var florida = num(1, 53);
    //If any of the numbers match get new numbers
    if (florida [0] === florida [1] || florida [0] === florida [2] || florida [0] === florida[3] || florida[0] === florida[4] || florida[0] === florida[5] || florida [1] === florida [2] || florida [1] === florida [3] || florida [1] === florida[4] || florida[1] === florida[5] || florida [2] === florida [3] || florida [2] === florida [4] || florida [2] === florida[5] || florida [3] === florida [4] || florida[3] === florida [5] || florida [4] === florida [5]){
        num(1, 53);
    }
    //Log in the console the winning numbers using all of the numbers of the array
    console.log("The winning numbers for tonight's Florida lottery are " + florida + ". Thank you for playing!");
}
//Set userChoice equal to choice in the event the user did not enter anything the first time
userChoice = makeSure(userChoice);
//Run function to make sure the user has inputted data into userChoice
makeSure();