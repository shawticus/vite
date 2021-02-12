const reactRefresh = require('@vitejs/plugin-react-refresh')

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  base: '/test-base/',
  plugins: [reactRefresh()],
  esbuild: {
    jsxInject: `import React from 'react';`
  },
  build: {
    minify: false
  }
}
