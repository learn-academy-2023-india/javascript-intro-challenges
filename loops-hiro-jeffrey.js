// Create a for loop that logs each number from 1 - 20.
for (let i = 0; i < 20; i++){
    console.log(i)
}

// Create a for loop that logs every other number from 1 - 20.
for (let i = 1; i <= 20; i += 2) {
    console.log(i); 
}
// Create a for loop that logs the result of each number from 1 - 20 tripled.
for (let i = 1; i <= 20; i++) {
    console.log(i * 3); 
}
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc

// Consider this variable:
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 1) {
        console.log("ODD");
    }
    else console.log(i);
}
 //const nums = [3, 57, -9, 20, 67]
// Create the code that will log the largest number from the array.
//const nums = [3, 57, -9, 20 ,67];
const largestNumber = Math.max (...numbers);
console.log("The largest number is:", largestNumber);
// Create the code that will log the smallest number from the array.
const smallestNumber = Math.min (...numbers);
console.log("The smallest number is:", smallestNumber);
// Create the code that will log the remainder of each number when divided by 2.
const nums = [3, 57, -9, 20 ,67];
for (let i = 0; i < numbers.length; i++);{
    const remainder = numbers[i] % 2;
    console.log(`remainder of ${numbers[i]} divided by 2 is: ${remainder}`);
}

// Expected output: 1, 1, -1, 0, 1
// Consider this variable:

// const myString = "learn student"
// Create the code that will log the number of times the letter "e" occurs in the string.
// Create the code that will log every other character in the string