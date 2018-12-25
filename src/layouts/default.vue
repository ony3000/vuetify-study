<template>
    <v-app>
        <v-navigation-drawer app></v-navigation-drawer>
        <v-toolbar app></v-toolbar>
        <router-view></router-view>
        <v-footer app></v-footer>
    </v-app>
</template>

<script>
export default {
    name: 'default-layout',
};
</script>
