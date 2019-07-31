var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterTopData = (tops) => {
  var uniqueTops = require('../helpers.js').removeDuplicateElementsVersion1(tops)
  var content = ''
  if (uniqueTops.length > 0) {
    uniqueTops.forEach(uniqueTop => {
      var topValue = uniqueTop.split('-')[1]
      
      if (topValue.indexOf('p') === -1 && topValue.indexOf('c') === -1 && topValue.indexOf('m') === -1 && topValue.indexOf('_') === -1) {
        //20
        topValue = topValue + 'px'
      }

      if (topValue.indexOf('p') === -1 && topValue.indexOf('c') === -1 && topValue.indexOf('m') === 0 && topValue.indexOf('_') === -1) {
        //m20
        topValue = topValue.replace('m', '-') + 'px'
      }

      if (topValue.indexOf('p') > 0 && topValue.indexOf('c') === -1 && topValue.indexOf('x') === -1 && topValue.indexOf('m') === -1 && topValue.indexOf('_') === -1) {
        //20p5
        topValue = topValue.replace('p','.')+'px'
      }

      if (topValue.split('p').length === 2 && topValue.indexOf('p') > 0 && topValue.indexOf('c') > 0 && topValue.indexOf('x') === -1 && topValue.indexOf('m') === -1 && topValue.indexOf('_') === -1) {
        //20pc
        topValue = topValue.replace('pc', '%')
      }

      if (topValue.split('p').length === 2 && topValue.indexOf('m') === 0 && topValue.indexOf('pc') > 0 && topValue.indexOf('_') === -1) {
        //m20pc
        topValue = topValue.replace('m','-').replace('pc','%')
      }

      if (topValue.indexOf('m') === -1 && topValue.indexOf('_') === -1 && topValue.split('p').length === 3) {
        //20p5pc
        topValue = topValue.replace('pc', '%').replace('p','.')
      }

      if (topValue.indexOf('c') === -1 && topValue.indexOf('m') === 0 && topValue.indexOf('pc') === -1 && topValue.indexOf('_') === -1) {
        //m20p5
        topValue = topValue.replace('m','-').replace('p','.') + 'px'
      }
      if (topValue.indexOf('m') === 0 && topValue.split('p').length === 3 && topValue.indexOf('pc') > 0) {
        //m20p5pc
        topValue = topValue.replace('m','-').replace('pc','%').replace('p', '.')
      }
      if (topValue.split('_').length === 4 && topValue.indexOf('p') === -1 && topValue.indexOf('m') > 0 && topValue.indexOf('vw') > 0) {
        //calc_100vw_m_50
        topValue = `calc(${topValue.split('_')[1].split('vw')[0]}vw - ${topValue.split('_')[topValue.split('_').length - 1]}px)`
      }      
      if (topValue.split('_').length === 4 && topValue.indexOf('p') > 0 && topValue.indexOf('m') === -1 && topValue.indexOf('vw') > 0) {
        //calc_100vw_p_50
        topValue = `calc(${topValue.split('_')[1].split('vw')[0]}vw + ${topValue.split('_')[topValue.split('_').length - 1]}px)`

      }      
      if (topValue.split('_').length === 4 && topValue.indexOf('pc') > 0 && topValue.indexOf('m') > 0 && topValue.indexOf('vw') === -1) {
        //calc_100pc_m_50
        topValue = `calc(${topValue.split('_')[1].split('pc')[0]}% - ${topValue.split('_')[topValue.split('_').length - 1]}px)`
      }      
      if (topValue.split('p').length === 3  && topValue.split('_').length === 4 && topValue.indexOf('pc') > 0 && topValue.indexOf('m') === -1 && topValue.indexOf('vw') === -1) {
        //calc_100pc_p_50
        topValue = `calc(${topValue.split('_')[1].split('pc')[0]}% + ${topValue.split('_')[topValue.split('_').length - 1]}px)`

      }
      content = content + `
.${uniqueTop} {top: ${topValue};}
`
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/top.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/top.scss', '', 'utf8')
  }
};
