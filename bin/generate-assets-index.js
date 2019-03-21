#!/usr/bin/env node

const tree = require('directory-tree')
const { join } = require('path')
const { lstatSync, writeFileSync } = require('fs')
const ASSETS = join(__dirname, '../src/assets')
const PLACES = join(ASSETS, 'images/places')

class Helper {
  constructor () {
    this.id = 0
    this.generated = []
  }

  get name () {
    const name = `id${this.id++}`
    this.generated.push(name)
    return name
  }
}

function iterate (directory) {
  const helper = new Helper()

  function each ({ path, children }) {
    const array = []

    if (path && lstatSync(path).isFile()) {
      array.push(
        `import ${helper.name} from '${path.replace(directory.path, '.')}'`
      )
    }

    if (children) {
      return array.concat(...children.map(child => each(child)))
    } else {
      return array
    }
  }

  return `/*
  generated by ${__filename.replace(`${process.cwd()}/`, '')}
*/

${each(directory).join('\n')}

export default [
  ${helper.generated.map(str => `${str},`).join(' ')}
]`
}

const { children = [] } = tree(PLACES)

children.push({
  path: ASSETS
})

children.forEach(({ path: dirPath }) => {
  writeFileSync(`${dirPath}/index.js`, iterate(
    tree(
      dirPath,
      {
        extensions: /\.(png|svg|jp(e)g)$/i
      }
    )
  ))
})


