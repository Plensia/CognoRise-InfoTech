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

/**
 * Update countdown display
 * Calculates and displays the remaining time until target date
 */
    function updateCountdown() {
        // Get current time in milliseconds
        const now = new Date().getTime();
        
        // Calculate the time difference between now and target date
        const distance = targetDate - now;
    
        // If countdown has finished (distance is negative)
        if (distance < 0) {
            // Stop the interval
            clearInterval(countdownInterval);
            
            // Set all display values to '00'
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            
            // Add '(Finished)' to the event name
            document.getElementById('event-name').textContent += ' (Finished)';
            return;
        }
        
          // Calculate the different time units
    // Convert milliseconds to days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the display with padded numbers (e.g., '05' instead of '5')
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}