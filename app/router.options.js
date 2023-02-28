//自訂義路由
const customRoutes = [
    {
        path: '/test',
        name: 'about',
        component: () => import('@/pages/about.vue')
    },
    {
        path:'/login',
        redirect:'/users/login'
    }
]

export default {
    routes: (_routes) => _routes.concat(customRoutes)
}