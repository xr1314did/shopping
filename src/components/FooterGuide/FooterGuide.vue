<template>
  <nav>
    <ul class="footer-guide">
      <!-- 拿到当前请求路劲, 判断是否=首页 -->
      <!-- 注意当前请求路径是在$route对象中 -->
      <li :class="{on: $route.path==='/msite'}" @click="goto('/msite')">
        <i class="iconfont iconu"></i>
        <span>首页</span>
      </li>
      <li :class="{on: $route.path==='/search'}" @click="goto('/search')">
        <i class="iconfont iconicon-search"></i>
        <span>搜索</span>
      </li>
      <li :class="{on: $route.path==='/order'}" @click="goto('/order')">
        <i class="iconfont icondingdan"></i>
        <span>订单</span>
      </li>
      <!-- <li :class="{on: $route.path==='/profile'}" @click="goto('/profile')">
        <i class="iconfont iconuser"></i>
        <span>个人</span>
      </li> -->
      <router-link to="/profile" tag="li" :class="{on: $route.path==='/profile'}">
        <i class="iconfont iconuser"></i>
        <span>个人</span>
      </router-link>
    </ul>
  </nav>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'FooterGuide', // 组件名字
    methods: {
      goto(path){
        // 编程式路由跳转
        // console.log(this.$router)
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
ul
  top-border-1px(#cccccc)
  list-style none
  width 100%
  height 50px
  position fixed
  left 0
  bottom 0
  display flex
  li
    flex 1
    display flex
    flex-direction column
    &.on
      color $green
    i
      margin-top 8px
      font-size 22px
      span
        font-size 12px
</style>
/* 
组件化代码的步骤
  0.拆分组件
  1.静态组件
  2.动态组件(两步)
   1.初始动态显示要正确(根据路由路径显示): 用动态类名的写法 :class=""
      * :class=""有两种写法
          1. 动态的字符串
          2. 动态的对象=>类名确定,只是不确定有没有
                    <!-- 拿到当前请求路劲, 判断是否=首页 -->
                    <!-- 注意当前请求路径是在$route对象中 -->

    2.交互(就是要去绑定监听)要正确:点击切换路由
      * 点击切换路由(两种)
        1. 声明式 <router-link></router-link>
        2. 编程式 用$router加点击监听去跳转
    this.$router.push(path): 相当于点击路由链接(可以返回到当前路由界面)
    this.$router.replace(path): 用新路由替换当前路由(不可以返回到当前路由界面)
    this.$router.back(): 请求(返回)上一个记录路由
 */
/* 
整理
  1.css3弹性盒子的语法
    display flex
    flex-direction column
    实现效果:是将li里面的两项(图标和文字)列排布 
 */
