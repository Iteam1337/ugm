const tree = require('directory-tree')
const { join } = require('path')
const { lstatSync, mkdirSync, unlinkSync, writeFileSync } = require('fs')
const { tmpdir } = require('os')

const TEMP_FOLDER = join(tmpdir(), require('./package.json').name)
const TEMP_NAME = join(TEMP_FOLDER, 'assets.json')
const ASSETS = join(__dirname, 'src/assets')

try {
  if (!lstatSync(TEMP_FOLDER).isDirectory()) {
    mkdirSync(TEMP_FOLDER)
  }
} catch (_) { mkdirSync(TEMP_FOLDER) }

try {
  if (lstatSync(TEMP_NAME).isFile()) {
    unlinkSync(TEMP_NAME)
  }
} catch (_) {}

function iterate (directory) {
  function each ({ path, children }) {
    const array = []

    if (path && lstatSync(path).isFile()) {
      array.push(path.replace(`${ASSETS}/`, ''))
    }

    if (children) {
      return array.concat(...children.map(child => each(child)))
    } else {
      return array
    }
  }

  return each(directory)
}

writeFileSync(TEMP_NAME, JSON.stringify(
  iterate(
    tree(
      ASSETS, {
        extensions: /\.(png|svg|jp(e)g)$/i
      }
    )
  ),
  null,
  2
))

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'src-assets': TEMP_NAME
      }
    }
  }
}

