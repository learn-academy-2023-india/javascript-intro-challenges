//Is 34 divided by 3 greater than 67 divided by 2?
console.log(34/3 <  67/2)
//Does 5 evaluate to the same as "5"?
console.log(5 && "5")
//Does 5 strictly equal "5"?
console.log(5 || "5")
//Does !3 strictly equal 3?
console.log(!3 === 3)
//Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("LEARN".length === 5 && "Student".length === 7)
//Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length === 5 || "Student".length === 10)
//Does "LEARN" contain the subset "RN"?
console.log("LEARN" !== "RN")
//Does "LEARN" contain the subset "rn"?
console.log("LEARN" !== "rn")
//Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0] === "l")
//Modify the code from the previous question to return true.
console.log("LEARN"[0] !== "l")


//Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var steakPrice = 100
if(steakPrice < 101){
   console.log("in budget")
}
//Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var foodSpot = "hungry"
if(foodSpot){
    console.log("eat food") 
}
else{
    console.log("keep coding")
}
//Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
// var trafficLight = "street"
// if(trafficLight === "green"){
//     console.log("go")
// }
// else if(trafficLight === "yellow"){
//     console.log("slow down")
// }
// else (trafficLight === "red"){
//     console.log("stop")
// }
    
//Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var number1 = 34
var number2 = 78
console.log(number1 + "is less than" + number2)
//Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var two = "even"
if(two === "even"){
    console.log("even")
}