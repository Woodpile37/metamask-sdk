(self.webpackChunk_metamask_sdk_ui=self.webpackChunk_metamask_sdk_ui||[]).push([[2750,7502],{"./src/design-system/components/Form/TextFieldSearch/TextFieldSearch.constants.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.TEXTFIELDSEARCH_TEST_ID=exports.SAMPLE_TEXTFIELDSEARCH_PROPS=exports.DEFAULT_TEXTFIELDSEARCH_SEARCHICON_SIZE=exports.DEFAULT_TEXTFIELDSEARCH_SEARCHICON_NAME=exports.DEFAULT_TEXTFIELDSEARCH_CLOSEICON_SIZE=exports.DEFAULT_TEXTFIELDSEARCH_CLOSEICON_NAME=void 0;var _Icon=__webpack_require__("./src/design-system/components/Icons/Icon/index.ts"),_ButtonIcon=__webpack_require__("./src/design-system/components/Buttons/ButtonIcon/index.ts"),_TextField=__webpack_require__("./src/design-system/components/Form/TextField/TextField.constants.tsx");exports.DEFAULT_TEXTFIELDSEARCH_SEARCHICON_NAME=_Icon.IconName.Search,exports.DEFAULT_TEXTFIELDSEARCH_SEARCHICON_SIZE=_Icon.IconSize.Sm,exports.DEFAULT_TEXTFIELDSEARCH_CLOSEICON_NAME=_Icon.IconName.Close,exports.DEFAULT_TEXTFIELDSEARCH_CLOSEICON_SIZE=_ButtonIcon.ButtonIconSizes.Sm,exports.TEXTFIELDSEARCH_TEST_ID="textfieldsearch",exports.SAMPLE_TEXTFIELDSEARCH_PROPS={showClearButton:!1,onPressClearButton:function onPressClearButton(){console.log("clicked")},size:_TextField.DEFAULT_TEXTFIELD_SIZE,isError:!1,isDisabled:!1,isReadonly:!1,placeholder:"Sample placeholder"}},"./src/design-system/components/Form/TextFieldSearch/TextFieldSearch.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("../devreact/node_modules/react/index.js")),_ButtonIcon=_interopRequireDefault(__webpack_require__("./src/design-system/components/Buttons/ButtonIcon/index.ts")),_Icon=_interopRequireDefault(__webpack_require__("./src/design-system/components/Icons/Icon/index.ts")),_TextField=_interopRequireDefault(__webpack_require__("./src/design-system/components/Form/TextField/TextField.tsx")),_TextFieldSearch=__webpack_require__("./src/design-system/components/Form/TextFieldSearch/TextFieldSearch.constants.ts"),_jsxRuntime=__webpack_require__("../devreact/node_modules/react/jsx-runtime.js"),_excluded=["showClearButton","onPressClearButton","clearButtonProps","value"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var TextFieldSearch=function TextFieldSearch(_ref){var _ref$showClearButton=_ref.showClearButton,showClearButton=void 0!==_ref$showClearButton&&_ref$showClearButton,onPressClearButton=_ref.onPressClearButton,clearButtonProps=_ref.clearButtonProps,value=_ref.value,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),_useState=(0,_react.useState)(value),_useState2=(0,_slicedToArray2.default)(_useState,2),currentValue=_useState2[0],setCurrentValue=_useState2[1],searchIcon=(0,_jsxRuntime.jsx)(_Icon.default,{name:_TextFieldSearch.DEFAULT_TEXTFIELDSEARCH_SEARCHICON_NAME,size:_TextFieldSearch.DEFAULT_TEXTFIELDSEARCH_SEARCHICON_SIZE}),clearButtonHandler=(0,_react.useCallback)((function(){setCurrentValue(""),null==onPressClearButton||onPressClearButton()}),[setCurrentValue,onPressClearButton]),clearButton=(0,_jsxRuntime.jsx)(_ButtonIcon.default,Object.assign({size:_TextFieldSearch.DEFAULT_TEXTFIELDSEARCH_CLOSEICON_SIZE,iconName:_TextFieldSearch.DEFAULT_TEXTFIELDSEARCH_CLOSEICON_NAME,onPress:clearButtonHandler},clearButtonProps));return(0,_jsxRuntime.jsx)(_TextField.default,Object.assign({value:currentValue,startAccessory:searchIcon,endAccessory:showClearButton&&clearButton,testID:_TextFieldSearch.TEXTFIELDSEARCH_TEST_ID},props))};exports.default=TextFieldSearch;try{TextFieldSearch.displayName="TextFieldSearch",TextFieldSearch.__docgenInfo={description:"",displayName:"TextFieldSearch",props:{showClearButton:{defaultValue:{value:"false"},description:"Optional boolean to show the Clear button.",name:"showClearButton",required:!1,type:{name:"boolean"}},onPressClearButton:{defaultValue:null,description:"Function to trigger when pressing the clear button.",name:"onPressClearButton",required:!1,type:{name:"(() => void)"}},clearButtonProps:{defaultValue:null,description:"Optional prop to pass any additional props to the clear button.",name:"clearButtonProps",required:!1,type:{name:"ButtonIconProps"}},size:{defaultValue:{value:"TextFieldSize.Md"},description:"Optional prop for size of the TextField.",name:"size",required:!1,type:{name:"enum",value:[{value:'"32"'},{value:'"40"'},{value:'"48"'}]}},startAccessory:{defaultValue:null,description:"Optional content to display before the Input.",name:"startAccessory",required:!1,type:{name:"ReactNode"}},endAccessory:{defaultValue:null,description:"Optional content to display after the Input.",name:"endAccessory",required:!1,type:{name:"ReactNode"}},isError:{defaultValue:{value:"false"},description:"Optional boolean to show the error state.",name:"isError",required:!1,type:{name:"boolean"}},inputElement:{defaultValue:null,description:"Optional prop to replace defaulted input with custom Input.",name:"inputElement",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:{value:"false"},description:"Optional boolean to disable Input.",name:"isDisabled",required:!1,type:{name:"boolean"}},isReadonly:{defaultValue:{value:"false"},description:"Optional boolean to show readonly input.",name:"isReadonly",required:!1,type:{name:"boolean"}},isStateStylesDisabled:{defaultValue:{value:"false"},description:"Optional boolean to disable state styles.",name:"isStateStylesDisabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/design-system/components/Form/TextFieldSearch/TextFieldSearch.tsx#TextFieldSearch"]={docgenInfo:TextFieldSearch.__docgenInfo,name:"TextFieldSearch",path:"src/design-system/components/Form/TextFieldSearch/TextFieldSearch.tsx#TextFieldSearch"})}catch(__react_docgen_typescript_loader_error){}}}]);