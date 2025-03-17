document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    
    if (startButton) {
        startButton.addEventListener('click', async function() {
            console.log("Start Voice button clicked");

            try {
                // Request microphone access
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                console.log("Microphone access granted");

                // Send a POST request to start the voice channel
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
                    alert('Voice channel started!');
                })
                .catch((error) => {
                    console.error('Error in POST request:', error);
                    alert('There was an error starting the voice channel. Check the console for more details.');
                });
            } catch (error) {
                console.error('Error accessing microphone:', error);
                alert('Please grant microphone access to use the voice channel.');
            }
        });
    } else {
        console.error('Start button not found!');
    }

    // Set up Pusher for real-time updates
    const pusher = new Pusher('9d493231bf730ee2456d', {
        cluster: 'mt1',
        encrypted: true
    });

    const channel = pusher.subscribe('voice-channel');
    channel.bind('new-voice', function(data) {
        console.log('New voice data received:', data);
    });
});
