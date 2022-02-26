
const body = document.body;
const input = document.querySelector('input[type=text]');
const overlay = document.querySelector('.overlay');


// ==========    FUNCTIONS

function showFloater() {
    body.classList.add('show-floater');
}

function closeFloater() {
    if (body.classList.contains('show-floater')) {
        body.classList.remove('show-floater');
    }
}



// =========     EVENT LISTENERS
input.addEventListener('focus', showFloater);//focus is better listener than CLICK b/c it includes if you tab in there
overlay.addEventListener('click', closeFloater);