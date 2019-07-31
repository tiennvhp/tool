var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterOverflowData = (overflows) => {
  var content = '';
  if (overflows.length > 0) {
    require('../helpers.js').removeDuplicateElementsVersion1(overflows).forEach(function(overflow){
      if (overflow.split('-')[1] === 'hidden') {
        content = content + `
.${overflow} { overflow: hidden;}
`
      }
      if (overflow.split('-')[1] === 'auto') {
        content = content + `
.${overflow} {
  overflow: auto;
  /* width */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
   
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2); 
    border-radius: 4px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
}
`
      }

      if (overflow.split('-')[1] === 'overlay') {
        content = content + `
.${overflow} { overflow: overlay;}
`
      }
      
      if (overflow.split('-')[1] === 'scroll') {
        content = content + `
.${overflow} { overflow: scroll;}
`
      }  
          
      if (overflow.split('-')[1] === 'visible') {
        content = content + `
.${overflow} { overflow: visible;}
`
      }     

      if (overflow.split('-')[1] === 'unset') {
        content = content + `
.${overflow} { overflow: unset;}
`
      }
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/overflow.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/overflow.scss', '', 'utf8')
  }
};
