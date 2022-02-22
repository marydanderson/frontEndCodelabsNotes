// * Addition *
console.groupCollapsed("Addition");
console.log(2 + 2); // 4
console.log("good" + " day"); // "good day"
console.log(2 + "day"); // "2day"
console.log(2 + "2"); // "22"
console.groupEnd();

// * Subtraction *
console.groupCollapsed("Subtraction");
console.log(4 - 2); // 2
console.log("good" - "night"); // NaN
console.log("good" - 2); // NaN
console.log(2 - "2"); // 0
console.groupEnd();

// * Multiplication *
console.groupCollapsed("Multiplication");
console.log(2 * 2); // 4
console.log(2 + 2 * 7); // 16
console.groupEnd();

// * Division *
console.groupCollapsed("Division");
console.log(4 / 2); // 2
console.log(4 / 0); // Infinity
console.log(0 / 4); // 0
console.groupEnd();

// * Incrementing *
const a = 10;
let b = 20;
console.groupCollapsed("Incrementing");
console.log(a + 1); // 11
// console.log(a++); // Error
console.log(b++, b++); // 21
console.groupEnd();

// * Decrementing *
const c = 30;
let d = 40;
console.groupCollapsed("Decrementing");
console.log(c - 1); // 9
// console.log(c--); // Error
console.log(d--, d--); // 39
console.groupEnd();
