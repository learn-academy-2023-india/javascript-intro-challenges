// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?
console.log(34 / 3 > 67 / 2)
// Does 5 evaluate to the same as "5"?
console.log(5 === '5')
// Does 5 strictly equal "5"?
console.log(5 === '5')
// Does !3 strictly equal 3?
console.log(!3 === 3)
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
const mainString = "LEARN"
console.log(mainString.length === 5 && "Student".length === 7)
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log(mainString.length === 5 || "Student".length === 10)
// Does "LEARN" contain the subset "RN"?
console.log(mainString.includes("RN"))
// Does "LEARN" contain the subset "rn"?
console.log(mainString.includes("rn"))
// Does "LEARN"[0] strictly equal "l"?
console.log(mainString[0] === "l")
// Modify the code from the previous question to return true.
console.log(mainString[0] === "L")

// Write a conditional statement for the following prompts. Make sure you try different options and change the variables to ensure properly working code.
const milk = 10
const veggies = 25
const eggs = 20
const fruits = 30
const dranks = 70
// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

if(milk + veggies + eggs < 100)
console.log("in budget")

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = 6
if (hungry >= 5){
    console.log("eat food")
} else{
    console.log("KEEP CODING")
}
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = 'colourOfLight'
if (trafficLight === 'green') {
    console.log ('GO')
} else if (trafficLight === 'yellow') {
    console.log('slow down')
} else if (trafficLight === 'red') {
    console.log('STOP')
} else console.log('PULL OVER')
    

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

// var firstNum = 
// var secondNum = 
// if (firstNum > secondNum){
//     console.log(firstNum)
// } else if (firstNum < secondNum) {
//     console.log(secondNum)
// } else if (firstNum = secondNum) {
//     console.log("the numbers are the same")
// } else console.log("did you enter numbers?")
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

// var thisNum = 
// if (thisNum === 0) {
//     console.log ('zero')
// } 
// else if (thisNum % 2 === 0) {
//     console.log('even')
// } 
// else { console.log ('odd')
// }

// 🏔 Stretch Goals
// Write a conditional statement for the following prompts.

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var grade = %

if (grade = 0){
    console.log('no grade available')
}
else if (grade >= 1 && grade <= 99) {
console.log('try again')
}
else if (grade = 100){
    console.log('perfect score')
}
else console.log('take the test')
// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
// // Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.