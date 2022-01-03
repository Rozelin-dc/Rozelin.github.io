module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    './eslint-vue-ts-recommended.js',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: false,
    },
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        tabWidth: 2,
      },
    ],
    'space-before-function-paren': [
      2,
      { anonymous: 'never', named: 'never', asyncArrow: 'always' },
    ],
    'no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
