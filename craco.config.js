const CracoLessPlugin = require('craco-less')

module.exports = {
  babel: {
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }], //装饰器
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true //设置为true即是less
        }
      ]
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
