import Vue from 'vue';
import Vuex from 'vuex';
import ChatClient from '@/middleware/chat-client';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        socket: null,
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        openConnection({ state }) {
            if (!state.socket) {
                state.socket = new ChatClient();
            }
        },
        sendMessage({ state }, message) {
            state.socket.emit('message', message);
        },
    },
});

export default store;
