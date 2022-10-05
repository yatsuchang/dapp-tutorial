先從官網文章看 https://socket.io/get-started/chat
Socket.IO 有兩部份
- server: 整合 Node.JS HTTP Server 的 socket.io 模組
- client: socket-io-client 模組(被 browser 載入)

client 端的話僅需初始一個 io():
具體來說是先載入 /socket.io/socket.io.js 然後用它生成一個 io() instance
var socket = io();
接著從 <input> 得到用戶輸入的資料, 再以 event 的方式送給 server
socket.emit('chat message', input.value);

server 那邊會處理這個事件
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});