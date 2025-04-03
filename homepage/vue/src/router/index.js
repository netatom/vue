import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Park from "../pages/Park.vue";
import About from "../pages/About.vue";
import HomeView from "../pages/Bmw.vue";
import Login from "../pages/Login.vue";
import Admin from "../pages/Admin.vue";
import Notfound from "../pages/NotFound.vue";

const routes = [
    { path: "/", component: Home },
    { path: '/park/:id', component: Park },
    { path: "/about", component: About },
    { path: '/detail/:photoNum', component: HomeView },
    { path: '/login', component: Login },
    {
        path: '/admin', component: Admin,
        meta: { requiredAuth: true }
    },
    { path: '/:pathMatch(.*)*', component: Notfound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 전역 네비게이션 가드
router.beforeEach((to, from, next) => {
    const isLoggedIn = !!sessionStorage.getItem('user')
    if (to.meta.requiredAuth && !isLoggedIn) {
        next('/login') // 로그인이 안되어 있으면 로그인페이지로 이동
    } else if (to.path === '/login' && isLoggedIn) {
        next('/admin') // 로그인한 사용자가 로그인으로 갈때
    } else {
        next() // 통과
    }
})

export default router