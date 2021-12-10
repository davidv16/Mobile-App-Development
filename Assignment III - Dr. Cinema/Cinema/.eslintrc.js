module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'airbnb',
  ],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: false }],
    'react/style-prop-object': [1, { allow: ['string'] }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'linebreak-style': 'off',
    'import/extensions': 'off',
    'no-nested-ternary': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-restricted-syntax': 'off',
    'no-extra-semi': 'off',
    semi: 'off',
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'default-param-last': 'off',
    'max-len': 'off',
    'no-return-assign': 'off',
  },
};
