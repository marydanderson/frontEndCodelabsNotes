// Selects the first <h1> element
const headingOne = document.querySelector("h1");

// Selects the element with a class name of "heading-two"
const headingTwo = document.querySelector(".heading-two");

// Selects the body element
const bodyEl = document.querySelector("body");

// Changes the "headingOne" variable's text content
headingOne.innerText = "Updated Hello World From JavaScript!";

// Changes the "headingTwo" variable's text color
headingTwo.style.color = "#134e4a";

// Change the body's background color, and the text color on click
function updateColors() {
  bodyEl.style.backgroundColor = "#0c4a6e";
  headingOne.style.color = "#f0f9ff";
  headingTwo.style.color = "#7dd3fc";
}
