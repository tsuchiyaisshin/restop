module.exports = {
  transpileDependencies: ['vuetify'],
  lintOnSave: true,
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
