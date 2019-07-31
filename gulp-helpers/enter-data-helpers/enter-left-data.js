var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterLeftData = (lefts) => {
  
  var uniqueLefts = require('../helpers.js').removeDuplicateElementsVersion1(lefts)
  var content = ''
  if (uniqueLefts.length > 0) {
    uniqueLefts.forEach(uniqueLeft => {
      var leftValue = uniqueLeft.split('-')[1]
      
      if (leftValue.indexOf('p') === -1 && leftValue.indexOf('c') === -1 && leftValue.indexOf('m') === -1 && leftValue.indexOf('_') === -1) {
        //20
        leftValue = leftValue + 'px'
      }

      if (leftValue.indexOf('p') === -1 && leftValue.indexOf('c') === -1 && leftValue.indexOf('m') === 0 && leftValue.indexOf('_') === -1) {
        //m20
        leftValue = leftValue.replace('m', '-') + 'px'
      }

      if (leftValue.indexOf('p') > 0 && leftValue.indexOf('c') === -1 && leftValue.indexOf('x') === -1 && leftValue.indexOf('m') === -1 && leftValue.indexOf('_') === -1) {
        //20p5
        leftValue = leftValue.replace('p','.')+'px'
      }

      if (leftValue.split('p').length === 2 && leftValue.indexOf('p') > 0 && leftValue.indexOf('c') > 0 && leftValue.indexOf('x') === -1 && leftValue.indexOf('m') === -1 && leftValue.indexOf('_') === -1) {
        //20pc
        leftValue = leftValue.replace('pc', '%')
      }

      if (leftValue.split('p').length === 2 && leftValue.indexOf('m') === 0 && leftValue.indexOf('pc') > 0 && leftValue.indexOf('_') === -1) {
        //m20pc
        leftValue = leftValue.replace('m','-').replace('pc','%')
      }

      if (leftValue.indexOf('m') === -1 && leftValue.indexOf('_') === -1 && leftValue.split('p').length === 3) {
        //20p5pc
        leftValue = leftValue.replace('pc', '%').replace('p','.')
      }

      if (leftValue.indexOf('c') === -1 && leftValue.indexOf('m') === 0 && leftValue.indexOf('pc') === -1 && leftValue.indexOf('_') === -1) {
        //m20p5
        leftValue = leftValue.replace('m','-').replace('p','.') + 'px'
      }
      if (leftValue.indexOf('m') === 0 && leftValue.split('p').length === 3 && leftValue.indexOf('pc') > 0) {
        //m20p5pc
        leftValue = leftValue.replace('m','-').replace('pc','%').replace('p', '.')
      }
      if (leftValue.split('_').length === 4 && leftValue.indexOf('p') === -1 && leftValue.indexOf('m') > 0 && leftValue.indexOf('vw') > 0) {
        //calc_100vw_m_50
        leftValue = `calc(${leftValue.split('_')[1].split('vw')[0]}vw - ${leftValue.split('_')[leftValue.split('_').length - 1]}px)`
      }      
      if (leftValue.split('_').length === 4 && leftValue.indexOf('p') > 0 && leftValue.indexOf('m') === -1 && leftValue.indexOf('vw') > 0) {
        //calc_100vw_p_50
        leftValue = `calc(${leftValue.split('_')[1].split('vw')[0]}vw + ${leftValue.split('_')[leftValue.split('_').length - 1]}px)`

      }      
      if (leftValue.split('_').length === 4 && leftValue.indexOf('pc') > 0 && leftValue.indexOf('m') > 0 && leftValue.indexOf('vw') === -1) {
        //calc_100pc_m_50
        leftValue = `calc(${leftValue.split('_')[1].split('pc')[0]}% - ${leftValue.split('_')[leftValue.split('_').length - 1]}px)`
      }      
      if (leftValue.split('p').length === 3  && leftValue.split('_').length === 4 && leftValue.indexOf('pc') > 0 && leftValue.indexOf('m') === -1 && leftValue.indexOf('vw') === -1) {
        //calc_100pc_p_50
        leftValue = `calc(${leftValue.split('_')[1].split('pc')[0]}% + ${leftValue.split('_')[leftValue.split('_').length - 1]}px)`

      }
      content = content + `
.${uniqueLeft} {left: ${leftValue};}
`
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/left.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/left.scss', '', 'utf8')
  }

};
