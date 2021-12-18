// Input Container
const inputPage = document.querySelector(".form-page");
const inputForm = document.getElementById("inputForm");
const dateInput = document.getElementById("date");
const submitBtn = document.getElementById("submit");

// Global variables
let inputTitle = '';
let inputDate = '';
let dateTime = Date;
let countdownInterval;
let savedPreviousData;

// Time calculation constants
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Countdown Container
const timerPage = document.querySelector(".timer-page");
const timerTitle = document.getElementById("timerTitle");
const timerNumbers = document.querySelectorAll(".timer__elements span");
const resetBtn = document.getElementById("reset");


// Finish Countdown Container
const congratsPage = document.querySelector(".congrat-page");
const congratsTitle = document.getElementById("congratsTitle");
const renewBtn = document.getElementById("renew")


// Today in standar format (YY-MM-DD)
const today = new Date().toISOString().split('T')[0]; 
// Set a minimum attribute for date input based on today date
dateInput.setAttribute("min",today);




// Get Input Form Data
const getFormData = (e) => {
    e.preventDefault();
     inputTitle = e.srcElement[0].value;
     inputDate = e.srcElement[1].value;
     dateTime = new Date(inputDate).getTime();

    //  Storing Title and Date in local storage
    savedPreviousData = {
        title : inputTitle,
        date : inputDate
    };
    localStorage.setItem("countdown", JSON.stringify(savedPreviousData));

     updateDOM();
}


const updateDOM = () => {
    // Start to count down
    countdownInterval = setInterval(() => {

        timerTitle.textContent = inputTitle;
        const now = new Date().getTime();
        const distance = dateTime - now;
    
        const days = Math.floor(distance / day);
        const hours = Math.floor((distance % day) / hour);
        const minutes = Math.floor((distance % hour) / minute);
        const seconds = Math.floor((distance % minute) / second);

        // Checking Distance 
        if(distance < 0) {
            finishCountdown();
        } else {
            // Populating Countdown Data
            timerNumbers[0].textContent = days;
            timerNumbers[1].textContent = hours;
            timerNumbers[2].textContent = minutes;
            timerNumbers[3].textContent = seconds;
        
            // Hide the Input Container
            inputPage.hidden = true;
            // Show Countdown Page
            timerPage.hidden = false;

        }

    },second);
}



// Finishing Countdown
const finishCountdown = () => {
    clearInterval(countdownInterval);
    localStorage.clear();
    congratsTitle.textContent = `${inputTitle} Ended in ${inputDate}`;

    // Hide the Countdown Container
    timerPage.hidden = true;
    // Show Congrats Page
    congratsPage.hidden = false;


}


// Resetting Form
const resetForm = () => {
    // Hide the Countdown Container
    timerPage.hidden = true;
    // Hide Congrats Page
    congratsPage.hidden = true;
    // Show Form Container
    inputPage.hidden = false;

    // Clearing the interval
    clearInterval(countdownInterval);

    // Clearing the Form inputs
    inputTitle = '';
    inputDate = '';

}

// retrieving data from local storage, if the countdown object is set
const readLocalstorageData = () => {
    // Check the availability of the coundtown objects
    if(localStorage.getItem('countdown')) {

        inputTitle = JSON.parse(localStorage.getItem('countdown')).title;
        inputDate = JSON.parse(localStorage.getItem('countdown')).date;
        dateTime = new Date(inputDate).getTime();

        updateDOM();
    }
} 


// Event Listeners
inputForm.addEventListener('submit',getFormData);
resetBtn.addEventListener('click',resetForm);
renewBtn.addEventListener('click',resetForm);

// Run function to get data from the local storage
readLocalstorageData();