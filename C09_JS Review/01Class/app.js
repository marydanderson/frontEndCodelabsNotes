// <---- =============== Exercise 2 =============== ---->
// Aim: Create a new project (with only an HTML file) that uses JavaScript to change the color of a Heading element.

//use on click HTML
headingColor = document.getElementById("headingColor");
console.log(headingColor)


function changeHeadingColor() {

    document.getElementById('headingColor').style.color = "red";
}