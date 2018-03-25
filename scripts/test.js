const { run } = require('runjs')
const chalk = require('chalk')

function test() {
  console.log('🔍' + '  ' + chalk.cyan('Testing...'))
}

module.exports = {
  test
}
