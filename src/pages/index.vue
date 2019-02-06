<template>
    <v-content>
        <v-container fluid>
            <v-textarea
                hint="Shift + Enter = New line"
                label="Message input"
                no-resize
                outline
                v-model="messageInput"
                @keydown.enter.exact.prevent="sendMessage"
            ></v-textarea>
            <v-card>
                <v-list subheader>
                    <v-subheader>Recent messages</v-subheader>
                    <v-list-tile v-for="(message, index) in messages" :key="index">
                        <v-list-tile-content>{{ message }}</v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-container>
    </v-content>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'index-page',
    data() {
        return {
            messageInput: '',
        };
    },
    computed: {
        ...mapState([
            'messages',
        ]),
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
