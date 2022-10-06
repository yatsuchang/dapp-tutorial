const express = require('express');
const { Server } = require('socket.io');
const http = require('http');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const PORT = process.env.PORT || 8000;

const router = require('./router');

const app = express();
const server = http.createServer(app);// HTTP server
const io = new Server(server, {cors: {origin: "*"}});// pass the HTTP server to init a new socket.io instance

// listen connection event for incoming sockets
io.on('connection', (socket) => {
  // everytime when an user connected, print the log
  // console.log('a user connected');
  socket.on('join', ({ name, room}, callback) => {
    console.log(name, room);
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) {
      return callback(error);
    }
    // tell the user
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}` });
    // broadcast to other users
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    socket.join(user.room);
    //callback(); will cause socket.id change later
  });

  socket.on('sendMessage', (message, callback) => {
    console.log('socket.id:', socket.id);
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
    //removeUser(socket.id);
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