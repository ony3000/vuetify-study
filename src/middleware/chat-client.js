const constants = require('@/assets/constants');
const { WEBSOCKET_PORT } = constants;

class ChatClient {
    constructor() {
        this.socket = io(`localhost:${WEBSOCKET_PORT}`);
        this.socket.on('broadcast', (message) => {
            console.log(`Broadcasted: ${message}`);
        });
    }
    sendMessage(message) {
        this.socket.emit('message', message);
    }
}

module.exports = ChatClient;
