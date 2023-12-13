const pj = require('../package.json')
module.exports = {
  name: pj.name,
  namespace: pj.homepage,
  version: pj.version,
  description: pj.description,
  author: pj.author,
  copyright: pj.author,
  license: pj.license,
  match: ['https://*.cybozu.cn/k/'],
  require: [],
  'run-at': 'document-end',
  supportURL: pj.bugs.url,
  homepage: pj.homepage,
  grant: [],
  icon: 'https://img.icons8.com/external-wanicon-flat-wanicon/64/external-tool-cloud-technology-wanicon-flat-wanicon.png',
}
