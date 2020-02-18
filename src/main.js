import axios from 'axios';
import Qs from 'qs'
Vue.prototype.$axios = axios;
Vue.prototype.qs = Qs;
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'



Vue.config.productionTip = false


Vue.prototype.$bus = new Vue()

new Vue({
	el: '#app',
  router,
  store,
	components: {
		App
	},
	template: '<App/>'
})
