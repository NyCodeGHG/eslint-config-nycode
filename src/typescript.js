/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        sourceType: 'module'
      }
    }
  ]
};
