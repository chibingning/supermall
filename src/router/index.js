import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Tab from '../components/tab'
import User from '../components/user'


Vue.use(Router)

export default new Router({
  mode: 'history', //访问路径不带井号  html5 history模式
  linkActiveClass:'active',
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },{
      path:'/Tab',
      component:Tab
    },
    {
      path:'/user/:useId',
      component:User
    }
  ]
})




