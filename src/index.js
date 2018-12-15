import Vue from 'vue';

new Vue({
    el: '#app',
    mounted() {
        this.$nextTick(() => {
            console.log('Hello Vuetify!');
        });
    },
});
