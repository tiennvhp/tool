var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterLhData = (lhxs) => {
  var uniqueLhxs = require('../helpers.js').removeDuplicateElementsVersion1(lhxs)
  var content = '';
  if (uniqueLhxs.length > 0) {
    uniqueLhxs.forEach(uniqueLhx => {
      var lhxValue = uniqueLhx.split('-')[1]
      if (lhxValue.indexOf('rem') > 0 && lhxValue.indexOf('p') === -1 && lhxValue.indexOf('et') === -1) {
        lhxValue = lhxValue;
      } else if (lhxValue.indexOf('p') > 0 && lhxValue.indexOf('rem') > 0 && lhxValue.indexOf('et') === -1) {
        lhxValue = lhxValue.replace('p','.')

      } else if (lhxValue.indexOf('p') === -1 && lhxValue.indexOf('rem') === -1 && lhxValue.indexOf('et') === -1) {
        lhxValue = lhxValue + 'px'
        
      } else if (lhxValue.indexOf('p') === -1 && lhxValue.indexOf('rem') === -1 && lhxValue.indexOf('et') > 0) {
        lhxValue = lhxValue.split('et')[0]
      } else if (lhxValue.indexOf('p') > 0 && lhxValue.indexOf('rem') === -1 && lhxValue.indexOf('et') === -1) {
        lhxValue = lhxValue.replace('p','.') + 'px'
      }

      content = content + `
.${uniqueLhx} {line-height: ${lhxValue};}
`
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/line-height.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/line-height.scss', '', 'utf8')
  }
};
