/* flat config to be compatible with ESLint v9+ when npx/eslint uses newer versions */
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  {
    ignores: ['node_modules', '.git', '.vscode', 'dist', 'coverage'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'no-console': 'off',
      'prettier/prettier': 'error',
    },
    settings: {},
  },
];
