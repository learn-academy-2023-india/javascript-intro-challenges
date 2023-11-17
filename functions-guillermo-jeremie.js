// Write a function named marco that returns "polo".
function marco(){
return "polo"
}
var result = marco()
console.log(result)


// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
function greeting(name){
    return "Welcome," + name + "!"
    }
    console.log(greeting("guillermo"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
function oddOrEven(num){
    if (num % 2 === 0) {
        return "even" 
    } 
    else {
        return "odd"
    }
}
var result = oddOrEven(1)
console.log(result)

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
function triple(num){
return num * 3
}
console.log(triple(2))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
function multiply(num1, num2) {
    return num1 * num2 
}
console.log(multiply(5, 6))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
function divisibleBy(num, div) {
    if (num % div === 0) {
        return num + "is evenly divisible by" + div
    }
    else {
        return num + "is not evenly divisible by" + div
    }
}
console.log(divisibleBy(1, 2))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
function 

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
// pluralizer(5, "cat")
// // output: "5 cats"

// pluralizer(1, "dog")
// // output: "1 dog"

// pluralizer(9, "dog")
// // output: "9 dogs"

// pluralizer(1, "people")
// // output: "1 person"

// pluralizer(3, "people")
// // output: "3 people"