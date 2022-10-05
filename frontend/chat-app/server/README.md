先從官網文章看 https://socket.io/get-started/chat
Socket.IO 有兩部份
- server: 整合 Node.JS HTTP Server 的 socket.io 模組
- client: socket-io-client 模組(被 browser 載入)

一開始先照著設定好 server 端的 index.js
app = express();
server = http.createServer(app);
io = new Server(server);//利用 http server 初始 socket.io

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

server 還需要將這通訊息廣播給其它人, 使用 io.emit()
io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets
或者可用 socket.boradcast.emit()
io.on('connection', (socket) => {
  socket.broadcast.emit('hi');
});
這次為了簡單我們這麼寫
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

client 那邊需要將廣播過來的 chat message 接收並處理
socket.on('chat message', function(msg) {
  var item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
