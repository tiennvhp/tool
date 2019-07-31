var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterRightData = (rights) => {
  
  var uniqueRights = require('../helpers.js').removeDuplicateElementsVersion1(rights)
  var content = ''
  if (uniqueRights.length > 0) {
    uniqueRights.forEach(uniqueRight => {
      var rightValue = uniqueRight.split('-')[1]
      
      if (rightValue.indexOf('p') === -1 && rightValue.indexOf('c') === -1 && rightValue.indexOf('m') === -1 && rightValue.indexOf('_') === -1) {
        //20
        rightValue = rightValue + 'px'
      }

      if (rightValue.indexOf('p') === -1 && rightValue.indexOf('c') === -1 && rightValue.indexOf('m') === 0 && rightValue.indexOf('_') === -1) {
        //m20
        rightValue = rightValue.replace('m', '-') + 'px'
      }

      if (rightValue.indexOf('p') > 0 && rightValue.indexOf('c') === -1 && rightValue.indexOf('x') === -1 && rightValue.indexOf('m') === -1 && rightValue.indexOf('_') === -1) {
        //20p5
        rightValue = rightValue.replace('p','.')+'px'
      }

      if (rightValue.split('p').length === 2 && rightValue.indexOf('p') > 0 && rightValue.indexOf('c') > 0 && rightValue.indexOf('x') === -1 && rightValue.indexOf('m') === -1 && rightValue.indexOf('_') === -1) {
        //20pc
        rightValue = rightValue.replace('pc', '%')
      }

      if (rightValue.split('p').length === 2 && rightValue.indexOf('m') === 0 && rightValue.indexOf('pc') > 0 && rightValue.indexOf('_') === -1) {
        //m20pc
        rightValue = rightValue.replace('m','-').replace('pc','%')
      }

      if (rightValue.indexOf('m') === -1 && rightValue.indexOf('_') === -1 && rightValue.split('p').length === 3) {
        //20p5pc
        rightValue = rightValue.replace('pc', '%').replace('p','.')
      }

      if (rightValue.indexOf('c') === -1 && rightValue.indexOf('m') === 0 && rightValue.indexOf('pc') === -1 && rightValue.indexOf('_') === -1) {
        //m20p5
        rightValue = rightValue.replace('m','-').replace('p','.') + 'px'
      }
      if (rightValue.indexOf('m') === 0 && rightValue.split('p').length === 3 && rightValue.indexOf('pc') > 0) {
        //m20p5pc
        rightValue = rightValue.replace('m','-').replace('pc','%').replace('p', '.')
      }
      if (rightValue.split('_').length === 4 && rightValue.indexOf('p') === -1 && rightValue.indexOf('m') > 0 && rightValue.indexOf('vw') > 0) {
        //calc_100vw_m_50
        rightValue = `calc(${rightValue.split('_')[1].split('vw')[0]}vw - ${rightValue.split('_')[rightValue.split('_').length - 1]}px)`
      }      
      if (rightValue.split('_').length === 4 && rightValue.indexOf('p') > 0 && rightValue.indexOf('m') === -1 && rightValue.indexOf('vw') > 0) {
        //calc_100vw_p_50
        rightValue = `calc(${rightValue.split('_')[1].split('vw')[0]}vw + ${rightValue.split('_')[rightValue.split('_').length - 1]}px)`

      }      
      if (rightValue.split('_').length === 4 && rightValue.indexOf('pc') > 0 && rightValue.indexOf('m') > 0 && rightValue.indexOf('vw') === -1) {
        //calc_100pc_m_50
        rightValue = `calc(${rightValue.split('_')[1].split('pc')[0]}% - ${rightValue.split('_')[rightValue.split('_').length - 1]}px)`
      }      
      if (rightValue.split('p').length === 3  && rightValue.split('_').length === 4 && rightValue.indexOf('pc') > 0 && rightValue.indexOf('m') === -1 && rightValue.indexOf('vw') === -1) {
        //calc_100pc_p_50
        rightValue = `calc(${rightValue.split('_')[1].split('pc')[0]}% + ${rightValue.split('_')[rightValue.split('_').length - 1]}px)`

      }
      content = content + `
.${uniqueRight} {right: ${rightValue};}
`
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/right.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/right.scss', '', 'utf8')
  }
};
