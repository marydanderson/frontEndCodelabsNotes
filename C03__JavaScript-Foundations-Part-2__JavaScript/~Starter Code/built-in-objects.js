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
const keysAndValues = { Name: 5, age: 'b', c: 2, a: true, g: false, z: 'a'};


// 1 ---  create array of object keys only using built in Object method
// const arrayKeys = Object.keys(keysAndValues);
// console.log(arrayKeys)

// //create array of object values only using built in Object method
// const arrayValues = Object.values(keysAndValues);
// console.log(arrayValues)

// // use .sort() build in mtehod to alphabetize array (CONVERTS TO STRINGS, doesn't work for #s)
// // console.log(arrayKeys.sort())

// //method to sort numbers numerically
// const sortedKeys = arrayValues.sort(function(a,b){
//     return a-b
// });
// console.log(sortedKeys)

//need to have an IF statement that identifies if key is number or string

//CREATE THE FUNCTION, takes in object

let arrayKeys;
function disectObject(thisObject) {
        let finalArray;

    // =====   KEYS ========  DOESN'T WORK IF THERE ARE REPEAT KEYS and issue if lowerCase and big Case letter
        let arrayKeys = Object.keys(thisObject) // 1 ---  create array of object keys only using built in Object method
        const lowerCase = arrayKeys.map(element => {
            return element.toLowerCase();
        });
        let finalSortedKeys = lowerCase.sort();

    // =====   VALUES ======
        let arrayValues = Object.values(thisObject)
        let numberArray=[];
        let booleanArray=[];
        let stringArray=[];
        let sortedArrayValues=[];


        //determine if value is string or number or boolean
        arrayValues.forEach(function(x) {
            if (typeof(x) == "number") {
                // console.log(`${x} this is a number`)
                numberArray.push(x);
            }
            else if (typeof(x) == "boolean") {
                // console.log(`${x} this is boolean`)
                booleanArray.push(x)
            }
            else { //strings
                // console.log(`${x} this is a string`)
                stringArray.push(x)
            }
            //sort the values
            stringArray.sort()
            booleanArray.sort();
            numberArray.sort(function(a,b) {
                    return a-b
                });
        })
    // ===== END VALUES =======

    // create the final Value List w/ sorted items from above (numbers, string, booleans)
        sortedArrayValues.push(numberArray, stringArray, booleanArray);
        const finalValuesArray = sortedArrayValues.flat();

    // ===== FINAL ARRAY COMPILED W/ SORTED KEYS, VALUES ======
        finalArray = [finalSortedKeys, finalValuesArray];
        console.log(finalArray)

}

disectObject(keysAndValues)