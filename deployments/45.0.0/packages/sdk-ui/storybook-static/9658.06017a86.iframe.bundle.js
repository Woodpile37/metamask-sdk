(self.webpackChunk_metamask_sdk_ui=self.webpackChunk_metamask_sdk_ui||[]).push([[9658],{"./src/design-system/components/List/ListItemColumn/ListItemColumn.test.tsx":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),_enzyme=(_interopRequireDefault(__webpack_require__("../devreact/node_modules/react/index.js")),__webpack_require__("./node_modules/enzyme/build/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_ListItemColumn=_interopRequireDefault(__webpack_require__("./src/design-system/components/List/ListItemColumn/ListItemColumn.tsx")),_ListItemColumn2=__webpack_require__("./src/design-system/components/List/ListItemColumn/ListItemColumn.constants.ts"),_ListItemColumn3=__webpack_require__("./src/design-system/components/List/ListItemColumn/ListItemColumn.types.ts"),_jsxRuntime=__webpack_require__("../devreact/node_modules/react/jsx-runtime.js");describe("ListItemColumn",(function(){it("should render snapshot correctly",(function(){var wrapper=(0,_enzyme.shallow)((0,_jsxRuntime.jsx)(_ListItemColumn.default,{children:(0,_jsxRuntime.jsx)(_View.default,{})}));expect(wrapper).toMatchSnapshot()})),it("should render component correctly",(function(){var listItemColumnComponent=(0,_enzyme.shallow)((0,_jsxRuntime.jsx)(_ListItemColumn.default,{children:(0,_jsxRuntime.jsx)(_View.default,{})})).findWhere((function(node){return node.prop("testID")===_ListItemColumn2.TESTID_LISTITEMCOLUMN}));expect(listItemColumnComponent.exists()).toBe(!0)})),it("should render the correct default widthType",(function(){var listItemColumnComponent=(0,_enzyme.shallow)((0,_jsxRuntime.jsx)(_ListItemColumn.default,{widthType:_ListItemColumn2.DEFAULT_LISTITEMCOLUMN_WIDTHTYPE,children:(0,_jsxRuntime.jsx)(_View.default,{})})).findWhere((function(node){return node.prop("testID")===_ListItemColumn2.TESTID_LISTITEMCOLUMN}));expect(listItemColumnComponent.props().style.flex).toBe(-1)})),it("should render the given widthType",(function(){var listItemColumnComponent=(0,_enzyme.shallow)((0,_jsxRuntime.jsx)(_ListItemColumn.default,{widthType:_ListItemColumn3.WidthType.Fill,children:(0,_jsxRuntime.jsx)(_View.default,{})})).findWhere((function(node){return node.prop("testID")===_ListItemColumn2.TESTID_LISTITEMCOLUMN}));expect(listItemColumnComponent.props().style.flex).toBe(1)}))}))},"?8d7a":()=>{},"?eecd":()=>{}}]);