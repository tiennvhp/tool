var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterTextAlignData = (aligns) => {
  var content = ''
  if (aligns.length > 0) {
    require('../helpers.js').removeDuplicateElementsVersion1(aligns).forEach(function(align) {
      if (align.split('-')[2] === 'left') {
        content = content + `
.${align} { text-align: left; }
`
      }

      if (align.split('-')[2] === 'right') {
        content = content + `
.${align} { text-align: right; }
`
      }

      if (align.split('-')[2] === 'center') {
        content = content + `
.${align} { text-align: center; }
`
      }
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/text-align.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/text-align.scss', '', 'utf8')
  }
};
