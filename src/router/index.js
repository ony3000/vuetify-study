import Vue from 'vue';
import VueRouter from 'vue-router';
import DefaultLayout from '@/layouts/default';
import IndexPage from '@/pages/index';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: DefaultLayout,
            children: [
                {
                    path: '',
                    component: IndexPage,
                    name: IndexPage.name,
                },
            ],
        },
    ],
});

export default router;
