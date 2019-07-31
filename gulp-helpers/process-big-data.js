const fs = require('fs')

exports.processBigData  = (allFileContent) => {
  const mRegex = /(mx(l|r|t|b)-(\d*))|(mx-auto)/gm
  const enterMModule = require('./enter-data-helpers/enter-m-data.js')
  allFileContent.match(mRegex) !== null ? enterMModule.enterMData(allFileContent.match(mRegex)) : enterMModule.enterMData([])

  const pRegex = /p-(abs|rel|fixed)/gm
  const enterPModule = require('./enter-data-helpers/enter-p-data.js')
  allFileContent.match(pRegex) !== null ? enterPModule.enterPData(allFileContent.match(pRegex)) : enterPModule.enterPData([])

  const weightRegex = /weight-(bold|bolder|lighter|normal|100|200|300|400|500|600|700|800|900)/gm
  const enterWeightModule = require('./enter-data-helpers/enter-weight-data.js')
  allFileContent.match(weightRegex) !== null ? enterWeightModule.enterWeightData(allFileContent.match(weightRegex)) : enterWeightModule.enterWeightData([])

  const userSelectRegex = /user-select-(all|auto|text|unset|none)/gm
  const enterUserSelectModule = require('./enter-data-helpers/enter-user-select-data.js')
  allFileContent.match(userSelectRegex) !== null ? enterUserSelectModule.enterUserSelectData(allFileContent.match(userSelectRegex)) : enterUserSelectModule.enterUserSelectData([])

  const txtColorRegex = /txt-color-(\d*)/gm
  const enterTxtColorModule = require('./enter-data-helpers/enter-txt-color-data.js')
  allFileContent.match(txtColorRegex) !== null ? enterTxtColorModule.enterTxtColorData(allFileContent.match(txtColorRegex)) : enterTxtColorModule.enterTxtColorData([])

  const textAlignRegex = /text-align-(left|right|center|unset)/gm
  const enterTextAlignModule = require('./enter-data-helpers/enter-text-align-data.js')
  allFileContent.match(textAlignRegex) !== null ? enterTextAlignModule.enterTextAlignData(allFileContent.match(textAlignRegex)) : enterTextAlignModule.enterTextAlignData([])

  const displayRegex = /display-(\w*)/gm
  const enterDisplayModule = require('./enter-data-helpers/enter-display-data.js')
  allFileContent.match(displayRegex) !== null ? enterDisplayModule.enterDisplayData(allFileContent.match(displayRegex)) : enterDisplayModule.enterDisplayData([])

  const boxSizeRegex = /box-size-(unset|border_box|content_box)/gm
  const enterBoxSizeModule = require('./enter-data-helpers/enter-box-size-data.js')
  allFileContent.match(boxSizeRegex) !== null ? enterBoxSizeModule.enterBoxSizeData(allFileContent.match(boxSizeRegex)) : enterBoxSizeModule.enterBoxSizeData([])

  const cursorRegex = /cursor-(alias|all_scroll|auto|cell|col_resize|context_menu|copy|crosshair|default|e_resize|ew_resize|grab|grabbing|help|move|n_resize|ne_resize|nesw_resize|no_drop|none|not_allowed|ns_resize|nw_resize|nwse_resize|pointer|progress|row_resize|s_resize|se_resize|sw_resize|text|unset|vertical_text|w_resize|wait|zoom_in|zoom_out)/gm
  const enterCursorModule = require('./enter-data-helpers/enter-cursor-data.js')
  allFileContent.match(cursorRegex) !== null ? enterCursorModule.enterCursorData(allFileContent.match(cursorRegex)) : enterCursorModule.enterCursorData([])

  const flexRegex = /flex-((x\d*)|wrap_start|wrap_end|wrap_center|wrap_between|row|col|start_baseline|start_center|start_single_end|start_end|start_start|start_normal|start_self_end|start_self_start|start_single_start|start_stretch|start_unset|end_baseline|end_center|end_single_end|end_end|end_start|end_normal|end_self_end|end_self_start|end_single_start|end_stretch|end_unset|center_baseline|center_center|center_single_end|center_end|center_start|center_normal|center_self_end|center_self_start|center_single_start|center_stretch|center_unset|single_end_baseline|single_end_center|single_end_single_end|single_end_end|single_end_start|single_end_normal|single_end_self_end|single_end_self_start|single_end_single_start|single_end_stretch|single_end_unset|single_left_baseline|single_left_center|single_left_single_end|single_left_end|single_left_start|single_left_normal|single_left_self_end|single_left_self_start|single_left_single_start|single_left_stretch|single_left_unset|single_right_baseline|single_right_center|single_right_single_end|single_right_end|single_right_start|single_right_normal|single_right_self_end|single_right_self_start|single_right_single_start|single_right_stretch|single_right_unset|around_baseline|around_center|around_single_end|around_end|around_start|around_normal|around_self_end|around_self_start|around_single_start|around_stretch|around_unset|between_baseline|between_center|between_single_end|between_end|between_start|between_normal|between_self_end|between_self_start|between_single_start|between_stretch|between_unset|evenly_baseline|evenly_center|evenly_single_end|evenly_end|evenly_start|evenly_normal|evenly_self_end|evenly_self_start|evenly_single_start|evenly_stretch|evenly_unset|single_start_baseline|single_start_center|single_start_single_end|single_start_end|single_start_start|single_start_normal|single_start_self_end|single_start_self_start|single_start_single_start|single_start_stretch|single_start_unset|stretch_baseline|stretch_center|stretch_single_end|stretch_end|stretch_start|stretch_normal|stretch_self_end|stretch_self_start|stretch_single_start|stretch_stretch|stretch_unset|unset_baseline|unset_center|unset_single_end|unset_end|unset_start|unset_normal|unset_self_end|unset_self_start|unset_single_start|unset_stretch|unset_unset)/gm
  const enterFlexModule = require('./enter-data-helpers/enter-flex-data.js')
  allFileContent.match(flexRegex) !== null ? enterFlexModule.enterFlexData(allFileContent.match(flexRegex)) : enterFlexModule.enterFlexData([])

  const shadowRegex = /shadow-((\d*)_(\d*)_(\d*)_(\d*)_(\d*)_(\d*)_(\d*))/gm
  const enterShadowModule = require('./enter-data-helpers/enter-shadow-data.js')
  allFileContent.match(shadowRegex) !== null ? enterShadowModule.enterShadowData(allFileContent.match(shadowRegex)) : enterShadowModule.enterShadowData([])

  const radiusRegex = /radius-(circle|sides_circle|((\d*)_(\d*)_(\d*)_(\d*)))/gm
  const enterRadiusModule = require('./enter-data-helpers/enter-radius-data.js')
  allFileContent.match(radiusRegex) !== null ? enterRadiusModule.enterRadiusData(allFileContent.match(radiusRegex)) : enterRadiusModule.enterRadiusData([])

  const styleRegex = /style-(\w*)/gm
  const enterStyleModule = require('./enter-data-helpers/enter-style-data.js')
  allFileContent.match(styleRegex) !== null ? enterStyleModule.enterStyleData(allFileContent.match(styleRegex)) : enterStyleModule.enterStyleData([])

  const overflowRegex = /overflow-(\w*)/gm
  const enterOverflowModule = require('./enter-data-helpers/enter-overflow-data.js')
  allFileContent.match(overflowRegex) !== null ? enterOverflowModule.enterOverflowData(allFileContent.match(overflowRegex)) : enterOverflowModule.enterOverflowData([])

  const borderRegex = /border-((\w*)_(\w*)_(\w*)_(\w*)|(\w*)_(\w*)_(\w*))/gm
  const enterBorderModule = require('./enter-data-helpers/enter-border-data.js')
  allFileContent.match(borderRegex) !== null ? enterBorderModule.enterBorderData(allFileContent.match(borderRegex)) : enterBorderModule.enterBorderData([])

  const resnodeRegex = /resnode-((\d*)_(\d*)_(\d*)_({\S*}))/gm
  const enterResnodeModule = require('./enter-data-helpers/enter-resnode-data.js')
  allFileContent.match(resnodeRegex) !== null ? enterResnodeModule.enterResnodeData(allFileContent.match(resnodeRegex)) : enterResnodeModule.enterResnodeData([])

  const wordWrapRegex = /word-wrap-(\w*)/gm
  const enterWordWrapModule = require('./enter-data-helpers/enter-word-wrap-data.js')
  allFileContent.match(wordWrapRegex) !== null ? enterWordWrapModule.enterWordWrapData(allFileContent.match(wordWrapRegex)) : enterWordWrapModule.enterWordWrapData([])

  const wordBreakRegex = /word-break-(\w*)/gm
  const enterWordBreakModule = require('./enter-data-helpers/enter-word-break-data.js')
  allFileContent.match(wordBreakRegex) !== null ? enterWordBreakModule.enterWordBreakData(allFileContent.match(wordBreakRegex)) : enterWordBreakModule.enterWordBreakData([])

  const hoverRegex = /hover-((\d*)_({\S*}))/gm
  const enterHoverModule = require('./enter-data-helpers/enter-hover-data.js')
  allFileContent.match(hoverRegex) !== null ? enterHoverModule.enterHoverData(allFileContent.match(hoverRegex)) : enterHoverModule.enterHoverData([])

  const transitionRegex = /transitionx-(\S*)/gm
  const enterTransitionModule = require('./enter-data-helpers/enter-transition-data.js')
  allFileContent.match(transitionRegex) !== null ? enterTransitionModule.enterTransitionData(allFileContent.match(transitionRegex)) : enterTransitionModule.enterTransitionData([])

  const beforeRegex = /before-((\d*)_({\S*}))/gm
  const enterBeforeModule = require('./enter-data-helpers/enter-before-data.js')
  allFileContent.match(beforeRegex) !== null ? enterBeforeModule.enterBeforeData(allFileContent.match(beforeRegex)) : enterBeforeModule.enterBeforeData([])

  const afterRegex = /after-((\d*)_({\S*}))/gm
  const enterAfterModule = require('./enter-data-helpers/enter-after-data.js')
  allFileContent.match(afterRegex) !== null ? enterAfterModule.enterAfterData(allFileContent.match(afterRegex)) : enterAfterModule.enterAfterData([])

  const leftRegex = /leftx-(\w*)/gm
  const enterLeftModule = require('./enter-data-helpers/enter-left-data.js')
  allFileContent.match(leftRegex) !== null ? enterLeftModule.enterLeftData(allFileContent.match(leftRegex)) : enterLeftModule.enterLeftData([])

  const rightRegex = /rightx-(\w*)/gm
  const enterRightModule = require('./enter-data-helpers/enter-right-data.js')
  allFileContent.match(rightRegex) !== null ? enterRightModule.enterRightData(allFileContent.match(rightRegex)) : enterRightModule.enterRightData([])

  const topRegex = /topx-(\w*)/gm
  const enterTopModule = require('./enter-data-helpers/enter-top-data.js')
  allFileContent.match(topRegex) !== null ? enterTopModule.enterTopData(allFileContent.match(topRegex)) : enterTopModule.enterTopData([])

  const bottomRegex = /bottomx-(\w*)/gm
  const enterBottomModule = require('./enter-data-helpers/enter-bottom-data.js')
  allFileContent.match(bottomRegex) !== null ? enterBottomModule.enterBottomData(allFileContent.match(bottomRegex)) : enterBottomModule.enterBottomData([])

  const fsRegex = /fsx-(\w*)/gm
  const enterFsModule = require('./enter-data-helpers/enter-fs-data.js')
  allFileContent.match(fsRegex) !== null ? enterFsModule.enterFsData(allFileContent.match(fsRegex)) : enterFsModule.enterFsData([])

  const lhRegex = /lhx-(\w*)/gm
  const enterLhsModule = require('./enter-data-helpers/enter-lh-data.js')
  allFileContent.match(lhRegex) !== null ? enterLhsModule.enterLhData(allFileContent.match(lhRegex)) : enterLhsModule.enterLhData([])

  const lineNumbersRegex = /line-numbers-((\d*))/gm
  const enterLineNumbersModule = require('./enter-data-helpers/enter-line-numbers-data.js')
  allFileContent.match(lineNumbersRegex) !== null ? enterLineNumbersModule.enterLineNumbersData(allFileContent.match(lineNumbersRegex)) : enterLineNumbersModule.enterLineNumbersData([])

  const widthRegex = /wx-((\w*)(pc|()))/gm
  const enterWidthModule = require('./enter-data-helpers/enter-width-data.js')
  allFileContent.match(widthRegex) !== null ? enterWidthModule.enterWidthData(allFileContent.match(widthRegex)) : enterWidthModule.enterWidthData([])

  const heightRegex = /hx-(\w*)/gm
  const enterHeightModule = require('./enter-data-helpers/enter-height-data.js')
  allFileContent.match(heightRegex) !== null ? enterHeightModule.enterHeightData(allFileContent.match(heightRegex)) : enterHeightModule.enterHeightData([])

  const bgRegex = /bg-(\w*)/gm
  const enterBgModule = require('./enter-data-helpers/enter-bg-data.js')
  allFileContent.match(bgRegex) !== null ? enterBgModule.enterBgData(allFileContent.match(bgRegex)) : enterBgModule.enterBgData([])

  const effectRegex = /effect-((\d*)_({\S*}))/gm
  const enterEffectModule = require('./enter-data-helpers/enter-effect-data.js')
  allFileContent.match(effectRegex) !== null ? enterEffectModule.enterEffectData(allFileContent.match(effectRegex)) : enterEffectModule.enterEffectData([])

  const zIndexRegex = /zindex-(\d*)/gm
  const enterZIndexModule = require('./enter-data-helpers/enter-zindex-data.js')
  allFileContent.match(zIndexRegex) !== null ? enterZIndexModule.enterIndexData(allFileContent.match(zIndexRegex)) : enterZIndexModule.enterIndexData([])

  const paddingRegex = /px(l|r|t|b|box)-((\w*)(pc|()))/gm
  const enterPaddingModule = require('./enter-data-helpers/enter-padding-data.js')
  allFileContent.match(paddingRegex) !== null ? enterPaddingModule.enterPaddingData(allFileContent.match(paddingRegex)) : enterPaddingModule.enterPaddingData([])

  const transformRegex = /transformx-(\S*)/gm
  const enterTransformModule = require('./enter-data-helpers/enter-transform-data.js')
  allFileContent.match(transformRegex) !== null ? enterTransformModule.enterTransformData(allFileContent.match(transformRegex)) : enterTransformModule.enterTransformData([])
}