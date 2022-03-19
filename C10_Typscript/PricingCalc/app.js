console.log('hi');
// <---- =============== HTML SELECTORS=============== ---->
var price = document.querySelector('[name=price]');
var inputQuantity = document.querySelector("#quantity");
var labelQuantity = document.querySelector("#labelQuantity");
// const total = document.querySelector("#totalPrice");
// console.log(price)
var newPrice = price.innerHTML;
console.log(newPrice);
var totalPrice = 
// <---- =============== FUNCTIONS =============== ---->
function calculateCosts() {
    console.log(price);
};
// <---- =============== EVENT LISTENERS =============== ---->
price.addEventListener('input', calculateCosts);
inputQuantity.addEventListener('input', calculateCosts);
