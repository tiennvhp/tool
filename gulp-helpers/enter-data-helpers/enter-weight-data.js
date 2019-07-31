var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterWeightData = (weights) => {
  var content = '';
  if (weights.length > 0) {
    require('../helpers.js').removeDuplicateElementsVersion1(weights).forEach(function (weight) {
      if (weight.split('-')[1] === 'bold') {
        content = content + `.${weight} { font-weight: bold; }
`
      }

      if (weight.split('-')[1] === 'bolder') {
        content = content + `.${weight} { font-weight: bolder; }
`
      }

      if (weight.split('-')[1] === 'lighter') {
        content = content + `.${weight} { font-weight: lighter; }
`
      }

      if (weight.split('-')[1] === 'normal') {
        content = content + `.${weight} { font-weight: normal; }
`
      }
      
      if (weight.split('-')[1] === '100') {
        content = content + `.${weight} { font-weight: 100; }
`
      }      
      
      if (weight.split('-')[1] === '200') {
        content = content + `.${weight} { font-weight: 200; }
`
      }      

      if (weight.split('-')[1] === '300') {
        content = content + `.${weight} { font-weight: 300; }
`
      }

      if (weight.split('-')[1] === '400') {
        content = content + `.${weight} { font-weight: 400; }
`
      }

      if (weight.split('-')[1] === '500') {
        content = content + `.${weight} { font-weight: 500; }
`
      }

      if (weight.split('-')[1] === '600') {
        content = content + `.${weight} { font-weight: 600; }
`
      }

      if (weight.split('-')[1] === '700') {
        content = content + `.${weight} { font-weight: 700; }
`
      }

      if (weight.split('-')[1] === '800') {
        content = content + `.${weight} { font-weight: 800; }
`
      }

      if (weight.split('-')[1] === '900') {
        content = content + `.${weight} { font-weight: 900; }
`
      }

      
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/weight.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/weight.scss', content, 'utf8')
  }
};
