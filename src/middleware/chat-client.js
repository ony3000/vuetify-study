const constants = require('@/assets/constants');
const { WEBSOCKET_PORT } = constants;

class ChatClient {
    constructor() {
        this.socket = io(`localhost:${WEBSOCKET_PORT}`);
    }
}

module.exports = ChatClient;
