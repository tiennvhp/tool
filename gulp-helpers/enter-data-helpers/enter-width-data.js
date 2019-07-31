var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterWidthData = (widths) => {
  var uniqueWidths = require('../helpers.js').removeDuplicateElementsVersion1(widths)
  var content = '';
  if (uniqueWidths.length > 0) {
    uniqueWidths.forEach(uniqueWidth => {
      var widthValue = uniqueWidth.split('-')[1]

      if (widthValue.indexOf('p') === -1 && widthValue.indexOf('c') === -1 && widthValue.indexOf('m') === -1 && widthValue.indexOf('calc') === -1 && widthValue.indexOf('_') === -1) {
        widthValue = widthValue + 'px'
        //20
      } else if (widthValue.indexOf('p') > 0 && widthValue.indexOf('c') === -1 && widthValue.indexOf('m') === -1 && widthValue.indexOf('calc') === -1 && widthValue.indexOf('_') === -1) {
        widthValue = widthValue.replace('p','.') + 'px'

        //20p5
      } else if (widthValue.indexOf('p') === -1 && widthValue.indexOf('c') === -1 && widthValue.indexOf('m') === 0 && widthValue.indexOf('calc') === -1 && widthValue.indexOf('_') === -1) {
        widthValue = widthValue.replace('m','-') + 'px'
        
        //m20
      } else if (widthValue.indexOf('p') >0 && widthValue.indexOf('c') === -1 && widthValue.indexOf('m') === 0 && widthValue.indexOf('calc') === -1 && widthValue.indexOf('_') === -1) {
        widthValue = widthValue.replace('m','-').replace('p','.') + 'px'
        
        //m20p5
      } else if (widthValue.split('p').length === 2 && widthValue.indexOf('p') >0 && widthValue.indexOf('c') >0 && widthValue.indexOf('pc') >0 && widthValue.indexOf('m') === -1 && widthValue.indexOf('calc') === -1 && widthValue.indexOf('_') === -1) {
        widthValue = widthValue.replace('pc','%')

        //20pc
      } else if (widthValue.split('p').length === 3 && widthValue.indexOf('p') >0 && widthValue.indexOf('c') >0 && widthValue.indexOf('pc') >0 && widthValue.indexOf('m') === -1 && widthValue.indexOf('calc') === -1 && widthValue.indexOf('_') === -1) {
        widthValue = widthValue.replace('pc','%').replace('p','.')
        //20p5pc
      } else if (widthValue.split('p').length === 2 && widthValue.indexOf('p') >0 && widthValue.indexOf('c') >0 && widthValue.indexOf('pc') >0 && widthValue.indexOf('m') === 0 && widthValue.indexOf('calc') === -1 && widthValue.indexOf('_') === -1) {
        widthValue = widthValue.replace('m','-').replace('pc','%')

        //m20pc
      } else if (widthValue.split('p').length === 3 && widthValue.indexOf('p') >0 && widthValue.indexOf('c') >0 && widthValue.indexOf('pc') >0 && widthValue.indexOf('m') === 0 && widthValue.indexOf('calc') === -1 && widthValue.indexOf('_') === -1) {
        widthValue = widthValue.replace('m','-').replace('pc','%').replace('p','.')

        //m20p5pc
      } else if (widthValue.indexOf('p') === -1 && widthValue.indexOf('c') > -1 && widthValue.indexOf('pc') === -1 && widthValue.indexOf('m') > -1 && widthValue.indexOf('calc') > -1 && widthValue.indexOf('_') > 0 && widthValue.indexOf('vw') > 0) {
        widthValue = `calc(${widthValue.split('_')[1].split('vw')[0]}vw - ${widthValue.split('_')[3]}px)`

        //calc_100vw_m_20
      } else if (widthValue.split('p').length === 2 && widthValue.indexOf('p') >0 && widthValue.indexOf('c') > -1 && widthValue.indexOf('pc') === -1 && widthValue.indexOf('m') === -1 && widthValue.indexOf('calc') > -1 && widthValue.indexOf('_') > 0 && widthValue.indexOf('vw') > 0) {
        widthValue = `calc(${widthValue.split('_')[1].split('vw')[0]}vw + ${widthValue.split('_')[3]}px)`

        //calc_100vw_p_20
      } else if (widthValue.split('_')[widthValue.split('_').length - 1].indexOf('p') > -1 && widthValue.split('p').length === 2 && widthValue.indexOf('c') > -1 && widthValue.indexOf('pc') === -1 && widthValue.indexOf('_m_') > -1 && widthValue.indexOf('calc') > -1 && widthValue.indexOf('_') > -1 && widthValue.indexOf('vw') > 0) {
        //calc_100vw_m_20p5
        widthValue = `calc(${widthValue.split('_')[1].split('vw')[0]}vw - ${widthValue.split('_')[widthValue.split('_').length - 1].replace('p','.')}px)`

      } else if (widthValue.split('_')[widthValue.split('_').length - 1].indexOf('p') > -1 && widthValue.split('p').length === 3 && widthValue.indexOf('c') > -1 && widthValue.indexOf('pc') === -1 && widthValue.indexOf('m') === -1 && widthValue.indexOf('calc') > -1 && widthValue.indexOf('_') > -1 && widthValue.indexOf('vw') > 0) {
        widthValue = `calc(${widthValue.split('_')[1].split('vw')[0]}vw + ${widthValue.split('_')[widthValue.split('_').length - 1].replace('p','.')}px)`

        //calc_100vw_p_20p5
      } else if (widthValue.split('_')[widthValue.split('_').length - 1].indexOf('p') === -1 && widthValue.split('p').length === 2 && widthValue.indexOf('c') > -1 && widthValue.indexOf('pc') > -1 && widthValue.indexOf('_m_') > -1 && widthValue.indexOf('calc') > -1 && widthValue.indexOf('_') > -1) {
        widthValue = `calc(${widthValue.split('_')[1].split('pc')[0]}% - ${widthValue.split('_')[widthValue.split('_').length - 1]}px)`

        //calc_100pc_m_20
      } else if (widthValue.split('_')[widthValue.split('_').length - 1].indexOf('p') === -1 && widthValue.split('p').length === 3 && widthValue.indexOf('c') > -1 && widthValue.indexOf('pc') > -1 && widthValue.indexOf('_p_') > -1 && widthValue.indexOf('calc') > -1 && widthValue.indexOf('_') > -1) {
        widthValue = `calc(${widthValue.split('_')[1].split('pc')[0]}% + ${widthValue.split('_')[widthValue.split('_').length - 1]}px)`

        //calc_100pc_p_20
      } else if (widthValue.split('_')[widthValue.split('_').length - 1].indexOf('p') > -1 && widthValue.split('p').length === 3 && widthValue.indexOf('c') > -1 && widthValue.indexOf('pc') > -1 && widthValue.indexOf('_m_') > -1 && widthValue.indexOf('calc') > -1 && widthValue.indexOf('_') > -1) {
        widthValue = `calc(${widthValue.split('_')[1].split('pc')[0]}% - ${widthValue.split('_')[widthValue.split('_').length - 1].replace('p','.')}px)`
        
        //calc_100pc_m_20p5
      } else if (widthValue.split('_')[widthValue.split('_').length - 1].indexOf('p') > -1 && widthValue.split('p').length === 4 && widthValue.indexOf('c') > -1 && widthValue.indexOf('pc') > -1 && widthValue.indexOf('_p_') > -1 && widthValue.indexOf('calc') > -1 && widthValue.indexOf('_') > -1) {
        widthValue = `calc(${widthValue.split('_')[1].split('pc')[0]}% + ${widthValue.split('_')[widthValue.split('_').length - 1].replace('p','.')}px)`

        //calc_100pc_p_20p5
      } else if (widthValue.split('_')[widthValue.split('_').length - 1].indexOf('p') === -1 && widthValue.split('p').length === 2 && widthValue.indexOf('c') > -1 && widthValue.indexOf('pc') === -1 && widthValue.indexOf('_m_') > -1 && widthValue.indexOf('calc') > -1 && widthValue.indexOf('_') > -1) {
        widthValue = `calc(${widthValue.split('_')[1].split('vw')[0].replace('p','.')}vw - ${widthValue.split('_')[widthValue.split('_').length - 1]}px)`

        //calc_10p6vw_m_20
      } else if (widthValue.split('_')[widthValue.split('_').length - 1].indexOf('p') === -1 && widthValue.split('p').length === 3 && widthValue.indexOf('c') > -1 && widthValue.indexOf('pc') === -1 && widthValue.indexOf('_p_') > -1 && widthValue.indexOf('calc') > -1 && widthValue.indexOf('_') > -1) {
        widthValue = `calc(${widthValue.split('_')[1].split('vw')[0].replace('p','.')}vw + ${widthValue.split('_')[widthValue.split('_').length - 1]}px)`

        //calc_10p6vw_p_20
      } else if (widthValue.split('_')[widthValue.split('_').length - 1].indexOf('p') > -1 && widthValue.split('p').length === 3 && widthValue.indexOf('c') > -1 && widthValue.indexOf('pc') === -1 && widthValue.indexOf('_m_') > -1 && widthValue.indexOf('calc') > -1 && widthValue.indexOf('_') > -1) {
        widthValue = `calc(${widthValue.split('_')[1].split('vw')[0].replace('p','.')}vw - ${widthValue.split('_')[widthValue.split('_').length - 1].replace('p','.')}px)`

        //calc_10p6vw_m_20p5
      } else if (widthValue.split('_')[widthValue.split('_').length - 1].indexOf('p') > -1 && widthValue.split('p').length === 4 && widthValue.indexOf('c') > -1 && widthValue.indexOf('pc') === -1 && widthValue.indexOf('_p_') > -1 && widthValue.indexOf('calc') > -1 && widthValue.indexOf('_') > -1) {
        widthValue = `calc(${widthValue.split('_')[1].split('vw')[0].replace('p','.')}vw + ${widthValue.split('_')[widthValue.split('_').length - 1].replace('p','.')}px)`

        //calc_10p6vw_p_20p5
      } else if (widthValue.split('_')[widthValue.split('_').length - 1].indexOf('p') === -1 && widthValue.split('p').length === 3 && widthValue.indexOf('c') > -1 && widthValue.indexOf('pc') > -1 && widthValue.indexOf('_m_') > -1 && widthValue.indexOf('calc') > -1 && widthValue.indexOf('_') > -1) {
        widthValue = `calc(${widthValue.split('_')[1].split('pc')[0].replace('p','.')}% - ${widthValue.split('_')[widthValue.split('_').length - 1]}px)`


        //calc_10p6pc_m_20
      } else if (widthValue.split('_')[widthValue.split('_').length - 1].indexOf('p') === -1 && widthValue.split('p').length === 4 && widthValue.indexOf('c') > -1 && widthValue.indexOf('pc') > -1 && widthValue.indexOf('_p_') > -1 && widthValue.indexOf('calc') > -1 && widthValue.indexOf('_') > -1) {
        widthValue = `calc(${widthValue.split('_')[1].split('pc')[0].replace('p','.')}% + ${widthValue.split('_')[widthValue.split('_').length - 1]}px)`


        //calc_10p6pc_p_20
      } else if (widthValue.split('_')[widthValue.split('_').length - 1].indexOf('p') > -1 && widthValue.split('p').length === 4 && widthValue.indexOf('c') > -1 && widthValue.indexOf('pc') > -1 && widthValue.indexOf('_m_') > -1 && widthValue.indexOf('calc') > -1 && widthValue.indexOf('_') > -1) {
        widthValue = `calc(${widthValue.split('_')[1].split('pc')[0].replace('p','.')}% - ${widthValue.split('_')[widthValue.split('_').length - 1].replace('p','.')}px)`

        //calc_10p6pc_m_20p5
      } else if (widthValue.split('_')[widthValue.split('_').length - 1].indexOf('p') > -1 && widthValue.split('p').length === 5 && widthValue.indexOf('c') > -1 && widthValue.indexOf('pc') > -1 && widthValue.indexOf('_p_') > -1 && widthValue.indexOf('calc') > -1 && widthValue.indexOf('_') > -1) {
        widthValue = `calc(${widthValue.split('_')[1].split('pc')[0].replace('p','.')}% + ${widthValue.split('_')[widthValue.split('_').length - 1].replace('p','.')}px)`

        //calc_10p6pc_p_20p5
      }

      content = content + `
.${uniqueWidth} {width: ${widthValue};}
`
    })


    fs.writeFileSync(targetFolder + 'cuong-sass/libs/width.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/width.scss', '', 'utf8')
  }
};
