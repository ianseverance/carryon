const axios = require('axios')
const chalk = require('chalk')
const { run } = require('runjs')

/**
 * Check if the given values are valid.
 *
 * @param {array} ...args
 * @return {boolean}
 * @internal
 */
export const _isValid = (...args) => {
  const argArr = [args]
  for (let value of argArr) {
    if (value == null || value !== value) {
      return false
    }
  }
  return true
}

/**
 * Input a string in the format of 'owner/repo' (referred to as the 'repo slug' in some CI tools, such as Semaphore) and return the 'owner'.
 *
 * @param {string} repoSlug
 * @return {string}
 * @internal
 */
const _getRepoOwner = (repoSlug) => {
  if (_isValid(repoSlug)) {
    const exp = /\S+?(?=\/)/g
    const check = exp.test(repoSlug)

    if (_isValid(check)) {
      const value = repoSlug.match(exp)

      if (typeof value[0] === 'string' && value[0] != null) {
        const comp = value[0]

        return comp
      } else {
        throw new Error(`The parameters you provided are invalid.
          You provided:
          @param 'repoSlug' = ${repoSlug} (must be a valid repo slug)`)
      }
    } else {
      throw new Error(`The parameters you provided are invalid.
        You provided:
        @param 'repoSlug' = ${typeof repoSlug} (must be string)`)
    }
  } else {
    throw new Error(`Please provide the 'repoSlug' argument.`)
  }
}

/**
 * Return all (relatively, because there should never be more than 100 open)
 * pull requests on a branch of a GitHub repo.
 *
 * @param {string} apiToken
 * @param {string} repoOwner
 * @param {string} repoName
 * @param {string} branchName
 * @return {Object}
 * @internal
 */
const _getGitPullRequests = (apiToken, repoOwner, repoName, branchName) => {
  return axios({
    method: 'post',
    url: 'https://api.github.com/graphql',
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json'
    },
    data: {
      query: `{
        repository(owner: "${repoOwner}", name: "${repoName}") {
          pullRequests(first: 100, headRefName: "${branchName}", states: OPEN) {
            nodes {
              title
              mergedAt
              author
              resourcePath
            }
          }
        }
      }`
    }
  })
  .catch(err => console.log(err))
}


async function pre_publish(apiKey, repoSlug, repoName, branch) {
  console.log('💨' + '  ' + chalk.cyan('Publishing unreleased changes to changelog...'))

  const repoOwner = _getRepoOwner(repoSlug)
  let value = await _getGitPullRequests(apiKey, repoOwner, repoName, branch)
  const pullRequests = value.data.repository.pullRequests.nodes

  console.log(JSON.stringify(value.data))
}

module.exports = {
  pre_publish
}
