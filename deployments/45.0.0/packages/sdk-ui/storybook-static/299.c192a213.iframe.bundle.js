(self.webpackChunk_metamask_sdk_ui=self.webpackChunk_metamask_sdk_ui||[]).push([[299,738],{"./src/design-system/components/Toast/Toast.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Default=void 0;var _Default$parameters,_Default$parameters2,_Default$parameters2$,_react=_interopRequireWildcard(__webpack_require__("../devreact/node_modules/react/index.js")),_reactNativeSafeAreaContext=__webpack_require__("./node_modules/react-native-safe-area-context/lib/module/index.js"),_Button=_interopRequireWildcard(__webpack_require__("./src/design-system/components/Buttons/Button/index.ts")),_Toast=_interopRequireDefault(__webpack_require__("./src/design-system/components/Toast/Toast.tsx")),_Toast2=__webpack_require__("./src/design-system/components/Toast/Toast.constants.ts"),_Toast3=__webpack_require__("./src/design-system/components/Toast/Toast.context.tsx"),_Toast4=__webpack_require__("./src/design-system/components/Toast/Toast.types.ts"),_jsxRuntime=__webpack_require__("../devreact/node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}exports.default={title:"Component Library / Toast",component:_Toast.default};var Default=exports.Default=function Template(){var toastRef=(0,_react.useRef)(null);return(0,_jsxRuntime.jsx)(_reactNativeSafeAreaContext.SafeAreaProvider,{children:(0,_jsxRuntime.jsxs)(_Toast3.ToastContextWrapper,{children:[(0,_jsxRuntime.jsx)(_Button.default,{variant:_Button.ButtonVariants.Link,size:_Button.ButtonSize.Md,label:"Show Account Toast",onPress:function onPress(){var _toastRef$current;null==(_toastRef$current=toastRef.current)||_toastRef$current.showToast({variant:_Toast4.ToastVariants.Account,labelOptions:[{label:"Switching to"},{label:" Account 2.",isBold:!0}],accountAddress:_Toast2.TEST_ACCOUNT_ADDRESS,accountAvatarType:_Toast2.TEST_AVATAR_TYPE})}}),(0,_jsxRuntime.jsx)(_Toast.default,{ref:toastRef})]})})}.bind({});Default.parameters=Object.assign({},Default.parameters,{docs:Object.assign({},null==(_Default$parameters=Default.parameters)?void 0:_Default$parameters.docs,{source:Object.assign({originalSource:"() => {\n  const toastRef = useRef<ToastRef>(null);\n  return <SafeAreaProvider>\n      <ToastContextWrapper>\n        <Button variant={ButtonVariants.Link} size={ButtonSize.Md} label={'Show Account Toast'} onPress={() => {\n        toastRef.current?.showToast({\n          variant: ToastVariants.Account,\n          labelOptions: [{\n            label: 'Switching to'\n          }, {\n            label: ' Account 2.',\n            isBold: true\n          }],\n          accountAddress: TEST_ACCOUNT_ADDRESS,\n          accountAvatarType: TEST_AVATAR_TYPE\n        });\n      }} />\n        {/* Additional buttons for other toast examples */}\n        <Toast ref={toastRef} />\n      </ToastContextWrapper>\n    </SafeAreaProvider>;\n}"},null==(_Default$parameters2=Default.parameters)||null==(_Default$parameters2$=_Default$parameters2.docs)?void 0:_Default$parameters2$.source)})})},"./src/design-system/components/Toast/Toast.constants.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.TEST_NETWORK_IMAGE_URL=exports.TEST_AVATAR_TYPE=exports.TEST_ACCOUNT_ADDRESS=void 0;var _AvatarAccount=__webpack_require__("./src/design-system/components/Avatars/Avatar/variants/AvatarAccount/index.ts");exports.TEST_ACCOUNT_ADDRESS="0x10e08af911f2e489480fb2855b24771745d0198b50f5c55891369844a8c57092",exports.TEST_NETWORK_IMAGE_URL="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",exports.TEST_AVATAR_TYPE=_AvatarAccount.AvatarAccountType.JazzIcon}}]);