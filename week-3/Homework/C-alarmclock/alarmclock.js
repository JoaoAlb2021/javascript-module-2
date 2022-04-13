function setAlarm() {
}
const clock = document.querySelector('#timeRemaining')
const timeCount= document.querySelector('#alarmSet')
const buttonSetAlarm = document.querySelector('button')
const stopAlarm = document.querySelector('#stop')

buttonSetAlarm.addEventListener('click',event =>{
  event.preventDefault()
  clock.innerHTML = 'Time Remaining: 00:'+timeCount.value
  let count = timeCount.value - 1
  contador=setInterval(() => {
    if (count > 9){
      clock.innerHTML = 'Time Remaining: 00:' + count
      count--
    }
    else if (count <= 9 && count >= 0){
      clock.innerHTML = 'Time Remaining: 00:0' + count
      count--
    }
    else {
      clearInterval(contador)
      playAlarm()
      document.querySelector('body').style.backgroundColor = 'yellow'
      
    }
  }, 1000);
  if (count === 0){
    playAlarm()
  }
})

stopAlarm.addEventListener('click', event => {
  event.preventDefault()
  clearInterval(contador)
})
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
