const { run } = require('runjs')
const chalk = require('chalk')

function start() {
  console.log('🚥' + '  ' + chalk.cyan('Starting...'))
}

module.exports = {
  start
}
