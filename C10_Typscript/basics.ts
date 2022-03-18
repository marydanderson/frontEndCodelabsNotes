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
//can also set functions to types and they can return a type, too; sometimes they will infer if you assign type in parameter
function typeFunction(a: number) {
    return a //will return a number
}


//Generics
// when you make a dynamic function you might want to use later, but want it to have defined types but don't want to lock down the type based on use, use generics. 
//bassicaly tells typscript when to expect it willl need to look for a certain type

function insert<T>(array: T[], value: T) { //value needs to be same as T
    const newArray = [value, ...array];
    return newArray; //this value will be the same as T
}

//helps you write functions that are type safe, yet flexible

// CLASSES

class Student {
    constructor(
        public first: string, 
        last: string, 
        private courses: string[]
    ){}

    enroll(courseName: string) {
        this.courses.push(courseName);
    }

    listCourse() {
        return this.courses.slice(); //creates a copy of the course
    }
}

const studentOne = new Student('mary', 'anderson', ['courese 1']);
studentOne.enroll("course 2");