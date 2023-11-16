// Create a for loop that logs each number from 1 - 20.
for (let i = 0; i < 20; i++) {
    console.log(i)
}
// Create a for loop that logs every other number from 1 - 20.
for (let i = 19; i > 20; i--) {
    console.log(i)
}
// Create a for loop that logs the result of each number from 1 - 20 tripled.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] * 3)
}
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
for (let i = 0; i < arr.length; i = i + 1){
  if (arr[i] % 2 === 1) {
    console.log("ODD");
  } else {
    console.log(arr[i]);
  }
}


// const nums = [3, 57, -9, 20, 67]
// Create the code that will log the largest number from the array.
// Create the code that will log the smallest number from the array.
// Create the code that will log the remainder of each number when divided by 2.
// Expected output: 1, 1, -1, 0, 1