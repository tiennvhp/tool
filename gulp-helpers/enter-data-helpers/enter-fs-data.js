var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterFsData = (fss) => {
  var uniqueFss = require('../helpers.js').removeDuplicateElementsVersion1(fss)
  var content = '';
  if (uniqueFss.length > 0) {
    uniqueFss.forEach(uniqueFs => {
      var fsValue = uniqueFs.split('-')[1]
      if (fsValue.indexOf('rem') > 0 && fsValue.indexOf('p') === -1) {
        //24rem
        fsValue = fsValue
      } else if (fsValue.indexOf('rem') > 0 && fsValue.indexOf('p') > 0) {
        //32p4rem
        fsValue = fsValue.replace('p','.')
      } else if (fsValue.indexOf('rem') === -1 && fsValue.indexOf('p') === -1) {
        //24
        fsValue = fsValue + 'px'
      } else if (fsValue.indexOf('rem') === -1 && fsValue.indexOf('p') > 0) {
        fsValue = fsValue.replace('p','.') + 'px'
      }

      content = content + `
.${uniqueFs} {font-size: ${fsValue}}
`
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/font-size.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/font-size.scss', '', 'utf8')
  }
};
