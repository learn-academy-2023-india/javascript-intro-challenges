// Is 34 divided by 3 greater than 67 divided by 2?
console.log((34 / 3) > (67 /2 ))
// Does 5 evaluate to the same as "5"?
console.log( 5 == "5")
// Does 5 strictly equal "5"?
console.log( 5 === "5" )
// Does !3 strictly equal 3?
console.log( 3 === !3)
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
var learn = "LEARN"
var Student = "student" 
console.log((learn.length === 5) && (Student.length === 7))
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log((learn.length === 5) || (Student.length === 10))
// Does "LEARN" contain the subset "RN"?
console.log(learn.indexOf(4,5) === ["RN"])
// Does "LEARN" contain the subset "rn"?
console.log(learn.indexOf(4,5) === ["rn"])
// Does "LEARN"[0] strictly equal "l"?
console.log(learn[0] === "l")
// // Modify the code from the previous question to return true.
console.log(learn[0] === "L")

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 50 
var price = 100
if(item < price  ){
   console.log("in budget")
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = false
if (hungry){
    console.log ("eat food")
}
else {
    console.log("keep coding")
    
}
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "red"
if(trafficLight === "green") {
    console.log('go')
} else if( trafficLight === "yellow"){
    console.log("slow down")
} else {
    console.log("stop")
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
const leo = 60
const keoni = 60
if(keoni > leo){
    console.log(keoni)
}
else if (keoni === leo){
    console.log("the numbers are the same")
}
else {(keoni < leo)
    console.log(leo)
}
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
const number = 5
    if (number === 0) {
      console.log("The number is zero.")
    } else if (number % 2 === 0) {
      console.log("The number is even.")
    } else {
      console.log("The number is odd.")
    }

  
