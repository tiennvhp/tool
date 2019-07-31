var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterPaddingData = (paddings) => {
  let formattedContent = ``
  const uniquePadding = require('../helpers.js').removeDuplicateElementsVersion1(paddings)
  if (uniquePadding.length > 0) {
    uniquePadding.forEach(padding => {
      let prefix = padding.split('-')[0]
      let paddingValue = ((padding.indexOf('pc') > -1) ? `${padding.split('-')[1].split('pc')[0]}pc` : padding.split('-')[1]).replace('pc', '%').replace('p','.').indexOf('%') > -1 ? ((padding.indexOf('pc') > -1) ? `${padding.split('-')[1].split('pc')[0]}pc` : padding.split('-')[1]).replace('pc', '%').replace('p','.') : ((padding.indexOf('pc') > -1) ? `${padding.split('-')[1].split('pc')[0]}pc` : padding.split('-')[1]).replace('pc', '%').replace('p','.') + 'px'
      switch(prefix) {
        case 'pxt':
          formattedContent = formattedContent + `.${padding} { padding-top: ${paddingValue}; }
          `
          break;
        case 'pxb':
          formattedContent = formattedContent + `.${padding} { padding-bottom: ${paddingValue}; }
          `
          break;
        case 'pxl':
          formattedContent = formattedContent + `.${padding} { padding-left: ${paddingValue}; }
          `
          break;
        case 'pxr':
          formattedContent = formattedContent + `.${padding} { padding-right: ${paddingValue}; }
          `
          break;
        case 'pxbox':
          formattedContent = formattedContent + `.${padding} { padding-left: ${paddingValue}; padding-right: ${paddingValue}; padding-top: ${paddingValue}; padding-bottom: ${paddingValue}; }
          `
          break;
        default: console.log('Done with padding !!!')
      }
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/padding.scss', formattedContent, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/padding.scss', '', 'utf8')
  }
};
