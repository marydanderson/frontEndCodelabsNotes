// ## Exercise #3: Advanced

// **Aim**: Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically and their corresponding values in the same order.

// _Examples_

// ```js
// keysAndValues({ a: 1, b: 2, c: 3 })
//    ➞    [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
//    ➞    [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
//    ➞    [["key1", "key2", "key3"], [true, false, undefined]]
// ```




//declare object
const keysAndValues = { a: 1, b: 2, c: 3 };
// console.log(keysAndValues.a) CHECK IF OBJECTS IS DECLARED --> OK


//create nested array w/ each key & value [[key1, value1], [key2, value2]]
const arrayKeysValues = Object.entries(keysAndValues);
console.log(arrayKeysValues)
console.log(arrayKeysValues.length)

//loop through the array of arrays, use index to grab the keys
//loop through the array of arrays, use index to grab the values
for (i=0; i < arrayKeysValues.length; i++) {
    let childArray = arrayKeysValues[i];
    for (x = 0; x < childArray.length; x++) {
        console.log(childArray)
    }


    }
//     console.log(arrayKeysValues[i])

