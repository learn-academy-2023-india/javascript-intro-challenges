// Write a function named marco that returns "polo".
const marco = () => {
     return "polo"
    }
    console.log(marco())
    // --> "polo"

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
    return `Welcome, ${name}!`
   }
   console.log(greeting("Leo"))
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) => { 
 
    if(number % 2 == 0){
      return `${number} is even.`
    } else{
      return `${number} is odd.`
    } 
}
  console.log(oddOrEven(100))
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number2) => {
    var number2 = number2 * 3
    return `${number2}!`
   }
   console.log(triple(21))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
    return num1 * num2
  }
  
  console.log(multiply(10, 4))
  // output: 40
  

// const multiply = (number3, number4, number5) => {
//     var number5 = (number3 * number4)
//     return `${number5}`
//    }
//    console.log(multiply(2),(2),)
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

const divisibleBy = (numm1, numm2) => {
    if (numm1 / numm2)
    return `${numm1} is evenly divisible by ${numm2}.`
  }
  console.log(divisibleBy(10, 5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

const isLonger = (words1, words2) => {
    if (words1 < words2)
    return `${words2}.`
    else if (words1 > words2)
    return `${words1}`
    else 
    return `They're even`
  }

  console.log(isLonger("you", "no"))


// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

const greaterNum = (nummm1, nummm2) => {
    if (nummm1 < nummm2)
    return `${nummm2}.`
    else if (nummm1 > nummm2)
    return `${nummm1}`
    else 
    return `They're even`
  }
  console.log(greaterNum(70, 70))

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

const yelling = (scream) => {

    return `${scream.toUpperCase()}`
  }
  console.log(yelling("i love you!"))
