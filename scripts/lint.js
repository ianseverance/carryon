const { run } = require('runjs')
const chalk = require('chalk')

function lint() {
  console.log('🎨' + '  ' + chalk.cyan('Linting...'))
}

module.exports = {
  lint
}
