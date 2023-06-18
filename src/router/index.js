import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    linkActiveClass: "active",
    routes: [
        {
            path: '/',
            redirect: '/page'
        },
        {
            path: '/',
            name: 'home',
            component: home,
            children: [
                {
                    path: '/page',
                    name: 'page',
                    component: () => import('@/views/page')
                }
            ]
        }
    ]
})
export default router
