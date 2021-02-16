const virtual = require('rollup-plugin-virtual')

const reactRefresh = require('@vitejs/plugin-react-refresh')

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  plugins: [
    reactRefresh(),
    virtual({
      'my-cool-module.tsx': `import React from 'react';
      export default 1`
    })
  ],
  esbuild: {
    jsxInject: `import React from 'react';`
  },
  build: {
    minify: false,
    rollupOptions: {
      input: {
        about: './src/entry-about.jsx',
        home: './src/entry-home.jsx',
        virtual: 'my-cool-module.tsx'
      }
    }
  }
}
