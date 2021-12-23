import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
// import replace from '@rollup/plugin-replace';
import {terser} from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const extensions = ['.ts', '.js'];
const input = 'src/index.ts';

export default [
	{
		input,
		output: [
			{
				file: './dist/index.min.js',
				format: 'iife',
				name: 'cm',
				esModule: false,
			},
		],
		plugins: [
			resolve({
				extensions,
			}),
			// replace({
			// 	"const fetch = require('node-fetch');": '',
			// 	delimiters: ['', ''],
			// 	include: ['./server/server.js'],
			// }),
			typescript(),
			terser(),
			babel({
				exclude: 'node_modules/**',
				extensions,
				babelHelpers: 'bundled',
				presets: [
					[
						'@babel/preset-env',
						{
							corejs: 3,
							modules: false,
							useBuiltIns: 'usage',
							forceAllTransforms: true,
							targets: {
								node: 'current',
								ie: '11',
							},
						},
					],
				],
			}),
		],
	},
	// ES
	{
		input,
		output: [
			{
				file: pkg.module,
				format: 'es',
			},
		],
		plugins: [
			resolve({
				extensions,
			}),
			typescript(),
			// replace({
			// 	"const fetch = require('node-fetch');": '',
			// 	delimiters: ['', ''],
			// 	include: ['./server/server.js'],
			// }),
			babel({
				exclude: 'node_modules/**',
				extensions,
				babelHelpers: 'bundled',
			}),
		],
	},
	// CommonJS
	{
		input,
		output: [
			{
				file: pkg.main,
				format: 'cjs',
			},
		],
		plugins: [
			resolve({
				extensions,
			}),
			typescript(),
			babel({
				exclude: 'node_modules/**',
				extensions,
				babelHelpers: 'bundled',
			}),
		],
	},
];
