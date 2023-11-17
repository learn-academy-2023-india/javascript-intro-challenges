// Write a function named marco that returns "polo".
const marco = () => {
    return "polo"
} 
console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
    return `Welcome, ${name}!`
}
console.log(greeting("Xavier"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// input of a number
// output either string odd or string even
const oddOrEven = (number) => {

    if(number % 2 === 0){
        return "even"
    }
    else if(number % 2 !== 0){
        return "odd"
    }
}
console.log(oddOrEven(10))
console.log(oddOrEven(11))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number) => {
        return(number * 3)
}
console.log(triple(5))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (numb1, numb2) => {
    return(numb1 * numb2)
}
console.log(multiply(4, 5))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num1, num2) => {
    if(num1 % num2 === 0) {
        return `${num1} is evenly divisble by ${num2}`
    } 
}
console.log(divisibleBy(10,5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (num) => {
    if(num >= 90) {
        return `A`
    }
    else if(num > 80) {
        return `B`
    }
    else if(num >70) {
        return `C`
    }
    else if(num <69) {
        return `F`
    }
}
    console.log(assignGrade(77))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (str1, str2) => {
    if(str1.length > str2.length) return str1
    else return str2
}
console.log(isLonger("str1","str2"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = (num1, num2) => {
    if(num1 >= num2) return num1
    else return num2
}
    console.log(greaterNum(9, 10))

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (str) => str.toUpperCase()
    console.log(yelling("learn"))