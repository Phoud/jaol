// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCarousel from 'vue-carousel'
import VueMaterial from 'vue-material'
import { MdButton, MdDrawer } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(router)
Vue.use(MdButton)
Vue.use(MdDrawer)
Vue.use(VueMaterial)
Vue.use(VueCarousel);

Vue.config.productionTip = false

require('../css/bulma.css')
require('../css/style.css')
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})