/* eslint-disable */
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        createDefaultProgram: true,
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended', // Make sure this is always the last configuration in the extends array.
    ],
    rules: {
        '@typescript-eslint/no-namespace': 0,
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/restrict-template-expressions': 0
    }
};
