//     ======  EXERCISE 1 (BASIC) Aim: Create a function that calculates the area of a triangle given the base and height as arguments. Call the function a few times with different inputs.

function areaTriangle(base, height) {
    const area = 0.5*base*height;
    console.log(`Area of the triangle with base ${base}  & height ${height} is ${area}`);
}

areaTriangle(2,2);
areaTriangle(1,2)

//  END EXERCISE 1


//     ======  EXERCISE 2: Write a function that returns an array containing all the numbers inclusive to that range given the start and end values. See examples below.
// reversibleInclusiveList(1, 5)    ➞    [1, 2, 3, 4, 5]

// reversibleInclusiveList(2, 8)    ➞    [2, 3, 4, 5, 6, 7, 8]

// reversibleInclusiveList(10, 20)    ➞   [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// reversibleInclusiveList(24, 17)    ➞   [24, 23, 22, 21, 20, 19, 18, 17]

function rangeValues(x, y) {
    const array = [];
    if (x < y) {
        for (let i = x; i <= y; i++) {
            // console.log(x)
            array.push(i)
        }
    }
    else { // y < x
        for (let i = x; i >= y; i--) {
            // console.log(y)
            array.push(i)
        }
    } 
    return array;
}

const list = rangeValues(24,17);
console.log(list)

// END EXERCISE 2


// ======  EXERCISE 3: Aim: Create a function that takes three collections of arguments and returns the sum of the product of the grouped numbers.

// product([[1,2],[1,1],[2,3]])    ➞    9
// // 1 * 2 + 1 * 1 + 2 * 3

// product([[10,2],[5,0],[2,3]])    ➞    26
// // 10 * 2 + 5 * 0 + 2 * 3

// product([[1,2],[2,3],[3,4]])   ➞    20
// // 1 * 2 + 2 * 3 + 3 * 4

// product([[1,2],[0,3],[3,0]])    ➞    2
// // 1 * 2 + 0 * 3 + 3 * 0

function product(array) {
    let sumOfProducts = 0;
    array.forEach((subArrayValue) => {
        sumOfProducts += subArrayValue[0] * subArrayValue[1]
    });

    return sumOfProducts
    
}



const testOne = product([[1,2],[1,1],[2,3]])
console.log(testOne)


