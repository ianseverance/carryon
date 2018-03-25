const { run } = require('runjs')
const chalk = require('chalk')

function build() {
  console.log('🔨' + '  '  + chalk.cyan('Building...'))
}

module.exports = {
  build
}
