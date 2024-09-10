// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

// Create an instance of Express
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",  // Allow any origin
    methods: ["GET", "POST"]  // Allow GET and POST methods
  }
});

// Middleware to allow CORS
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Serve static files (e.g., HTML, CSS, JS) from the "public" directory
app.use(express.static('public'));

// Handle incoming socket connections
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('sendNotification', (details) => {
    console.log('Sending notification:', details); // Log details
    socket.broadcast.emit('sendNotification', details);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server on port 1572
server.listen(1572, () => {
  console.log('Server is running on port 1572');
});
