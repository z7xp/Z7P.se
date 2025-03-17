// Initialize Pusher with your credentials
const pusher = new Pusher('9d493231bf730ee2456d', {
  cluster: 'mt1'
});

// Subscribe to the voice channel
const channel = pusher.subscribe('voice-channel');

// Listen for new voice data
channel.bind('new-voice', function(data) {
    console.log('Received new voice data:', data);
    // Here you can handle the received voice data, like playing the sound
});

// Start button to trigger voice recording (you will need to implement recording functionality)
document.getElementById('startButton').addEventListener('click', function() {
    console.log('Starting voice recording...');
    // You can add WebRTC recording logic here
});
