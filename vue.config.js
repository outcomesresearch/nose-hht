const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const webpackParams = {
  title:
    'Nasal Outcome Score for Epistaxis in Hereditary Hemorrhagic Telangiectasia (NOSE HHT) Questionnaire',
  description:
    "Evaluate the extent of one's physical problems, limitations, and emotional consequences of nosebleeds with a 29-question inventory.",
  site_name:
    'Applets from Clinical Outcomes Research at Washington University in St Louis',
  url: 'https://outcomesresearch.github.io/nose-hht/',
};

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/nose-hht-dev/' : '/',
  transpileDependencies: ['vuetify'],
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      Object.entries(webpackParams).forEach(([key, value]) => {
        args[0][key] = value;
      });
      return args;
    });
  },
  configureWebpack: (config) => {
    return {
      plugins: [new NodePolyfillPlugin()],
      resolve: {
        fallback: {
          fs: false,
          child_process: false,
          tls: false,
          net: false,
        },
      },
    };
  },
};
