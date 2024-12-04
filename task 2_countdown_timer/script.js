//variables to store the interval timer and target date
let countdownInterval;
let targetDate;

//function to intiate countdown timer
function startCountdown(){
   if(countdownInterval){
    clearInterval(countdownInterval);
   }
}

