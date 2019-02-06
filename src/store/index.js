import Vue from 'vue';
import Vuex from 'vuex';
import ChatClient from '@/middleware/chat-client';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        socket: null,
        messages: [],
    },
    getters: {
    },
    mutations: {
        appendMessage(state, message) {
            state.messages.push(message);
        },
    },
    actions: {
        openConnection(context) {
            if (!context.state.socket) {
                context.state.socket = new ChatClient(context);
            }
        },
        sendMessage({ state }, message) {
            state.socket.emit('message', message);
        },
    },
});

export default store;
