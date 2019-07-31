
var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterHoverData = (hovers) => {
//   var count = 0;
//   var content = '';
//   if (hovers.length > 0) {
//     var allHoverRaw = hovers.map(item => {
//       return item.split('_')[0];
//     })
//     let findDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) != index)

//     if (findDuplicates(allHoverRaw).length !== 0) {
//       console.log('WARNING DUPLICATED !!!!')
//     } else {

//       hovers.forEach(hover => {
//         if (hover.split('_')[1].indexOf('=') > 0) {
//           content = content + `
//   .${hover.split('_')[0]} ${hover.split('_')[1].replace('=', ' ')} 
//   `
//         } else {
//           content = content + `
// .${hover.split('_')[0]} ${hover.split('_')[1]} 
// `
//         }

//       })

//       fs.writeFileSync(targetFolder + 'cuong-sass/libs/hover.scss', content, 'utf8')
//     }
//   } else {
//     fs.writeFileSync(targetFolder + 'cuong-sass/libs/hover.scss', '', 'utf8')
//   }
};