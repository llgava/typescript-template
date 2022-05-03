module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],

  ignorePatterns: ['build/'],

  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 12 },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-async-promise-executor': 'off',
    'linebreak-style': ['error', 'unix'],
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
};
