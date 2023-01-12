module.exports = {
  parser: '@typescript-eslint/parser',
  ecmaFeatures:  {
    'jsx':  true
  },
  extends: [ 'next', 'turbo', 'prettier', 'plugin:@typescript-eslint/recommended' ],
  ignorePatterns: ['**/dist/*'],
  rules: {
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always', { 'singleValue': false, 'objectsInArrays': false }],
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/object-curly-spacing': [ 'error', 'always' ],
    'semi': [ 'error', 'always' ],
    '@typescript-eslint/semi': [ 'error', 'always' ],
    'quotes': [ 'error', 'single' ],
    '@typescript-eslint/quotes': [ 'error', 'single' ],
    'react/jsx-key': 'off',
    'comma-dangle': [ 'error', 'never' ]
  }
};
