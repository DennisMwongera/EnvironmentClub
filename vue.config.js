'use strict'
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
// const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// const name = defaultSettings.title || 'vue Admin Template' // page title

// If your port is set to 8080,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// npm run serve --port 8080
const port = process.env.port || process.env.npm_config_port || 8080// dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
    /**
     * You will need to set publicPath if you plan to deploy your site under a sub path,
     * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
     * then publicPath should be set to "/bar/".
     * In most cases please use '/' !!!
     * Detail: https://cli.vuejs.org/config/#publicpath
     * 
     */
    
     publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
    outputDir: 'dist',
    assetsDir: 'assets',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: true,
    devServer: {
      port: port,
      open: true,
      overlay: {
        warnings: false,
        errors: true
      },
    //   before: require('./mock/mock-server.js')
    },
    configureWebpack: {
      // provide the app's title in webpack's name field, so that
      // it can be accessed in index.html to inject the correct title.
      resolve: {
        alias: {
          '@': resolve('src')
        }
      },
      mode: 'development',
  }
  }
