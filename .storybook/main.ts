const path = require('path')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [{
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
  ],
  typescript: {
    reactDocgen: 'react-docgen',
  },
  resolve: {
    modules: [
    path.resolve(__dirname, '..'),
    'node_modules'
  ],
  alias: {
    '@components': path.resolve(__dirname, '../components'),
    '@utils': path.resolve(__dirname, '../utils'),
  },
  },
  WebpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      ...config.resolve.modules,
    ]

    config.resolve.alias = {
      ...config.resolve.alias,
    }
    return config
  }
}
