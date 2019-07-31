var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterBorderData = (borders) => {
  var content = '';
  if (borders.length > 0) {
    require('../helpers.js').removeDuplicateElementsVersion1(borders).forEach(function(border){
      if (!isNaN(border.split('-')[1].split('_')[0])) {
        content = content + `
.${border} { border: ${border.split('-')[1].split('_')[0]}px ${border.split('-')[1].split('_')[1]} $color-${border.split('-')[1].split('_')[2]}; }
`
      } else {
        if (border.split('-')[1].split('_')[0] === 'b') {
        content = content + `
.${border} { border-bottom: ${border.split('-')[1].split('_')[1]}px ${border.split('-')[1].split('_')[2]} $color-${border.split('-')[1].split('_')[3]}; }
`
        }
        if (border.split('-')[1].split('_')[0] === 't') {
        content = content + `
.${border} { border-top: ${border.split('-')[1].split('_')[1]}px ${border.split('-')[1].split('_')[2]} $color-${border.split('-')[1].split('_')[3]}; }
`
        }
        if (border.split('-')[1].split('_')[0] === 'l') {
        content = content + `
.${border} { border-left: ${border.split('-')[1].split('_')[1]}px ${border.split('-')[1].split('_')[2]} $color-${border.split('-')[1].split('_')[3]}; }
`
        }
        if (border.split('-')[1].split('_')[0] === 'r') {
        content = content + `
.${border} { border-right: ${border.split('-')[1].split('_')[1]}px ${border.split('-')[1].split('_')[2]} $color-${border.split('-')[1].split('_')[3]}; }
`
        }
      }
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/border.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/border.scss', '', 'utf8')
  }
};
