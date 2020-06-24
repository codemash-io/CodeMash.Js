import json from '@rollup/plugin-json';
import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'lib/index.js',
  output: [
    {
      file: './dist/codemash.js',
      format: 'cjs'
    },
    {
      file: './dist/codemash.min.js',
      format: 'iife',
      name: 'cm',
      plugins: [terser()]
    },
    /* {
      file: 'bundle.umd.js',
      format: 'umd',
      name: 'cm',
      sourcemap: true
    } */
  ],
  plugins: [
    json(),
    resolve(),
    babel({ babelHelpers: 'bundled' })
  ],
  // external: ['lodash']
};