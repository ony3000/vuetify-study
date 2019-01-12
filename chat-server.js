const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  serveClient: false,
});

class ChatServer {
  constructor(portNumber = 3000) {
    io.on('connection', (socket) => {
      console.log('A user connected');
      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
      socket.on('message', (message) => {
        io.emit('broadcast', message);
      });
    });

    http.listen(portNumber, () => {
      console.log(`Listening on localhost:${portNumber}`);
    });
  }
}

module.exports = ChatServer;
