var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.
var groceryList = ["chips", "dip", "cookies", "soda"]

// Write the code that will add "granola" to the end of the array without altering the original array.
var groceryList = ["chips", "dip", "cookies", "soda"]
var snack = ['granola']
console.log(groceryList.concat(snack))

// Write the code that will return a subset of the array containing only "chips" and "dip".
console.log(groceryList.slice(0,2))

// Write the code that will add "beans" to the "chips" and "dip" array.
var groceryList = ["chips", "dip", "cookies", "soda"]
var groceryList2 = ["beans"]
var snack = ["granola"]
console.log (groceryList.slice(0,2).concat(groceryList2))