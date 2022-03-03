// VIDEO 1

// 1 grab elements from the DOM
// 2 attach event listener


// OPTION 1
function goRed() {
    document.body.style.backgroundColor = 'red'; //STYLE IS AN ELEMENT in the DOM
}

// OPTION 2     =====================
const coffeeButton = document.querySelector('.coffee-btn');
coffeeButton.onclick = function() {
    document.body.style.background = 'brown';
}
coffeeButton.onmouseenter = goRed;

//QUERY SELECTOR W/O ALL ONLY GETS THE FIRST ITEM IT COMES TO. have to use query selector all
// query selector all gives a node list

// ======= OPTION 3 ==== using addEventListsener
// cleaner option
const listenerButton = document.querySelector('.listener-btn');

function notListening() {
    document.body.style.backgroundColor = "black";
}
listenerButton.addEventListener('click', notListening);





