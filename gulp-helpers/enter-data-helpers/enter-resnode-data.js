var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterResnodeData = (responsives) => {
//   var finalContent = [];
//   var dataBreaks = []
//   var allNodes = require('../helpers.js').removeDuplicateElementsVersion1(responsives.map(item => {
//     return item.split('_')[0].split('-')[1]
//   }))
//   allNodes.forEach(function (item) {
//     var content = ''
//     var allBreak = responsives.filter(itemR => {
//       return itemR.split('_')[0].split('-')[1] === item
//     })
//     var eachBreak = require('../helpers.js').removeDuplicateElementsVersion1(allBreak.map(itemFiltered => {
//       return itemFiltered.split('_')[2]
//     })).sort(function (a, b) {
//       return parseInt(a) < parseInt(b)
//     });
    
//     dataBreaks.push({
//       nodes: allBreak,
//       breaks: eachBreak
//     })

    
//   })
  
//   if (dataBreaks.length > 0) {
//     var indexContent = ''
//     dataBreaks.forEach((item, index) => {
//       var fuck='';
//       item.breaks.forEach(function(item1) {
//         // 1232 992 956 767 480 320
//         var allCss = ``;
//         var breakMedia = '';
//         item.nodes.forEach(function (item2) {
//           // resnode-4-1 resnode-4-2 resnode-4-3 resnode-4-4
//           if (item2.indexOf(`_${item1}_`) > -1) {
//   allCss = allCss + `
//     .${item2.split('_')[0]}_${item2.split('_')[1]} ${item2.split('_')[3]}
//   `
//           }
//         })

//         breakMedia = `
//     @media screen and (max-width: ${item1}px){
//       ${allCss}
//     }
//   `
//         fuck = fuck + breakMedia
//       })

//       var xxx = `
//   .${item.nodes[0].split('_')[0]} {
//     ${fuck}
//   }
//   `

//       fs.writeFileSync(targetFolder + `cuong-sass/responsive/node-${item.nodes[0].split('-')[1].split('_')[0]}.scss`, xxx, 'utf8')
//       indexContent = indexContent + `
// @import './node-${item.nodes[0].split('-')[1].split('_')[0]}.scss';
// `
//       fs.writeFileSync(targetFolder + `cuong-sass/responsive/index.scss`, indexContent, 'utf8')
//     })

//     var allStates = [];
//     dataBreaks.forEach(item => {
//       allStates.push(item.nodes[0].split('-')[1].split('_')[0])
//     })
//     fs.readdir(targetFolder + 'cuong-sass/responsive', (err, files) => {
//       files.forEach(file => {
//          if (file.indexOf('-') > 0) {
//           if (allStates.indexOf(file.split('-')[1].split('.')[0]) < 0) {
//             fs.unlinkSync(targetFolder + 'cuong-sass/responsive/' + file)
//           }
//          }
//       });
//     });
//   } else {
//     fs.writeFileSync(targetFolder + `cuong-sass/responsive/node-1.scss`, '', 'utf8')
//     fs.writeFileSync(targetFolder + `cuong-sass/responsive/node-2.scss`, '', 'utf8')
//     fs.writeFileSync(targetFolder + `cuong-sass/responsive/node-3.scss`, '', 'utf8')
//     fs.writeFileSync(targetFolder + `cuong-sass/responsive/node-4.scss`, '', 'utf8')
//     fs.writeFileSync(targetFolder + `cuong-sass/responsive/node-5.scss`, '', 'utf8')
//     fs.writeFileSync(targetFolder + `cuong-sass/responsive/node-7.scss`, '', 'utf8')
//   }


};
