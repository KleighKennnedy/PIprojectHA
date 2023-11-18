display = document.getElementById('time-display')

/*button.onclick = function() {
    
    hours = today.getHours()
    minutes = today.getMinutes()
    seconds = today.getSeconds()
    console.log(hours + ":" + minutes + ":" + seconds)
    console.log(today)
    
}*/

window.onload = function() {
    
    interval = setInterval(update, 1000)
    
    
    function update() {
        today = new Date()
        
        hours = today.getHours()
        minutes = today.getMinutes()
        seconds = today.getSeconds()
        display.innerHTML = hours + ":" + minutes + ":" + seconds
    }
}
