// <---- =============== EXERCISE 2 =============== ---->
// Aim: Create a function that takes a string as input, capitalizes a letter if its ASCII code is even, and returns its lower case version if its ASCII code is odd.

// Examples

// asciiCapitalize("to be or not to be!")    ➞    "To Be oR NoT To Be!"

// asciiCapitalize("THE LITTLE MERMAID")    ➞    "THe LiTTLe meRmaiD"

// asciiCapitalize("Oh what a beautiful morning.")    ➞    "oH wHaT a BeauTiFuL moRNiNg."





// <---- =============== MY CODE IS BELOW =============== ---->

// console.log('ma'.charCodeAt(1));
//.charCodeAt(x) gives ASCII of the xth index of the string

function asciiCapitalize(stringInput) {
    //create string into Array
    stringArray = Array.from(stringInput);
    newArray =[] //empty string array for new capitalized values
    // console.log(stringArray);
    stringArray.forEach(element => {
        //check if string is even or odd ASCII
        if (element.charCodeAt() % 2 ==0  ) { //CHECK FOR EVEN 
            // console.log(`${element} ${element.charCodeAt()}: even`)
            newArray.push(element.toUpperCase())
        }
        else {
            // console.log(`${element} ${element.charCodeAt()}: false`)
            newArray.push(element.toLowerCase())
        }
    })
    // console.log(newArray) //checker
    newString = newArray.join('');
    console.log(newString)
}

asciiCapitalize("to be or not to be!");
asciiCapitalize("Oh what a beautiful morning.") 