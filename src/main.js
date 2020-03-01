import axios from 'axios';
import Qs from 'qs'
Vue.prototype.$axios = axios;
Vue.prototype.qs = Qs;
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Toast from 'components/common/toast'


Vue.config.productionTip = false

//安装toast插件
Vue.use(Toast)



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
