var fs = require('fs')
const targetFolder = './projects/storefrontstyles/';

exports.enterCursorData = (cursors) => {
  var content = '';
  if (cursors.length > 0) {
    require('../helpers.js').removeDuplicateElementsVersion1(cursors).forEach(function(cursor){
      if (cursor.split('-')[1] === 'alias') {
        content = content + `
.${cursor} { cursor: alias; }
`
      }

      if (cursor.split('-')[1] === 'all_scroll') {
        content = content + `
.${cursor} { cursor: all-scroll; }
`
      }

      if (cursor.split('-')[1] === 'auto') {
        content = content + `
.${cursor} { cursor: auto; }
`
      }

      if (cursor.split('-')[1] === 'cell') {
        content = content + `
.${cursor} { cursor: cell; }
`
      }

      if (cursor.split('-')[1] === 'col_resize') {
        content = content + `
.${cursor} { cursor: col-resize; }
`
      }

      if (cursor.split('-')[1] === 'context_menu') {
        content = content + `
.${cursor} { cursor: context-menu; }
`
      }

      if (cursor.split('-')[1] === 'copy') {
        content = content + `
.${cursor} { cursor: copy; }
`
      }

      if (cursor.split('-')[1] === 'crosshair') {
        content = content + `
.${cursor} { cursor: crosshair; }
`
      }
      
      if (cursor.split('-')[1] === 'default') {
        content = content + `
.${cursor} { cursor: default; }
`
      }      

      if (cursor.split('-')[1] === 'e_resize') {
        content = content + `
.${cursor} { cursor: e-resize; }
`
      }

      if (cursor.split('-')[1] === 'ew_resize') {
        content = content + `
.${cursor} { cursor: ew-resize; }
`
      }

      if (cursor.split('-')[1] === 'grab') {
        content = content + `
.${cursor} { cursor: grab; }
`
      }
      
      if (cursor.split('-')[1] === 'grabbing') {
        content = content + `
.${cursor} { cursor: grabbing; }
`
      }      
      
      if (cursor.split('-')[1] === 'help') {
        content = content + `
.${cursor} { cursor: help; }
`
      }    
        
      if (cursor.split('-')[1] === 'move') {
        content = content + `
.${cursor} { cursor: move; }
`
      }  

      if (cursor.split('-')[1] === 'n_resize') {
        content = content + `
.${cursor} { cursor: n-resize; }
`
      }
      if (cursor.split('-')[1] === 'nesw_resize') {
        content = content + `
.${cursor} { cursor: nesw-resize; }
`
      }

      if (cursor.split('-')[1] === 'no_drop') {
        content = content + `
.${cursor} { cursor: no-drop; }
`
      }

      if (cursor.split('-')[1] === 'none') {
        content = content + `
.${cursor} { cursor: none; }
`
      }

      if (cursor.split('-')[1] === 'not_allowed') {
        content = content + `
.${cursor} { cursor: not-allowed; }
`
      }

      if (cursor.split('-')[1] === 'ns_resize') {
        content = content + `
.${cursor} { cursor: ns-resize; }
`
      }

      if (cursor.split('-')[1] === 'nw_resize') {
        content = content + `
.${cursor} { cursor: nw-resize; }
`
      }

      if (cursor.split('-')[1] === 'nwse_resize') {
        content = content + `
.${cursor} { cursor: nwse-resize; }
`
      }

      if (cursor.split('-')[1] === 'pointer') {
        content = content + `
.${cursor} { cursor: pointer; }
`
      }

      if (cursor.split('-')[1] === 'progress') {
        content = content + `
.${cursor} { cursor: progress; }
`
      }

      if (cursor.split('-')[1] === 'row_resize') {
        content = content + `
.${cursor} { cursor: row-resize; }
`
      }

      if (cursor.split('-')[1] === 's_resize') {
        content = content + `
.${cursor} { cursor: s-resize; }
`
      }

      if (cursor.split('-')[1] === 'se_resize') {
        content = content + `
.${cursor} { cursor: se-resize; }
`
      }

      if (cursor.split('-')[1] === 'sw_resize') {
        content = content + `
.${cursor} { cursor: sw-resize; }
`
      }

      if (cursor.split('-')[1] === 'text') {
        content = content + `
.${cursor} { cursor: text; }
`
      }

      if (cursor.split('-')[1] === 'unset') {
        content = content + `
.${cursor} { cursor: unset; }
`
      }

      if (cursor.split('-')[1] === 'vertical_text') {
        content = content + `
.${cursor} { cursor: vertical-text; }
`
      }


      if (cursor.split('-')[1] === 'w_resize') {
        content = content + `
.${cursor} { cursor: w-resize; }
`
      }

      if (cursor.split('-')[1] === 'wait') {
        content = content + `
.${cursor} { cursor: wait; }
`
      }

      if (cursor.split('-')[1] === 'zoom_in') {
        content = content + `
.${cursor} { cursor: zoom-in; }
`
      }
      if (cursor.split('-')[1] === 'zoom_out') {
        content = content + `
.${cursor} { cursor: zoom-out; }
`
      }
    })
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/cursor.scss', content, 'utf8')
  } else {
    fs.writeFileSync(targetFolder + 'cuong-sass/libs/cursor.scss', '', 'utf8')
  }
};
