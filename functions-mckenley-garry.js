//Write a function named marco that returns "polo".
// const greeting = (polo) => {
//     return `polo`
// }
// console.log(greeting())

//Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// const greeting = (name) => {
//     return `Welcome,${name}!`
// }
// console.log(greeting("Bob"))

//Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const oddOrEven = (i) =>{
//     if ([i] % 2 === 1) {
//         return "odd"
//     }
//     else { return "even"}
// }
// console.log(oddOrEven(18))
    
//Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// const triple = (num1) => {
//     return num1 * 3
// }
// console.log(triple (75))

//Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// const multiply = (num1, num2) => {
//     return num1 * num2
// }
// console.log(multiply (6,7))

//Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// const divisibleBy = (num1, num2) => {
//     if (num1 % num2 === 0) {
//         return `${num1} is evenly divisible by ${num2}`
//     }
// }
// console.log(divisibleBy (15,7))
//Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (grade) => {
    if (grade >= 90) {
        return "A"
    }
    else if (grade >= 80) {
        return "B"
    }
    else if (grade >= 70) {
        return "C"
    }
    else if (grade >= 60) {
        return "D"
    }
    else if (grade >= 50) {
        return "F"
    }
}
console.log(assignGrade (70))

// if (gradePercentage === 100) {
//     console.log("Perfect score");
// } else if (gradePercentage >= 90) {
//     console.log("A");
// } else if (gradePercentage >= 80) {
//     console.log("B");
// } else if (gradePercentage >= 70) {
//     console.log("C");
// } else if (gradePercentage >= 60) {
//     console.log("D");
// } else if (gradePercentage > 0) {
//     console.log("F");
// } else {
//     console.log("No grade available");

//Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

//Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

//Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

//🏔 Stretch Goals
//The World Translator

//Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
//Have your function default to returning English.
//The Pluralizer

//Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
//Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".