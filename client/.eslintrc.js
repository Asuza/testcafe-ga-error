module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    $: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    'prettier',
  ],
  plugins: [
    'no-only-tests',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
  },
  ignorePatterns: [
    "tc/ClientScripts/*.js",
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': 'warn',
    'lines-between-class-members': ["error", "always", { "exceptAfterSingleLine": true }],
    'arrow-parens': 'off',
    'linebreak-style': ['error', 'unix'],
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ],
    // The following rules had to be turned off following an eslint update.
    // It might be a good idea to re-enable some of them and fix the issues.
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    'no-shadow': 'off',
    'camelcase': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'vuejs-accessibility/label-has-for': 'warn',
    'vuejs-accessibility/alt-text': 'warn',
    'vue/multi-word-component-names': 'warn',
    'vuejs-accessibility/form-control-has-label': 'warn',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
    {
      files: ['**/*.vue'],
      rules: {
        'max-len': ['error', { code: 160 }],
      },
    },
    {
      files: ['tc/**/*.{j,t}s'],
      globals: {
        test: true,
        fixture: true,
      },
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'lines-between-class-members': 'off',
        'newline-per-chained-call': 'off',
        'no-only-tests/no-only-tests': 'error',
        'no-restricted-syntax': 'off',
      },
    },
  ],
};
