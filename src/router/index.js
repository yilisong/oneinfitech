import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/App.vue'
import a from '@/console/module_a/index.vue'
import b from '@/console/module_b/index.vue'
import index from '@/console/index.vue'
import table from '@/components/Table/index.vue'
import area from '@/console/area/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/a', component: a },
    { path: '/b', component: b },
    { path: '/home', component: Home },
    { path: '/index', component: index },
    { path: '/table', component: table },
    { path: '/area', component: area },
    { path: '/', redirect: '/home' }
  ]
})
