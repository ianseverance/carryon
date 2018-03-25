module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      generators: true,
      experimentalObjectRestSpread: true
    },
    sourceType: 'module',
    allowImportExportEverywhere: false
  },
  extends: [
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
  ],
  plugins: [
    'flowtype',
    'prettier'
  ],
  env: {
    es6: true,
    node: true
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    }
  }
}
