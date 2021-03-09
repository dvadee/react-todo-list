module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
    browser: true,
    jquery: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['babel'],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    quotes: ['error', 'single'],
    'prettier/prettier': 'error',
    'linebreak-style': ['warn', 'windows'],
  },
};
