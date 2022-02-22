// * DECLARING an OBJECT * \\
const student = {
  name: "Jamie",
  shouldBuildProjects: true,
  age: 44,
  introduce: function () {
    return `I am ${this.name}`;
  },
  motivate: function (reasonForLearningToCode) {
    return `I want to learn how to code so I can ${reasonForLearningToCode}`;
  },
};

// * ACCESSING an OBJECT * \\
const filterWord = "name";

console.log("Dot Notation:", student.name);
console.log("Bracket Notation:", student["name"]);
console.log("Dot Notation w/ Variable:", student.filterWord);
console.log("Bracket Notation w/ Variable:", student[filterWord]);

// * CALLING a METHOD on an OBJECT * \\
const sayHello = student.introduce();

console.log("Object Method:", sayHello);

// * CALLING a METHOD w/ a PARAMETER on an OBJECT * \\
const findingYourWhy = student.motivate("help out my family.");

console.log("Object Method w/ PARAM:", findingYourWhy);

// * GLOBAL METHODS PREVIEW * \\
const veryHappyGreeting = "I am happy to see you!".toUpperCase();

console.log(veryHappyGreeting);
