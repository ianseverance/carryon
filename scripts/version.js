const { run } = require('runjs')
const chalk = require('chalk')

function version() {
  console.log('🎈' + '  ' + chalk.cyan('Creating new version...'))
}

module.exports = {
  version
}
