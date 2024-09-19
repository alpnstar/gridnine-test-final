const js = require('@eslint/js');
const sonarjs = require('eslint-plugin-sonarjs');
const globals = require('globals');
const ts = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const eslintReact = require('eslint-plugin-react');
const eslintReactRefresh = require('eslint-plugin-react-refresh');
const eslintPluginUnicorn = require('eslint-plugin-unicorn');

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
    {
        plugins: {
            '@typescript-eslint': ts,
            'react': eslintReact,
            'react-refresh': eslintReactRefresh,
            'sonarjs': sonarjs,
            'unicorn': eslintPluginUnicorn,
        },
        ignores: ['bundle', 'node_modules', 'eslint.config.js'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2024,
            },
            parser: tsParser,
            parserOptions: {
                project: ['tsconfig.json'],
            },
        },
        files: ['**/*.{ts,tsx}'],
        rules: {
            ...eslintReact.configs.recommended.rules,
            ...ts.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
            'react/jsx-curly-brace-presence': ['warn', {props: 'never', children: 'never'}],
            'react/function-component-definition': ['warn', {namedComponents: 'arrow-function'}],
            'react/self-closing-comp': ['warn', {component: true, html: true}],
            'react/boolean-prop-naming': 'warn',
            'react/destructuring-assignment': 'warn',
            'react/jsx-handler-names': 'warn',
            'react/jsx-pascal-case': 'warn',
            'unicorn/prefer-query-selector': 'warn',
            'prefer-const': 'warn',
            'eqeqeq': 'warn',
            'no-console': 'warn',
            'camelcase': 'warn',
            'comma-dangle': 'warn',
            'semi': 'warn',
            'no-multiple-empty-lines': 'warn',
            'prefer-arrow-callback': 'warn',
            'quotes': ['warn', "double"],
            'jsx-quotes': ['warn', 'prefer-double'],
            'array-callback-return': 'warn',
            'no-unmodified-loop-condition': 'warn',
            'id-length': ["warn", {"max": 30}],
            'new-cap': 'warn',
            "no-unused-vars": "off",
            '@typescript-eslint/no-unused-vars': ['warn'],
        },
    },
];
