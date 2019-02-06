const io = require('socket.io-client');
const constants = require('@/assets/constants');
const { WEBSOCKET_PORT } = constants;

class ChatClient {
    constructor(context) {
        const socket = io(`localhost:${WEBSOCKET_PORT}`);
        socket.on('broadcast', (message) => {
            context.commit('appendMessage', message);
        });
        return socket;
    }
}

module.exports = ChatClient;
