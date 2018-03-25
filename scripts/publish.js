const { run } = require('runjs')
const chalk = require('chalk')

function publish() {
  console.log('💨' + '  ' + chalk.cyan('Generating new changelog...'))
}

module.exports = {
  publish
}
