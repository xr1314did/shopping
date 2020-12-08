module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 配置vue的ui组件的配置(直接从webpack.config.js中相关配置搬过来)
  plugins: [
    ['babel-plugin-component', {
        "libraryName": "mint-ui",   // 针对mint-ui库实现按需引入打包
        "style": true  // 自动打包对应css  所以就不需要引入样式
      }]
  ]
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           