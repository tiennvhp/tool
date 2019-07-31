var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterAfterData = (afters) => {
//   var uniqueAfters = require('../helpers.js').removeDuplicateElementsVersion1(afters)
//   var content = '';
//   if (uniqueAfters.length > 0) {
//     uniqueAfters.forEach(uniqueAfter => {
//       uniqueAfter = uniqueAfter.replace('_m_', ' - ')
//       var classAfter = uniqueAfter.split('_')[0]
//       var contentAfter = uniqueAfter.split('_')[1]
//       content = content + `
// .${classAfter} {&:after ${contentAfter}}
// `
//     })

//     fs.writeFileSync(targetFolder + 'cuong-sass/libs/after.scss', content, 'utf8')
//   } else {
//     fs.writeFileSync(targetFolder + 'cuong-sass/libs/after.scss', '', 'utf8')
//   }
};