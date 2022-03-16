// Primitives: numbers, strings, booleans
let age: number;
// age = '12' this gives an error b/c age is strictly assigned a number

let userName: string = 'Mary';

let isInstructor: boolean = true;




// More complex types: arrays, objects
let hobbies: string[]; //assigns array of strings
hobbies = ['golf', 'eating'];

//assign object type
let person: {
    name: string;
    age: number;
}; 

person = {
    name: 'Max',
    age: 20,
}

let people: { //array of people objects
    name: string;
    age: number;
}[];


// Type Inference
let course = "The complete guide"; //typescript infers that course can only be assigned to string type

// course = 1232;




// Function Types, parameters