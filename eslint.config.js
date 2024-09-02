import globals from 'globals';
import js from '@eslint/js';

export default [
    {
        ignores: ['**/node_modules/', '**/dist/', '**/build/', '**/wdio.conf.js'],
    },
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.mocha,
                browser: 'readonly',
                $: 'readonly',
                $$: 'readonly',
                require: 'readonly',
                expect: 'readonly',
            },
        },
        rules: {
            semi: 'warn',
            camelcase: ['error', { properties: 'never' }],
            'id-length': ['error', { min: 2, exceptions: ['i', 'j', 'k', 'x', 'y', 'z'] }],
            'new-cap': 'error',
            'no-underscore-dangle': ['error', { allowAfterThis: true }],
            'func-names': ['error', 'as-needed'],
            complexity: ['error', 10],
            'prefer-const': 'error',
            'no-var': 'error',
        },
    },
    {
        files: ['**/*.spec.js', '**/*.test.js', '**/steps/*.js'],
        rules: {
            'func-names': 'error',
        },
    },
];
