// // * string * \\
// const name = "Mary";
// console.log(name);

// // * number * \\
// const age = 10;
// console.log(age);

// // * boolean * \\
// true;
// // * special * \\
// const special = null;
// console.log(special);

// // * object * \\
// const food = {
//     type: "dessert",
//     name: "cake"
// }
// console.log(food)

// // * array * \\
// const dinner = ['chicken', 'beef'];
// console.log(dinner[0])

// // * Declaring Variables * \\

//exercise 2 ========= intermediate

// const foods = [
//     {name: 'donuts', type: 'dessert'},
//     {name: 'chicken', type: 'dinner'}
// ];

// const foodList = document.querySelector('.food-list');

// for (x of foods) {
//     foodName = x.name;
//     const foodData = document.createElement('li');
//     foodData.innerText = foodName;
//     foodList.appendChild(foodData);
// }

// ========= EXERCISE 3 ADVANCED =========


function arrayOfMultiples(num, length) {
    let array = [];

    for (i = 1; i <= length; i++) {
        //start w/ first num 
        const newItem = i*num;
        console.log(newItem);
        array.push(newItem)
        // array[i] = num;
        // console.log(array)
    }
    console.log(array)
}

arrayOfMultiples(7,5);
