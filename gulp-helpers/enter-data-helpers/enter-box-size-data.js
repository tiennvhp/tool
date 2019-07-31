var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterBoxSizeData = (boxSizes) => {
  var content = ''
  if (boxSizes.length > 0) {
    require('../helpers.js').removeDuplicateElementsVersion1(boxSizes).forEach(function(boxSize) {
      if (boxSize.split('-')[2] === 'border_box') {
        content = content + `
.${boxSize} { box-sizing: border-box; }
`
      }
      if (boxSize.split('-')[2] === 'content_box') {
        content = content + `
.${boxSize} { box-sizing: content-box; }
`
      }
      if (boxSize.split('-')[2] === 'unset') {
        content = content + `
.${boxSize} { box-sizing: unset; }
`
      }
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/box-size.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/box-size.scss', '', 'utf8')
  }
};
