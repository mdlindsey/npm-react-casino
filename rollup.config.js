import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import twistUrlAssets from 'postcss-twist-url-assets';
const config = {
  input: 'src/index.js',
  external: ['react'],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    terser(),
    resolve(),
    copy({
      targets: [
        'src/assets/png'
      ],
      outputFolder: 'dist/assets'
    }),
    postcss({
      plugins: [
        twistUrlAssets('src/assets/png', 'dist/assets/png')
      ]
    })
  ],
  output: {
    format: 'umd',
    name: 'casino',
    globals: {
      'react': 'React'
    }
  }
};
export default () => config;