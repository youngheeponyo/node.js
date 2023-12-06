const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3000'
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  devServer : {
    port : 8080,
    proxy : {
      '^/api':{      //통신을 시도할 때 사용되는 api
        target,
        changeOrigin : true,
        ws : false,
        pathRewrite : {'^/api' : '/'} //내가 일으키는 통신에 대해서는 api가 아니라 /만 이용하여 접근하라는 의미
      }
    }
  }
})
