"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[325],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/components/common/toast/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>Toast_stories});var _Default$parameters,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/common/button/Button.tsx"),toastify=function toastify(){return __webpack_require__.e(310).then(__webpack_require__.bind(__webpack_require__,"./src/components/common/toast/toastify.tsx"))},__jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Toast_stories={title:"UI/Toast",component:Button.Z,tags:["autodocs"],decorators:[function(Story){return __jsx("div",{style:{width:"100%",height:"500px",display:"flex",alignItems:"center",justifyContent:"center"}},__jsx(Story,null))}]};var Default={render:function render(args){return __jsx(Button.Z,(0,esm_extends.Z)({},args,{onClick:function onClick(){!function success(content){toastify().then((function(toast){toast.success(content)}))}("Toast is loaded dynamically!")}}))},args:{$type:"primary",children:"Show toast"}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{storySource:_objectSpread({source:'{\n  render: args => <Button {...args} onClick={() => {\n    success("Toast is loaded dynamically!");\n  }} />,\n  args: {\n    $type: "primary",\n    children: "Show toast"\n  }\n}'},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.storySource)})},"./src/components/common/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>button_Button});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),isEqual=__webpack_require__("./node_modules/lodash/isEqual.js"),isEqual_default=__webpack_require__.n(isEqual),Spinner=__webpack_require__("./src/components/common/spinner/Spinner.tsx"),VisuallyHidden=__webpack_require__("./src/components/common/visually-hidden/VisuallyHidden.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Spinner_styles=__webpack_require__("./src/components/common/spinner/Spinner.styles.ts"),StyledButton=styled_components_browser_esm.ZP.button(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  position: relative;\n  font-family: ",";\n  font-weight: 500;\n  appearance: none;\n  cursor: pointer;\n  font-size: 1.125rem;\n  line-height: 1.5rem;\n  border: 1px solid ",";\n  border-radius: 4px;\n  transition: border-color ","ms,\n    background-color ","ms,\n    color ","ms;\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: ",";\n  }\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ",";\n\n  > span {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: opacity ","ms;\n    opacity: ",";\n\n    > svg {\n      flex-shrink: 0;\n\n      ","\n\n      ","\n    }\n\n    > svg + span {\n      margin-left: 0.5rem;\n    }\n\n    > span + svg {\n      margin-left: 0.5rem;\n    }\n  }\n\n  > "," {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    opacity: ",";\n    transition: opacity ","ms;\n    pointer-events: none;\n  }\n"])),(function(_ref){return _ref.theme.fonts.familyRegular}),(function(_ref2){return _ref2.theme.colors.primary}),(function(_ref3){return _ref3.theme.timings.fast}),(function(_ref4){return _ref4.theme.timings.fast}),(function(_ref5){return _ref5.theme.timings.fast}),(function(_ref6){return _ref6.$isLoading?"wait":"not-allowed"}),(function(_ref7){return"primary"===_ref7.$type&&(0,styled_components_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n      color: ",";\n      background-color: ",";\n\n      &:hover,\n      &:focus {\n        background-color: ",";\n        border-color: ",";\n      }\n    "])),(function(_ref8){return _ref8.theme.colors.white}),(function(_ref9){return _ref9.theme.colors.primary}),(function(_ref10){var theme=_ref10.theme;return(0,polished_esm.darken)(.1)(theme.colors.primary)}),(function(_ref11){var theme=_ref11.theme;return(0,polished_esm.darken)(.1)(theme.colors.primary)}))}),(function(_ref12){return"secondary"===_ref12.$type&&(0,styled_components_browser_esm.iv)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n      color: ",";\n      background-color: ",";\n\n      &:hover,\n      &:focus {\n        color: ",";\n        background-color: ",";\n        border-color: ",";\n      }\n    "])),(function(_ref13){return _ref13.theme.colors.primary}),(function(_ref14){return _ref14.theme.colors.white}),(function(_ref15){return _ref15.theme.colors.white}),(function(_ref16){var theme=_ref16.theme;return(0,polished_esm.darken)(.1)(theme.colors.primary)}),(function(_ref17){var theme=_ref17.theme;return(0,polished_esm.darken)(.1)(theme.colors.primary)}))}),(function(_ref18){return"simple"===_ref18.$type&&(0,styled_components_browser_esm.iv)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n      border-color: transparent;\n    "])))}),(function(_ref19){return"small"===_ref19.$size&&(0,styled_components_browser_esm.iv)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n      padding: 0.5rem 0.75rem;\n      font-size: 0.875rem;\n      line-height: 1rem;\n    "])))}),(function(_ref20){return"normal"===_ref20.$size&&(0,styled_components_browser_esm.iv)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n      padding: 0.625rem 1.25rem;\n    "])))}),(function(_ref21){return"large"===_ref21.$size&&(0,styled_components_browser_esm.iv)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n      padding: 1.125rem 2rem;\n    "])))}),(function(_ref22){return"base"===_ref22.$size&&(0,styled_components_browser_esm.iv)(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.Z)(["\n      border: 0;\n    "])))}),(function(_ref23){return _ref23.$fullWidth&&(0,styled_components_browser_esm.iv)(_templateObject9||(_templateObject9=(0,taggedTemplateLiteral.Z)(["\n      width: 100%;\n    "])))}),(function(_ref24){return _ref24.theme.timings.fast}),(function(_ref25){return _ref25.$isLoading?"0":"1"}),(function(_ref26){var $size=_ref26.$size;return("normal"===$size||"large"===$size||"base"===$size)&&(0,styled_components_browser_esm.iv)(_templateObject10||(_templateObject10=(0,taggedTemplateLiteral.Z)(["\n          width: 1.5rem;\n          height: 1.5rem;\n        "])))}),(function(_ref27){return"small"===_ref27.$size&&(0,styled_components_browser_esm.iv)(_templateObject11||(_templateObject11=(0,taggedTemplateLiteral.Z)(["\n          width: 1rem;\n          height: 1rem;\n        "])))}),Spinner_styles.Q,(function(_ref28){return _ref28.$isLoading?"1":"0"}),(function(_ref29){return _ref29.theme.timings.fast}));StyledButton.defaultProps={$type:"primary",$size:"normal",$fullWidth:!1};var _excluded=["iconOnly","iconBefore","iconAfter","isLoading","disabled","onClick","children","$isLoading"],__jsx=react.createElement,Button=(0,react.forwardRef)((function(_ref,ref){var iconOnly=_ref.iconOnly,iconBefore=_ref.iconBefore,iconAfter=_ref.iconAfter,_ref$isLoading=_ref.isLoading,isLoading=void 0!==_ref$isLoading&&_ref$isLoading,disabled=_ref.disabled,onClick=_ref.onClick,children=_ref.children,props=(_ref.$isLoading,(0,objectWithoutProperties.Z)(_ref,_excluded)),newOnClick=(0,react.useCallback)((function(e){isLoading||disabled||null==onClick||onClick(e)}),[onClick,isLoading,disabled]);return __jsx(StyledButton,(0,esm_extends.Z)({ref},props,{$isLoading:isLoading,disabled:disabled||isLoading,onClick:onClick?newOnClick:void 0}),__jsx("span",null,(0,react.isValidElement)(iconBefore)&&(0,react.cloneElement)(iconBefore,{"aria-hidden":"true"}),children&&__jsx(iconOnly?VisuallyHidden.Z:"span",null,children),(0,react.isValidElement)(iconAfter)&&(0,react.cloneElement)(iconAfter,{"aria-hidden":"true"})),__jsx(Spinner.Z,null))}));Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{isLoading:{defaultValue:{value:"false",computed:!1},required:!1}}};const button_Button=(0,react.memo)(Button,isEqual_default());try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},$fullWidth:{defaultValue:null,description:"",name:"$fullWidth",required:!1,type:{name:"boolean"}},$isLoading:{defaultValue:null,description:"",name:"$isLoading",required:!1,type:{name:"boolean"}},$type:{defaultValue:null,description:"",name:"$type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"simple"'}]}},$size:{defaultValue:null,description:"",name:"$size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"small"'},{value:'"normal"'},{value:'"large"'}]}},iconOnly:{defaultValue:null,description:"Will hide children and show icons only",name:"iconOnly",required:!1,type:{name:"boolean"}},iconBefore:{defaultValue:null,description:"Add an icon before",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:null,description:"Add an icon after",name:"iconAfter",required:!1,type:{name:"ReactNode"}},isLoading:{defaultValue:{value:"false"},description:"Show progress bar",name:"isLoading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/common/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/spinner/Spinner.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F$:()=>StyledSpinnerLabel,Q:()=>StyledSpinner,qu:()=>StyledSpinnerIcon});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spinnerAnimation=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.F4)(_templateObject||(_templateObject=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),StyledSpinnerIcon=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div(_templateObject2||(_templateObject2=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  > div {\n    border-width: 2px;\n    border-style: solid;\n    border-top-color: ",";\n    border-right-color: ",";\n    border-bottom-color: ",";\n    border-left-color: ",";\n    border-radius: 50%;\n    animation: "," 1s linear infinite;\n    width: 16px;\n    height: 16px;\n    border-width: 2px;\n  }\n"])),(function(_ref){var $primaryColor=_ref.$primaryColor;return null!=$primaryColor?$primaryColor:"currentColor"}),(function(_ref2){var $secondaryColor=_ref2.$secondaryColor;return null!=$secondaryColor?$secondaryColor:"transparent"}),(function(_ref3){var $secondaryColor=_ref3.$secondaryColor;return null!=$secondaryColor?$secondaryColor:"transparent"}),(function(_ref4){var $secondaryColor=_ref4.$secondaryColor;return null!=$secondaryColor?$secondaryColor:"transparent"}),spinnerAnimation),StyledSpinnerLabel=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div(_templateObject3||(_templateObject3=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  font-size: 0.875rem;\n"]))),StyledSpinner=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div(_templateObject4||(_templateObject4=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n\n  ","\n\n  ","\n"])),(function(_ref5){return _ref5.$fullWidth?(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject5||(_templateObject5=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n          width: 100%;\n        "]))):""}),(function(_ref6){return _ref6.$fullHeight?(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject6||(_templateObject6=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n          height: 100%;\n        "]))):""}))},"./src/components/common/spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/isEqual.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__),_Spinner_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/spinner/Spinner.styles.ts"),_excluded=["label","primaryColor","secondaryColor"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Spinner=function Spinner(_ref){var label=_ref.label,_ref$primaryColor=_ref.primaryColor,primaryColor=void 0===_ref$primaryColor?"currentColor":_ref$primaryColor,_ref$secondaryColor=_ref.secondaryColor,secondaryColor=void 0===_ref$secondaryColor?"transparent":_ref$secondaryColor,props=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);return __jsx(_Spinner_styles__WEBPACK_IMPORTED_MODULE_2__.Q,props,__jsx(_Spinner_styles__WEBPACK_IMPORTED_MODULE_2__.qu,{$primaryColor:primaryColor,$secondaryColor:secondaryColor},__jsx("div",null)),label&&__jsx(_Spinner_styles__WEBPACK_IMPORTED_MODULE_2__.F$,null,label))};Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{primaryColor:{defaultValue:{value:'"currentColor"',computed:!1},required:!1},secondaryColor:{defaultValue:{value:'"transparent"',computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Spinner,lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default());try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},primaryColor:{defaultValue:{value:"currentColor"},description:"",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:{value:"transparent"},description:"",name:"secondaryColor",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},$fullWidth:{defaultValue:null,description:"",name:"$fullWidth",required:!1,type:{name:"boolean"}},$fullHeight:{defaultValue:null,description:"",name:"$fullHeight",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/common/spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/visually-hidden/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>visually_hidden_VisuallyHidden});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),isEqual=__webpack_require__("./node_modules/lodash/isEqual.js"),isEqual_default=__webpack_require__.n(isEqual),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),StyledVisuallyHidden=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.span(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  margin-top: -1px;\n"]))),__jsx=react.createElement,VisuallyHidden=function VisuallyHidden(props){return __jsx(StyledVisuallyHidden,props)};VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"",methods:[],displayName:"VisuallyHidden"};const visually_hidden_VisuallyHidden=(0,react.memo)(VisuallyHidden,isEqual_default());try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"",displayName:"VisuallyHidden",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/visually-hidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/common/visually-hidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}}}]);