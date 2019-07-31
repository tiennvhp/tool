var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterWordWrapData = (wraps) => {

  var content = ''
  if (wraps.length > 0) {
    require('../helpers.js').removeDuplicateElementsVersion1(wraps).forEach(function(wrap){
      if (wrap.split('-')[2] === 'break_word') {
      content = content + `
.${wrap} {word-wrap: break-word; }
`
      }
      if (wrap.split('-')[2] === 'unset') {
      content = content + `
.${wrap} {word-wrap: unset; }
`
      }
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/word-wrap.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/word-wrap.scss', '', 'utf8')
  }
};
