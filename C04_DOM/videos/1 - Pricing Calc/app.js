//grab what we need from the DOM
    //input for price, qty, and div input where total is shown
const priceInput = document.querySelector('[name=price]');
const quantityInput = document.querySelector('[name=quantity]');
const total = document.querySelector('.total');
const quantityLabel = document.querySelector('.qty-label')
console.log(priceInput)

//create functions we need
function calculatePieCost() {
    const price = priceInput.value;
    const quantity = quantityInput.value;
    

    const cost = price * quantity;
    console.log(cost)
    total.innerText = '$' + cost.toFixed(2);
}

function updateQuantityLabel() {
    const quantity = quantityInput.value;
    quantityLabel.innerText = quantity;
}

//on first run
calculatePieCost();

//add event listeners
priceInput.addEventListener('input', calculatePieCost);
quantityInput.addEventListener('input', calculatePieCost);
quantityInput.addEventListener('input', updateQuantityLabel);

