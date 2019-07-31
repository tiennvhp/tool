var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterHeightData = (heights) => {
  var uniqueHeights = require('../helpers.js').removeDuplicateElementsVersion1(heights)
  var content = '';
  if (uniqueHeights.length > 0) {
    uniqueHeights.forEach(uniqueHeight => {
      var heightValue = uniqueHeight.split('-')[1]
      if (heightValue.indexOf('p') === -1 && heightValue.indexOf('c') === -1 && heightValue.indexOf('m') === -1 && heightValue.indexOf('calc') === -1 && heightValue.indexOf('_') === -1) {
        heightValue = heightValue + 'px'
        //20
      } else if (heightValue.indexOf('p') > 0 && heightValue.indexOf('c') === -1 && heightValue.indexOf('m') === -1 && heightValue.indexOf('calc') === -1 && heightValue.indexOf('_') === -1) {
        heightValue = heightValue.replace('p','.') + 'px'

        //20p5
      } else if (heightValue.indexOf('p') === -1 && heightValue.indexOf('c') === -1 && heightValue.indexOf('m') === 0 && heightValue.indexOf('calc') === -1 && heightValue.indexOf('_') === -1) {
        heightValue = heightValue.replace('m','-') + 'px'
        
        //m20
      } else if (heightValue.indexOf('p') >0 && heightValue.indexOf('c') === -1 && heightValue.indexOf('m') === 0 && heightValue.indexOf('calc') === -1 && heightValue.indexOf('_') === -1) {
        heightValue = heightValue.replace('m','-').replace('p','.') + 'px'
        
        //m20p5
      } else if (heightValue.split('p').length === 2 && heightValue.indexOf('p') >0 && heightValue.indexOf('c') >0 && heightValue.indexOf('pc') >0 && heightValue.indexOf('m') === -1 && heightValue.indexOf('calc') === -1 && heightValue.indexOf('_') === -1) {
        heightValue = heightValue.replace('pc','%')

        //20pc
      } else if (heightValue.split('p').length === 3 && heightValue.indexOf('p') >0 && heightValue.indexOf('c') >0 && heightValue.indexOf('pc') >0 && heightValue.indexOf('m') === -1 && heightValue.indexOf('calc') === -1 && heightValue.indexOf('_') === -1) {
        heightValue = heightValue.replace('pc','%').replace('p','.')
        //20p5pc
      } else if (heightValue.split('p').length === 2 && heightValue.indexOf('p') >0 && heightValue.indexOf('c') >0 && heightValue.indexOf('pc') >0 && heightValue.indexOf('m') === 0 && heightValue.indexOf('calc') === -1 && heightValue.indexOf('_') === -1) {
        heightValue = heightValue.replace('m','-').replace('pc','%')

        //m20pc
      } else if (heightValue.split('p').length === 3 && heightValue.indexOf('p') >0 && heightValue.indexOf('c') >0 && heightValue.indexOf('pc') >0 && heightValue.indexOf('m') === 0 && heightValue.indexOf('calc') === -1 && heightValue.indexOf('_') === -1) {
        heightValue = heightValue.replace('m','-').replace('pc','%').replace('p','.')

        //m20p5pc
      } else if (heightValue.indexOf('p') === -1 && heightValue.indexOf('c') > -1 && heightValue.indexOf('pc') === -1 && heightValue.indexOf('m') > -1 && heightValue.indexOf('calc') > -1 && heightValue.indexOf('_') > 0 && heightValue.indexOf('vw') > 0) {
        heightValue = `calc(${heightValue.split('_')[1].split('vw')[0]}vw - ${heightValue.split('_')[3]}px)`

        //calc_100vw_m_20
      } else if (heightValue.split('p').length === 2 && heightValue.indexOf('p') >0 && heightValue.indexOf('c') > -1 && heightValue.indexOf('pc') === -1 && heightValue.indexOf('m') === -1 && heightValue.indexOf('calc') > -1 && heightValue.indexOf('_') > 0 && heightValue.indexOf('vw') > 0) {
        heightValue = `calc(${heightValue.split('_')[1].split('vw')[0]}vw + ${heightValue.split('_')[3]}px)`

        //calc_100vw_p_20
      } else if (heightValue.split('_')[heightValue.split('_').length - 1].indexOf('p') > -1 && heightValue.split('p').length === 2 && heightValue.indexOf('c') > -1 && heightValue.indexOf('pc') === -1 && heightValue.indexOf('_m_') > -1 && heightValue.indexOf('calc') > -1 && heightValue.indexOf('_') > -1 && heightValue.indexOf('vw') > 0) {
        //calc_100vw_m_20p5
        heightValue = `calc(${heightValue.split('_')[1].split('vw')[0]}vw - ${heightValue.split('_')[heightValue.split('_').length - 1].replace('p','.')}px)`

      } else if (heightValue.split('_')[heightValue.split('_').length - 1].indexOf('p') > -1 && heightValue.split('p').length === 3 && heightValue.indexOf('c') > -1 && heightValue.indexOf('pc') === -1 && heightValue.indexOf('m') === -1 && heightValue.indexOf('calc') > -1 && heightValue.indexOf('_') > -1 && heightValue.indexOf('vw') > 0) {
        heightValue = `calc(${heightValue.split('_')[1].split('vw')[0]}vw + ${heightValue.split('_')[heightValue.split('_').length - 1].replace('p','.')}px)`

        //calc_100vw_p_20p5
      } else if (heightValue.split('_')[heightValue.split('_').length - 1].indexOf('p') === -1 && heightValue.split('p').length === 2 && heightValue.indexOf('c') > -1 && heightValue.indexOf('pc') > -1 && heightValue.indexOf('_m_') > -1 && heightValue.indexOf('calc') > -1 && heightValue.indexOf('_') > -1) {
        heightValue = `calc(${heightValue.split('_')[1].split('pc')[0]}% - ${heightValue.split('_')[heightValue.split('_').length - 1]}px)`

        //calc_100pc_m_20
      } else if (heightValue.split('_')[heightValue.split('_').length - 1].indexOf('p') === -1 && heightValue.split('p').length === 3 && heightValue.indexOf('c') > -1 && heightValue.indexOf('pc') > -1 && heightValue.indexOf('_p_') > -1 && heightValue.indexOf('calc') > -1 && heightValue.indexOf('_') > -1) {
        heightValue = `calc(${heightValue.split('_')[1].split('pc')[0]}% + ${heightValue.split('_')[heightValue.split('_').length - 1]}px)`

        //calc_100pc_p_20
      } else if (heightValue.split('_')[heightValue.split('_').length - 1].indexOf('p') > -1 && heightValue.split('p').length === 3 && heightValue.indexOf('c') > -1 && heightValue.indexOf('pc') > -1 && heightValue.indexOf('_m_') > -1 && heightValue.indexOf('calc') > -1 && heightValue.indexOf('_') > -1) {
        heightValue = `calc(${heightValue.split('_')[1].split('pc')[0]}% - ${heightValue.split('_')[heightValue.split('_').length - 1].replace('p','.')}px)`
        
        //calc_100pc_m_20p5
      } else if (heightValue.split('_')[heightValue.split('_').length - 1].indexOf('p') > -1 && heightValue.split('p').length === 4 && heightValue.indexOf('c') > -1 && heightValue.indexOf('pc') > -1 && heightValue.indexOf('_p_') > -1 && heightValue.indexOf('calc') > -1 && heightValue.indexOf('_') > -1) {
        heightValue = `calc(${heightValue.split('_')[1].split('pc')[0]}% + ${heightValue.split('_')[heightValue.split('_').length - 1].replace('p','.')}px)`

        //calc_100pc_p_20p5
      } else if (heightValue.split('_')[heightValue.split('_').length - 1].indexOf('p') === -1 && heightValue.split('p').length === 2 && heightValue.indexOf('c') > -1 && heightValue.indexOf('pc') === -1 && heightValue.indexOf('_m_') > -1 && heightValue.indexOf('calc') > -1 && heightValue.indexOf('_') > -1) {
        heightValue = `calc(${heightValue.split('_')[1].split('vw')[0].replace('p','.')}vw - ${heightValue.split('_')[heightValue.split('_').length - 1]}px)`

        //calc_10p6vw_m_20
      } else if (heightValue.split('_')[heightValue.split('_').length - 1].indexOf('p') === -1 && heightValue.split('p').length === 3 && heightValue.indexOf('c') > -1 && heightValue.indexOf('pc') === -1 && heightValue.indexOf('_p_') > -1 && heightValue.indexOf('calc') > -1 && heightValue.indexOf('_') > -1) {
        heightValue = `calc(${heightValue.split('_')[1].split('vw')[0].replace('p','.')}vw + ${heightValue.split('_')[heightValue.split('_').length - 1]}px)`

        //calc_10p6vw_p_20
      } else if (heightValue.split('_')[heightValue.split('_').length - 1].indexOf('p') > -1 && heightValue.split('p').length === 3 && heightValue.indexOf('c') > -1 && heightValue.indexOf('pc') === -1 && heightValue.indexOf('_m_') > -1 && heightValue.indexOf('calc') > -1 && heightValue.indexOf('_') > -1) {
        heightValue = `calc(${heightValue.split('_')[1].split('vw')[0].replace('p','.')}vw - ${heightValue.split('_')[heightValue.split('_').length - 1].replace('p','.')}px)`

        //calc_10p6vw_m_20p5
      } else if (heightValue.split('_')[heightValue.split('_').length - 1].indexOf('p') > -1 && heightValue.split('p').length === 4 && heightValue.indexOf('c') > -1 && heightValue.indexOf('pc') === -1 && heightValue.indexOf('_p_') > -1 && heightValue.indexOf('calc') > -1 && heightValue.indexOf('_') > -1) {
        heightValue = `calc(${heightValue.split('_')[1].split('vw')[0].replace('p','.')}vw + ${heightValue.split('_')[heightValue.split('_').length - 1].replace('p','.')}px)`

        //calc_10p6vw_p_20p5
      } else if (heightValue.split('_')[heightValue.split('_').length - 1].indexOf('p') === -1 && heightValue.split('p').length === 3 && heightValue.indexOf('c') > -1 && heightValue.indexOf('pc') > -1 && heightValue.indexOf('_m_') > -1 && heightValue.indexOf('calc') > -1 && heightValue.indexOf('_') > -1) {
        heightValue = `calc(${heightValue.split('_')[1].split('pc')[0].replace('p','.')}% - ${heightValue.split('_')[heightValue.split('_').length - 1]}px)`


        //calc_10p6pc_m_20
      } else if (heightValue.split('_')[heightValue.split('_').length - 1].indexOf('p') === -1 && heightValue.split('p').length === 4 && heightValue.indexOf('c') > -1 && heightValue.indexOf('pc') > -1 && heightValue.indexOf('_p_') > -1 && heightValue.indexOf('calc') > -1 && heightValue.indexOf('_') > -1) {
        heightValue = `calc(${heightValue.split('_')[1].split('pc')[0].replace('p','.')}% + ${heightValue.split('_')[heightValue.split('_').length - 1]}px)`


        //calc_10p6pc_p_20
      } else if (heightValue.split('_')[heightValue.split('_').length - 1].indexOf('p') > -1 && heightValue.split('p').length === 4 && heightValue.indexOf('c') > -1 && heightValue.indexOf('pc') > -1 && heightValue.indexOf('_m_') > -1 && heightValue.indexOf('calc') > -1 && heightValue.indexOf('_') > -1) {
        heightValue = `calc(${heightValue.split('_')[1].split('pc')[0].replace('p','.')}% - ${heightValue.split('_')[heightValue.split('_').length - 1].replace('p','.')}px)`

        //calc_10p6pc_m_20p5
      } else if (heightValue.split('_')[heightValue.split('_').length - 1].indexOf('p') > -1 && heightValue.split('p').length === 5 && heightValue.indexOf('c') > -1 && heightValue.indexOf('pc') > -1 && heightValue.indexOf('_p_') > -1 && heightValue.indexOf('calc') > -1 && heightValue.indexOf('_') > -1) {
        heightValue = `calc(${heightValue.split('_')[1].split('pc')[0].replace('p','.')}% + ${heightValue.split('_')[heightValue.split('_').length - 1].replace('p','.')}px)`

        //calc_10p6pc_p_20p5
      }

      content = content + `
.${uniqueHeight} {height: ${heightValue};}
`
    })



    fs.writeFileSync(targetFolder + 'cuong-sass/libs/height.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/height.scss', '', 'utf8')
  }
};
