const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// <---- =============== HTML Element Selectors =============== ---->
const buttonColorChanger = document.querySelector("#btn");
const headingColorText = document.querySelector(".color")






// <---- =============== Function Delcarations =============== ---->
function changeBackgroundColor() {
    let randomColorBack = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColorBack}`;
    headingColorText.innerHTML = `#${randomColorBack}`
    console.log(randomColorBack)

}




// <---- =============== Event Listeners =============== ---->
buttonColorChanger.addEventListener('click', changeBackgroundColor);



