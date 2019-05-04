import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';
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
    resolve(),
    copy({
      targets: [
        'src/assets/png'
      ],
      outputFolder: 'dist/assets'
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