import pkg from './package.json';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import {terser} from 'rollup-plugin-terser';

const extensions = ['.js'];
export default [
	{
		input: 'index.js',
		output: [
			{
				file: './dist/index.min.js',
				format: 'iife',
				name: 'cm',
				esModule: false,
			},
		],
		plugins: [
			replace({
				"const fetch = require('node-fetch');": '',
				delimiters: ['', ''],
				include: ['./server/server.js'],
			}),
			resolve({
				extensions,
			}),
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
	{
		input: 'index.js',
		output: [
			{
				file: pkg.module,
				format: 'es',
			},
		],
		plugins: [
			replace({
				"const fetch = require('node-fetch');": '',
				delimiters: ['', ''],
				include: ['./server/server.js'],
			}),
			resolve({
				extensions,
			}),
			babel({
				exclude: 'node_modules/**',
				extensions,
				babelHelpers: 'bundled',
			}),
		],
	},
	{
		input: 'index.js',
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
			babel({
				exclude: 'node_modules/**',
				extensions,
				babelHelpers: 'bundled',
			}),
		],
	},
];
