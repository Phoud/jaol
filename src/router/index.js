import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import About from '../components/Home/about.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }

    ]
})