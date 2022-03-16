// <---- =============== EXERCISE 2 =============== ---->
// Aim: Create an application that, on button click, runs a function that prints out a users name, age, and occupation

//  Create the HTML with a button
//  Create a function that takes in a user object
//  Print each item in the user object out in a string to the console

// // <---- =============== HTML SELECTORS =============== ---->
// const userOne = {name: 'Mary', age: 29, occupation: 'future developer'};
// const button = document.querySelector('.show-user');
// const userText = document.querySelector('.user-info');


// // <---- =============== FUNCTIONS =============== ---->
// function showUser(inputOfUser) {
//     console.log(`${inputOfUser.name}, ${inputOfUser.age}`)
//     userText.innerHTML = inputOfUser.name;
// }

// // <---- =============== EVENT LISTENERS =============== ---->
// button.addEventListener('click', showUser(userOne))


// <---- =============== EXERCISE 3 =============== ---->

// Exercise #3: Advanced
// Aim: Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically and their corresponding values in the same order.

// Examples

// keysAndValues({ a: 1, b: 2, c: 3 })
//    ➞    [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
//    ➞    [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
//    ➞    [["key1", "key2", "key3"], [true, false, undefined]]


function keysAndValues()