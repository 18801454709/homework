import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import mintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
// import vueX from 'vueX'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css';

Vue.use(VueAxios,Axios);
Vue.use(Element);
// Vue.use(vueX);

var index = resolve => require(['./components/index.vue'], resolve);


var rightCon = resolve => require(['./components/content/right_main.vue'], resolve);
var router = new Router({
	linkActiveClass:'bg',
	routes:[{
		name:"rightCon",
		path:"/",
		component:rightCon
		// children:[]
	}]
})
Vue.use(Router)
window.Bus = new Vue();
var vm = new Vue({
	el:"#app",
	template:'<index />',
	components:{
		index:index
	},
	router
})
