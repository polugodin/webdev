const withNextra = require('nextra')({
  defaultShowCopyCode: true,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

module.exports = withNextra({
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './imagesLoader.ts',
  },
  basePath: '/webdev',
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?/,
      use: ['./utils/sourceCodeLoader.js'],
    })

    return config
  },
})
