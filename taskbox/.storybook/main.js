
module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  staticDirs: ['../public'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
  ],

  features: {
    postcss: false,
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  docs: {
    autodocs: true
  }
};