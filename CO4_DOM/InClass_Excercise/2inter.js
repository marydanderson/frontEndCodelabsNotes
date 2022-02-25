// Aim: Create a function that returns the number of true values in an array.

// Examples

// countTrue([true, false, false, true, false])    ➞    2

// countTrue([false, false, false, false])    ➞    0

// countTrue([])    ➞    0
// Notes

// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

const arrayItem = [false, true];
let totalTrues = 0;

function countTruths(array){
    if (array.length === 0 ) {
        return 0;
    }
    else {
        array.forEach(element => {
            if (element == true) {
                totalTrues++;
            }
        });
        console.log(`The number of truths are ${totalTrues}`)
        totalTrues = 0; //resets the value so you can run multiple arrays
    }
}

countTruths(arrayItem);
