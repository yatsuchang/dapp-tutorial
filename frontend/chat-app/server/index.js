const express = require('express');
const { Server } = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 8000;

const router = require('./router');

const app = express();
const server = http.createServer(app);// HTTP server
const io = new Server(server);// pass the HTTP server to init a new socket.io instance

// listen connection event for incoming sockets
io.on('connection', (socket) => {
  // everytime when an user connected, print the log
  console.log('a user connected');
//   socket.on('chat message', (msg) => {
//     console.log('message: ' + msg);
//     // boradcast to everyone
//     io.emit('chat message', msg);
//   });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

// From https://socket.io/get-started/chat
// const { Server } = require("socket.io");

// const app = express();
// const server = http.createServer(app);// HTTP server
// const io = new Server(server);// pass the HTTP server to init a new socket.io instance

// app.get('/', (req, res) => {
//   //res.send('<h1>Hello world</h1>');
//   res.sendFile(__dirname + '/index.html');
// });

// listen connection event for incoming sockets
// io.on('connection', (socket) => {
//   // everytime when an user connected, print the log
//   console.log('a user connected');
//   socket.on('chat message', (msg) => {
//     console.log('message: ' + msg);
//     // boradcast to everyone
//     io.emit('chat message', msg);
//   });
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });