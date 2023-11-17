// Write a function named marco that returns "polo".
const marco = () => {
    return "polo"
}
console.log(marco()) 
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
    return `Welcome, ${name}!`
}
console.log(greeting("Sakaa")) 
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) => {
    if (number %2 === 0) {
        return "Even"
    }
    else if (number %2 === 1){
        return "Odd"
    }
    else {
        return "Type an integer"
    }
}
console.log(oddOrEven(1.4))
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number) => {
    return number * 3
}
console.log(triple(3))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (number1, number2) => {
    return number1 * number2
}
console.log(multiply(4,3))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) 
// logs "10 is evenly divisible by 5".
const divisibleBy = (num1, num2) => {
    if (num1%num2 === 0)
        return `${num1} is evenly divisible by ${num2}`
    else 
        return`${num1} is NOT evenly divisible by ${num2}`
}
console.log(divisibleBy(10,5))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (grade) => {
    if ( grade <60 && grade >= 0){
        return "Grade F"
    }
    else if ( grade <70 && grade >= 60){
        return "Grade D"
    }  
    else if ( grade <80 && grade >= 70){
        return "Grade C"
    }
    else if ( grade <90 && grade >= 80){
        return "Grade B"
    }
    else if ( grade <=100 && grade >= 90) {
        return "Grade A"
    }
    else {
        return "Enter a number between 0-100"
    }
}
console.log(assignGrade(100))
console.log(assignGrade(90))
console.log(assignGrade(105))
console.log(assignGrade(75))
console.log(assignGrade(52))
console.log(assignGrade(-1))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (string1, string2) => {
    if (string1.length > string2.length){
        return string1
    }
    else {
        return string2
    }
}
console.log(isLonger("Brandon", "Tuguldur"))
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum= (num1, num2) => {
    if (num1> num2){
        return num1
    }
    else {
        return num2
    }
}
console.log(greaterNum(10,7))
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (string) => {
    return string.toUpperCase()
}
console.log(yelling("done for today"))

// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer
 
const helloWorld = (language) => {
    if(language = es)
    return "hola mundo"
     
}

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
// pluralizer

// /(5, "cat")
// // output: "5 cats"

// pluralizer(1, "dog")
// // output: "1 dog"

// pluralizer(9, "dog")
// // output: "9 dogs"

// pluralizer(1, "people")
// // output: "1 person"

// pluralizer(3, "people")
// // output: "3 people"
