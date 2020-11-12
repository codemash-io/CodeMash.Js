import pkg from './package.json';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

const extensions = ['.js'];
export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ],
    plugins: [
      resolve({
        extensions
      }),
      babel({
        exclude: 'node_modules/**',
        extensions,
        babelHelpers: 'bundled'
      })
    ]
  }
];
