require('dotenv').config()

const { GITHUB_ACCESS_TOKEN } = process.env

const fs = require('fs')
const { program } = require('commander')
const { Octokit } = require('octokit')

program.version('0.0.1')

const octokit = new Octokit({ auth: GITHUB_ACCESS_TOKEN })

program
  .command('me')
  .description('Check my profile')
  .action(async () => {
    const {
      data: { login },
    } = await octokit.rest.users.getAuthenticated()
    console.log('Hello, %s', login)
  })

program
  .command('list-bugs')
  .description('List issues with bug label')
  .action(async () => {
    // console.log('Before readfile...')
    // const result = await fs.promises.readFile('.gitignore')
    // console.log('readfile result: ', result)
    console.log('List bugs')
  })

program
  .command('check-prs')
  .description('Check pull request status')
  .action(() => {
    console.log('Check PRs!')
  })

program.parse()
