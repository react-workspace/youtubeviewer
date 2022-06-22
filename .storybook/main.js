const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.jsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  //actions...Storybook上でonClickなどのUIアクションに対してのログを確認することができる
  //links...Storybook上でstory間の遷移をできるようにします。
  webpackFinal: config => {
    config.resolve.alias['~'] = path.join(__dirname, '../src/');
    return config;
  },
  core: {
    builder: 'webpack5'
  }
};