module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  lintOnSave: false,
  devServer: {
    open: true,
    host: 'localhost', // 后端接口的域名
    port: 8080, // 前端启动的端口
    https: false,
    hotOnly: false,
    // 接口名前面要有api
    proxy: {
      '/url': {
        target: 'http://localhost:8088', // 后端接口地址
        changeOrigin: true,
        pathRewrite: {
          "^/url": ''
        }
      },
    }
  }
}