const { run } = require('runjs')
const chalk = require('chalk')

function release() {
  console.log('🎈' + '  ' + chalk.cyan('Creating new release...'))
}

module.exports = {
  release
}
