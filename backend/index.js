const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000', // Adjust this to your frontend URL
    methods: ['GET', 'POST'],
    credentials: true
  }
});
const port = 5000;

connectToMongo();
app.use(cors());
app.use(express.json());

io.on('connection', (socket) => {
  console.log('A user connected');
  
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});


// Available Routes
app.use('/api/customerauth', require('./routes/customerauth'));
app.use('/api/storemanangerauth', require('./routes/storemanangerauth'));
app.use('/api/salesmanauth', require('./routes/salesmanauth'));

server.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});