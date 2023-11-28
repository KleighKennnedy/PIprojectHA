setInterval(function() {
    fetch('/button_state')
        .then(response => response.json())
        .then(data => {
            // Update the client-side based on the server response
            if (data.state === '1') {
                // Button is pressed
                console.log('Button is pressed');
            } else {
                // Button is not pressed
                ('Button is not pressed');
            }
        });
}, 1000);
