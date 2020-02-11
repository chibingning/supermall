import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/home/Home')   //懒加载
const Category = () => import('../views/category/Category')
const Shopcart = () => import('../views/shopcart/Shopcart')
const Profile = () => import('../views/profile/Profile')

Vue.use(Router)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/shopcart',
    component:Shopcart
  },
  {
    path:'/profile',
    component:Profile
  }
]

export default new Router({
  mode: 'history', //访问路径不带井号  html5 history模式
  linkActiveClass:'active',
    routes
})

