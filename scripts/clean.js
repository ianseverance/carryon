const { run } = require('runjs')
const chalk = require('chalk')

function clean() {
  console.log('🚽' + '  ' + chalk.cyan('Cleaning up files...'))
}

module.exports = {
  clean
}
