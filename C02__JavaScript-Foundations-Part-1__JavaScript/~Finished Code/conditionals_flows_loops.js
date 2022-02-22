const username = "CodeCoachWill";
const password = 12345;
const users = [
  {
    username: "CodeCoachWill",
    password: 12345,
    isInstructor: true,
  },
  {
    username: "CodeCoachBill",
    password: "lkjsf#jlksjf$@A",
    isInstructor: true,
  },
  {
    username: "Student 1",
    password: "ilikedogs",
    isInstructor: false,
  },
  {
    username: "Student 2",
    password: "ilikecats",
    isInstructor: false,
  },
];

// * "if" statement *
if (username === "CodeCoachWill") {
  console.log("CodeCoachWill is Logged In!");
} else if (username === "CodeCoachBill") {
  console.log("CodeCoachBill is Logged In!");
} else {
  console.log("Invalid Credentials");
}

if (username === "CodeCoachWill" || username === "CodeCoachBill") {
  console.log("A Code Coach has logged in");
}

if (username === "CodeCoachWill" && password === 12345) {
  console.log("You have successfully logged in using name and password");
}

// * "for" loop *
console.groupCollapsed("For Loop");

for (let i = 0; i < users.length; i++) {
  console.log("=====NEW ITERATION======");
  console.log("index:", i);
  console.log("user:", users[i]);
  console.log("username:", users[i].username);
}

console.groupEnd();

// * "while" loop *
console.groupCollapsed("While Loop");

let i = 0;
while (i < users.length) {
  console.log("=====NEW ITERATION======");
  console.log("index:", i);
  console.log("user:", users[i]);
  console.log("username:", users[i].username);

  i++;
}

console.groupEnd();

// * "for...of" loop *
console.groupCollapsed("For Of Loop");

for (let user of users) {
  console.log("=====NEW ITERATION======");
  console.log("user:", user);
  console.log("username:", user.username);
}

console.groupEnd();
