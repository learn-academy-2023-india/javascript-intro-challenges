// Create a for loop that logs each number from 1 - 20.
//for(i=1; i<21; i=i+1){
//    console.log(i)
//}
// Create a for loop that logs every other number from 1 - 20.
//for(i=1; i<21; i=i+2){
 //   console.log(i)
//}

// Create a for loop that logs the result of each number from 1 - 20 tripled.
//var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//for(i=0; i<arr.length; i++){
//   console.log(arr[i]*3)
//}
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
    // Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
for (var i=0; i<=20; i++) {   
    if (i === 0) {
        console.log(i);
}
    else if (i % 2 === 0) {
        console.log(i);   
}
    else {
        console.log("odd");
    }
} 
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// for (let i=0;i<20;i++){
//     if (arr[i]%2===1){
//        console.log('odd')
//     }  else {
//        console.log(arr[i])
//     }
// }