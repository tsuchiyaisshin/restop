require('events').EventEmitter.defaultMaxListeners = 50

module.exports = {
  transpileDependencies: ['vuetify'],
  lintOnSave: process.env.NODE_ENV !== 'production',
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },

  devServer: {
    port: 9000,
    disableHostCheck: true,
    publicPath: '/',
  },
}
