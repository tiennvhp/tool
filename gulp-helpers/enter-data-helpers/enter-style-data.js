var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterStyleData = (styles) => {
  var content = '';
  
  if (styles.length > 0) {
    require('../helpers.js').removeDuplicateElementsVersion1(styles).forEach(function(style){
      if (style.split('-')[1] === 'italic') {
        content = content + `
.${style} { font-style: italic;}
`
      }

      if (style.split('-')[1] === 'normal') {
        content = content + `
.${style} { font-style: normal;}
`
      }

      if (style.split('-')[1] === 'oblique') {
        content = content + `
.${style} { font-style: oblique;}
`
      }
    })

    fs.writeFileSync(targetFolder + 'cuong-sass/libs/font-style.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/font-style.scss', '', 'utf8')
  }
};
