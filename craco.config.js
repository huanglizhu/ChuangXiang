const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              // 全局主色
              '@primary-color': '#1DA57A',
              // 链接色
              '@link-color': '#1e1e1e' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};