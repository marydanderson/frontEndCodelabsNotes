// * Strings *
console.groupCollapsed("String Comparison");
console.log("hi" === "hi"); // true
console.log("hi" === "HI"); // false
console.log("hi" === "HI".toLowerCase()); // true
console.groupEnd();

// * Numbers *
console.groupCollapsed("Number Comparison");
console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(10 === 5 + 5); // true
console.groupEnd();

// * Booleans *
console.groupCollapsed("Boolean Comparison");
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(2)); // true
console.log(Boolean("Hi")); // true
console.log(Boolean("")); // false
console.log(true !== true); // false
console.groupEnd();

// * Specials *
console.groupCollapsed("Specials Comparison");
console.log(undefined == null); // true
console.log(undefined === null); // false
console.groupEnd();

// * Objects *
console.groupCollapsed("Object Comparison");
console.log({ name: "Will" } === { name: "Will" }); // false
console.log({ name: "Will" } == { name: "Will" }); // false
console.log({ name: "Will" }.name == { name: "Will" }.name); // true
console.groupEnd();

// * Arrays *
console.groupCollapsed("Array Comparison");
console.log(["hi", "bye"] === ["hi", "bye"]); // false
console.log(["hi", "bye"] == ["hi", "bye"]); // false
console.log(["hi", "bye"][0] == "hi"); // true
console.groupEnd();

// * And / Or *
console.groupCollapsed("And / Or Comparison");
console.log(2 + 2 === 4 && "abc" === "abc"); // true
console.log(2 + 2 === 5 && "abc" === "abc"); // false
console.log(2 + 2 === 4 && "abc" === "def"); // false
console.log(2 + 2 === 4 || "abc" === "abc"); // true
console.log(2 + 2 === 4 || "abc" === "def"); // true
console.log(2 + 2 === 5 || "abc" === "abc"); // true
console.groupEnd();
