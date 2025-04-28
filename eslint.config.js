import { FlatCompat } from '@eslint/eslintrc';
import pluginPrettier from 'eslint-plugin-prettier';
import angularEslintPlugin from '@angular-eslint/eslint-plugin';
import angularEslintTemplatePlugin from '@angular-eslint/eslint-plugin-template';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.config({
    extends: [
      'plugin:@angular-eslint/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      '@angular-eslint': angularEslintPlugin,
      '@angular-eslint/template': angularEslintTemplatePlugin,
      prettier: pluginPrettier,
    },
    rules: {
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      'prettier/prettier': 'error',
    },
  }),
];
