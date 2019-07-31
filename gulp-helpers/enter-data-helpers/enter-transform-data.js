var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

var convertValue = (valueInput, typeInput) => {
  let returnValue = '';
  if (typeInput === 'translate') {
    returnValue = !isNaN(valueInput) ? valueInput + 'px' : valueInput.replace('m','-').replace('pc','%').replace('p','.')
    var tempVal = returnValue;
    if (tempVal.indexOf('%') === -1 && tempVal.indexOf('px') === -1) {
      tempVal = tempVal + 'px'
    }
    returnValue = tempVal
  }

  if (typeInput === 'rotate') {
    returnValue = !isNaN(valueInput) ? valueInput + 'deg' : valueInput.replace('m','-').replace('pc','%').replace('p','.')
    var tempVal = returnValue;
    if (tempVal.indexOf('%') === -1 && tempVal.indexOf('deg') === -1) {
      tempVal = tempVal + 'deg'
    }
    returnValue = tempVal
  }

  if (typeInput === 'scale') {
    returnValue = !isNaN(valueInput) ? valueInput  : valueInput.replace('m','-').replace('pc','').replace('p','.')
  }

  return returnValue
}

exports.enterTransformData = (transforms) => {
  let formattedContent = ``
  const uniqueTransforms = require('../helpers.js').removeDuplicateElementsVersion1(transforms)
  if (uniqueTransforms.length > 0) {
    uniqueTransforms.forEach(uniqueTransform => {
      if (uniqueTransform.split('-')[1].split('_')[0] === 'translate') {
      formattedContent = formattedContent + `
.${uniqueTransform} {transform: translate(${convertValue(uniqueTransform.split('-')[1].split('_')[1],'translate')}, ${convertValue(uniqueTransform.split('-')[1].split('_')[2],'translate')});}
`
      }
      if (uniqueTransform.split('-')[1].split('_')[0] === 'scale') {
      formattedContent = formattedContent + `
.${uniqueTransform} {transform: scale(${convertValue(uniqueTransform.split('-')[1].split('_')[1],'scale')}, ${convertValue(uniqueTransform.split('-')[1].split('_')[2],'scale')});}
`
      }

      if (uniqueTransform.split('-')[1].split('_')[0] === 'rotate') {
      formattedContent = formattedContent + `
.${uniqueTransform} {transform: rotate(${convertValue(uniqueTransform.split('-')[1].split('_')[1],'rotate')});}
`
      }
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/transform.scss', formattedContent, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/transform.scss', '', 'utf8')
  }
};
