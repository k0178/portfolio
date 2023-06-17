import {createWebHistory, createRouter} from "vue-router";
import Home from "../Home.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: () => import('../About.vue')
    },
    {
        path: '/contact',
        component: () => import('../Contact.vue')
    },
    {
        path: '/projects',
        component: () => import('../Projects.vue')
    },
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
})

export default router