// Write a function named marco that returns "polo".
const marco = () => {
    return "Polo!"
  }
console.log(marco())
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
  return `Welcome, ${name}!`
}
console.log(greeting("TOM"))
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) => {
  if (number % 2 == 0) {
    return `${number} is even`}
  
    else if (number % 2 == 1) 
  {return `${number} is odd`}
}
console.log(oddOrEven(3))
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (result) => {
  return `${result}` * 3
}
console.log(triple(3))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
  return num1 * num2
}
console.log(multiply(3, 3))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divide = (num1, num2) => {
  if (num1 % num2 == 0) {
    return `${num1} is divideable by ${num2}`}
    else if (num1 % num2 == 1)
    {return `${num1} is not divideable by ${num2}`
    }
  }
console.log(divide(10, 5))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.