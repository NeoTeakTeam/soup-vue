<script setup lang="ts">
import { RouterLink, RouterView, type RouteLocationNormalizedLoaded } from "vue-router";

const getRouterNow = (name: string, route: RouteLocationNormalizedLoaded) => {
    return route.name == name ? "now" : "";
};
</script>

<template>
    <header>
        <nav>
            <RouterLink to="/" class="title" :class="getRouterNow('home', $route)">Home</RouterLink>
            <RouterLink to="/download" :class="getRouterNow('download', $route)"
                >Download</RouterLink
            >
            <RouterLink to="/document" :class="getRouterNow('document', $route)"
                >Document</RouterLink
            >
        </nav>
    </header>

    <RouterView />
</template>

<style scoped></style>
