const fs = require('fs')
const { program } = require('commander')

program.version('0.0.1')

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
