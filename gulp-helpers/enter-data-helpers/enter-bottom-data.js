var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterBottomData = (bottoms) => {
  
  var uniqueBottoms = require('../helpers.js').removeDuplicateElementsVersion1(bottoms)
  var content = ''
  if (uniqueBottoms.length > 0) {
    uniqueBottoms.forEach(uniqueBottom => {
      var bottomValue = uniqueBottom.split('-')[1]
      
      if (bottomValue.indexOf('p') === -1 && bottomValue.indexOf('c') === -1 && bottomValue.indexOf('m') === -1 && bottomValue.indexOf('_') === -1) {
        //20
        bottomValue = bottomValue + 'px'
      }

      if (bottomValue.indexOf('p') === -1 && bottomValue.indexOf('c') === -1 && bottomValue.indexOf('m') === 0 && bottomValue.indexOf('_') === -1) {
        //m20
        bottomValue = bottomValue.replace('m', '-') + 'px'
      }

      if (bottomValue.indexOf('p') > 0 && bottomValue.indexOf('c') === -1 && bottomValue.indexOf('x') === -1 && bottomValue.indexOf('m') === -1 && bottomValue.indexOf('_') === -1) {
        //20p5
        bottomValue = bottomValue.replace('p','.')+'px'
      }

      if (bottomValue.split('p').length === 2 && bottomValue.indexOf('p') > 0 && bottomValue.indexOf('c') > 0 && bottomValue.indexOf('x') === -1 && bottomValue.indexOf('m') === -1 && bottomValue.indexOf('_') === -1) {
        //20pc
        bottomValue = bottomValue.replace('pc', '%')
      }

      if (bottomValue.split('p').length === 2 && bottomValue.indexOf('m') === 0 && bottomValue.indexOf('pc') > 0 && bottomValue.indexOf('_') === -1) {
        //m20pc
        bottomValue = bottomValue.replace('m','-').replace('pc','%')
      }

      if (bottomValue.indexOf('m') === -1 && bottomValue.indexOf('_') === -1 && bottomValue.split('p').length === 3) {
        //20p5pc
        bottomValue = bottomValue.replace('pc', '%').replace('p','.')
      }

      if (bottomValue.indexOf('c') === -1 && bottomValue.indexOf('m') === 0 && bottomValue.indexOf('pc') === -1 && bottomValue.indexOf('_') === -1) {
        //m20p5
        bottomValue = bottomValue.replace('m','-').replace('p','.') + 'px'
      }
      if (bottomValue.indexOf('m') === 0 && bottomValue.split('p').length === 3 && bottomValue.indexOf('pc') > 0) {
        //m20p5pc
        bottomValue = bottomValue.replace('m','-').replace('pc','%').replace('p', '.')
      }
      if (bottomValue.split('_').length === 4 && bottomValue.indexOf('p') === -1 && bottomValue.indexOf('m') > 0 && bottomValue.indexOf('vw') > 0) {
        //calc_100vw_m_50
        bottomValue = `calc(${bottomValue.split('_')[1].split('vw')[0]}vw - ${bottomValue.split('_')[bottomValue.split('_').length - 1]}px)`
      }      
      if (bottomValue.split('_').length === 4 && bottomValue.indexOf('p') > 0 && bottomValue.indexOf('m') === -1 && bottomValue.indexOf('vw') > 0) {
        //calc_100vw_p_50
        bottomValue = `calc(${bottomValue.split('_')[1].split('vw')[0]}vw + ${bottomValue.split('_')[bottomValue.split('_').length - 1]}px)`

      }      
      if (bottomValue.split('_').length === 4 && bottomValue.indexOf('pc') > 0 && bottomValue.indexOf('m') > 0 && bottomValue.indexOf('vw') === -1) {
        //calc_100pc_m_50
        bottomValue = `calc(${bottomValue.split('_')[1].split('pc')[0]}% - ${bottomValue.split('_')[bottomValue.split('_').length - 1]}px)`
      }      
      if (bottomValue.split('p').length === 3  && bottomValue.split('_').length === 4 && bottomValue.indexOf('pc') > 0 && bottomValue.indexOf('m') === -1 && bottomValue.indexOf('vw') === -1) {
        //calc_100pc_p_50
        bottomValue = `calc(${bottomValue.split('_')[1].split('pc')[0]}% + ${bottomValue.split('_')[bottomValue.split('_').length - 1]}px)`

      }
      content = content + `
.${uniqueBottom} {bottom: ${bottomValue};}
`
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/bottom.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/bottom.scss', '', 'utf8')
  }
};
