// Write a function named marco that returns "polo".
//make a function marco
const marco = () => {

//output returns "polo"
return "polo"
}
console.log(marco())
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
//write a function named greeting
// var personName = ["Hiro", "Chantel", "Sarah"]
//need an argument with different names
const greeting = (name) => {
return `Welcome, ${name}!`

//output returns "Welcome, <person's name here>!"
}
// console.log (greeting(personName[0]))
console.log(greeting("Hiro"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
//write a function named oddOrEven
//input is 1 number
//the output is either a string of "odd" or "even"
const oddOrEven = (number) => {
        if (number % 2 === 0){
            return "even"
        } else {
            return "odd"
        }
     
}              
    console.log(oddOrEven(2))

// need arguemnt that takes a number

// //returns whether the number is odd or even
// console.log(oddOrEven())


// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
//write a function named triple
//input 1 number

// output multiplied by 3
const triple = (number) => {
    return number * 3
}
console.log(triple(1))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (firstNumb, secondNumb) => {
    return firstNumb * secondNumb
}
console.log(multiply(3, 5))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (firstNumb, secondNumb) => {
    return firstNumb % secondNumb
}
console.log(divisibleBy(10,5))
console.log("10 is evenly divisible by 5")

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (score) => {
    if(score >= 90){
        return "A"
    } else 
        return "F"
} 
console.log(assignGrade(89))
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
//need to make a fuction named isLonger
//input two strings as an argument
//output is which string is longer

const isLonger = (firstWord, secondWord) => {
    if(firstWord.length > secondWord.length){
        return firstWord
    } else if (secondWord.length > firstWord.length){
        return secondWord
    } else {
        return "They're the same!"
    }
}
console.log(isLonger("hello", "Bye"))
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = (firstNumb, secondNumb) => {
    if(firstNumb > secondNumb){
        return firstNumb
    } else if(secondNumb > firstNumb) {
        return secondNumb
    } else {
        return "They're the same"
    }
}
console.log(greaterNum(50,50))
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (iWantToArgue) => {
 return iWantToArgue.toUpperCase()
}
console.log(yelling("iWantToArgue"))