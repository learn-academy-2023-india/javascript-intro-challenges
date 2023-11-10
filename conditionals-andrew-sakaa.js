// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?
console.log(34/3>67/2)
//False

// Does 5 evaluate to the same as "5"?
console.log(5==="5")
//False

// Does 5 strictly equal "5"?
console.log(5=== "5")
//False

// Does !3 strictly equal 3?
console.log(!3==="3")
//False

// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length==5 && "STUDENT".length==7)
//True

// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length==5 || "STUDENT".length==10)
//True

// Does "LEARN" contain the subset "RN"?
const LEARN = "RN"
console.log(LEARN === "RN")
//Yes

// Does "LEARN" contain the subset "rn"?
console.log(LEARN==="rn")
//False

// Does "LEARN"[0] strictly equal "l"?
console.log(LEARN[0]==="l")
//False

// Modify the code from the previous question to return true.
console.log(LEARN==="RN")
//True

// Write a conditional statement for the following prompts. Make sure you try different options and change the variables to ensure properly working code.


// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var mp3= "100"
if (mp3 >= 100){
    console.log("in budget")
}
//in budget

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry1 = "Yes"
if (hungry1 = "Yes"){
    console.log("eat food")
} else { 
    console.log("keep coding")
}

var hungry2= "No"
if (hungry2 === "Yes"){
    console.log("eat food")
} else { 
    console.log("keep coding")
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
const trafficLight = "green"

if (trafficLight === "green") {
  console.log("go")
} else if (trafficLight === "yellow") {
  console.log("slow down")
} else {
  console.log("stop.")
}
//In order to see different results, swap out line 65 quotations.

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
const number = 9

if (number === 9) {
  console.log(`${number} the numbers are the same`)
} else if (number < 8) {
  console.log(`${number} that is too small`)
} else { (number > 10) {
    console.log(`${number} that is too big`)
} 


// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
