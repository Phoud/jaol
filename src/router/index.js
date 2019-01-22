import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Common/Home.vue'
import About from '../components/Common/about.vue'
import News from '../components/Common/News.vue'
import NewsSingle from '../components/Common/NewsSingle.vue'
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
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/new-single',
            name: 'new-single',
            component: NewsSingle
        }

    ]
})