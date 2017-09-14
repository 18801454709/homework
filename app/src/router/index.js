import Vue from 'vue'
import Router from 'vue-router'
import appl from '@/components/appl'
import hot from '@/components/small_module/hot'
import classify from '@/components/small_module/classify'
import boutique from '@/components/small_module/boutique'
import streaming from '@/components/small_module/streaming'
import broadcast from '@/components/small_module/broadcast'
import details from '@/components/small_module/details'
import '../../static/fonts/iconfont.css'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'red',
  routes: [
    {
    	path: '/',
    	redirect: '/classify'
    },
    {
      path: '/', 
      name: 'appl',
      component: appl,
      children: [
      	{
      		path: '/hot',
        	name: 'hot',
        	component: hot,
        	children: [
        		{
        			path: '/details',
        			name: 'details',
        			component: details
        		}
        	]
      	},
      	{
      		path: '/classify',
        	name: 'classify',
        	component: classify
      	},
      	{
      		path: '/boutique',
        	name: 'boutique',
        	component: boutique
      	},
      	{
      		path: '/streaming',
        	name: 'streaming',
        	component: streaming
      	},
      	{
      		path: '/broadcast',
        	name: 'broadcast',
        	component: broadcast
      	}
      ]
    }
  ]
})
