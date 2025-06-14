const socket = io();
const user = localStorage.getItem('user');
const input = document.getElementById('messageInput');
const messages = document.getElementById('messages');

function sendMessage() {
  const msg = input.value.trim();
  if (msg) {
    socket.emit('chat message', { user, msg });
    input.value = '';
  }
}

socket.on('chat message', ({ user, msg }) => {
  const msgEl = document.createElement('div');
  msgEl.className = 'message';
  msgEl.innerHTML = `<span>${user}:</span> ${msg}`;
  messages.appendChild(msgEl);
  messages.scrollTop = messages.scrollHeight;
});

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') sendMessage();
});
