import globals from 'globals'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
   // .eslintrc.json or .eslintrc.js

  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module"
  },
  "extends": ["eslint:recommended", "plugin:@eslint/js/recommended"],
  "rules": {
    // Add specific rules if needed
  }

  },
]
