var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterPData = (positions) => {
  var content = '';
  if (positions.length > 0) {
    require('../helpers.js').removeDuplicateElementsVersion1(positions).forEach(function(position) {
      if (position.split('-')[1] === 'rel') {
        content = content + `.${position} { position: relative; }
`
      }

      if (position.split('-')[1] === 'abs') {
        content = content + `.${position} { position: absolute; }
` 
      }

      if (position.split('-')[1] === 'fixed') {
        content = content + `.${position} { position: fixed; }
` 
      }
    
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/position.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/position.scss', '', 'utf8')
  }
};
