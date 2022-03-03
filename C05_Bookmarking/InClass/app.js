// Aim: Create an application that prints out users information on submission of a form and saves the results to local storage

// =========== HTML ELEMENT SELECTORS ================
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const ageInput = document.querySelector("#age");
const button = document.querySelector(".btn");
// const formDataAll = document.querySelector("form");

const displayUserList = document.querySelector(".displayed-users");
const accordDisplayUserList = document.querySelector(".accordion");
console.log(displayUserList)

// console.log(form)
// console.log(firstNameInput);
// console.log(lastNameInput);
// console.log(ageInput)



// =========== GLOBAL VARIABLES ================
const masterUsersList = JSON.parse(localStorage.getItem("List_of_users")) || []; //blank user array to store all created user objects
// https://www.learnwithjason.dev/blog/get-form-values-as-json





// =========== FUNCTION DECLARATIONS ================

//  FUNCTION: create user from form; add to array of objects
function createUser(e) {
    e.preventDefault(); //prevent refresh upon submission

    //assign object w/ HTML selected form values
    let user = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        age: ageInput.value,
    }
 

    //VALIDATE DATA
    if (user.firstName == false || user.lastName == false || user.age == false) {
      alert("Fill in all fields")
      return
    }

    //add user to master list
    masterUsersList.push(user);
    console.log(`added user ${user.firstName}`)

    //repopulate user list display
    populateUserList(masterUsersList)

    //add to local storage
    saveUsersToLocalStorage(masterUsersList)

    //clears form once submitted
    document.forms[0].reset(); 
}

//  FUNCTION:     to save to local storage
function saveUsersToLocalStorage(x = []) {
    localStorage.setItem("List_of_users", JSON.stringify(x));
}

//   FUNCTION:     Delete user from list
function deleteUser(e) {

    //if we are not clicking on the 'x', don't run any more code
    // if (!e.target.matches("close-btn")) return;
    if (!e.target.classList.contains("close-btn")) return;

    // Find Index
    const idx = e.target.parentNode.dataset.index;
    console.log(idx);

    // Remove user from master user list array
    masterUsersList.splice(idx, 1)

    populateUserList(masterUsersList);

    saveUsersToLocalStorage(masterUsersList);

}



// FUNCTION: populate HTML w /list of Ussers
function populateUserList(usersParam = []) {
    // Loop over all users and create a new user for each element
    displayUserList.innerHTML = usersParam
      .map(
        (x, idx) => `
        <li data-index=${idx}>
          <a>${x.lastName}, ${x.firstName}, age ${x.age}</a>
          <button class="close-btn">&times;</button>
        </li>`
      )
      .join("");
  // ACCORDIION
  //     accordDisplayUserList.innerHTML = usersParam
  //     .map(
  //       (x, idx) => `
  //       <h2 class="accordion-header" id="headingOne">
  //       <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
  //         ${x.lastName}, ${x.firstName}
  //       </button>
  //     </h2>
  //     <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
  //       <div class="accordion-body">
  //         <strong>Age ${x.age}</strong>
  //       </div>
  //     </div>`
  //     )
  //     .join("");
  }





//  FUNCTION: validate users
// function validateUser(user) {
//     //validate user fields are filled in
//     //if user field is not filled in, do not submit the form until all fields are filled in

//     if (user.firstName == false || user.lastName == false || user.age == false) {
//       alert("Fill in all fields")
//       return
//     }
// }


// =========== EVENT LISTENERS ================
//   click event submitting submitting for values (first name, last name, and age) to create new user object
button.addEventListener('click', createUser);
displayUserList.addEventListener('click', deleteUser)



// ======= On Application Start ===========
populateUserList(masterUsersList)