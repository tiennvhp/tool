var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterWordBreakData = (breaks) => {
  var content = ''
  if (breaks.length > 0) {
    require('../helpers.js').removeDuplicateElementsVersion1(breaks).forEach(function(breakx){
      if (breakx.split('-')[2] === 'break_word') {
      content = content + `
.${breakx} {word-break: break-word; }
`
      }
      if (breakx.split('-')[2] === 'unset') {
      content = content + `
.${breakx} {word-break: unset; }
`
      }

      if (breakx.split('-')[2] === 'keep_all') {
      content = content + `
.${breakx} {word-break: keep-all; }
`
      }

      if (breakx.split('-')[2] === 'break_all') {
      content = content + `
.${breakx} {word-break: break-all; }
`
      }
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/word-break.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/word-break.scss', '', 'utf8')
  }
};
