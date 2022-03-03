const startButton = document.querySelector('[data-action= "start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const resetButton = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector(".minutes");
const seconds =  document.querySelector(".seconds");
let timerTime = 00; 
let interval;
let isRunning = false;



function startTimer() {
    if (isRunning) return; //stopping function from running if this is true
    isRunning = true;
    interval = setInterval(incrementTimer, 1000) //this lien confuses me...is setInterval a JS function?
}

function stopTimer() {
    isRunning=false;
    clearInterval(interval) //internal JS function
}

function resetTimer() {
    stopTimer();
    timerTime = 0;
    minutes.innerText = '00';
    seconds.innerText = '00';
}

function incrementTimer() {
    timerTime++;
    const numOfMinutes = Math.floor(timerTime / 60);
    const numOfSeconds = timerTime % 60;
    seconds.innerText = pad(numOfSeconds);
    minutes.innerText = pad(numOfMinutes);  
}


function pad(number) {
    return (number < 10) ? '0' + number : number; //terinary operator of below
    // if (number < 10) {
    //    return '0' + number;
    // } else {
    //     return number;
    // }
}


startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);