import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // components: { // 注册组件(后面才能写组件标签)
  //   App: App
  // },
  // template: '<App/>',
  // vue的包是不需要带编译器的, 整体的打包文件更小
  // 创建App的组件对象返回, 最终会渲染到页面上
  render: h => h(App), //vue3的包是不用带编译器的,整体的打包文件更小
}).$mount('#app')
