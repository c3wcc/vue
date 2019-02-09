import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import login from '@/components/user/login'
import aaa from '@/components/aaa'
import ddd from '@/components/ddd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/aaa',
      name: 'aaa',
      component: aaa,
      meta: {
        title: "标题"
      },
    },
    {
      path: '/ddd',
      name: 'ddd',
      component: ddd,
      meta: {
        title: "详情"
      }
    },
    {
      path: '/user/login',
      name: 'login',
      component: login,
      meta: {
        title: "登录"
      }
    }

  ]
})
