import MainPage from "@/pages/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import UserPage from "@/pages/UserPage.vue";
import AboutPage from "@/pages/AboutPage.vue";

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/posts',
        component: UserPage,
    },
    {
        path: '/about',
        component: AboutPage,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default router
