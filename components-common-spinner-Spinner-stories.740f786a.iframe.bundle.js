"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[9710],{"./src/components/common/spinner/Spinner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FullWidth:()=>FullWidth,WithCustomColors:()=>WithCustomColors,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Spinner__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/spinner/Spinner.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Spinner",component:_Spinner__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["autodocs"],decorators:[function(Story){return __jsx("div",{style:{width:"400px",height:"400px",border:" 1px dashed #777"}},__jsx(Story,null))}]};var Default={args:{}},WithLabel={args:{children:"Loading..."}},WithCustomColors={args:{$fullWidth:!0,$fullHeight:!0,primaryColor:"#fff",secondaryColor:"#647373",backgroundColor:"rgba(0, 0, 0, 0.25)"}},FullWidth={args:{$fullWidth:!0,$fullHeight:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Loading..."\n  }\n}',...WithLabel.parameters?.docs?.source}}},WithCustomColors.parameters={...WithCustomColors.parameters,docs:{...WithCustomColors.parameters?.docs,source:{originalSource:'{\n  args: {\n    $fullWidth: true,\n    $fullHeight: true,\n    primaryColor: "#fff",\n    secondaryColor: "#647373",\n    backgroundColor: "rgba(0, 0, 0, 0.25)"\n  }\n}',...WithCustomColors.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:"{\n  args: {\n    $fullWidth: true,\n    $fullHeight: true\n  }\n}",...FullWidth.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithLabel","WithCustomColors","FullWidth"]},"./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/components/common/spinner/Spinner.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F$:()=>StyledSpinnerLabel,Q:()=>StyledSpinner,qu:()=>StyledSpinnerIcon});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spinnerAnimation=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(_templateObject||(_templateObject=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),StyledSpinnerIcon=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div(_templateObject2||(_templateObject2=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  > div {\n    border-width: 2px;\n    border-style: solid;\n    border-top-color: ",";\n    border-right-color: ",";\n    border-bottom-color: ",";\n    border-left-color: ",";\n    border-radius: 50%;\n    animation: "," 1s linear infinite;\n    width: 16px;\n    height: 16px;\n    border-width: 2px;\n  }\n"])),(function(_ref){var $primaryColor=_ref.$primaryColor;return null!=$primaryColor?$primaryColor:"currentColor"}),(function(_ref2){var $secondaryColor=_ref2.$secondaryColor;return null!=$secondaryColor?$secondaryColor:"transparent"}),(function(_ref3){var $secondaryColor=_ref3.$secondaryColor;return null!=$secondaryColor?$secondaryColor:"transparent"}),(function(_ref4){var $secondaryColor=_ref4.$secondaryColor;return null!=$secondaryColor?$secondaryColor:"transparent"}),spinnerAnimation),StyledSpinnerLabel=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div(_templateObject3||(_templateObject3=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  font-size: 0.875rem;\n  line-height: 1;\n"]))),StyledSpinner=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div(_templateObject4||(_templateObject4=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  line-height: 1;\n\n  ","\n\n  ","\n\n  ","\n"])),(function(_ref5){var $backgroundColor=_ref5.$backgroundColor;return $backgroundColor&&(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject5||(_templateObject5=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n      background-color: ",";\n    "])),$backgroundColor)}),(function(_ref6){return _ref6.$fullWidth?(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject6||(_templateObject6=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n          width: 100%;\n        "]))):""}),(function(_ref7){return _ref7.$fullHeight?(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject7||(_templateObject7=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n          height: 100%;\n        "]))):""}))},"./src/components/common/spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Spinner_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/spinner/Spinner.styles.ts"),_excluded=["children","primaryColor","secondaryColor","backgroundColor"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Spinner=function Spinner(_ref){var children=_ref.children,_ref$primaryColor=_ref.primaryColor,primaryColor=void 0===_ref$primaryColor?"currentColor":_ref$primaryColor,_ref$secondaryColor=_ref.secondaryColor,secondaryColor=void 0===_ref$secondaryColor?"transparent":_ref$secondaryColor,_ref$backgroundColor=_ref.backgroundColor,backgroundColor=void 0===_ref$backgroundColor?"transparent":_ref$backgroundColor,props=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx(_Spinner_styles__WEBPACK_IMPORTED_MODULE_1__.Q,(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},props,{$backgroundColor:backgroundColor}),__jsx(_Spinner_styles__WEBPACK_IMPORTED_MODULE_1__.qu,{$primaryColor:primaryColor,$secondaryColor:secondaryColor},__jsx("div",null)),children?__jsx(_Spinner_styles__WEBPACK_IMPORTED_MODULE_1__.F$,null,children):null)};Spinner.displayName="Spinner";const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Spinner);try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{primaryColor:{defaultValue:{value:"currentColor"},description:"",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:{value:"transparent"},description:"",name:"secondaryColor",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:{value:"transparent"},description:"",name:"backgroundColor",required:!1,type:{name:"string"}},$fullWidth:{defaultValue:null,description:"",name:"$fullWidth",required:!1,type:{name:"boolean"}},$fullHeight:{defaultValue:null,description:"",name:"$fullHeight",required:!1,type:{name:"boolean"}},$backgroundColor:{defaultValue:null,description:"",name:"$backgroundColor",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/common/spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}}}]);