// * FUNCTION DECLARATION (Generic) * \\
function learnToCode(student = "nobody", language = "nothing") {
  if (language.toLowerCase() === "javascript") {
    console.log("Are you learning Front-End Development?");
  } else {
    console.log("Have you tried JavaScript?");
  }
  console.log(`${student} became a developer by learning ${language}!`);
}

// * FUNCTION DECLARATION (ES6 ARROW) * \\
const learnToCodeES6 = (student, language) => {
  // Your Code Here
};

// * FUNCTION DECLARATION (Generic) * \\
function gradeAssignment(score = 0) {
  console.log("Total Score: ", score);
  return score;
}

// * FUNCTION DECLARATION (ES6 ARROW) * \\
const gradeAssignmentES6 = (score) => {
  // Your Code Here
};

// * FUNCTION DECLARATION (Anonymous) * \\
const greet = function () {
  console.log("Hello!");
};

// * FUNCTION CALLS * \\
learnToCode();
learnToCode("Jessie", "JavaScript");
learnToCode("Sequoia", "React");

greet("Will");
