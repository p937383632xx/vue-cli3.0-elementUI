import Vue from "vue";
import Router from "vue-router";

import Login from './views/login/';
import findAll from './components/findAll'
import Home from '@/components/home.vue'
import Host from './views/host'
import Warn from './views/warn'
import Hardware from './views/hardware'
import Monitor from './views/monitor'
import Usersystem from './views/usersystem'


Vue.use(Router);

export default new Router({
  routes:[
    {
      path: '/login',
      name: 'login',// 路由名称
      component: Login //组件对象
    },
    {
      path: '/',
      name: 'home',
      component:Home,
      // 定义该路由下的子路由
      children:[
        {
          path: '/host',
          component: Host
        },
        {
          path: '/warn',
          component: Warn
        },
        {
          path: '/hardware',
          component: Hardware
        },
        {
          path: '/monitor',
          component: Monitor
        },
        {
          path: '/usersystem',
          component: Usersystem
        }
      ]
    },
    {
      path: '/findAll',
      name: 'findAll',
      component:findAll
    }
  ]
})