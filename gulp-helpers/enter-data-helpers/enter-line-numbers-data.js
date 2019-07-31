var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterLineNumbersData = (lines) => {
  var uniqueLines = require('../helpers.js').removeDuplicateElementsVersion1(lines)
  var content = '';
  if (uniqueLines.length > 0) {
    uniqueLines.forEach(uniqueLine => {
      var lineNumberValue = uniqueLine.split('-')[2]
      content = content + `
.${uniqueLine} {
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: ${lineNumberValue}; /* number of lines to show */
   max-height: 20;       /* fallback */
}
`
    })

    fs.writeFileSync(targetFolder + 'cuong-sass/libs/line-number.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/line-number.scss', '', 'utf8')
  }
};
