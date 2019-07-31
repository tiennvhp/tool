var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterBeforeData = (befores) => {
//   var uniqueBefores = require('../helpers.js').removeDuplicateElementsVersion1(befores)
//   var content = '';
//   if (uniqueBefores.length > 0) {
//     uniqueBefores.forEach(uniqueBefore => {
//       var classBefore = uniqueBefore.split('_')[0]
//       var contentBefore = uniqueBefore.split('_')[1]
//       content = content + `
// .${classBefore} {&:before ${contentBefore}}
// `
//     })

//     fs.writeFileSync(targetFolder + 'cuong-sass/libs/before.scss', content, 'utf8')
//   } else {
//     fs.writeFileSync(targetFolder + 'cuong-sass/libs/before.scss', '', 'utf8')
//   }
};