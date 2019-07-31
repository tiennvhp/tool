var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterShadowData = (shadows) => {
  var content = '';
  if (shadows.length > 0) {
    require('../helpers.js').removeDuplicateElementsVersion1(shadows).forEach(function(shadow){
        content = content + `
.${shadow} { box-shadow: ${shadow.split('-')[1].split('_')[0]}px ${shadow.split('-')[1].split('_')[1]}px ${shadow.split('-')[1].split('_')[2]}px rgba(${shadow.split('-')[1].split('_')[3]},${shadow.split('-')[1].split('_')[4]},${shadow.split('-')[1].split('_')[5]},0.${shadow.split('-')[1].split('_')[6]});}
`
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/shadow.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/shadow.scss', '', 'utf8')
  }
};
