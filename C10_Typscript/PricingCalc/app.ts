console.log('hi');

// <---- =============== HTML SELECTORS=============== ---->
const price = document.querySelector('[name=price]') as HTMLElement;
const inputQuantity =document.querySelector("#quantity") as HTMLElement;
const labelQuantity = document.querySelector("#labelQuantity") as HTMLElement;
// const total = document.querySelector("#totalPrice");
// console.log(price)
let newPrice = price.innerHTML
console.log(newPrice)



let totalPrice = 
// <---- =============== FUNCTIONS =============== ---->
function calculateCosts() {
    console.log(price)

}





// <---- =============== EVENT LISTENERS =============== ---->
price.addEventListener('input', calculateCosts);
inputQuantity.addEventListener('input', calculateCosts);


