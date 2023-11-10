// Write the code that will log true or false for the following:

// Is 34 divided by 3 greater than 67 divided by 2?
var myNumber = (34 / 3)
var myNumberq = (67 / 2)
console.log(myNumber > myNumberq)

// Does 5 evaluate to the same as "5"?
console.log(5 == "5")

// Does 5 strictly equal "5"?
console.log(5 === "5")

// Does !3 strictly equal 3?
console.log(!3 === 3)

// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length === 5 && "Student".length === 7)

// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length === 5 || "Student".length === 10)

// Does "LEARN" contain the subset "RN"?
console.log("LEARN".includes("RN"))

// Does "LEARN" contain the subset "rn"?
console.log("LEARN".includes("rn"))

// Does "LEARN"[0] strictly equal "l"?
console.log("LEARN".charAt(0) === "l")

// Modify the code from the previous question to return true.
console.log("LEARN".charAt(0) !== "l")


// Write a conditional statement for the following prompts. Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var myItem = 55
    if(myItem <= 100){
        console.log("in budget")
    }


// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var myHungry = true
    if(myHungry === true){
        console.log("eat food")
    }else {
        console.log("keep coding")
    }


// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var myTrafficLight = "red"
    if(myTrafficLight === "green"){
        console.log("go")
    }else if(myTrafficLight === "yellow"){
        console.log("slow down")
    }else {
        console.log("stop")
    }


// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var myNumber = 40
var myNumberTwo = 40

    if(myNumber > myNumberTwo){
        console.log(myNumber)
    }else if(myNumber < myNumberTwo){
        console.log(myNumberTwo)
    }else {
        console.log("the numbers are the same")
    }


// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var myNumber = 0


    if(myNumber % 2 !== 0){
        console.log("odd")
    }else if(myNumber === 0){
        console.log("zero")
    }else if(myNumber % 2 == 0){
        console.log("even")
    }
    else{
        console.log("No output")
    }

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, 
// if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

var myGrade = 65

    if(myGrade === 100){
        console.log("perfect score")
    }else if(myGrade >= 90 && myGrade <= 99){
        console.log("A")
    }else if(myGrade >= 80 && myGrade <= 89){
        console.log("B")
    }else if(myGrade >= 70 && myGrade <= 79){
        console.log("C")
    }else if(myGrade >= 60 && myGrade <= 69){
        console.log("D")
    }else if(myGrade <= 59 && myGrade >= 1){
        console.log ("F")
    }else{
        console.log("no grade available.")
    }
    //