
// Create a for loop that logs each number from 1 - 20.
for (let i = 1; i < 21; i++) {
    console.log(i)
  }
// Create a for loop that logs every other number from 1 - 20.
for (let i = 1; i < 21; i += 2) {
    console.log(i);
}
// Create a for loop that logs the result of each number from 1 - 20 tripled.

for (let i = 1; i < 21; i++) {
  console.log([i] * 3)}
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".

const nums = [3, 57, -9, 20, 67]
// Create the code that will log the largest number from the array.
const largestNumber = Math.max(...nums)
console.log(largestNumber)
// Create the code that will log the smallest number from the array.
let minNumber = nums[0]
for (let i = 1; i < nums.length; i++) {
    if (nums[i] < minNumber) {
      minNumber = nums[i];
    }
  }
  console.log(minNumber)
// Create the code that will log the remainder of each number when divided by 2.
for (let i = 0; i < nums.length; i++) {
  const remainder = nums[i] % 2
  console.log(remainder)}

// Expected output: 1, 1, -1, 0, 1


const myString = "learn student"
// Create the code that will log the number of times the letter "e" occurs in the string.

// Create the code that will log every other character in the string.