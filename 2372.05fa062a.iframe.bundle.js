"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[2372],{"./src/components/common/button-group/ButtonGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>button_group_ButtonGroup});var _templateObject,objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),StyledButtonGroup=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").default.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  justify-content: ",";\n\n  > hr {\n    width: 1px;\n    border: 0;\n    background-color: currentColor;\n    height: 1.25rem;\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n  }\n"])),(function(_ref){return _ref.$alignRight?"flex-end":"flex-start"})),_excluded=["children"],__jsx=react.createElement,ButtonGroup=function ButtonGroup(_ref){var children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(StyledButtonGroup,props,children)};ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup"};const button_group_ButtonGroup=ButtonGroup;try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:"",displayName:"ButtonGroup",props:{$alignRight:{defaultValue:null,description:"",name:"$alignRight",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/button-group/ButtonGroup.tsx#ButtonGroup"]={docgenInfo:ButtonGroup.__docgenInfo,name:"ButtonGroup",path:"src/components/common/button-group/ButtonGroup.tsx#ButtonGroup"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>button_Button});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),isEqual=__webpack_require__("./node_modules/lodash/isEqual.js"),isEqual_default=__webpack_require__.n(isEqual),Spinner=__webpack_require__("./src/components/common/spinner/Spinner.tsx"),VisuallyHidden=__webpack_require__("./src/components/common/visually-hidden/VisuallyHidden.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),darken=__webpack_require__("./node_modules/polished/lib/color/darken.js"),darken_default=__webpack_require__.n(darken),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Spinner_styles=__webpack_require__("./src/components/common/spinner/Spinner.styles.ts"),StyledButton=styled_components_browser_esm.default.button(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  position: relative;\n  font-family: ",";\n  font-weight: 500;\n  appearance: none;\n  cursor: pointer;\n  font-size: 1.125rem;\n  line-height: 1.5rem;\n  border: 1px solid ",";\n  border-radius: 4px;\n  transition: border-color ","ms,\n    background-color ","ms,\n    color ","ms;\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: ",";\n  }\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ",";\n\n  > span {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: opacity ","ms;\n    opacity: ",";\n    gap: 0.5rem;\n\n    > svg {\n      flex-shrink: 0;\n\n      ","\n\n      ","\n    }\n\n    //> svg + span {\n    //  margin-left: 0.5rem;\n    //}\n    //\n    //> span + svg {\n    //  margin-left: 0.5rem;\n    //}\n  }\n\n  > "," {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    opacity: ",";\n    transition: opacity ","ms;\n    pointer-events: none;\n  }\n"])),(function(_ref){return _ref.theme.fonts.familyRegular}),(function(_ref2){return _ref2.theme.colors.primary}),(function(_ref3){return _ref3.theme.timings.fast}),(function(_ref4){return _ref4.theme.timings.fast}),(function(_ref5){return _ref5.theme.timings.fast}),(function(_ref6){return _ref6.$isLoading?"wait":"not-allowed"}),(function(_ref7){return"primary"===_ref7.$type&&(0,styled_components_browser_esm.css)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n      color: ",";\n      background-color: ",";\n\n      &:hover,\n      &:focus {\n        background-color: ",";\n        border-color: ",";\n      }\n    "])),(function(_ref8){return _ref8.theme.colors.white}),(function(_ref9){return _ref9.theme.colors.primary}),(function(_ref10){var theme=_ref10.theme;return darken_default()(.1)(theme.colors.primary)}),(function(_ref11){var theme=_ref11.theme;return darken_default()(.1)(theme.colors.primary)}))}),(function(_ref12){return"secondary"===_ref12.$type&&(0,styled_components_browser_esm.css)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n      color: ",";\n      background-color: ",";\n\n      &:hover,\n      &:focus {\n        color: ",";\n        background-color: ",";\n        border-color: ",";\n      }\n    "])),(function(_ref13){return _ref13.theme.colors.primary}),(function(_ref14){return _ref14.theme.colors.white}),(function(_ref15){return _ref15.theme.colors.white}),(function(_ref16){var theme=_ref16.theme;return darken_default()(.1)(theme.colors.primary)}),(function(_ref17){var theme=_ref17.theme;return darken_default()(.1)(theme.colors.primary)}))}),(function(_ref18){return"simple"===_ref18.$type&&(0,styled_components_browser_esm.css)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n      border-color: transparent;\n    "])))}),(function(_ref19){return"link"===_ref19.$type&&(0,styled_components_browser_esm.css)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n      border-color: transparent;\n      text-decoration: underline;\n\n      &:hover,\n      &:focus {\n        text-decoration: none;\n      }\n    "])))}),(function(_ref20){return"small"===_ref20.$size&&(0,styled_components_browser_esm.css)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n      padding: 0.5rem 0.75rem;\n      font-size: 0.875rem;\n      line-height: 1rem;\n    "])))}),(function(_ref21){return"normal"===_ref21.$size&&(0,styled_components_browser_esm.css)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n      padding: 0.625rem 1.25rem;\n    "])))}),(function(_ref22){return"large"===_ref22.$size&&(0,styled_components_browser_esm.css)(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.Z)(["\n      padding: 1.125rem 2rem;\n    "])))}),(function(_ref23){return"base"===_ref23.$size&&(0,styled_components_browser_esm.css)(_templateObject9||(_templateObject9=(0,taggedTemplateLiteral.Z)(["\n      border: 0;\n    "])))}),(function(_ref24){return _ref24.$fullWidth&&(0,styled_components_browser_esm.css)(_templateObject10||(_templateObject10=(0,taggedTemplateLiteral.Z)(["\n      width: 100%;\n    "])))}),(function(_ref25){return _ref25.theme.timings.fast}),(function(_ref26){return _ref26.$isLoading?"0":"1"}),(function(_ref27){var $size=_ref27.$size;return("normal"===$size||"large"===$size||"base"===$size)&&(0,styled_components_browser_esm.css)(_templateObject11||(_templateObject11=(0,taggedTemplateLiteral.Z)(["\n          width: 1.5rem;\n          height: 1.5rem;\n        "])))}),(function(_ref28){return"small"===_ref28.$size&&(0,styled_components_browser_esm.css)(_templateObject12||(_templateObject12=(0,taggedTemplateLiteral.Z)(["\n          width: 1rem;\n          height: 1rem;\n        "])))}),Spinner_styles.Q,(function(_ref29){return _ref29.$isLoading?"1":"0"}),(function(_ref30){return _ref30.theme.timings.fast}));StyledButton.defaultProps={$type:"primary",$size:"normal",$fullWidth:!1};var _excluded=["iconOnly","iconBefore","iconAfter","isLoading","disabled","onClick","as","children","$isLoading"],__jsx=react.createElement,Button=(0,react.forwardRef)((function(_ref,ref){var iconOnly=_ref.iconOnly,iconBefore=_ref.iconBefore,iconAfter=_ref.iconAfter,_ref$isLoading=_ref.isLoading,isLoading=void 0!==_ref$isLoading&&_ref$isLoading,disabled=_ref.disabled,onClick=_ref.onClick,as=_ref.as,children=_ref.children,props=(_ref.$isLoading,(0,objectWithoutProperties.Z)(_ref,_excluded)),newOnClick=(0,react.useCallback)((function(e){isLoading||disabled||null==onClick||onClick(e)}),[onClick,isLoading,disabled]);return __jsx(StyledButton,(0,esm_extends.Z)({ref,type:as&&"button"!==as?void 0:"button",as},props,{$isLoading:isLoading,disabled:disabled||isLoading,onClick:onClick?newOnClick:void 0}),__jsx("span",null,(0,react.isValidElement)(iconBefore)&&(0,react.cloneElement)(iconBefore,{"aria-hidden":"true"}),children&&__jsx(iconOnly?VisuallyHidden.Z:"span",null,children),(0,react.isValidElement)(iconAfter)&&(0,react.cloneElement)(iconAfter,{"aria-hidden":"true"})),__jsx(Spinner.Z,null))}));Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{isLoading:{defaultValue:{value:"false",computed:!1},required:!1}}};const button_Button=(0,react.memo)(Button,isEqual_default());try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},$fullWidth:{defaultValue:null,description:"",name:"$fullWidth",required:!1,type:{name:"boolean"}},$isLoading:{defaultValue:null,description:"",name:"$isLoading",required:!1,type:{name:"boolean"}},$type:{defaultValue:null,description:"",name:"$type",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"primary"'},{value:'"secondary"'},{value:'"simple"'}]}},$size:{defaultValue:null,description:"",name:"$size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"small"'},{value:'"normal"'},{value:'"large"'}]}},iconOnly:{defaultValue:null,description:"Will hide children and show icons only",name:"iconOnly",required:!1,type:{name:"boolean"}},iconBefore:{defaultValue:null,description:"Add an icon before",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:null,description:"Add an icon after",name:"iconAfter",required:!1,type:{name:"ReactNode"}},isLoading:{defaultValue:{value:"false"},description:"Show progress bar",name:"isLoading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/common/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/spinner/Spinner.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F$:()=>StyledSpinnerLabel,Q:()=>StyledSpinner,qu:()=>StyledSpinnerIcon});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spinnerAnimation=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(_templateObject||(_templateObject=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),StyledSpinnerIcon=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div(_templateObject2||(_templateObject2=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  > div {\n    border-width: 2px;\n    border-style: solid;\n    border-top-color: ",";\n    border-right-color: ",";\n    border-bottom-color: ",";\n    border-left-color: ",";\n    border-radius: 50%;\n    animation: "," 1s linear infinite;\n    width: 16px;\n    height: 16px;\n    border-width: 2px;\n  }\n"])),(function(_ref){var $primaryColor=_ref.$primaryColor;return null!=$primaryColor?$primaryColor:"currentColor"}),(function(_ref2){var $secondaryColor=_ref2.$secondaryColor;return null!=$secondaryColor?$secondaryColor:"transparent"}),(function(_ref3){var $secondaryColor=_ref3.$secondaryColor;return null!=$secondaryColor?$secondaryColor:"transparent"}),(function(_ref4){var $secondaryColor=_ref4.$secondaryColor;return null!=$secondaryColor?$secondaryColor:"transparent"}),spinnerAnimation),StyledSpinnerLabel=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div(_templateObject3||(_templateObject3=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  font-size: 0.875rem;\n  line-height: 1;\n"]))),StyledSpinner=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div(_templateObject4||(_templateObject4=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  line-height: 1;\n\n  ","\n\n  ","\n\n  ","\n"])),(function(_ref5){var $backgroundColor=_ref5.$backgroundColor;return $backgroundColor&&(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject5||(_templateObject5=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n      background-color: ",";\n    "])),$backgroundColor)}),(function(_ref6){return _ref6.$fullWidth?(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject6||(_templateObject6=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n          width: 100%;\n        "]))):""}),(function(_ref7){return _ref7.$fullHeight?(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject7||(_templateObject7=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n          height: 100%;\n        "]))):""}))},"./src/components/common/spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/isEqual.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__),_Spinner_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/spinner/Spinner.styles.ts"),_excluded=["children","primaryColor","secondaryColor","backgroundColor"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Spinner=function Spinner(_ref){var children=_ref.children,_ref$primaryColor=_ref.primaryColor,primaryColor=void 0===_ref$primaryColor?"currentColor":_ref$primaryColor,_ref$secondaryColor=_ref.secondaryColor,secondaryColor=void 0===_ref$secondaryColor?"transparent":_ref$secondaryColor,_ref$backgroundColor=_ref.backgroundColor,backgroundColor=void 0===_ref$backgroundColor?"transparent":_ref$backgroundColor,props=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);return __jsx(_Spinner_styles__WEBPACK_IMPORTED_MODULE_2__.Q,(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},props,{$backgroundColor:backgroundColor}),__jsx(_Spinner_styles__WEBPACK_IMPORTED_MODULE_2__.qu,{$primaryColor:primaryColor,$secondaryColor:secondaryColor},__jsx("div",null)),children&&__jsx(_Spinner_styles__WEBPACK_IMPORTED_MODULE_2__.F$,null,children))};Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{primaryColor:{defaultValue:{value:'"currentColor"',computed:!1},required:!1},secondaryColor:{defaultValue:{value:'"transparent"',computed:!1},required:!1},backgroundColor:{defaultValue:{value:'"transparent"',computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Spinner,lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default());try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{primaryColor:{defaultValue:{value:"currentColor"},description:"",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:{value:"transparent"},description:"",name:"secondaryColor",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:{value:"transparent"},description:"",name:"backgroundColor",required:!1,type:{name:"string"}},$backgroundColor:{defaultValue:null,description:"",name:"$backgroundColor",required:!1,type:{name:"string"}},$fullWidth:{defaultValue:null,description:"",name:"$fullWidth",required:!1,type:{name:"boolean"}},$fullHeight:{defaultValue:null,description:"",name:"$fullHeight",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/common/spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/visually-hidden/VisuallyHidden.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>StyledVisuallyHidden,j:()=>visuallyHidden});var _templateObject,_templateObject2,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),visuallyHidden=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject||(_templateObject=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  margin-top: -1px;\n"]))),StyledVisuallyHidden=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.span(_templateObject2||(_templateObject2=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  ","\n"])),(function(){return visuallyHidden}))},"./src/components/common/visually-hidden/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/isEqual.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__),_VisuallyHidden_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/visually-hidden/VisuallyHidden.styles.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,VisuallyHidden=function VisuallyHidden(props){return __jsx(_VisuallyHidden_styles__WEBPACK_IMPORTED_MODULE_2__.Q,props)};VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"",methods:[],displayName:"VisuallyHidden"};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(VisuallyHidden,lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default());try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"",displayName:"VisuallyHidden",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/visually-hidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/common/visually-hidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/polished/lib/color/darken.js":(module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=void 0;var _curry=_interopRequireDefault(__webpack_require__("./node_modules/polished/lib/internalHelpers/_curry.js")),_guard=_interopRequireDefault(__webpack_require__("./node_modules/polished/lib/internalHelpers/_guard.js")),_parseToHsl=_interopRequireDefault(__webpack_require__("./node_modules/polished/lib/color/parseToHsl.js")),_toColorString=_interopRequireDefault(__webpack_require__("./node_modules/polished/lib/color/toColorString.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function darken(amount,color){if("transparent"===color)return color;var hslColor=(0,_parseToHsl.default)(color);return(0,_toColorString.default)(_extends({},hslColor,{lightness:(0,_guard.default)(0,1,hslColor.lightness-parseFloat(amount))}))}var _default=(0,_curry.default)(darken);exports.default=_default,module.exports=exports.default},"./node_modules/polished/lib/color/hsl.js":(module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=function hsl(value,saturation,lightness){if("number"==typeof value&&"number"==typeof saturation&&"number"==typeof lightness)return(0,_hslToHex.default)(value,saturation,lightness);if("object"==typeof value&&void 0===saturation&&void 0===lightness)return(0,_hslToHex.default)(value.hue,value.saturation,value.lightness);throw new _errors.default(1)};var _hslToHex=_interopRequireDefault(__webpack_require__("./node_modules/polished/lib/internalHelpers/_hslToHex.js")),_errors=_interopRequireDefault(__webpack_require__("./node_modules/polished/lib/internalHelpers/_errors.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}module.exports=exports.default},"./node_modules/polished/lib/color/hsla.js":(module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=function hsla(value,saturation,lightness,alpha){if("number"==typeof value&&"number"==typeof saturation&&"number"==typeof lightness&&"number"==typeof alpha)return alpha>=1?(0,_hslToHex.default)(value,saturation,lightness):"rgba("+(0,_hslToRgb.default)(value,saturation,lightness)+","+alpha+")";if("object"==typeof value&&void 0===saturation&&void 0===lightness&&void 0===alpha)return value.alpha>=1?(0,_hslToHex.default)(value.hue,value.saturation,value.lightness):"rgba("+(0,_hslToRgb.default)(value.hue,value.saturation,value.lightness)+","+value.alpha+")";throw new _errors.default(2)};var _hslToHex=_interopRequireDefault(__webpack_require__("./node_modules/polished/lib/internalHelpers/_hslToHex.js")),_hslToRgb=_interopRequireDefault(__webpack_require__("./node_modules/polished/lib/internalHelpers/_hslToRgb.js")),_errors=_interopRequireDefault(__webpack_require__("./node_modules/polished/lib/internalHelpers/_errors.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}module.exports=exports.default},"./node_modules/polished/lib/color/parseToHsl.js":(module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=function parseToHsl(color){return(0,_rgbToHsl.default)((0,_parseToRgb.default)(color))};var _parseToRgb=_interopRequireDefault(__webpack_require__("./node_modules/polished/lib/color/parseToRgb.js")),_rgbToHsl=_interopRequireDefault(__webpack_require__("./node_modules/polished/lib/internalHelpers/_rgbToHsl.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}module.exports=exports.default},"./node_modules/polished/lib/color/toColorString.js":(module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=function toColorString(color){if("object"!=typeof color)throw new _errors.default(8);if(isRgba(color))return(0,_rgba.default)(color);if(isRgb(color))return(0,_rgb.default)(color);if(isHsla(color))return(0,_hsla.default)(color);if(isHsl(color))return(0,_hsl.default)(color);throw new _errors.default(8)};var _hsl=_interopRequireDefault(__webpack_require__("./node_modules/polished/lib/color/hsl.js")),_hsla=_interopRequireDefault(__webpack_require__("./node_modules/polished/lib/color/hsla.js")),_rgb=_interopRequireDefault(__webpack_require__("./node_modules/polished/lib/color/rgb.js")),_rgba=_interopRequireDefault(__webpack_require__("./node_modules/polished/lib/color/rgba.js")),_errors=_interopRequireDefault(__webpack_require__("./node_modules/polished/lib/internalHelpers/_errors.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var isRgb=function isRgb(color){return"number"==typeof color.red&&"number"==typeof color.green&&"number"==typeof color.blue&&("number"!=typeof color.alpha||void 0===color.alpha)},isRgba=function isRgba(color){return"number"==typeof color.red&&"number"==typeof color.green&&"number"==typeof color.blue&&"number"==typeof color.alpha},isHsl=function isHsl(color){return"number"==typeof color.hue&&"number"==typeof color.saturation&&"number"==typeof color.lightness&&("number"!=typeof color.alpha||void 0===color.alpha)},isHsla=function isHsla(color){return"number"==typeof color.hue&&"number"==typeof color.saturation&&"number"==typeof color.lightness&&"number"==typeof color.alpha};module.exports=exports.default},"./node_modules/polished/lib/internalHelpers/_curry.js":(module,exports)=>{function curried(f,length,acc){return function fn(){var combined=acc.concat(Array.prototype.slice.call(arguments));return combined.length>=length?f.apply(this,combined):curried(f,length,combined)}}exports.__esModule=!0,exports.default=function curry(f){return curried(f,f.length,[])},module.exports=exports.default},"./node_modules/polished/lib/internalHelpers/_guard.js":(module,exports)=>{exports.__esModule=!0,exports.default=void 0;var _default=function guard(lowerBoundary,upperBoundary,value){return Math.max(lowerBoundary,Math.min(upperBoundary,value))};exports.default=_default,module.exports=exports.default},"./node_modules/polished/lib/internalHelpers/_hslToHex.js":(module,exports,__webpack_require__)=>{exports.__esModule=!0,exports.default=void 0;var _hslToRgb=_interopRequireDefault(__webpack_require__("./node_modules/polished/lib/internalHelpers/_hslToRgb.js")),_reduceHexValue=_interopRequireDefault(__webpack_require__("./node_modules/polished/lib/internalHelpers/_reduceHexValue.js")),_numberToHex=_interopRequireDefault(__webpack_require__("./node_modules/polished/lib/internalHelpers/_numberToHex.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function colorToHex(color){return(0,_numberToHex.default)(Math.round(255*color))}function convertToHex(red,green,blue){return(0,_reduceHexValue.default)("#"+colorToHex(red)+colorToHex(green)+colorToHex(blue))}var _default=function hslToHex(hue,saturation,lightness){return(0,_hslToRgb.default)(hue,saturation,lightness,convertToHex)};exports.default=_default,module.exports=exports.default},"./node_modules/polished/lib/internalHelpers/_rgbToHsl.js":(module,exports)=>{exports.__esModule=!0,exports.default=void 0;var _default=function rgbToHsl(color){var hue,red=color.red/255,green=color.green/255,blue=color.blue/255,max=Math.max(red,green,blue),min=Math.min(red,green,blue),lightness=(max+min)/2;if(max===min)return void 0!==color.alpha?{hue:0,saturation:0,lightness,alpha:color.alpha}:{hue:0,saturation:0,lightness};var delta=max-min,saturation=lightness>.5?delta/(2-max-min):delta/(max+min);switch(max){case red:hue=(green-blue)/delta+(green<blue?6:0);break;case green:hue=(blue-red)/delta+2;break;default:hue=(red-green)/delta+4}return hue*=60,void 0!==color.alpha?{hue,saturation,lightness,alpha:color.alpha}:{hue,saturation,lightness}};exports.default=_default,module.exports=exports.default}}]);