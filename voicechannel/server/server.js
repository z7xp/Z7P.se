const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// The /startVoice POST route
app.post('/startVoice', (req, res) => {
    console.log('Received request to start voice channel');
    // Insert logic for starting the voice channel here (e.g., initialize WebRTC or Pusher event)
    // For now, we'll just respond with a success message.
    res.json({ success: true, message: 'Voice channel started' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
