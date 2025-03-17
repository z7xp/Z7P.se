document.getElementById('startButton').addEventListener('click', function() {
    console.log("Start Voice button clicked"); // Log to check if the button is clicked
    fetch('/startVoice', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ startVoice: true })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Voice started:", data); // Log the response from the server
    })
    .catch((error) => {
        console.error('Error:', error); // Log any errors
    });
});
