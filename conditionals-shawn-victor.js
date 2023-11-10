// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Write the code that will log true or false for the following:

// - Is 34 divided by 3 greater than 67 divided by 2?
console.log(34/3 > 67/2)

// - Does 5 evaluate to the same as "5"?
console.log(5 === "5")

// - Does 5 strictly equal "5"?
console.log(5 === "5")

// - Does !3 strictly equal 3?
console.log(!3 === 3)

// - Does `"LEARN".length` strictly equal 5 AND `"Student".length` strictly equal 7?
console.log("LEARN".length === 5 && "Student".length === 5)

// - Does `"LEARN".length` strictly equal 5 OR `"Student".length` strictly equal 10?
console.log("LEARN".length === 5 || "Student".length === 5)

// - Does `"LEARN"` contain the subset `"RN"`?
console.log("LEARN".includes("RN"))

// - Does `"LEARN"` contain the subset `"rn"`?
console.log("LEARN".includes("rn"))

// - Does `"LEARN"[0]` strictly equal `"l"`?
console.log("LEARN"[0] === "l")

// - Modify the code from the previous question to return `true`.
console.log("LEARN"[0] !== "l")

// Write a conditional statement for the following prompts. Make sure you try different options and change the variables to ensure properly working code.

// - Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

var myFood = 101

if(myFood <=100){
    console.log("in budget")
}
else if(myFood >= 101){
    console.log("Too broke")
}

// - Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = 50

if(hungry < 50){
    console.log("Youre hungry")
}
else {
    console.log("keep coding")
}


// - Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = 9

if(trafficLight === "green"){
    console.log("Go")
}
if(trafficLight === "yellow"){
    console.log("slow down")
}
if(trafficLight === "red"){
    console.log("Stop")
}
else{
    console.log("Somethings wrong")
}



// - Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
// - Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

// ### [🏔 Stretch Goals](https://github.com/learn-academy-2023-india/syllabus/blob/main/javascript/conditionals.md#-stretch-goals)

// Write a conditional statement for the following prompts.

// - Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
// - Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. **HINT**: Check out the [JavaScript typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).
// - Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes `!`, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes `!`, then log "That password is strong enough." Log "That is not a valid password." for every other input.



//Extra Credit

// const { exec } = require('child_process');

// const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

// exec(`open "${url}"`, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error: ${error}`);
//     return;
//   }
//   console.log(`Opening Rick Roll...`);
// });
