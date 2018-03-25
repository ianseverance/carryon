const chalk = require('chalk')
const { run } = require('runjs')

async function pre_publish() {
  console.log('💨' + '  ' + chalk.cyan('Publishing unreleased changes to changelog...'))
}

module.exports = {
  pre_publish
}
