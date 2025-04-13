import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DownloadView from "../views/DownloadView.vue";
import DocumentView from "../views/DocumentView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/download",
            name: "download",
            component: DownloadView,
        },
        {
            path: "/document",
            name: "document",
            component: DocumentView,
        },
    ],
});

export default router;
