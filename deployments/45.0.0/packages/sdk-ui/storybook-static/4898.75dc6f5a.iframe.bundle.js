(self.webpackChunk_metamask_sdk_ui=self.webpackChunk_metamask_sdk_ui||[]).push([[4898],{"./src/hooks/use-screen-width.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_react=__webpack_require__("../devreact/node_modules/react/index.js"),_Dimensions=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Dimensions/index.js"));exports.default=function useScreenWidth(){var _useState=(0,_react.useState)(_Dimensions.default.get("window").width),_useState2=(0,_slicedToArray2.default)(_useState,2),screenWidth=_useState2[0],setScreenWidth=_useState2[1];return(0,_react.useEffect)((function(){var subscription=_Dimensions.default.addEventListener("change",(function updateScreenWidth(){setScreenWidth(_Dimensions.default.get("window").width)}));return function(){subscription.remove()}}),[]),screenWidth}}}]);