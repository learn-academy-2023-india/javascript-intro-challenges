// Is 34 divided by 3 greater than 67 divided by 2?
console.log(34/3 > 67/2)
// Does 5 evaluate to the same as "5"?
console.log(5 == "5")
// Does 5 strictly equal "5"?
console.log(5 === "5")
// Does !3 strictly equal 3?
console.log(!3 === 3)
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length === 5 && "Student".length === 7)
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length === 5 || "Student".length === 7)
// Does "LEARN" contain the subset "RN"?
const str1="LEARN";
const substr1="RN";
console.log(str1.includes(substr1));
// Does "LEARN" contain the subset "rn"?
const str2="LEARN";
const substr2="rn";
console.log(str2.includes(substr2));
// Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0]==="l")
// Modify the code from the previous question to return true.
console.log("LEARN"[0]==="L")


// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
const item = 100
if (item <= 100)
    console.log("in budget")
else {
    console.log("out of budget")
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

const hungry = "111"
if (hungry === "yes")
    console.log("eat food")
else if (hungry === "no")
    console.log("keep coding")
else {
    console.log("It is yes or no question")
}


// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
const trafficLight = "green"
if (trafficLight === "green")
    console.log("go")
else if  (trafficLight === "yellow")
    console.log("slow down")
else if  (trafficLight === "red")
    console.log("stop")
else {
    console.log("Please enter green, yellow, or red")
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
const number1 = 2
const number2 = 16
if (number1 > number2)
    console.log(number1)
else if (number1 < number2)
    console.log(number2)
else{
    console.log("the numbers are the same")
}
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
const number = 3.5
if (number === 0)
    console.log("zero")
else if (number%2 == 1)
    console.log("odd")
else if (number%2 == 0)
    console.log("even")
else {
    console.log("this is not an integer")
}


// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", 
// if the grade is zero log "no grade available."
const grade = 95
if (grade === 100)
    console.log("perfect score")
else if (grade === 0)
    console.log("no grade available")
else {
    console.log("keep working")
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. 
// HINT: Check out the JavaScript typeof operator.



const test = 12;
if (typeof test === 'boolean')
   console.log('boolean!');
else if (typeof test === 'number')
    console.log('number!')
else if (typeof test === 'string')
    console.log('string!')
else{
    console.log('undefined')
}


// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, 
// then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough."
//  Log "That is not a valid password." for every other input.
const password= "arlalsdfk!!"

if (password.length >= 12 && password.indexOf("!")>= 0 )
    console.log("That is a mighty strong password")
else if (password.length >= 8 && password.indexOf("!")>= 0 )
console.log("That password is strong enough")
else{
    console.log("That is not a valid password")
}