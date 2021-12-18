// Input Container
const inputPage = document.querySelector(".form-page");
const inputForm = document.getElementById("inputForm");
const dateInput = document.getElementById("date");
const submitBtn = document.getElementById("submit");

let inputTitle = '';
let inputDate = '';


// Timer Container
const timerPage = document.querySelector(".timer-page");
const timerTitle = document.getElementById("timerTitle");

// Today in standar format (YY-MM-DD)
const today = new Date().toISOString().split('T')[0];
// Set a minimum attribute for date input based on today date
dateInput.setAttribute("min",today);




// Get Input Form Data
const getFormData = (e) => {
    e.preventDefault();
     inputTitle = e.srcElement[0].value;
     inputDate = e.srcElement[1].value;

     showTimer();
}


const showTimer = () => {
    inputPage.hidden = true;
    timerPage.hidden = false;
    timerTitle.textContent = inputTitle;
}


// Event Listeners
inputForm.addEventListener('submit',getFormData);