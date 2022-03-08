// <------------======= EXCERCISE 1 ======------------->
// Aim: Write a function redundantReturn that takes in a string str and returns a function that returns str.

function redundantReturn(str) {
    return function inner() {
        return str
    };
}

const newString = redundantReturn('this');
console.log(newString());


// come back to ^^^^^


// <------------======= EXCERCISE 2 ======------------->
// Closures are functions that remember their lexical environments. Lexical environments mean the environment in which the function was declared.

function parent(x) {
    return function closure() {
      // Closure is declared here.
      return x;
    };
  }
  
  const remember = parent("remembers me");
  // Seems like the variable x would be gone after
  // parent is executed, but it's not.
  
  console.log(remember())

  // Returns "remembers me" because the inner
  // function remembers x.






// <------------======= EXCERCISE 3 ======------------->
// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function with the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

// drinks = [
//   { name: "lemonade", price: 50 },
//   { name: "lime", price: 10 },
// ];
// The output of the sorted drinks object will be:

// Examples
// sortDrinkByPrice(drinks)    ➞    [{name: "lime", price: 10}, {name: "lemonade", price: 50}]


function sortDrinkByPrice(drinkArray) {
    filteredPrice = drinkArray.sort(function(a, b) {
        return a.price - b.price
    });
    console.log(filteredPrice)
}

drinks = [
  { name: "lemonade", price: 50 },
  { name: "lemonade", price: 100 },
  { name: "lime", price: 10 },
];
sortDrinkByPrice(drinks)







// <------------======= EXCERCISE 4 ======------------->
// Aim: Create the fun÷ction that takes an array with objects and returns the sum of people's budgets.

// Examples

// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ])    ➞    65700

// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ])    ➞    62600

let total = 0;
function getBudgets(budgets) {
    budgets.forEach(element => {
        total = total +  element.budget;
    });

    console.log(total)
    total = 0;
}

getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]);

getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
])




// <------------======= EXERCISE 5 ======------------->
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples

// toArray({ a: 1, b: 2 })    ➞    [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 })    ➞    [["shrimp", 15], ["tots", 12]]

// toArray({})    ➞    []


function toArray(object) {
   console.log(Object.entries(object))
}

toArray({ 
    a: 1, 
    b: 2 }) 
