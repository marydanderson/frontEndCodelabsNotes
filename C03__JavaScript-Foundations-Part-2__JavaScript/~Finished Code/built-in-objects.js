// * ===> GLOBAL WINDOW OBJECT <=== * \\
console.log("Global Window Object:", window);

// * ===> COMMON BUILT-IN STRING METHODS <=== * \\
const myString = "       TESTING methods       ";

console.groupCollapsed("String Methods");
console.log("toUpperCase():", myString.toUpperCase());
console.log("toLowerCase():", myString.toLowerCase());
console.log("startsWith():", myString.startsWith(" "));
console.log("trim():", myString.trim());
console.log("repeat():", myString.repeat(3));
console.log("charAt():", myString.charAt(9));
console.log("split():", myString.split("TESTING"));
console.log("replace():", myString.replace("methods", "complete"));
console.groupEnd();

// * ===> COMMON BUILT-IN NUMBER METHODS <=== * \\
const myNumber = 3.14159263;

console.groupCollapsed("Number Methods");
console.log("toString():", myNumber.toString());
console.log("Number.isInteger():", Number.isInteger(myNumber));
console.log("toFixed():", myNumber.toFixed(2));
console.log("isNaN():", isNaN(myNumber));
console.groupEnd();

// * ===> COMMON BUILT-IN MATH METHODS <=== * \\
console.groupCollapsed("Math Methods");
console.log("random():", Math.random());
console.log("floor():", Math.floor(3.9));
console.log("ceil():", Math.ceil(3.1));
console.log("round():", Math.round(3.49));
console.log("min():", Math.min(2, 5, 1));
console.log("max():", Math.max(2, 5, 1));
console.groupEnd();

// * ===> COMMON BUILT-IN DATE METHODS <=== * \\
console.groupCollapsed("Date Methods");
console.log("now():", Date.now());
console.log("getDate():", new Date().getDate());
console.log("toDateString():", new Date().toDateString());
console.log("toISOString():", new Date().toISOString());
console.log("getSeconds():", new Date().getSeconds());
console.log("getMinutes():", new Date().getMinutes());
console.log("getHours():", new Date().getHours());
console.log("getDay():", new Date().getDay());
console.log("getMonth():", new Date().getMonth());
console.log("getYear():", new Date().getYear());
console.groupEnd();

// * ===> COMMON BUILT-IN DOCUMENT METHODS <=== * \\
console.groupCollapsed("Document Methods");
console.log("title:", document.title);
console.log("URL:", document.URL);
console.log("body:", document.body);
console.log("images:", document.images);
console.log("querySelector():", document.querySelector("h1"));
console.log("createElement():", document.createElement("h1"));
console.groupEnd();

// * ===> COMMON BUILT-IN ARRAY METHODS <=== * \\
const myArray = [1, "Hello", false, 20, true];

console.groupCollapsed("Array Methods");
console.log("length:", myArray.length);
console.log("push():", myArray.push("Last Item"));
console.log("pop():", myArray.pop());
console.log("includes():", myArray.includes("Hello"));
console.log("indexOf():", myArray.indexOf("Hello"));
console.groupEnd();
