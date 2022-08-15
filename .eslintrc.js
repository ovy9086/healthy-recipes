module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-native', 'react'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react-native/no-inline-styles': 0,
        'quotes': [0, 'single'],
        'jsx-quotes': [0, 'single'],
        'prettier/prettier': 0,
        'comma-dangle': [0, 'never'],
        'react-native/no-raw-text': 2,
        'react-native/no-single-element-style-arrays': 2,
        'react-native/no-unused-styles': 2
      }
    }
  ]
};
