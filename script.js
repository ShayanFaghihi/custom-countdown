// Form Page
const formPage = document.querySelector(".form-page");
const submitBtn = document.getElementById("submit");


// Timer Page
const timerPage = document.querySelector('.timer-page');
const timerPageData = document.querySelector(".timer-page .timer");



// Event Listeners
submitBtn.addEventListener("click", () => {
    const countdownTitle = document.getElementById("title").value;
    const countdonwDate = document.getElementById("date").value;
    const final = new Date(countdonwDate).getTime();
    const now = new Date().getTime();

    // Calvulating amount of days/hours/minutes/second left to the due time
    const day = Math.ceil(((((final - now) / 1000) / 60) / 60 ) / 24);
    const hour = Math.ceil(((((final - now) / 1000) / 60) / 60 ));
    const minute = Math.ceil((((final - now) / 1000) / 60));
    const second = Math.ceil(((final - now) / 1000));

    showTimer(day,hour,minute,second);
})


function showTimer(day,hour,minute,second) {
    formPage.hidden = true;
    timerPage.hidden = false;
    timerPageData.innerHTML = `
        <div class="timer__title">${day}<span class="timer__tab">Days</span></div>
        <div class="timer__title">${hour}<span class="timer__tab">Hours</span></div>
        <div class="timer__title">${minute}<span class="timer__tab">Minutes</span></div>
        <div class="timer__title">${second}<span class="timer__tab">Seconds</span></div>
    `
}