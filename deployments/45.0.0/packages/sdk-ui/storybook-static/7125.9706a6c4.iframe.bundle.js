(self.webpackChunk_metamask_sdk_ui=self.webpackChunk_metamask_sdk_ui||[]).push([[7125],{"./src/components/rpc-history-viewer/history-item/history-item.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.WithResult=exports.WithError=exports.Primary=exports.NoElapsedTime=exports.LongElapsedTime=void 0;_interopRequireDefault(__webpack_require__("../devreact/node_modules/react/index.js"));var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_WithResult$parameter,_WithResult$parameter2,_WithResult$parameter3,_WithError$parameters,_WithError$parameters2,_WithError$parameters3,_LongElapsedTime$para,_LongElapsedTime$para2,_LongElapsedTime$para3,_NoElapsedTime$parame,_NoElapsedTime$parame2,_NoElapsedTime$parame3,_historyItem=__webpack_require__("./src/components/rpc-history-viewer/history-item/history-item.tsx"),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_jsxRuntime=__webpack_require__("../devreact/node_modules/react/jsx-runtime.js"),defaultEntry={id:"11111",method:"eth_requestAccounts",timestamp:Date.now(),result:{accounts:["0x123...","0x456..."]},error:void 0,elapsedTime:123},HistoryItemMeta={title:"SDK UI / RPCHistoryViewer / History Item",component:_historyItem.HistoryItem,args:{entry:Object.assign({},defaultEntry)},decorators:[function(Story){return(0,_jsxRuntime.jsx)(_View.default,{style:{padding:16},children:(0,_jsxRuntime.jsx)(Story,{})})}],parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#050505"}]}}},Primary=(exports.default=HistoryItemMeta,exports.Primary={args:{}}),WithResult=exports.WithResult={args:{entry:Object.assign({},defaultEntry,{result:{success:!0,balance:"100 ETH"},error:void 0})}},WithError=exports.WithError={args:{entry:Object.assign({},defaultEntry,{result:void 0,error:{code:-32603,message:"Internal error"}})}},LongElapsedTime=exports.LongElapsedTime={args:{entry:Object.assign({},defaultEntry,{elapsedTime:9876})}},NoElapsedTime=exports.NoElapsedTime={args:{entry:Object.assign({},defaultEntry,{elapsedTime:void 0})}};Primary.parameters=Object.assign({},Primary.parameters,{docs:Object.assign({},null==(_Primary$parameters=Primary.parameters)?void 0:_Primary$parameters.docs,{source:Object.assign({originalSource:"{\n  args: {}\n}"},null==(_Primary$parameters2=Primary.parameters)||null==(_Primary$parameters2$=_Primary$parameters2.docs)?void 0:_Primary$parameters2$.source)})}),WithResult.parameters=Object.assign({},WithResult.parameters,{docs:Object.assign({},null==(_WithResult$parameter=WithResult.parameters)?void 0:_WithResult$parameter.docs,{source:Object.assign({originalSource:"{\n  args: {\n    entry: {\n      ...defaultEntry,\n      result: {\n        success: true,\n        balance: '100 ETH'\n      },\n      error: undefined\n    }\n  }\n}"},null==(_WithResult$parameter2=WithResult.parameters)||null==(_WithResult$parameter3=_WithResult$parameter2.docs)?void 0:_WithResult$parameter3.source)})}),WithError.parameters=Object.assign({},WithError.parameters,{docs:Object.assign({},null==(_WithError$parameters=WithError.parameters)?void 0:_WithError$parameters.docs,{source:Object.assign({originalSource:"{\n  args: {\n    entry: {\n      ...defaultEntry,\n      result: undefined,\n      error: {\n        code: -32603,\n        message: 'Internal error'\n      }\n    }\n  }\n}"},null==(_WithError$parameters2=WithError.parameters)||null==(_WithError$parameters3=_WithError$parameters2.docs)?void 0:_WithError$parameters3.source)})}),LongElapsedTime.parameters=Object.assign({},LongElapsedTime.parameters,{docs:Object.assign({},null==(_LongElapsedTime$para=LongElapsedTime.parameters)?void 0:_LongElapsedTime$para.docs,{source:Object.assign({originalSource:"{\n  args: {\n    entry: {\n      ...defaultEntry,\n      elapsedTime: 9876\n    }\n  }\n}"},null==(_LongElapsedTime$para2=LongElapsedTime.parameters)||null==(_LongElapsedTime$para3=_LongElapsedTime$para2.docs)?void 0:_LongElapsedTime$para3.source)})}),NoElapsedTime.parameters=Object.assign({},NoElapsedTime.parameters,{docs:Object.assign({},null==(_NoElapsedTime$parame=NoElapsedTime.parameters)?void 0:_NoElapsedTime$parame.docs,{source:Object.assign({originalSource:"{\n  args: {\n    entry: {\n      ...defaultEntry,\n      elapsedTime: undefined\n    }\n  }\n}"},null==(_NoElapsedTime$parame2=NoElapsedTime.parameters)||null==(_NoElapsedTime$parame3=_NoElapsedTime$parame2.docs)?void 0:_NoElapsedTime$parame3.source)})});try{Meta.displayName="Meta",Meta.__docgenInfo={description:"Metadata to configure the stories for a component.",displayName:"Meta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/rpc-history-viewer/history-item/history-item.stories.tsx#Meta"]={docgenInfo:Meta.__docgenInfo,name:"Meta",path:"src/components/rpc-history-viewer/history-item/history-item.stories.tsx#Meta"})}catch(__react_docgen_typescript_loader_error){}}}]);