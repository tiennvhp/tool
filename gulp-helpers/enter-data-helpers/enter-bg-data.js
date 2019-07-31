var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterBgData = (bgs) => {
  var uniqueBgs = require('../helpers.js').removeDuplicateElementsVersion1(bgs)
  var content = '';
  if (uniqueBgs.length > 0) {
    uniqueBgs.forEach(uniqueBg => {
      var bgValue = uniqueBg.split('-')[1]
      if (bgValue === 'contain') {
        content = content + `
  .${uniqueBg} {background-repeat: no-repeat; background-position: center center; background-size: contain;}
  `
      } else if (bgValue === 'cover') {
        content = content + `
  .${uniqueBg} {background-repeat: no-repeat; background-position: center center; background-size: cover;}
  `
      } else if (bgValue.indexOf('_') > -1) {
        content = content + `
  .${uniqueBg} {background-color: rgba(${bgValue.split('_')[1]}, ${bgValue.split('_')[2]}, ${bgValue.split('_')[3]}, 0.${bgValue.split('_')[4]});}
  `
      } else if (!isNaN(bgValue)) {
        content = content + `
  .${uniqueBg} {background-color: $color-${bgValue};}
  `
      } else if (bgValue === 'red' || bgValue === 'black' || bgValue === 'white' || bgValue === 'orange' || bgValue === 'blue') {
        content = content + `
  .${uniqueBg} {background-color: ${bgValue};}
  `
      }
      
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/background.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/background.scss', '', 'utf8')
  }
};