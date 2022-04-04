module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jasmine: true
  },
  extends: ['standard', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error']
  },
  parserOptions: {
    ecmaVersion: 12
  }
}
