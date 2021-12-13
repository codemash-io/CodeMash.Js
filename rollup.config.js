import pkg from './package.json';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import {terser} from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const extensions = ['.ts'];
export default [
	{
		input: 'src/index.ts',
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
			typescript(),
			replace({
				"const fetch = require('node-fetch');": '',
				delimiters: ['', ''],
				include: ['./server/server.js'],
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
	// ES
	{
		input: 'index.js',
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
			replace({
				"const fetch = require('node-fetch');": '',
				delimiters: ['', ''],
				include: ['./server/server.js'],
			}),
			babel({
				exclude: 'node_modules/**',
				extensions,
				babelHelpers: 'bundled',
			}),
		],
	},
	// CommonJS
	{
		input: 'src/index.ts',
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
