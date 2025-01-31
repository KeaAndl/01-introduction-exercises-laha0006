// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const sum = +numberOne + +numberTwo;
console.log(sum);

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const anotherSum = +anotherNumberOne + +anotherNumberTwo;
console.log(anotherSum.toFixed(2));

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;


// Show in the console the avg. with 5 decimals

const sumOfThree = one + two + three;
const average = sumOfThree/3;
const numOfDecimals = 5

console.log(average.toFixed(numOfDecimals));


// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const c = letters.charAt(2);
console.log(c);


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const factWithCaptialJ = fact.replace("j", "J");
console.log(factWithCaptialJ);


// --------------------------------------



