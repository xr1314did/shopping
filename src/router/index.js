/* 
向外暴露路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

// 声明使用Vue插件
Vue.use(VueRouter)  

export default new VueRouter({
  mode: 'history',  // 默认的mode是hash, 是带有#, 而history模式路径中没有#

// 配置项目中的所有路由
    routes
})

 /* 
 路由组件写好了, 路由映射也好了,还需要路由器映射
 =>路由器映射: main.js(入口js文件)中引入并注册
  */