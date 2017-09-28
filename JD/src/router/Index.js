import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import '../../static/fonts/iconfont.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
