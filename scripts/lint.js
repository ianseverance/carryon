const { run } = require('runjs')
const chalk = require('chalk')

function lint() {
  console.log('🎨' + '  ' + chalk.cyan('Linting...'))
  run('eslint --fix src')
}

module.exports = {
  lint
}
