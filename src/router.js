import VueRouter from 'vue-router'

// 导入 Account 组件
import Home from './components/Home.vue'
import Index from './components/Index.vue'
import list from './components/list.vue'
import my from './components/my.vue'


var router = new VueRouter({
  routes: [
         {path:'/',redirect:'/Home'},
     { path: '/Index', component: Index },
        { path: '/Home', component: Home,name:'home' },
           { path: '/list', component: list },
              { path: '/my', component: my }
      
  ],

  linkActiveClass: 'mui-active' 
 

})

// 把路由对象暴露出去
export default router