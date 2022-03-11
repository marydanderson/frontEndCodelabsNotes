// Exercise #3: Advanced
// Aim: Create a function to check if a candidate is qualified in an imaginary coding interview of an imaginary tech startup.

// The criteria for a candidate to be qualified in the coding interview is:

    // The candidate should have completed all the questions.
    // The maximum time given to complete the interview is 120 minutes.
    // The maximum time given for very easy questions is 5 minutes each.
    // The maximum time given for easy questions is 10 minutes each.
    // The maximum time given for medium questions is 15 minutes each.
    // The maximum time given for hard questions is 20 minutes each.
// If all the above conditions are satisfied, return "qualified", else return "disqualified".

// You will be given an array of time taken by a candidate to solve a particular question and the total time the candidate takes to complete the interview.

// Given an array, in a true condition will always be in the format [very easy, very easy, easy, easy, medium, medium, hard, hard].

// The maximum time to complete the interview includes a buffer time of 20 minutes.

// Examples

        // interview([5, 5, 10, 10, 15, 15, 20, 20], 120)    ➞    "qualified"

        // interview([2, 3, 8, 6, 5, 12, 10, 18], 64)    ➞     "qualified"

        // interview([5, 5, 10, 10, 25, 15, 20, 20], 120)    ➞    "disqualified"
        // // Exceeded the time limit for a medium question.

        // interview([5, 5, 10, 10, 15, 15, 20], 120)    ➞    "disqualified"
        // // Did not complete all the questions.

        // interview([5, 5, 10, 10, 15, 15, 20, 20], 130)    ➞    "disqualified"
        // // Solved all the questions in their respected time limits but exceeded the total time limit of the interview.

// Notes
// Try to solve the problem using only array methods.




// <---- =============== MY CODE IS BELOW =============== ---->

baselineGrading = [5, 5, 10, 10, 15, 15, 20, 20]
baselineTime = 120;

function compareTime(inputTime) {
    let time = 0;
    if (inputTime > baselineTime) {
        console.log('Exceeded grand total time limit')
        score = 'disqualified'
    }
}



function interview(arrayOfTime, totalTime) {
    // see if max time was exceded for individual questions
    let score = 'qualified';
    if (arrayOfTime.length < baselineGrading.length) { //didn't answer all questions
        console.log('Did not complete all the questions')
        score = 'disqualified';
    }
    else {
        for (let i=0; i < 2; i++) { //VERY EASY QUESTION
            if (arrayOfTime[i] > baselineGrading[i]) {
                console.log('Exceeded time limit for a very easy question')
                score='disqualified';
            }
        }
        for (let i=2; i < 4; i++) { //EASY QUESTION
            if (arrayOfTime[i] > baselineGrading[i]) {
                console.log('Exceeded time limit for an easy question')
                score='disqualified';
            }
        }
        for (let i=4; i < 6; i++) { //MEDIUM QUESTION
            if (arrayOfTime[i] > baselineGrading[i]) { 
                console.log('Exceeded time limit for medium')
                score='disqualified';
            }
        }
        for (let i=6; i < arrayOfTime.length; i++) { //HARD QUESTION
            if (arrayOfTime[i] > baselineGrading[i]) {
                console.log('Exceeded time limit for a hard question')
                score='disqualified';
            }
        }
    }
    console.log(score)
    compareTime(totalTime)    
}


// interview([5, 5, 10, 10, 15, 15, 20], 120)  
// interview([5, 5, 10, 10, 15, 15, 20, 20], 120);
// interview([5, 5, 10, 10, 25, 15, 20, 20], 120) ;
// interview([5, 5, 10, 10, 15, 15, 20], 120) 