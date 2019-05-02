import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy-assets';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
const config = {
  input: 'src/index.js',
  external: ['react', 'insert-css'],
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
    // css({ output: 'src/css/bundle.css' })
  ],
  output: {
    format: 'umd',
    name: 'casino',
    globals: {
      'react': 'React',
      'insert-css': 'insertCss'
    }
  }
};
export default () => config;