const build = require('./scripts/build')
const clean = require('./scripts/clean')
const lint = require('./scripts/lint')
const pre_publish = require('./scripts/pre_publish')
const publish = require('./scripts/publish')
const release = require('./scripts/release')
const start = require('./scripts/start')
const test = require('./scripts/test')
const version = require('./scripts/version')

module.exports = {
  build,
  clean,
  lint,
  pre_publish,
  publish,
  release,
  start,
  test,
  version
}
