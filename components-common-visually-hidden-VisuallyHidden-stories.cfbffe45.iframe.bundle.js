"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[891],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/components/common/visually-hidden/VisuallyHidden.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_text_Text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/text/Text.tsx"),_VisuallyHidden__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/visually-hidden/VisuallyHidden.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Visually Hidden",component:_VisuallyHidden__WEBPACK_IMPORTED_MODULE_3__.Z,tags:["autodocs"]};var Default={render:function render(args){return __jsx(_text_Text__WEBPACK_IMPORTED_MODULE_2__.Z,null,__jsx("p",null,"The text between (",__jsx(_VisuallyHidden__WEBPACK_IMPORTED_MODULE_3__.Z,args),") is visually hidden, but still readable by screen readers."))},args:{children:"this text"}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  render: args => <Text>\n      <p>\n        The text between (<VisuallyHidden {...args} />) is visually hidden, but\n        still readable by screen readers.\n      </p>\n    </Text>,\n  args: {\n    children: "this text"\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./src/components/common/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>text_Text});var _templateObject,objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),StyledText=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").default.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(['\n  font-size: 1rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n\n  p {\n    + p,\n    + ul {\n      margin-top: 1.5rem;\n    }\n  }\n\n  ul {\n    li {\n      &::before {\n        content: "-";\n        margin-right: 0.5rem;\n      }\n    }\n  }\n']))),_excluded=["children"],__jsx=react.createElement,Text=function Text(_ref){var children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(StyledText,props,children)};Text.displayName="Text",Text.__docgenInfo={description:"",methods:[],displayName:"Text"};const text_Text=Text;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/common/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/visually-hidden/VisuallyHidden.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>StyledVisuallyHidden,j:()=>visuallyHidden});var _templateObject,_templateObject2,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),visuallyHidden=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject||(_templateObject=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  margin-top: -1px;\n"]))),StyledVisuallyHidden=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.span(_templateObject2||(_templateObject2=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  ","\n"])),(function(){return visuallyHidden}))},"./src/components/common/visually-hidden/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/isEqual.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__),_VisuallyHidden_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/visually-hidden/VisuallyHidden.styles.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,VisuallyHidden=function VisuallyHidden(props){return __jsx(_VisuallyHidden_styles__WEBPACK_IMPORTED_MODULE_2__.Q,props)};VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"",methods:[],displayName:"VisuallyHidden"};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(VisuallyHidden,lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default());try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"",displayName:"VisuallyHidden",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/visually-hidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/common/visually-hidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}}}]);