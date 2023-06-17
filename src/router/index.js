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
                },
                {
                    path: '/page1',
                    name: 'page1',
                    component: () => import('@/views/page1')
                },
                {
                    path: '/page2',
                    name: 'page2',
                    component: () => import('@/views/page2')
                },
                {
                    path: '/page3',
                    name: 'page3',
                    component: () => import('@/views/page3')
                }
            ]
        }
    ]
})
export default router
