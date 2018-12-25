<template>
    <v-app>
        <v-navigation-drawer app></v-navigation-drawer>
        <v-toolbar app></v-toolbar>
        <index-page></index-page>
        <v-footer app></v-footer>
    </v-app>
</template>

<script>
import IndexPage from '@/pages/index';

export default {
    name: 'default-layout',
    components: {
        IndexPage,
    },
};
</script>
