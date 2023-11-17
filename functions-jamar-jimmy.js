// Write a function named marco that returns "polo".
// const marco = () => {
//     return "polo"
// }
// console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// const greeting = (name) => {
//     return `Welcome, ${name}!`
// }
// console.log(greeting('Jamar'))
// console.log(greeting('Jimmy'))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const oddEven = (num) => {
// if(num % 2 === 0)
//     return "EVEN"
//  else {
//     return "ODD"
// }
// }
// console.log(oddEven(3))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// const triple = (num) => {
//     return num * 3
// }
// console.log(triple(3))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// const multiply = (num1, num2) => {
//     return num1 * num2
// }
// console.log(multiply(5, 6))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// const divisibleBy = (num1, num2) => {
//     if(num1 % num2 === 0)
//     return (`${num1} is evenly divisible by ${num2}.`)
// else {return "NOT EVENLY DIVISIBLE"}
// }

// console.log(divisibleBy(10, 5))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// const assignGrade = (num) => {
//     if(num >= 90 && num <= 99)
//     return "A"
//     else if(num >= 80 && num <= 89)
//     return "B"
//     else if(num >= 70 && num <= 79)
//     return "C"
//     else if(num >= 60 && num <= 69)
//     return "D"
//     else 
//     return "F"
// }
// console.log(assignGrade(95))
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// const str1 = ""
// const str2 = ""
// let isLonger = (str1, str2) => {
//     if(str1.length > str2.length)
//     return (str1)
//     else if(str1.length < str2.length)
//     return (str2)
//     else return ("both are equal")
// }
// console.log(isLonger("hey hi how you doing?", "how you doing?"))
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// const greaterNum = (num1, num2) => {
//     if(num1 > num2)
//     return num1
//     else if(num1 < num2)
//     return num2
//     else return "EQUAL"
// }
// console.log(greaterNum(69,69))
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
// const str1 = ""
// let yelling = (str1) => {
// return str1.toUpperCase()
// }
// console.log(yelling("we are finished!"))
// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// const helloWorld = (languageCode) => {
//     const greetings = {
//       'en': 'Hello World!',
//       'es': '¡Hola Mundo!',
//       'de': 'Hallo Welt!',
//       'fr': 'Bonjour le monde!',
//       'it': 'Ciao Mondo!'
//     }
//     return greetings[languageCode] || 'Hello World!'
//   }
//   console.log(helloWorld('es'))

// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
const pluralizer = (num, noun) => {
    const collectiveNouns = {
        "sheep": "sheep",
        "goose": "geese",
        "child": "children",
        "person": "people",
        "species": "species",
    }
      if(collectiveNouns.hasOwnProperty(noun)) {
        const pluralizedNoun = collectiveNouns[noun]
        const singularNoun = noun
        return `${num} ${num === 1 ? singularNoun : pluralizedNoun}`
    } else {
        const pluralizedNoun = noun + (num === 1 ? '' : 's')
        return `${num} ${pluralizedNoun}`
    }
}
console.log(pluralizer(1, "people"))
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
