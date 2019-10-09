#! /usr/bin/env node

const axios = require('axios')
const {fromPairs, map, split, trim, compose, compact, pick, take, defaults, reduce} = require('lodash/fp')
const Bluebird = require('bluebird')
const Handlebars = require('handlebars')
const stringifyObject = require('stringify-object')
const inner = compose(map(trim), split('='))
const transformer = compose(fromPairs, map(inner), compact, split('\n'))
const {pathExists, outputFile} = require('fs-extra')
const {join} = require('path')
const TsDataTemplate = `// Generated on {{creationDate}}
export const OMF_Packages = {{{data}}}
`

async function generate() {
  let packageData = await axios.get('https://api.github.com/repos/oh-my-fish/packages-main/contents/packages')
  // let structure = map(pick(['name', 'download_url']), take(5, packageData.data))
  let structure = map(pick(['name', 'download_url']), packageData.data)
  let result = await Bluebird.map(structure, async (item) => {
    let response = await axios.get(item.download_url)
    return defaults({
      name: item.name,
      description: false,
      maintainer: false
    }, transformer(response.data))

  }, {concurrency: 3})
  return reduce((acc, item) => {
    acc[item.type].push(item)
    return acc
  },{plugin: [], theme: []},result)
  // console.log(transformer(raw.data))
}

generate()
  .then((result) => {
    let templateFn = Handlebars.compile(TsDataTemplate)
    let splut = stringifyObject(result)
    return templateFn({data: splut, creationDate: new Date().toDateString()})
  })
  .then((fileContents) => {
    let srcPath = join(__dirname, '..', 'src')
    let filePath = join(srcPath, 'OMF_PKGS.ts')
    return pathExists(srcPath)
      .then((exists) => {
        if(!exists) {
          throw new Error('src doesnt exist')
        }
        return outputFile(filePath, fileContents)
      })
  })