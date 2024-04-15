// import path from 'path'
const fs = require('fs')
const path = require('path')

module.exports = function (source) {
  let match = source.match(/SOURCE_CODE_LOADER\(.*\)/)
  while (match) {
    const filePath = path.resolve(__dirname, '../..', match[0].slice(19, -1).replace('@/src/', ''))
    const fileExt = path.extname(filePath).slice(1)
    const file = fs.readFileSync(filePath, { encoding: 'utf-8' })
    const replacement = `\`\`\`${fileExt} \n${file}${file.at(-1) === '\n' ? '' : '\n'}\`\`\``

    source = source.replace(/SOURCE_CODE_LOADER\(.*\)/, replacement)
    match = source.match(/SOURCE_CODE_LOADER\(.*\)/)
  }

  return source
}
