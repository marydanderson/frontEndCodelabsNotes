// Aim: Create a button that changes the background and text color randomly when clicked



// =======     HTML ELEMENT SELECTORS     ============
const buttonColor = document.querySelector('.btn-background');
const headingText = document.querySelector('.random-text-color');



// =======     Function Declarations   ============
function changeColor() {
    let randomColorBack = Math.floor(Math.random()*16777215).toString(16);
    let randomColorText = Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor = `#${randomColorBack}`;
    headingText.style.color = `#${randomColorText}`;


}


// =======     Event Listeners     ============
buttonColor.addEventListener('click', changeColor);
