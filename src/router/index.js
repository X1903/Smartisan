import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/reset.css'
import '../assets/css/header.css'

Vue.use(Router)

import Shop from '../views/shop'

import Home from '../views/home'
import MPhone from '../views/mPhone'
import PageOne from '../views/page_one'
import PageTwo from '../views/page_two'
import PageThree from '../views/page_three'
import PageFour from '../views/page_four'
import PageFive from '../views/page_five'
import Item from '../views/item'

export default new Router({
  mode:'history',
  routes: [
    {path: '/', component:Home},
    {path: '/Home', component:Home},
    {path: '/MPhone', component:MPhone},
    {path: '/PageOne', component:PageOne},
    {path: '/PageTwo', component:PageTwo},
    {path: '/PageThree', component:PageThree},
    {path: '/PageFour', component:PageFour},
    {path: '/PageFive', component:PageFive},
    {path: '/Shop', component:Shop},
    {path: '/Item', name:'Item', component:Item}
  ]
})
