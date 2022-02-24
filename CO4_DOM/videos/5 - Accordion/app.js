const accordion = document.querySelector('.accordion');
const items = accordion.querySelectorAll('li');
const questions = accordion.querySelectorAll('.question');


function toggleAccordion() {
    console.log(this.parentNode); //applies parent 'node', in this case, 'li'
    const thisItem = this.parentNode

    items.forEach(item => {
        if (thisItem == item) {
            thisItem.classList.toggle('open'); //toggle takes away and adds whatver is in ()
            return;
        }

        item.classList.remove('open');

    });
}

console.log(questions)

questions.forEach(question => question.addEventListener('click', toggleAccordion));