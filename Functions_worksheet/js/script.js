//Deaven Brown
//February 26, 2015
//Functions Worksheet

//Circumference
var radius = 12;
var circumference = calculate(radius);

function calculate(radius){
    return 3.14 * (2 * radius);
}

console.log("The circumference of the circle is " + circumference + ".");

//Stung!
var weight = 450;
var stings = calculate(weight);

function calculate(weight){
    return 8.666666667 * weight;
}

console.log("It takes " + stings + " bee stings to kill this animal");