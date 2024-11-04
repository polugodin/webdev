const isProd = process.env.NODE_ENV === 'production'

const withNextra = require('nextra')({
  defaultShowCopyCode: true,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

module.exports = withNextra({
  ...(isProd
    ? {
        output: 'export',
        images: {
          unoptimized: true,
          loader: 'custom',
          loaderFile: './src/utils/nextra/imageLoader.js',
        },
        basePath: '/webdev',
      }
    : undefined),
  webpack: (config, _options) => {
    config.module.rules.push({
      test: /\.mdx?/,
      use: ['./src/utils/nextra/sourceCodeLoader.js'],
    })

    return config
  },
})
