const nrwlConfig = require('@nrwl/react/plugins/webpack.js');
const webpack = require('webpack');

module.exports = (config) => {
  nrwlConfig(config);

  return {
    ...config,
    plugins: [
      ...config.plugins,
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ],
  };
};
