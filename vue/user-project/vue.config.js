const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:5000'

module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    port : 8080,
    proxy : {
      '^/':{      //통신을 시도할 때 사용되는 api
        target,
        changeOrigin : true,
        ws : false
      }
    }
  }
})
