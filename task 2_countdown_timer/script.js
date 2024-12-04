let countdownInterval;
let targetDate;

function startCountdown() {
    // Clear any existing countdown
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // Get input values
    const datetimeInput = document.getElementById('datetime-input').value;
    const eventName = document.getElementById('event-input').value;

    // Validate input
    if (!datetimeInput) {
        alert('Please select a date and time');
        return;
    }

    // Set target date and event name
    targetDate = new Date(datetimeInput).getTime();
    document.getElementById('event-name').textContent = eventName || 'Countdown';

    // Update countdown immediately
    updateCountdown();

    // Set interval to update countdown every second
    countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Check if countdown is finished
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        document.getElementById('event-name').textContent += ' (Finished)';
        return;
    }

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update display
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Set minimum datetime to current time
const now = new Date();
const tzoffset = now.getTimezoneOffset() * 60000;
const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0,16);
document.getElementById('datetime-input').setAttribute('min', localISOTime);