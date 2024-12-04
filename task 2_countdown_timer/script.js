//variables to store the interval timer and target date
let countdownInterval;
let targetDate;

//function to intiate countdown timer
function startCountdown(){
   if(countdownInterval){
    clearInterval(countdownInterval);
   }
}
//get user input values from the form
const datetimeInput = document.getElementById('datetime-input').value;
const eventName = document.getElementById('event-input').value;

//check if date/time was provided
if(!datetimeInput){
    alert('Please select a date and time');
    return;
}
