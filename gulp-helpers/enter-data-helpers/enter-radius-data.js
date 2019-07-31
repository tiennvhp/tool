var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterRadiusData = (radiuss) => {
  var content = '';
  if (radiuss.length > 0) {
    require('../helpers.js').removeDuplicateElementsVersion1(radiuss).forEach(function(radius){
      if (radius.split('-')[1] === 'circle') {
        content = content + `
.${radius} { border-radius: 100%;}
`
      }

      else if (radius.split('-')[1] === 'sides_circle') {
        content = content + `
.${radius} { border-radius: 50px;}
`
      } else {
        content = content + `
.${radius} { border-radius: ${radius.split('-')[1].split('_')[0]}px ${radius.split('-')[1].split('_')[1]}px ${radius.split('-')[1].split('_')[2]}px ${radius.split('-')[1].split('_')[3]}px;}
`
      }
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/radius.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/radius.scss', '', 'utf8')
  }
};
