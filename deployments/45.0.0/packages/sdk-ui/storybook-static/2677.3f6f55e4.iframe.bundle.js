(self.webpackChunk_metamask_sdk_ui=self.webpackChunk_metamask_sdk_ui||[]).push([[2677,4837],{"./src/design-system/components/Badges/BadgeWrapper/BadgeWrapper.styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_BadgeWrapper=__webpack_require__("./src/design-system/components/Badges/BadgeWrapper/BadgeWrapper.types.ts");exports.default=function styleSheet(params){var anchoringOffset,positionObj,xOffset,yOffset,vars=params.vars,style=vars.style,anchorElementShape=vars.anchorElementShape,badgePosition=vars.badgePosition,containerSize=vars.containerSize,elementHeight=(null==containerSize?void 0:containerSize.height)||0,isCustomPosition=!1;switch(anchorElementShape){case _BadgeWrapper.BadgeAnchorElementShape.Circular:anchoringOffset=.14*elementHeight;break;case _BadgeWrapper.BadgeAnchorElementShape.Rectangular:default:anchoringOffset=0}switch(badgePosition){case _BadgeWrapper.BadgePosition.TopRight:positionObj={top:anchoringOffset,right:anchoringOffset},xOffset=elementHeight/2,yOffset=elementHeight/-2;break;case _BadgeWrapper.BadgePosition.BottomRight:positionObj={bottom:anchoringOffset,right:anchoringOffset},xOffset=elementHeight/2,yOffset=elementHeight/2;break;case _BadgeWrapper.BadgePosition.BottomLeft:positionObj={bottom:anchoringOffset,left:anchoringOffset},xOffset=elementHeight/-2,yOffset=elementHeight/2;break;case _BadgeWrapper.BadgePosition.TopLeft:positionObj={top:anchoringOffset,left:anchoringOffset},xOffset=elementHeight/-2,yOffset=elementHeight/-2;break;default:positionObj=badgePosition,isCustomPosition=!0,xOffset=0,yOffset=0}return _StyleSheet.default.create({base:Object.assign({position:"relative",alignSelf:"flex-start"},style),badge:isCustomPosition?Object.assign({position:"absolute"},positionObj):Object.assign({position:"absolute",height:elementHeight,aspectRatio:1,alignItems:"center",justifyContent:"center"},positionObj,{transform:[{translateX:xOffset},{translateY:yOffset}]})})}},"./src/design-system/components/Badges/BadgeWrapper/BadgeWrapper.types.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.BadgePosition=exports.BadgeAnchorElementShape=void 0;exports.BadgeAnchorElementShape=function(BadgeAnchorElementShape){return BadgeAnchorElementShape.Rectangular="Rectangular",BadgeAnchorElementShape.Circular="Circular",BadgeAnchorElementShape}({}),exports.BadgePosition=function(BadgePosition){return BadgePosition.TopRight="TopRight",BadgePosition.BottomRight="BottomRight",BadgePosition.BottomLeft="BottomLeft",BadgePosition.TopLeft="TopLeft",BadgePosition}({})}}]);