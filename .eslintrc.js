module.exports = {
	env: {
		es6: true,
		node: true,
	},
	extends: ['plugin:react/recommended', 'airbnb'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'linebreak-style': 0,
		indent: ['error', 4],
		'import/prefer-default-export': 0,
		radix: 0,
		'no-return-await': 0,
		'no-plusplus': 0,
		'no-underscore-dangle': 0,
		'global-require': 0,
		'no-alert': 0,
		'no-undef': 0,
		'no-use-before-define': 0,
		'no-console': 0,
		'no-shadow': 1,
		'array-callback-return': 0,
		'no-await-in-loop': 1,
		'no-unused-expressions': 0,
	},
};
