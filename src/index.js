import Vue from 'vue';
import Vuetify from 'vuetify';
import '@mdi/font/scss/materialdesignicons.scss';
import 'vuetify/dist/vuetify.min.css';
import MyApp from '@/my-app';

Vue.use(Vuetify, {
    iconfont: 'mdi',
});

new Vue({
    el: '#app',
    components: {
        MyApp,
    },
    render(h) {
        return h(MyApp);
    },
    mounted() {
        this.$nextTick(() => {
            console.log('Hello Vuetify!');
        });
    },
});