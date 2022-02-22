// * string * \\
"Anything wrapped in quotes is a string";
"They can be double quotes or single quotes";
"2";

// * number * \\
1; // 1.0
10.0;
13.9;

// * boolean * \\
true;
false;
// "some text" => truthy
// "" => falsy

// * special * \\
undefined;
null;
NaN;

// * object * \\
user = {
  name: "Will",
  password: 12345,
  isInstructor: true,
};
// user.name => "Will"
// user["name"] = "Will"

// * array * \\
names = ["Suzy", "Rachel", "Mark"];
misc = ["Train", 10, { iceCubes: 10, pickles: false, happy: "yes" }];
// names[0] => "Suzy"
// misc[2].pickles => false

// * Declaring Variables * \\
var powerLevel = 9001;

let currentMood;
currentMood = "Pensive";
currentMood = "Disgruntled";
// console.log(currentMood)

const vehicle = {
  make: "Porche",
  model: "911 Carrera  4S",
  price: {
    amount: 124400,
    currency: "USD",
  },
};
// console.log(vehicle)
// vehicle = "Taco Truck"
// console.log(vehicle)
vehicle.price = 12440000;
// console.log(vehicle)
