<template>
  <div>
  <router-view></router-view>
  <FooterGuide></FooterGuide>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from '@/components/FooterGuide/FooterGuide.vue'
  export default {
    components: {  //局部注册组件(局部注册只在当前组件使用, 若多个组件用到, 就全局注册)
      FooterGuide
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

 
</style>
