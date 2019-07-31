var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterTxtColorData = (colors) => {
  var content = ''
  if (colors.length > 0) {
    require('../helpers.js').removeDuplicateElementsVersion1(colors).forEach(function(color) {
      content = content + `
.${color} {color: $color-${color.split('-')[2]}}
`
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/text-color.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/text-color.scss', '', 'utf8')
  }
};
