module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['typescript', 'react', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-param-reassign': ['warn', { props: false }],
    'no-unused-vars': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'operator-linebreak': 'off',
    'object-curly-spacing': ['error', 'always'],
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 3,
        },
      },
    ],
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/attribute-hyphenation': [
      'warn',
      'always',
      {
        ignore: ['on'],
      },
    ],
  },
};
