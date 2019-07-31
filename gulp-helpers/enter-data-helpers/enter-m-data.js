var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterMData = (margins) => {
  var marginAuto = margins.filter(margin => {
    return margin.indexOf('-auto') > 0
  })
  var marginLeftData = margins.filter(margin => {
    return !margin.indexOf('mxl-')
  }).sort(function (a, b) {
    return parseInt(a.split('-')[1]) > parseInt(b.split('-')[1])
  });
  var marginRightData = margins.filter(margin => {
    return !margin.indexOf('mxr-')
  }).sort(function (a, b) {
    return parseInt(a.split('-')[1]) > parseInt(b.split('-')[1])
  });
  var marginTopData = margins.filter(margin => {
    return !margin.indexOf('mxt-')
  }).sort(function (a, b) {
    return parseInt(a.split('-')[1]) > parseInt(b.split('-')[1])
  });
  var marginBottomData = margins.filter(margin => {
    return !margin.indexOf('mxb-')
  }).sort(function (a, b) {
    return parseInt(a.split('-')[1]) > parseInt(b.split('-')[1])
  });

  var marginContent = require('../helpers.js').removeDuplicateElementsVersion1(marginLeftData).concat(require('../helpers.js').removeDuplicateElementsVersion1(marginRightData),marginAuto, require('../helpers.js').removeDuplicateElementsVersion1(marginTopData), require('../helpers.js').removeDuplicateElementsVersion1(marginBottomData))
  var content = ``;
  if (marginContent.length > 0) {
    marginContent.forEach(function (margin) {

      if (margin.indexOf('mxl-') > -1) {
        content = content + 
`.${margin} { margin-left: ${margin.split('-')[1]}px; }
`
      }

      if (margin.indexOf('-auto') > -1) {
        content = content + 
`.${margin} { margin: auto; }
`
      }

      if (margin.indexOf('mxr-') > -1) {
        content = content + 
`.${margin} { margin-right: ${margin.split('-')[1]}px; }
`
      }

      if (margin.indexOf('mxt-') > -1) {
        content = content + 
`.${margin} { margin-top: ${margin.split('-')[1]}px; }
`
      }

      if (margin.indexOf('mxb-') > -1) {
        content = content + 
`.${margin} { margin-bottom: ${margin.split('-')[1]}px; }
`
      }

      
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/margin.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/margin.scss', '', 'utf8')
  }
};
