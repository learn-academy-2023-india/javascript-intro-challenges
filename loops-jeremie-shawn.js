// Create a for loop that logs each number from 1 - 20.
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (i = 0; i < number.length; i++) {
    console.log(number[i])
}

// Create a for loop that logs every other number from 1 - 20.
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }

// Create a for loop that logs the result of each number from 1 - 20 tripled.
for (let i = 1; i <= 20; i++) {
    var result = i * 3;
    console.log(`${i} times 3: ${result}`);
}

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
for(let i = 1; i <= 20; i++){
    if(i%2===0){
        console.log(i);
    } else {
        console.log("ODD")
    }
}

// Consider this variable:
const nums = [3, 57, -9, 20, 67]
// Create the code that will log the largest number from the array.

console.log(Math.max(...nums)) 

// OR

let max = nums[0];
for (let i = 1; i < nums.length; i++) {
    // Update max if the current element is greater
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  
  // Log the largest number
  console.log("The largest number is:", max);
// Create the code that will log the smallest number from the array.

console.log(Math.min(...nums))

// OR

let min = nums[0];

// // Iterate through the array
for (let i = 1; i < nums.length; i++) {
//   // Update max if the current element is greater
   if (nums[i] < min) {
     min = nums[i];
   }
 }

 console.log("The smallest number is:", min);

// Create the code that will log the remainder of each number when divided by 2.
// Expected output: 1, 1, -1, 0, 1
for (let i = 0; i < nums.length; i++) {
  const remainder = nums[i] % 2;
  console.log(`Remainder of ${nums[i]} when divided by 2 is: ${remainder}`);
}

// Consider this variable:

// const myString = "learn student"
// Create the code that will log the number of times the letter "e" occurs in the string.
const myString = "learn student";
let count = 0;

// Iterate through the characters in the string
for (let i = 0; i < myString.length; i++) {
  // Check if the current character is 'e'
  if (myString[i] === 'e') {
    count++;
  }
}

// Log the number of times 'e' occurs in the string
console.log("The letter 'e' occurs", count, "times in the string.");

// Create the code that will log every other character in the string.
for (let i = 0; i < myString.length; i += 2) {
    console.log(myString[i]);
}

// 🏔 Stretch Goals
// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.
// Expected output: "5 is odd" "6 is even" "7 is odd" ...etc
for(let i = 1; i <= 15; i++){
    if(i % 2 === 0){
        console.log([i] + " is EVEN")
    } else {
        console.log([i] + " is ODD")
    }
}

// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.
// Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc
for(let i = 1; i <= 100; i++){
    if(i % 3=== 0){
        console.log("fizz")
    }
    if(i % 5=== 0){
        console.log("buzz")
    }
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz")
    }
}