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

// Convert input datetime to milliseconds timestamp and store it
    targetDate = new Date(datetimeInput).getTime();
    
// Display the event name, or 'Countdown' if none provided
    document.getElementById('event-name').textContent = eventName || 'Countdown';

// Run the first update immediately instead of waiting for the first interval
    updateCountdown();

// Update the countdown every second (1000 milliseconds)
    countdownInterval = setInterval(updateCountdown, 1000);
