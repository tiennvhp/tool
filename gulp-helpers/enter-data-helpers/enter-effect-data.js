
var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterEffectData = (effects) => {
//   var count = 0;
//   var content = '';
//   if (effects.length > 0) {
//     var allHoverRaw = effects.map(item => {
//       return item.split('_')[0];
//     })
//     let findDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) != index)

//     if (findDuplicates(allHoverRaw).length !== 0) {
//       console.log('WARNING DUPLICATED !!!!')
//     } else {

//       effects.forEach(effect => {
//         if (effect.split('_')[1].indexOf('=') > 0) {
//           content = content + `
//   .${effect.split('_')[0]} ${effect.split('_')[1].replace('=', ' ')} 
//   `
//         } else {
//           content = content + `
// .${effect.split('_')[0]} ${effect.split('_')[1]} 
// `
//         }

//       })

//       fs.writeFileSync(targetFolder + 'cuong-sass/libs/effect.scss', content, 'utf8')
//     }
//   } else {
//     fs.writeFileSync(targetFolder + 'cuong-sass/libs/effect.scss', '', 'utf8')
//   }
};