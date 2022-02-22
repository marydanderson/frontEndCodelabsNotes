// ## Exercise #2: Intermediate

// **Aim**: Create an application that, on button click, runs a function that prints out a users name, age, and occupation

// - [ ] Create the HTML with a button
// - [ ] Create a function that takes in a _user_ object
// - [ ] Print each item in the user object out in a string to the console

// ---

// ---

//define user object
const user = 
    {firstName: 'Mary',
    lastName: 'Anderson',
    age: 29
    }

//write function
function sayHello() {
    console.log(`${user.firstName} ${user.lastName} is ${user.age} years old.`)
}

