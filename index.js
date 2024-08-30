module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors.
    // Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
  ],
  globals: {},
  rules: {
    '@typescript-eslint/no-explicit-any': [0, {
      fixToUnknown: true
    }],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        vars: 'local',
        argsIgnorePattern: '^_',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    // allow unnamed anonymous functions
    'func-names': 0,
    indent: [
      0,
      2,
      {
        SwitchCase: 1,
      },
    ],
    // allows us to sort functions and classes in a logical order, rather than the inverse inclusion order
    'no-use-before-define': 1,
    // allows to assign to argument properties, but not to arguments
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'max-len': [2, 150],
    // allow spaces to define objects and vars
    'no-multi-spaces': [
      0,
      {
        exceptions: {
          Property: true,
          VariableDeclarator: true,
        },
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    // allow test libraries to live in devDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['test/**'],
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
  },
  ignorePatterns: ['build', 'dist'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolve': {
      moduleDirectory: ['node_modules', 'src'],
    },
  },
}
