import VueRouter from 'vue-router'

import signIn from '../pages/signIn'
import register from '../pages/register'

export default new VueRouter({
    mode: 'history',
    routes: [
    {
        path: '/',
        name: 'signIn',
        component: signIn
    },
    {
        path: '/reg',
        name: 'register',
        component: register
    }
    ]
})