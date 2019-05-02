import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy-assets';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
const config = {
  input: 'src/index.js',
  external: ['react'],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    terser(),
    copy({
      assets: [
        'png'
      ],
    }),
    resolve()
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