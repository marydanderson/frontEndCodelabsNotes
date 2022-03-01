// Aim: Create an application that prints out users information on submission of a form and saves the results to local storage

// =========== HTML ELEMENT SELECTORS ================
// const firstNameInput = document.querySelector("#firstName");
// const lastNameInput = document.querySelector("#lastName");
// const ageInput = document.querySelector("#age");
const form = document.querySelector('form');

// console.log(form)
// console.log(firstNameInput);
// console.log(lastNameInput);
// console.log(ageInput)



// =========== GLOBAL VARIABLES ================

// https://www.learnwithjason.dev/blog/get-form-values-as-json

// =========== FUNCTION DECLARATIONS ================
function createUser(e) {
    e.preventDefault(); //prevent refresh upon submission

    const userData = new FormData(e.target);

    const firstNameValue = userData.get('firstName')
    console.log(firstNameValue)
}


// =========== EVENT LISTENERS ================
//   click event submitting submitting for values (first name, last name, and age) to create new user object
form.addEventListener('submit', createUser)


// EVENTUAL: create a 'user' tile for each user name and list at bottom of the page; when click on it, retrieve their info