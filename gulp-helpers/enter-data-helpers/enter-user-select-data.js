var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterUserSelectData = (selects) => {
  var content = ''
  if (selects.length > 0) {
    require('../helpers.js').removeDuplicateElementsVersion1(selects).forEach(function(select) {
      if (select.split('-')[2] === 'all') {
        content = content + `.${select} { user-select: all; }
`
      }

      if (select.split('-')[2] === 'auto') {
        content = content + `.${select} { user-select: auto; }
`
      }
      
      if (select.split('-')[2] === 'text') {
        content = content + `.${select} { user-select: text; }
`
      }      
      
      if (select.split('-')[2] === 'unset') {
        content = content + `.${select} { user-select: unset; }
`
      }      

      if (select.split('-')[2] === 'none') {
        content = content + `.${select} { user-select: none; }
`
      }

      
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/user-select.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/user-select.scss', '', 'utf8')
  }
};
