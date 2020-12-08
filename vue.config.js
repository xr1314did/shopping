// vue.config.js
const path = require('path')  //commonjs语法引入path
const px2rem = require('postcss-px2rem') //postcss的一个插件

module.exports = {// 只能写vue封装的配置
    // runtimeCompiler:true,  //更好的方案:render
    lintOnSave: false, // 关闭Eslint 的规则
    css: { //添加postcss配置
        loaderOptions: {
          postcss: {
            plugins: [
              px2rem({
                remUnit: 37.5  //设计稿等分后的rem值  375/10
              })
            ]
          }
        }
    },
    configureWebpack: { // 内部写webpack原生配置
      resolve: {
        extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
        alias: { // 路径别名(简写方式)
          // 'vue$': 'vue/dist/vue.esm.js',  // 带vue编译器, vue3中不需要, 利用render
          '@': path.resolve(__dirname, 'src'),
          '@components': path.resolve(__dirname, 'src/components'),
        }
      }
    },
    devServer: {// vue 配置代理
        proxy: {
        //   '/api': {
        //     target: 'http://localhost:4000',  //后台接口域名(转发的目标地址)
        //     // changeOrigin: true, // 是否跨域
        //     pathRewrite:{
        //         '^/api':''  //转发请求时去除路径前面的/api
        //     }
        //   },
          '/gh': {
            target: 'https://api.github.com', 
            pathRewrite:{
                '^/gh':''  //转发请求时去除路径前面的/gh
            },
            changeOrigin: true, // 是否跨域(支持跨域, 如果协议/主机也不相同, 必须加上)
          }
        }
      }
  }