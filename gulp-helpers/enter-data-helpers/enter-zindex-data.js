var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterIndexData = (indexes) => {
  let formattedContent = ``
  const uniqueIndexes = require('../helpers.js').removeDuplicateElementsVersion1(indexes)
  if (uniqueIndexes.length > 0) {
    uniqueIndexes.forEach(indexX => {
      let indexValue = indexX.split('-')[1]
      formattedContent = formattedContent + `.${indexX} { z-index: ${indexValue}; }
          `
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/zindex.scss', formattedContent, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/zindex.scss', '', 'utf8')
  }
};
