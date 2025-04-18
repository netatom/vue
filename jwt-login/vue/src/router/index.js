import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Admin from "../pages/Admin.vue";

const routes = [
    { path: "/", component: Home },
    { path: '/login', component: Login },
    {
        path: '/admin', component: Admin,
        meta: { requiredAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router