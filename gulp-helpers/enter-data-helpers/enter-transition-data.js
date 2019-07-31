var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterTransitionData = (transitions) => {
  var uniqueTransitions = require('../helpers.js').removeDuplicateElementsVersion1(transitions)
  var content = ''
  if (uniqueTransitions.length > 0) {
    uniqueTransitions.forEach(function (transitionX) {
      var time = transitionX.split('-')[1].split('_')[transitionX.split('-')[1].split('_').length - 1] // _0p3
      var cssProperty = transitionX.split('-')[1].replace(`_${transitionX.split('-')[1].split('_')[transitionX.split('-')[1].split('_').length - 1]}`,'').replace('_', '-')
     content = content + `
.${transitionX} { transition: ${cssProperty} ${time.indexOf('p') > 0 ? time.replace('p','.') : time}s;}
`

    })

    fs.writeFileSync(targetFolder + 'cuong-sass/libs/transition.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/transition.scss', '', 'utf8')
  }
};
