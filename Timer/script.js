const timeLeft = document.querySelector('.time-left');
const timerButtons = document.querySelectorAll('[data-time]');
const ComebackTime = document.querySelector('.end-time');
let timerInterval;

function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000;

   displayTimeleft(seconds);
   displayComebackTime(then);
   timerInterval = setInterval(function(){
        let secondsLeft = ( then - Date.now()) / 1000;
        secondsLeft = Math.round(secondsLeft);
        if (secondsLeft<=0){
            clearInterval(timerInterval);
        }
        displayTimeleft(secondsLeft);
    },1000);
}
function displayTimeleft(secondsLeft){
    let minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if (minutes<10){
        minutes = "0" + minutes;
    }

    if (seconds<10){
        seconds = "0" + seconds;
    }

    console.log(minutes, seconds);
    timeLeft.textContent = minutes + ":" + seconds;

}
function displayComebackTime(timestamp){
    const date = new Date(timestamp);
    console.log(date);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    console.log(hour,minutes);
    ComebackTime.textContent = "Be Back in" + " " + hour + ":" + minutes;
}
//timer(1000);
//console.log(timer)
timerButtons.forEach(function(button){
    button.addEventListener('click',function(event){
        clearInterval(timerInterval)
        const minutes = event.target.getAttribute('data-time');
        const seconds = minutes * 60;
        console.log(seconds);
        timer(seconds);

    })
    
})