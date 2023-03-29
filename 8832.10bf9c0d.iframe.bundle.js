"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[8832],{"./src/components/common/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>button_Button});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,esm_extends=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),isEqual=__webpack_require__("./node_modules/lodash/isEqual.js"),isEqual_default=__webpack_require__.n(isEqual),Spinner=__webpack_require__("./src/components/common/spinner/Spinner.tsx"),VisuallyHidden=__webpack_require__("./src/components/common/visually-hidden/VisuallyHidden.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),darken=__webpack_require__("./node_modules/polished/lib/color/darken.js"),darken_default=__webpack_require__.n(darken),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Spinner_styles=__webpack_require__("./src/components/common/spinner/Spinner.styles.ts"),StyledButton=styled_components_browser_esm.default.button(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  position: relative;\n  font-family: ",";\n  font-weight: 500;\n  appearance: none;\n  cursor: pointer;\n  font-size: 1.125rem;\n  line-height: 1.5rem;\n  border: 1px solid ",";\n  border-radius: 4px;\n  transition: border-color ","ms,\n    background-color ","ms,\n    color ","ms;\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: ",";\n  }\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ",";\n\n  > span {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: opacity ","ms;\n    opacity: ",";\n    gap: 0.5rem;\n\n    > svg {\n      flex-shrink: 0;\n\n      ","\n\n      ","\n    }\n\n    //> svg + span {\n    //  margin-left: 0.5rem;\n    //}\n    //\n    //> span + svg {\n    //  margin-left: 0.5rem;\n    //}\n  }\n\n  > "," {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    opacity: ",";\n    transition: opacity ","ms;\n    pointer-events: none;\n  }\n"])),(function(_ref){return _ref.theme.fonts.familyRegular}),(function(_ref2){return _ref2.theme.colors.primary}),(function(_ref3){return _ref3.theme.timings.fast}),(function(_ref4){return _ref4.theme.timings.fast}),(function(_ref5){return _ref5.theme.timings.fast}),(function(_ref6){return _ref6.$isLoading?"wait":"not-allowed"}),(function(_ref7){return"primary"===_ref7.$type&&(0,styled_components_browser_esm.css)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n      color: ",";\n      background-color: ",";\n\n      &:hover,\n      &:focus {\n        background-color: ",";\n        border-color: ",";\n      }\n    "])),(function(_ref8){return _ref8.theme.colors.white}),(function(_ref9){return _ref9.theme.colors.primary}),(function(_ref10){var theme=_ref10.theme;return darken_default()(.1)(theme.colors.primary)}),(function(_ref11){var theme=_ref11.theme;return darken_default()(.1)(theme.colors.primary)}))}),(function(_ref12){return"secondary"===_ref12.$type&&(0,styled_components_browser_esm.css)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n      color: ",";\n      background-color: ",";\n\n      &:hover,\n      &:focus {\n        color: ",";\n        background-color: ",";\n        border-color: ",";\n      }\n    "])),(function(_ref13){return _ref13.theme.colors.primary}),(function(_ref14){return _ref14.theme.colors.white}),(function(_ref15){return _ref15.theme.colors.white}),(function(_ref16){var theme=_ref16.theme;return darken_default()(.1)(theme.colors.primary)}),(function(_ref17){var theme=_ref17.theme;return darken_default()(.1)(theme.colors.primary)}))}),(function(_ref18){return"simple"===_ref18.$type&&(0,styled_components_browser_esm.css)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n      border-color: transparent;\n    "])))}),(function(_ref19){return"link"===_ref19.$type&&(0,styled_components_browser_esm.css)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n      border-color: transparent;\n      text-decoration: underline;\n\n      &:hover,\n      &:focus {\n        text-decoration: none;\n      }\n    "])))}),(function(_ref20){return"small"===_ref20.$size&&(0,styled_components_browser_esm.css)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n      padding: 0.5rem 0.75rem;\n      font-size: 0.875rem;\n      line-height: 1rem;\n    "])))}),(function(_ref21){return"normal"===_ref21.$size&&(0,styled_components_browser_esm.css)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n      padding: 0.625rem 1.25rem;\n    "])))}),(function(_ref22){return"large"===_ref22.$size&&(0,styled_components_browser_esm.css)(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.Z)(["\n      padding: 1.125rem 2rem;\n    "])))}),(function(_ref23){return"base"===_ref23.$size&&(0,styled_components_browser_esm.css)(_templateObject9||(_templateObject9=(0,taggedTemplateLiteral.Z)(["\n      border: 0;\n    "])))}),(function(_ref24){return _ref24.$fullWidth&&(0,styled_components_browser_esm.css)(_templateObject10||(_templateObject10=(0,taggedTemplateLiteral.Z)(["\n      width: 100%;\n    "])))}),(function(_ref25){return _ref25.theme.timings.fast}),(function(_ref26){return _ref26.$isLoading?"0":"1"}),(function(_ref27){var $size=_ref27.$size;return("normal"===$size||"large"===$size||"base"===$size)&&(0,styled_components_browser_esm.css)(_templateObject11||(_templateObject11=(0,taggedTemplateLiteral.Z)(["\n          width: 1.5rem;\n          height: 1.5rem;\n        "])))}),(function(_ref28){return"small"===_ref28.$size&&(0,styled_components_browser_esm.css)(_templateObject12||(_templateObject12=(0,taggedTemplateLiteral.Z)(["\n          width: 1rem;\n          height: 1rem;\n        "])))}),Spinner_styles.Q,(function(_ref29){return _ref29.$isLoading?"1":"0"}),(function(_ref30){return _ref30.theme.timings.fast}));StyledButton.defaultProps={$type:"primary",$size:"normal",$fullWidth:!1};var _excluded=["iconOnly","iconBefore","iconAfter","isLoading","disabled","onClick","children","$isLoading"],__jsx=react.createElement,Button=(0,react.forwardRef)((function(_ref,ref){var iconOnly=_ref.iconOnly,iconBefore=_ref.iconBefore,iconAfter=_ref.iconAfter,_ref$isLoading=_ref.isLoading,isLoading=void 0!==_ref$isLoading&&_ref$isLoading,disabled=_ref.disabled,onClick=_ref.onClick,children=_ref.children,props=(_ref.$isLoading,(0,objectWithoutProperties.Z)(_ref,_excluded)),newOnClick=(0,react.useCallback)((function(e){isLoading||disabled||null==onClick||onClick(e)}),[onClick,isLoading,disabled]);return __jsx(StyledButton,(0,esm_extends.Z)({ref},props,{$isLoading:isLoading,disabled:disabled||isLoading,onClick:onClick?newOnClick:void 0}),__jsx("span",null,(0,react.isValidElement)(iconBefore)&&(0,react.cloneElement)(iconBefore,{"aria-hidden":"true"}),children&&__jsx(iconOnly?VisuallyHidden.Z:"span",null,children),(0,react.isValidElement)(iconAfter)&&(0,react.cloneElement)(iconAfter,{"aria-hidden":"true"})),__jsx(Spinner.Z,null))}));Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{isLoading:{defaultValue:{value:"false",computed:!1},required:!1}}};const button_Button=(0,react.memo)(Button,isEqual_default());try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},$fullWidth:{defaultValue:null,description:"",name:"$fullWidth",required:!1,type:{name:"boolean"}},$isLoading:{defaultValue:null,description:"",name:"$isLoading",required:!1,type:{name:"boolean"}},$type:{defaultValue:null,description:"",name:"$type",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"primary"'},{value:'"secondary"'},{value:'"simple"'}]}},$size:{defaultValue:null,description:"",name:"$size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"small"'},{value:'"normal"'},{value:'"large"'}]}},iconOnly:{defaultValue:null,description:"Will hide children and show icons only",name:"iconOnly",required:!1,type:{name:"boolean"}},iconBefore:{defaultValue:null,description:"Add an icon before",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:null,description:"Add an icon after",name:"iconAfter",required:!1,type:{name:"ReactNode"}},isLoading:{defaultValue:{value:"false"},description:"Show progress bar",name:"isLoading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/common/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/floating/floater/Floater.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>floater_Floater});var _templateObject,_templateObject2,esm_extends=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),rgba=__webpack_require__("./node_modules/polished/lib/color/rgba.js"),rgba_default=__webpack_require__.n(rgba),StyledFloater=styled_components_browser_esm.default.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  top: 0;\n  left: 0;\n  border: 1px solid ",";\n  background-color: ",";\n  box-shadow: 0px 4px 12px ",";\n  border-radius: ","px;\n  width: max-content;\n  padding: 0.25rem;\n  max-width: calc(100vw - ","px);\n"])),(function(_ref){return _ref.theme.colors.primary}),(function(_ref2){return _ref2.theme.colors.white}),(function(_ref3){var theme=_ref3.theme;return rgba_default()(theme.colors.black,.25)}),(function(_ref4){return _ref4.theme.borderRadius.normal}),(function(_ref5){return 2*_ref5.theme.floating.floater.shift})),StyledFloaterArrow=styled_components_browser_esm.default.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  position: absolute;\n  border-top: 1px solid ",";\n  border-right: 1px solid ",";\n  background-color: ",";\n  width: ","px; // Account for 1px border on each side\n  height: ",'px; // Account for 1px border on each side\n  content: "";\n  display: block;\n'])),(function(_ref6){return _ref6.theme.colors.primary}),(function(_ref7){return _ref7.theme.colors.primary}),(function(_ref8){return _ref8.theme.colors.white}),(function(_ref9){return _ref9.theme.floating.floater.arrow.size-2}),(function(_ref10){return _ref10.theme.floating.floater.arrow.size-2})),_excluded=["children","position","arrowPosition","strategy","placement","arrowCallback","showArrow"],__jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Floater=(0,react.forwardRef)((function(_ref,ref){var _position$x,_position$y,_ref2,children=_ref.children,position=_ref.position,arrowPosition=_ref.arrowPosition,strategy=_ref.strategy,placement=_ref.placement,arrowCallback=_ref.arrowCallback,_ref$showArrow=_ref.showArrow,showArrow=void 0===_ref$showArrow||_ref$showArrow,props=(0,objectWithoutProperties.Z)(_ref,_excluded),placementFirst=placement.split("-")[0],staticSide={top:"bottom",right:"left",bottom:"top",left:"right"}[placementFirst],rotation={top:"rotate(135deg)",right:"rotate(-135deg)",bottom:"rotate(-45deg)",left:"rotate(45deg)"}[placementFirst],theme=(0,styled_components_browser_esm.useTheme)();return __jsx(StyledFloater,(0,esm_extends.Z)({ref},props,{style:_objectSpread({transform:"translate3d(".concat(Math.round(null!==(_position$x=position.x)&&void 0!==_position$x?_position$x:0),"px, ").concat(Math.round(null!==(_position$y=position.y)&&void 0!==_position$y?_position$y:0),"px, 0)"),position:strategy,visibility:null==position.x?"hidden":"visible"},props.style)}),children,showArrow&&arrowCallback&&__jsx(StyledFloaterArrow,{ref:arrowCallback,style:(_ref2={left:null!=arrowPosition&&arrowPosition.x?"".concat(arrowPosition.x,"px"):"",top:null!=arrowPosition&&arrowPosition.y?"".concat(arrowPosition.y,"px"):""},(0,defineProperty.Z)(_ref2,staticSide,"-".concat(theme.floating.floater.arrow.size/2,"px")),(0,defineProperty.Z)(_ref2,"transform",rotation),_ref2)}))}));Floater.__docgenInfo={description:"",methods:[],displayName:"Floater",props:{showArrow:{defaultValue:{value:"true",computed:!1},required:!1}}};const floater_Floater=Floater;try{ForwardRefExoticComponent.displayName="Floater",ForwardRefExoticComponent.__docgenInfo={description:"",displayName:"Floater",props:{placement:{defaultValue:null,description:"",name:"placement",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"left-end"'},{value:'"left-start"'},{value:'"right-end"'},{value:'"right-start"'},{value:'"top-end"'},{value:'"top-start"'},{value:'"bottom-end"'},{value:'"bottom-start"'}]}},strategy:{defaultValue:null,description:"",name:"strategy",required:!0,type:{name:"enum",value:[{value:'"fixed"'},{value:'"absolute"'}]}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"{ x: number | null; y: number | null; }"}},arrowPosition:{defaultValue:null,description:"",name:"arrowPosition",required:!1,type:{name:"Partial<Coords>"}},arrowCallback:{defaultValue:null,description:"",name:"arrowCallback",required:!1,type:{name:"((node: HTMLDivElement | null) => void)"}},showArrow:{defaultValue:{value:"true"},description:"",name:"showArrow",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/floating/floater/Floater.tsx#Floater"]={docgenInfo:Floater.__docgenInfo,name:"Floater",path:"src/components/common/floating/floater/Floater.tsx#Floater"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/spinner/Spinner.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F$:()=>StyledSpinnerLabel,Q:()=>StyledSpinner,qu:()=>StyledSpinnerIcon});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spinnerAnimation=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(_templateObject||(_templateObject=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),StyledSpinnerIcon=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div(_templateObject2||(_templateObject2=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  > div {\n    border-width: 2px;\n    border-style: solid;\n    border-top-color: ",";\n    border-right-color: ",";\n    border-bottom-color: ",";\n    border-left-color: ",";\n    border-radius: 50%;\n    animation: "," 1s linear infinite;\n    width: 16px;\n    height: 16px;\n    border-width: 2px;\n  }\n"])),(function(_ref){var $primaryColor=_ref.$primaryColor;return null!=$primaryColor?$primaryColor:"currentColor"}),(function(_ref2){var $secondaryColor=_ref2.$secondaryColor;return null!=$secondaryColor?$secondaryColor:"transparent"}),(function(_ref3){var $secondaryColor=_ref3.$secondaryColor;return null!=$secondaryColor?$secondaryColor:"transparent"}),(function(_ref4){var $secondaryColor=_ref4.$secondaryColor;return null!=$secondaryColor?$secondaryColor:"transparent"}),spinnerAnimation),StyledSpinnerLabel=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div(_templateObject3||(_templateObject3=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  font-size: 0.875rem;\n  line-height: 1;\n"]))),StyledSpinner=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div(_templateObject4||(_templateObject4=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  line-height: 1;\n\n  ","\n\n  ","\n\n  ","\n"])),(function(_ref5){var $backgroundColor=_ref5.$backgroundColor;return $backgroundColor&&(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject5||(_templateObject5=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n      background-color: ",";\n    "])),$backgroundColor)}),(function(_ref6){return _ref6.$fullWidth?(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject6||(_templateObject6=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n          width: 100%;\n        "]))):""}),(function(_ref7){return _ref7.$fullHeight?(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject7||(_templateObject7=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n          height: 100%;\n        "]))):""}))},"./src/components/common/spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/isEqual.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__),_Spinner_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/spinner/Spinner.styles.ts"),_excluded=["children","primaryColor","secondaryColor","backgroundColor"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Spinner=function Spinner(_ref){var children=_ref.children,_ref$primaryColor=_ref.primaryColor,primaryColor=void 0===_ref$primaryColor?"currentColor":_ref$primaryColor,_ref$secondaryColor=_ref.secondaryColor,secondaryColor=void 0===_ref$secondaryColor?"transparent":_ref$secondaryColor,_ref$backgroundColor=_ref.backgroundColor,backgroundColor=void 0===_ref$backgroundColor?"transparent":_ref$backgroundColor,props=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);return __jsx(_Spinner_styles__WEBPACK_IMPORTED_MODULE_2__.Q,(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},props,{$backgroundColor:backgroundColor}),__jsx(_Spinner_styles__WEBPACK_IMPORTED_MODULE_2__.qu,{$primaryColor:primaryColor,$secondaryColor:secondaryColor},__jsx("div",null)),children&&__jsx(_Spinner_styles__WEBPACK_IMPORTED_MODULE_2__.F$,null,children))};Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{primaryColor:{defaultValue:{value:'"currentColor"',computed:!1},required:!1},secondaryColor:{defaultValue:{value:'"transparent"',computed:!1},required:!1},backgroundColor:{defaultValue:{value:'"transparent"',computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Spinner,lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default());try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{primaryColor:{defaultValue:{value:"currentColor"},description:"",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:{value:"transparent"},description:"",name:"secondaryColor",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:{value:"transparent"},description:"",name:"backgroundColor",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},$fullWidth:{defaultValue:null,description:"",name:"$fullWidth",required:!1,type:{name:"boolean"}},$fullHeight:{defaultValue:null,description:"",name:"$fullHeight",required:!1,type:{name:"boolean"}},$backgroundColor:{defaultValue:null,description:"",name:"$backgroundColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/common/spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/visually-hidden/VisuallyHidden.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>StyledVisuallyHidden,j:()=>visuallyHidden});var _templateObject,_templateObject2,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),visuallyHidden=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject||(_templateObject=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  margin-top: -1px;\n"]))),StyledVisuallyHidden=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.span(_templateObject2||(_templateObject2=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  ","\n"])),(function(){return visuallyHidden}))},"./src/components/common/visually-hidden/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/isEqual.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__),_VisuallyHidden_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/visually-hidden/VisuallyHidden.styles.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,VisuallyHidden=function VisuallyHidden(props){return __jsx(_VisuallyHidden_styles__WEBPACK_IMPORTED_MODULE_2__.Q,props)};VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"",methods:[],displayName:"VisuallyHidden"};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(VisuallyHidden,lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default());try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"",displayName:"VisuallyHidden",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/visually-hidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/common/visually-hidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}}}]);