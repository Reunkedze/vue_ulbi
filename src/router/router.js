import MainPage from "@/pages/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import PostsPage from "@/pages/PostsPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import PostPage from "@/pages/PostPage.vue";
import PostsPageWithStore from "@/pages/PostsPageWithStore.vue";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi.vue";

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/posts',
        component: PostsPage,
    },
    {
        path: '/about',
        component: AboutPage,
    },
    {
        path: '/posts/:id',
        component: PostPage,
    },
    {
        path: '/store',
        component: PostsPageWithStore,
    },
    {
        path: '/composition',
        component: PostPageCompositionApi
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default router
