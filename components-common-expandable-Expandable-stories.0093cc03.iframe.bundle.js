"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[472],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/components/common/expandable/Expandable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>Expandable_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),browser_symbol=__webpack_require__("./node_modules/svg-baker-runtime/browser-symbol.js"),browser_symbol_default=__webpack_require__.n(browser_symbol),browser_sprite_build=__webpack_require__("./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js"),browser_sprite_build_default=__webpack_require__.n(browser_sprite_build),symbol=new(browser_symbol_default())({id:"chevron-down",use:"chevron-down-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" id="chevron-down"><path d="M0 0h24v24H0z" stroke="none" /><path d="m6 9 6 6 6-6" /></symbol>'});browser_sprite_build_default().add(symbol);const chevron_down=symbol;var _templateObject,_templateObject2,SvgSprite=__webpack_require__("./src/components/common/svg/SvgSprite.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),StyledExpandableSummary=styled_components_browser_esm.ZP.summary(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  font-weight: 700;\n  cursor: pointer;\n  position: relative;\n  display: block;\n  display: flex;\n  justify-content: space-between;\n\n  &::-webkit-details-marker {\n    display: none;\n  }\n\n  > svg {\n    width: 1.5rem;\n    height: 1.5rem;\n    transition: transform ","ms;\n  }\n"])),(function(_ref){return _ref.theme.timings.normal})),StyledExpandable=styled_components_browser_esm.ZP.details(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  &[open] {\n    > "," {\n      > svg {\n        transform: rotate(180deg);\n      }\n    }\n  }\n\n  > div {\n    margin-top: 1rem;\n  }\n"])),StyledExpandableSummary),_excluded=["summary","children"],__jsx=react.createElement,Expandable=function Expandable(_ref){var summary=_ref.summary,children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(StyledExpandable,props,__jsx(StyledExpandableSummary,null,__jsx("span",null,summary),__jsx(SvgSprite.Z,{src:chevron_down})),__jsx("div",null,children))};Expandable.displayName="Expandable",Expandable.__docgenInfo={description:"",methods:[],displayName:"Expandable"};const expandable_Expandable=Expandable;try{Expandable.displayName="Expandable",Expandable.__docgenInfo={description:"",displayName:"Expandable",props:{summary:{defaultValue:null,description:"Title of the block",name:"summary",required:!0,type:{name:"ReactNode"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDetailsElement | null) => void) | RefObject<HTMLDetailsElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/expandable/Expandable.tsx#Expandable"]={docgenInfo:Expandable.__docgenInfo,name:"Expandable",path:"src/components/common/expandable/Expandable.tsx#Expandable"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Expandable_stories={title:"UI/Expandable",component:expandable_Expandable,tags:["autodocs"]};var Default={args:{summary:"Click to expand",children:"More details ..."}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{storySource:_objectSpread({source:'{\n  args: {\n    summary: "Click to expand",\n    children: "More details ..."\n  }\n}'},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.storySource)})},"./src/components/common/svg/SvgSprite.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_excluded=["src","children"],_excluded2=["crossOrigin","ref","title"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,SvgSprite=function SvgSprite(_ref){var src=_ref.src,props=(_ref.children,(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded)),title=(props.crossOrigin,props.ref,props.title),typedProps=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded2),titleId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();return __jsx("svg",(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},typedProps,{viewBox:src.viewBox,role:"img","aria-labelledby":title&&titleId}),title&&__jsx("title",{id:titleId},title),__jsx("use",{xlinkHref:"#".concat(src.id)}))};SvgSprite.displayName="SvgSprite",SvgSprite.__docgenInfo={description:"",methods:[],displayName:"SvgSprite"};const __WEBPACK_DEFAULT_EXPORT__=SvgSprite;try{SvgSprite.displayName="SvgSprite",SvgSprite.__docgenInfo={description:"",displayName:"SvgSprite",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/svg/SvgSprite.tsx#SvgSprite"]={docgenInfo:SvgSprite.__docgenInfo,name:"SvgSprite",path:"src/components/common/svg/SvgSprite.tsx#SvgSprite"})}catch(__react_docgen_typescript_loader_error){}}}]);