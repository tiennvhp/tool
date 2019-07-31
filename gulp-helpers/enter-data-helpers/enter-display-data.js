var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterDisplayData = (displays) => {
  var content = '';
  if (displays.length > 0) {
    require('../helpers.js').removeDuplicateElementsVersion1(displays).forEach(function(display) {
      if (display.split('-')[1] === 'none') {
        content = content + `
.${display} { display: none; }
`
      }

      if (display.split('-')[1] === 'block') {
        content = content + `
.${display} { display: block; }
`
      }

      if (display.split('-')[1] === 'flex') {
        content = content + `
.${display} { display: flex; }
`
      }

      if (display.split('-')[1] === 'unset') {
        content = content + `
.${display} { display: unset; }
`
      }

      if (display.split('-')[1] === 'inline') {
        content = content + `
.${display} { display: inline; }
`
      }

      if (display.split('-')[1] === 'inline_block') {
        content = content + `
.${display} { display: inline-block; }
`
      }

      if (display.split('-')[1] === 'inline_flex') {
        content = content + `
.${display} { display: inline-flex; }
`
      }
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/display.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/display.scss', '', 'utf8')
  }
};
