module.exports = {
  root: true,
  extends: ['airbnb-base', 'prettier', 'eslint:recommended', 'plugin:import/typescript'],
  plugins: ['import', '@typescript-eslint', 'simple-import-sort', 'mocha'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
    commonjs: true,
    node: true,
    mocha: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
        paths: ['src/', 'tests/'],
        moduleDirectory: ['node_modules', 'src/'],
        typescript: {}
      },
    },
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['warn', 'as-needed'],
    quotes: ['error', 'single', {allowTemplateLiterals: true}],
    'no-useless-escape': 1,
    'no-console': 0,
    'no-debugger': 1,
    'no-var': 2,
    'no-trailing-spaces': 0,
    'eol-last': 0,
    'no-underscore-dangle': 'off',
    'no-alert': 0,
    'no-lone-blocks': 2,
    'no-case-declarations': 0,
    'import/no-useless-path-segments': 'error',
    'import/no-relative-parent-imports': 'off',
    'import/no-self-import': 'error',
    'import/no-default-export': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/first': 'error',
    'import/export': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-import-module-exports': 'off',
    'import/no-relative-packages': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-unused-vars': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'class-methods-use-this': 'off',
    'max-classes-per-file': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'no-shadow': 'off',
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Node.js builtins. You could also generate this regex if you use a `.js` config.
              // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
              [
                '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
              ],
              // Packages. `react` related packages come first.
              ['^@?\\w'],
              // Internal packages.
              [
                '^(@|@store|@resources|@components|@constants|@helpers|@hooks|@lib|vendored-lib)(/.*|$)',
              ],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)", "^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.s?css$'],
            ],
          },
        ],
      },
    },
    {
      files: ['*.dtos.ts'],
      rules: {
        'no-use-before-define': 'off',
        camelcase: 'off',
      },
    },
    {
      files: ['*.tests.ts'],
      rules: {
        'prefer-arrow-callback': 'off',
        'func-names': 'off'
      }
    }
  ],
};
