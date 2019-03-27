let timeLeft = document.querySelector('.time-left');
let endTime = document.querySelector('.end-time');
let buttons = document.querySelectorAll('[data-time]');
let reset = document.querySelector('.reset-timer');
let timeForm = document.querySelector('.custom-time-form');

let intervalID;

function timer(seconds){
    let timeThen = Date.now() + (seconds*1000); // seconds to milliseconds
    clearInterval(intervalID);
    displayCountdownTime(seconds);
    displayEndTime(timeThen);
   intervalID= setInterval(()=>{
       secondsLeft = Math.round((timeThen-Date.now())/1000); //milliseconds to seconds
        if(secondsLeft <= 0){
         clearInterval(intervalID); // stop timer if it reaches to 0 seconds
        }
        displayCountdownTime(secondsLeft)
    },1000);
}
 
function displayCountdownTime(seconds){
    
    const displayMinutes = Math.floor(seconds/60);     
    const displaySeconds = seconds%60;
    const display = `${displayMinutes > 9 ? '' : 0}${displayMinutes} : ${displaySeconds > 9 ? '' : 0}${displaySeconds}`;
    timeLeft.textContent = display;
}

function displayEndTime(timestamp){
    let time = new Date(timestamp);
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const formatHours = hours > 12 ? hours-12 :hours;
    endTime.textContent = `Be back at : ${formatHours >9 ?'':0}${formatHours}:${minutes >9?'':0}${minutes}`;
}

function startTimer(){
    seconds = parseInt(this.dataset.time,10);
    timer(seconds);
}

function resetTimer(){
 clearInterval(intervalID);
  displayCountdownTime(0);
  endTime.textContent='';
}

buttons.forEach( button =>{
    button.addEventListener('click',startTimer);
});
 
timeForm.addEventListener('submit',function(event){
event.preventDefault();
let minutes = this.minutes.value;
if(minutes){
    timer(minutes*60);
}
this.minutes.value='';
}
);

reset.addEventListener('click',resetTimer);