const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    // ? '/production-sub-path/'
    ? './'
    : '/',
  outputDir: 'dist',
  assetsDir: '',
  indexPath: 'index.html',
  // filenameHashing: true,
  filenameHashing: false,
  css: {
    extract: true,
  },
})
