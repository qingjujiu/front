const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 配置devServer
  devServer: {
    host: '10.26.21.63', // 项目运行的ip
    port: 9090, // 项目运行的端口号
  },
  // 配置webpack
  configureWebpack: {
    experiments: {
      asyncWebAssembly: true,
      syncWebAssembly: true
    }
  }

})
