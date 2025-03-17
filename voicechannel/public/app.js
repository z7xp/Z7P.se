// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const startButton = document.getElementById('startButton');
    
    // Check if the button exists
    if (startButton) {
        // Add an event listener for the click event
        startButton.addEventListener('click', function() {
            console.log("Start Voice button clicked");

            // Send a POST request to the backend to start the voice channel
            fetch('/startVoice', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ startVoice: true })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Voice started:", data);
                // Handle the success case, e.g., show a success message or start a WebRTC connection
                alert('Voice channel started!');
            })
            .catch((error) => {
                console.error('Error:', error); // Log any errors that occur during the fetch request
                alert('There was an error starting the voice channel.');
            });
        });
    } else {
        console.error('Start button not found!');
    }

    // Set up Pusher for real-time updates (using the provided keys)
    const pusher = new Pusher('9d493231bf730ee2456d', {
        cluster: 'mt1',
        encrypted: true
    });

    // Subscribe to a channel (e.g., 'voice-channel')
    const channel = pusher.subscribe('voice-channel');
    
    // Bind to events (e.g., 'new-voice') that you want to listen for
    channel.bind('new-voice', function(data) {
        console.log('New voice data received:', data);
        // Handle the received voice data (e.g., play audio, notify users)
    });
});
