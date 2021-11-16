module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'plugins': [
    'html',
    'import',
    'jsx-a11y',
    'node',
    'prettier',
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  'rules': {
    'indent': [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'windows',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'never',
    ],
    'comma-dangle': [
      'error',
      'only-multiline',
    ],
    'react/react-in-jsx-scope': [
      0,
    ],
    'react/prop-types': [
      0,
    ],
    '@typescript-eslint/explicit-module-boundary-types': [
      0,
    ],
  },
}
