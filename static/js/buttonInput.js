setInterval(function() {
    fetch('/button_state')
        .then(response => response.text())
        .then(data => {
            document.getElementById('buttonState').innerText = data === '1' ? 'Pressed' : 'Not Pressed';
        });
}, 1000);  // Update every 1 second