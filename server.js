const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

io.on('connection', socket => {
  socket.on('chat message', ({ user, msg }) => {
    io.emit('chat message', { user, msg });
  });
});

http.listen(PORT, () => {
  console.log(`🚀 XIS CHAT running at http://localhost:${PORT}`);
});
