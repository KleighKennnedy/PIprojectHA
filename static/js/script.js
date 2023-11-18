//Stopwatch

let [seconds, minutes, hours] = [0, 0, 0]
let displayTime = document.getElementById('display-time')
let timer = null

function stopwatch() {

}

function startTimer() {
  let [seconds, minutes, hours] = [0, 0, 0]
  if (timer !== null) {
    clearInterval(timer)
  }
  timer = setInterval(stopwatch, 1000)
  function stopwatch(){
    let h = hours < 10 ? "0" + hours : hours
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds
    seconds ++
    displayTime.innerHTML = h + ':' + m + ':' + s
    if (seconds == 60) {
      seconds = 0
      minutes ++ 
      if (minutes == 60) {
        minutes = 0
        hours ++
        if(minutes > 59) {
          hours ++
          minutes = 0
        }
      }
    }  
  }
}

function stopTimer() {
  clearInterval(timer)
}

function watchReset() {
  clearInterval(timer)
  let [seconds, minutes, hours] = [0, 0, 0]
  displayTime.innerHTML = "00:00:00"
}
