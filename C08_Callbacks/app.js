// <------------======= CALLBACKS ======------------->

// naming callback functions

// function greeting(name) {
//     console.log(`Hello ${name}, welcome!`);
// }

// function introduction(firstName, lastName, callback) {
//     const fullName = `${firstName} ${lastName}`;

//     callback(fullName); //this is where the OG function is used i.e. greeting(fullName)
// }

// introduction('Mary', 'Anderson', greeting) //last parameter is the function that's being called back 

let x = function() {
    console.log('i will be called back')
};

let y = function(callback) {
    console.log('i am function y running');
    callback();
}

y(x);


// <---- =============== promises =============== ---->

const weather = true;
const date = new Promise(function(resolve, reject) {
    if (weather) {
        const dateDetails = {
            name: 'Restaurant',
            location: '55th st', 
            table: 5
        };
        
        resolve(dateDetails)
    } else {
        reject(new Error('Bad weather, so no date'))
    }
});



