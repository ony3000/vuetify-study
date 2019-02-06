<template>
    <v-content>
        <v-container fluid>
            <p>Hello Vuetify!</p>
            <v-textarea
                hint="Shift + Enter = New line"
                label="Message input"
                no-resize
                outline
                v-model="messageInput"
                @keydown.enter.exact.prevent="sendMessage"
            ></v-textarea>
        </v-container>
    </v-content>
</template>

<script>
export default {
    name: 'index-page',
    data() {
        return {
            messageInput: '',
        };
    },
    methods: {
        sendMessage() {
            let trimmedMessage = this.messageInput.trim();

            if (trimmedMessage) {
                this.$store.dispatch('sendMessage', trimmedMessage);
                this.messageInput = '';
            }
        },
    },
};
</script>
