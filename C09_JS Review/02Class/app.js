// <---- =============== EXERCISE 2 =============== ---->

// Dynamically display a list of food items and prices using HTML & JavaScript

//  Create a list of objects, each having a food name and its price
//  Loop over that list, dynamically create a new list item <li></li> with the food name inside, and append that item to an existing HTML <ul></ul> element

// const foodMenu = [
//     {
//     food: 'apple',
//     price: 1,
//     },
//     {
//     food: 'pizza',
//     price: 10.40,
//     },
//     {
//     food: 'pie',
//     price: 9,
//     }
// ];

// const htmlFoodList = document.querySelector('.food-list');

// function listMenu(arrayOfItems) {

//     for (let i = 0; i < arrayOfItems.length; i++) {
//         const childNode = document.createElement('li');
//         // console.log(childNode)
//         // console.log(childNode.innerHTML = arrayOfItems[i]);
//         childNode.innerText = arrayOfItems[i].food;
//         htmlFoodList.appendChild(childNode)
//     }
// }

// listMenu(foodMenu);


// <---- =============== EXERCISE THREE =============== ---->
// Aim: Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// Examples

// arrayOfMultiples(7, 5)    ➞    [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10)    ➞    [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6)    ➞    [17, 34, 51, 68, 85, 102]
// Notes

// Notice that num included in the returned array.

function arrayOfMultiples(num, length) {
    const starterArray = [];
    for (let i = 1; i <= length; i++) {
        const newItem = i*num
        starterArray.push(newItem)
    }
    console.log(starterArray)
}

arrayOfMultiples(7, 5);
arrayOfMultiples(12, 10) 

