"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[288],{"./src/components/common/overlay/Overlay.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>Overlay_stories});var _templateObject,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/common/button/Button.tsx"),lib=__webpack_require__("./node_modules/react-modal/lib/index.js"),lib_default=__webpack_require__.n(lib),bodyScrollLock_esm=__webpack_require__("./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),x=__webpack_require__("./node_modules/@tabler/icons/icons/x.svg"),isEqual=__webpack_require__("./node_modules/lodash/isEqual.js"),isEqual_default=__webpack_require__.n(isEqual),SvgSprite=__webpack_require__("./src/components/common/svg/SvgSprite.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),StyledOverlayCloseButton=styled_components_browser_esm.ZP.button(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  appearance: none;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  color: ",";\n  border-radius: 50%;\n  position: fixed;\n  top: 1rem;\n  right: 2rem;\n  z-index: 2;\n"])),(function(_ref){return _ref.theme.colors.white})),__jsx=react.createElement,OverlayCloseButton=function OverlayCloseButton(_ref){var props=(0,esm_extends.Z)({},_ref),t=(0,es.$G)("common").t;return __jsx(StyledOverlayCloseButton,(0,esm_extends.Z)({},props,{"aria-label":t("overlay.close-button.label")}),__jsx(SvgSprite.Z,{src:x.Z}))};OverlayCloseButton.displayName="OverlayCloseButton",OverlayCloseButton.__docgenInfo={description:"",methods:[],displayName:"OverlayCloseButton"};const close_button_OverlayCloseButton=(0,react.memo)(OverlayCloseButton,isEqual_default());try{OverlayCloseButton.displayName="OverlayCloseButton",OverlayCloseButton.__docgenInfo={description:"",displayName:"OverlayCloseButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/overlay/close-button/OverlayCloseButton.tsx#OverlayCloseButton"]={docgenInfo:OverlayCloseButton.__docgenInfo,name:"OverlayCloseButton",path:"src/components/common/overlay/close-button/OverlayCloseButton.tsx#OverlayCloseButton"})}catch(__react_docgen_typescript_loader_error){}var Overlay_styles_templateObject,StyledOverlayContainer=styled_components_browser_esm.ZP.div(Overlay_styles_templateObject||(Overlay_styles_templateObject=(0,taggedTemplateLiteral.Z)(["\n  padding-top: 3.5rem;\n  padding-bottom: 3.5rem;\n  margin: 0 3.5rem;\n"]))),Overlay_jsx=react.createElement;lib_default().setAppElement("#__next");var Overlay=function Overlay(_ref){var title=_ref.title,_ref$isOpen=_ref.isOpen,isOpen=void 0!==_ref$isOpen&&_ref$isOpen,children=_ref.children,onClose=_ref.onClose,_useState=(0,react.useState)(null),ref=_useState[0],setRef=_useState[1],theme=(0,styled_components_browser_esm.Fg)(),onRequestClose=(0,react.useCallback)((function(){null==onClose||onClose()}),[onClose]),onAfterOpen=(0,react.useCallback)((function(){null!=ref&&ref.node&&(0,bodyScrollLock_esm.Qp)(ref.node)}),[ref]),onAfterClose=(0,react.useCallback)((function(){null!=ref&&ref.node&&(0,bodyScrollLock_esm.tG)(ref.node)}),[ref]);return Overlay_jsx(react.Fragment,null,Overlay_jsx(lib_default(),{closeTimeoutMS:250,shouldCloseOnEsc:!0,shouldFocusAfterRender:!0,shouldReturnFocusAfterClose:!0,isOpen,shouldCloseOnOverlayClick:!0,contentLabel:title,style:{overlay:{zIndex:theme.zIndex.overlay}},onAfterOpen,onAfterClose,onRequestClose,ref:setRef},Overlay_jsx(close_button_OverlayCloseButton,{onClick:onClose}),Overlay_jsx(StyledOverlayContainer,null,children)))};Overlay.__docgenInfo={description:"",methods:[],displayName:"Overlay",props:{isOpen:{defaultValue:{value:"false",computed:!1},required:!1}}};const overlay_Overlay=Overlay;try{Overlay.displayName="Overlay",Overlay.__docgenInfo={description:"",displayName:"Overlay",props:{isOpen:{defaultValue:{value:"false"},description:"Control overlay visibility",name:"isOpen",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"Title of the overlay for accessibility reasons",name:"title",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"Callback when user wants to close the overlay (escape button, outside\nclick, close button click)",name:"onClose",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/overlay/Overlay.tsx#Overlay"]={docgenInfo:Overlay.__docgenInfo,name:"Overlay",path:"src/components/common/overlay/Overlay.tsx#Overlay"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,Overlay_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Overlay_stories={title:"UI/Overlay",component:overlay_Overlay,tags:["autodocs"]};var ControlledOverlay=function ControlledOverlay(){var _useState=(0,react.useState)(!1),isOpen=_useState[0],setIsOpen=_useState[1];return Overlay_stories_jsx("div",{style:{width:"100%",height:"500px",display:"flex",alignItems:"center",justifyContent:"center"}},Overlay_stories_jsx(Button.Z,{onClick:function onClick(){setIsOpen(!isOpen)}},"Open dialog"),Overlay_stories_jsx(overlay_Overlay,{isOpen,title:"Example",onClose:function onClose(){setIsOpen(!1)}},Overlay_stories_jsx("div",{style:{backgroundColor:"white",padding:"1rem"}},Overlay_stories_jsx("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta dolor mi, at venenatis urna elementum a. Etiam quis diam non massa tempor blandit at nec nibh. Pellentesque non magna ac quam cursus mollis. Nunc urna dui, lobortis non nulla tempus, varius sollicitudin nulla. Aliquam erat volutpat. In elementum arcu diam, nec laoreet ex dignissim blandit. Curabitur ornare rhoncus quam, a semper erat congue quis. Proin facilisis velit sed ante gravida, et condimentum nisl faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse eu lobortis dolor. Aliquam sapien massa, condimentum sed ornare sed, pellentesque sed massa. Fusce quis ipsum scelerisque, condimentum lacus ac, eleifend orci. Pellentesque vehicula diam in malesuada placerat. Fusce congue euismod arcu. Suspendisse molestie id erat vitae pretium."),Overlay_stories_jsx("p",null,"Sed et dui finibus, sodales augue nec, imperdiet augue. Aenean congue sagittis dolor nec semper. Phasellus in interdum nisi. Aliquam sit amet justo nec turpis ultricies ullamcorper ac ut libero. Nulla a neque et erat semper viverra bibendum eu arcu. Integer metus justo, bibendum quis tincidunt semper, faucibus id dolor. Donec pulvinar nec enim ut luctus. Ut cursus tincidunt eleifend. Nulla ante nulla, viverra eget lorem auctor, varius imperdiet lectus. Nulla faucibus arcu pulvinar ipsum tincidunt, quis bibendum massa egestas. Aliquam in mattis diam. Proin ornare ipsum nec diam vehicula dapibus. Maecenas imperdiet velit mauris, quis venenatis eros dignissim in. Duis blandit purus a velit auctor ornare. Nullam dapibus metus id efficitur consequat. Nam eros mi, egestas a urna nec, dictum sodales sem."),Overlay_stories_jsx("p",null,"Sed hendrerit odio eget sem molestie rhoncus. Donec at arcu orci. Fusce sagittis vel tellus vitae viverra. Duis vel faucibus eros. Sed ante erat, vestibulum sed justo sit amet, feugiat dictum dui. Sed at tortor at mauris porttitor maximus. Phasellus posuere scelerisque lorem nec placerat. Donec condimentum turpis eu dolor mollis tempus. Phasellus non neque suscipit, iaculis diam id, maximus arcu. Fusce sed fringilla justo. Phasellus vitae blandit nisl, a pulvinar dui. Etiam facilisis id elit at dignissim. Suspendisse feugiat, ipsum eget volutpat congue, nibh est convallis felis, in egestas risus ex quis turpis. Mauris rhoncus tempor convallis. Vestibulum luctus orci ex, fringilla elementum lacus eleifend sit amet. In hac habitasse platea dictumst."),Overlay_stories_jsx("p",null,"Fusce sit amet nisi lacinia nisi bibendum ullamcorper sed et urna. Donec eu euismod leo, at suscipit arcu. Suspendisse non lacus purus. Donec eu ante volutpat, condimentum tortor eu, laoreet lorem. Praesent tempor, arcu ut facilisis dapibus, nisi magna ullamcorper felis, eu ornare nisl arcu et quam. Nunc dictum luctus ante a viverra. Donec a enim massa. Phasellus tempus quam commodo mollis dapibus. Curabitur eros libero, dapibus a tellus vel, interdum congue diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam vel venenatis massa, eu tristique sapien. Pellentesque volutpat, nunc a interdum faucibus, lorem nibh tristique dolor, tincidunt cursus velit arcu vel lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent vitae dui nec leo elementum tristique. Donec auctor sed dui ut semper."),Overlay_stories_jsx("p",null,"Proin non elit vulputate, malesuada ipsum et, vestibulum lectus. Donec nec est vel nisl ultricies dictum et ac augue. Aliquam nibh mauris, condimentum at felis a, aliquam viverra tellus. Aenean commodo, orci id tristique tempus, magna justo malesuada magna, sit amet hendrerit erat urna dictum justo. Aliquam eu ultricies nibh. Aliquam interdum, arcu id dignissim lobortis, dolor eros efficitur lacus, sed mollis mauris metus eu lectus. Sed sagittis leo non rhoncus pretium. Cras facilisis magna vitae placerat imperdiet. Nunc scelerisque ut turpis vel pharetra. Nunc congue ipsum sem, suscipit condimentum neque dictum faucibus. Duis viverra quam id nibh maximus placerat."),Overlay_stories_jsx("p",null,"Etiam lobortis fringilla elit, a venenatis ex posuere ut. In sed blandit arcu. Sed feugiat iaculis neque, ultrices dictum arcu porttitor et. Phasellus tristique iaculis consectetur. Integer bibendum vulputate enim non eleifend. Proin accumsan aliquam risus non aliquet. In id scelerisque sapien. Nunc tempor, leo ut dapibus venenatis, justo odio blandit tellus, ut imperdiet sapien nisi nec sem. Phasellus finibus arcu at sapien malesuada lobortis. Phasellus pellentesque nulla quam. Fusce feugiat mauris lorem, et rhoncus ante scelerisque nec."),Overlay_stories_jsx("p",null,"Morbi pharetra felis in dui dignissim commodo sed a mi. Etiam odio odio, sollicitudin nec lacus non, rutrum vulputate dui. Nam cursus hendrerit molestie. Aenean eleifend quis tortor ut laoreet. Nunc pellentesque, quam et semper gravida, mauris felis consectetur nisi, et efficitur neque libero quis est. Mauris porttitor tempor urna, et vestibulum tortor mattis a. Nunc mauris mauris, aliquam quis ornare nec, lacinia suscipit orci. Etiam sit amet feugiat mauris, vel mattis metus. Sed vehicula ante id tristique viverra."),Overlay_stories_jsx("p",null,"Nunc sed arcu in nulla rhoncus mollis in ac nisl. Donec varius facilisis metus quis ultrices. Fusce quis tincidunt nisi, nec varius erat. Nunc condimentum odio vitae erat consectetur, eget ornare orci malesuada. Duis pretium felis gravida, efficitur lectus sit amet, congue metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin consequat accumsan nisi, non ornare nisi sollicitudin vitae. Suspendisse lobortis non lacus quis dictum. Vivamus ornare convallis lorem ac consequat. Morbi tristique sapien orci, quis tincidunt risus sagittis semper. Sed tristique venenatis vulputate. Nullam viverra, lacus quis ullamcorper laoreet, eros ante tempor ante, et commodo leo augue at metus. Donec viverra in lorem bibendum laoreet."),Overlay_stories_jsx("p",null,"Fusce pulvinar dignissim odio, vitae egestas ex sodales in. Suspendisse vel maximus neque. Praesent purus risus, fermentum ut felis ut, sollicitudin vehicula odio. Sed sed nulla dictum, porttitor neque a, semper arcu. Maecenas nibh ligula, aliquet sit amet ipsum at, semper cursus quam. In iaculis porttitor erat tincidunt gravida. Duis porta nibh vitae odio placerat vestibulum."),Overlay_stories_jsx("p",null,"Nullam auctor dignissim mattis. Etiam sed augue eleifend, aliquet massa vitae, tincidunt erat. Cras egestas volutpat dignissim. Suspendisse nec ultricies leo. Sed eu purus et erat commodo placerat. Mauris et molestie dolor. Morbi condimentum magna in ultricies lobortis. Vestibulum at scelerisque nunc. Sed luctus sodales enim."))))};ControlledOverlay.displayName="ControlledOverlay";var Default={render:function render(){return Overlay_stories_jsx(ControlledOverlay,null)}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{storySource:_objectSpread({source:"{\n  render: () => <ControlledOverlay />\n}"},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.storySource)})},"./src/components/common/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>button_Button});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),isEqual=__webpack_require__("./node_modules/lodash/isEqual.js"),isEqual_default=__webpack_require__.n(isEqual),Spinner=__webpack_require__("./src/components/common/spinner/Spinner.tsx"),VisuallyHidden=__webpack_require__("./src/components/common/visually-hidden/VisuallyHidden.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),darken=__webpack_require__("./node_modules/polished/lib/color/darken.js"),darken_default=__webpack_require__.n(darken),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Spinner_styles=__webpack_require__("./src/components/common/spinner/Spinner.styles.ts"),StyledButton=styled_components_browser_esm.ZP.button(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  position: relative;\n  font-family: ",";\n  font-weight: 500;\n  appearance: none;\n  cursor: pointer;\n  font-size: 1.125rem;\n  line-height: 1.5rem;\n  border: 1px solid ",";\n  border-radius: 4px;\n  transition: border-color ","ms,\n    background-color ","ms,\n    color ","ms;\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: ",";\n  }\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  ",";\n\n  > span {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: opacity ","ms;\n    opacity: ",";\n    gap: 0.5rem;\n\n    > svg {\n      flex-shrink: 0;\n\n      ","\n\n      ","\n    }\n\n    //> svg + span {\n    //  margin-left: 0.5rem;\n    //}\n    //\n    //> span + svg {\n    //  margin-left: 0.5rem;\n    //}\n  }\n\n  > "," {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    opacity: ",";\n    transition: opacity ","ms;\n    pointer-events: none;\n  }\n"])),(function(_ref){return _ref.theme.fonts.familyRegular}),(function(_ref2){return _ref2.theme.colors.primary}),(function(_ref3){return _ref3.theme.timings.fast}),(function(_ref4){return _ref4.theme.timings.fast}),(function(_ref5){return _ref5.theme.timings.fast}),(function(_ref6){return _ref6.$isLoading?"wait":"not-allowed"}),(function(_ref7){return"primary"===_ref7.$type&&(0,styled_components_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n      color: ",";\n      background-color: ",";\n\n      &:hover,\n      &:focus {\n        background-color: ",";\n        border-color: ",";\n      }\n    "])),(function(_ref8){return _ref8.theme.colors.white}),(function(_ref9){return _ref9.theme.colors.primary}),(function(_ref10){var theme=_ref10.theme;return darken_default()(.1)(theme.colors.primary)}),(function(_ref11){var theme=_ref11.theme;return darken_default()(.1)(theme.colors.primary)}))}),(function(_ref12){return"secondary"===_ref12.$type&&(0,styled_components_browser_esm.iv)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n      color: ",";\n      background-color: ",";\n\n      &:hover,\n      &:focus {\n        color: ",";\n        background-color: ",";\n        border-color: ",";\n      }\n    "])),(function(_ref13){return _ref13.theme.colors.primary}),(function(_ref14){return _ref14.theme.colors.white}),(function(_ref15){return _ref15.theme.colors.white}),(function(_ref16){var theme=_ref16.theme;return darken_default()(.1)(theme.colors.primary)}),(function(_ref17){var theme=_ref17.theme;return darken_default()(.1)(theme.colors.primary)}))}),(function(_ref18){return"simple"===_ref18.$type&&(0,styled_components_browser_esm.iv)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n      border-color: transparent;\n    "])))}),(function(_ref19){return"small"===_ref19.$size&&(0,styled_components_browser_esm.iv)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n      padding: 0.5rem 0.75rem;\n      font-size: 0.875rem;\n      line-height: 1rem;\n    "])))}),(function(_ref20){return"normal"===_ref20.$size&&(0,styled_components_browser_esm.iv)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n      padding: 0.625rem 1.25rem;\n    "])))}),(function(_ref21){return"large"===_ref21.$size&&(0,styled_components_browser_esm.iv)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n      padding: 1.125rem 2rem;\n    "])))}),(function(_ref22){return"base"===_ref22.$size&&(0,styled_components_browser_esm.iv)(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.Z)(["\n      border: 0;\n    "])))}),(function(_ref23){return _ref23.$fullWidth&&(0,styled_components_browser_esm.iv)(_templateObject9||(_templateObject9=(0,taggedTemplateLiteral.Z)(["\n      width: 100%;\n    "])))}),(function(_ref24){return _ref24.theme.timings.fast}),(function(_ref25){return _ref25.$isLoading?"0":"1"}),(function(_ref26){var $size=_ref26.$size;return("normal"===$size||"large"===$size||"base"===$size)&&(0,styled_components_browser_esm.iv)(_templateObject10||(_templateObject10=(0,taggedTemplateLiteral.Z)(["\n          width: 1.5rem;\n          height: 1.5rem;\n        "])))}),(function(_ref27){return"small"===_ref27.$size&&(0,styled_components_browser_esm.iv)(_templateObject11||(_templateObject11=(0,taggedTemplateLiteral.Z)(["\n          width: 1rem;\n          height: 1rem;\n        "])))}),Spinner_styles.Q,(function(_ref28){return _ref28.$isLoading?"1":"0"}),(function(_ref29){return _ref29.theme.timings.fast}));StyledButton.defaultProps={$type:"primary",$size:"normal",$fullWidth:!1};var _excluded=["iconOnly","iconBefore","iconAfter","isLoading","disabled","onClick","children","$isLoading"],__jsx=react.createElement,Button=(0,react.forwardRef)((function(_ref,ref){var iconOnly=_ref.iconOnly,iconBefore=_ref.iconBefore,iconAfter=_ref.iconAfter,_ref$isLoading=_ref.isLoading,isLoading=void 0!==_ref$isLoading&&_ref$isLoading,disabled=_ref.disabled,onClick=_ref.onClick,children=_ref.children,props=(_ref.$isLoading,(0,objectWithoutProperties.Z)(_ref,_excluded)),newOnClick=(0,react.useCallback)((function(e){isLoading||disabled||null==onClick||onClick(e)}),[onClick,isLoading,disabled]);return __jsx(StyledButton,(0,esm_extends.Z)({ref},props,{$isLoading:isLoading,disabled:disabled||isLoading,onClick:onClick?newOnClick:void 0}),__jsx("span",null,(0,react.isValidElement)(iconBefore)&&(0,react.cloneElement)(iconBefore,{"aria-hidden":"true"}),children&&__jsx(iconOnly?VisuallyHidden.Z:"span",null,children),(0,react.isValidElement)(iconAfter)&&(0,react.cloneElement)(iconAfter,{"aria-hidden":"true"})),__jsx(Spinner.Z,null))}));Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{isLoading:{defaultValue:{value:"false",computed:!1},required:!1}}};const button_Button=(0,react.memo)(Button,isEqual_default());try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}},$fullWidth:{defaultValue:null,description:"",name:"$fullWidth",required:!1,type:{name:"boolean"}},$isLoading:{defaultValue:null,description:"",name:"$isLoading",required:!1,type:{name:"boolean"}},$type:{defaultValue:null,description:"",name:"$type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"simple"'}]}},$size:{defaultValue:null,description:"",name:"$size",required:!1,type:{name:"enum",value:[{value:'"base"'},{value:'"small"'},{value:'"normal"'},{value:'"large"'}]}},iconOnly:{defaultValue:null,description:"Will hide children and show icons only",name:"iconOnly",required:!1,type:{name:"boolean"}},iconBefore:{defaultValue:null,description:"Add an icon before",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:null,description:"Add an icon after",name:"iconAfter",required:!1,type:{name:"ReactNode"}},isLoading:{defaultValue:{value:"false"},description:"Show progress bar",name:"isLoading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/common/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/spinner/Spinner.styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F$:()=>StyledSpinnerLabel,Q:()=>StyledSpinner,qu:()=>StyledSpinnerIcon});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),spinnerAnimation=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.F4)(_templateObject||(_templateObject=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))),StyledSpinnerIcon=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div(_templateObject2||(_templateObject2=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  > div {\n    border-width: 2px;\n    border-style: solid;\n    border-top-color: ",";\n    border-right-color: ",";\n    border-bottom-color: ",";\n    border-left-color: ",";\n    border-radius: 50%;\n    animation: "," 1s linear infinite;\n    width: 16px;\n    height: 16px;\n    border-width: 2px;\n  }\n"])),(function(_ref){var $primaryColor=_ref.$primaryColor;return null!=$primaryColor?$primaryColor:"currentColor"}),(function(_ref2){var $secondaryColor=_ref2.$secondaryColor;return null!=$secondaryColor?$secondaryColor:"transparent"}),(function(_ref3){var $secondaryColor=_ref3.$secondaryColor;return null!=$secondaryColor?$secondaryColor:"transparent"}),(function(_ref4){var $secondaryColor=_ref4.$secondaryColor;return null!=$secondaryColor?$secondaryColor:"transparent"}),spinnerAnimation),StyledSpinnerLabel=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div(_templateObject3||(_templateObject3=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  font-size: 0.875rem;\n  line-height: 1;\n"]))),StyledSpinner=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div(_templateObject4||(_templateObject4=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  line-height: 1;\n\n  ","\n\n  ","\n\n  ","\n"])),(function(_ref5){var $backgroundColor=_ref5.$backgroundColor;return $backgroundColor&&(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject5||(_templateObject5=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n      background-color: ",";\n    "])),$backgroundColor)}),(function(_ref6){return _ref6.$fullWidth?(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject6||(_templateObject6=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n          width: 100%;\n        "]))):""}),(function(_ref7){return _ref7.$fullHeight?(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject7||(_templateObject7=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n          height: 100%;\n        "]))):""}))},"./src/components/common/spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/isEqual.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__),_Spinner_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/spinner/Spinner.styles.ts"),_excluded=["label","primaryColor","secondaryColor","backgroundColor"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Spinner=function Spinner(_ref){var label=_ref.label,_ref$primaryColor=_ref.primaryColor,primaryColor=void 0===_ref$primaryColor?"currentColor":_ref$primaryColor,_ref$secondaryColor=_ref.secondaryColor,secondaryColor=void 0===_ref$secondaryColor?"transparent":_ref$secondaryColor,_ref$backgroundColor=_ref.backgroundColor,backgroundColor=void 0===_ref$backgroundColor?"transparent":_ref$backgroundColor,props=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);return __jsx(_Spinner_styles__WEBPACK_IMPORTED_MODULE_2__.Q,(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},props,{$backgroundColor:backgroundColor}),__jsx(_Spinner_styles__WEBPACK_IMPORTED_MODULE_2__.qu,{$primaryColor:primaryColor,$secondaryColor:secondaryColor},__jsx("div",null)),label&&__jsx(_Spinner_styles__WEBPACK_IMPORTED_MODULE_2__.F$,null,label))};Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{primaryColor:{defaultValue:{value:'"currentColor"',computed:!1},required:!1},secondaryColor:{defaultValue:{value:'"transparent"',computed:!1},required:!1},backgroundColor:{defaultValue:{value:'"transparent"',computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Spinner,lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default());try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},primaryColor:{defaultValue:{value:"currentColor"},description:"",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:{value:"transparent"},description:"",name:"secondaryColor",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:{value:"transparent"},description:"",name:"backgroundColor",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},$fullWidth:{defaultValue:null,description:"",name:"$fullWidth",required:!1,type:{name:"boolean"}},$fullHeight:{defaultValue:null,description:"",name:"$fullHeight",required:!1,type:{name:"boolean"}},$backgroundColor:{defaultValue:null,description:"",name:"$backgroundColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/common/spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/svg/SvgSprite.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/isEqual.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__),_excluded=["src","children"],_excluded2=["crossOrigin","ref","title"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,SvgSprite=function SvgSprite(_ref){var src=_ref.src,props=(_ref.children,(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded)),title=(props.crossOrigin,props.ref,props.title),typedProps=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(props,_excluded2),titleId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();return __jsx("svg",(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},typedProps,{viewBox:src.viewBox,role:"img","aria-labelledby":title&&titleId}),title&&__jsx("title",{id:titleId},title),__jsx("use",{xlinkHref:"#".concat(src.id)}))};SvgSprite.displayName="SvgSprite",SvgSprite.__docgenInfo={description:"",methods:[],displayName:"SvgSprite"};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgSprite,lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default());try{SvgSprite.displayName="SvgSprite",SvgSprite.__docgenInfo={description:"",displayName:"SvgSprite",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/svg/SvgSprite.tsx#SvgSprite"]={docgenInfo:SvgSprite.__docgenInfo,name:"SvgSprite",path:"src/components/common/svg/SvgSprite.tsx#SvgSprite"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/visually-hidden/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>visually_hidden_VisuallyHidden});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),isEqual=__webpack_require__("./node_modules/lodash/isEqual.js"),isEqual_default=__webpack_require__.n(isEqual),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),StyledVisuallyHidden=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.span(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  margin-top: -1px;\n"]))),__jsx=react.createElement,VisuallyHidden=function VisuallyHidden(props){return __jsx(StyledVisuallyHidden,props)};VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"",methods:[],displayName:"VisuallyHidden"};const visually_hidden_VisuallyHidden=(0,react.memo)(VisuallyHidden,isEqual_default());try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"",displayName:"VisuallyHidden",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/visually-hidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/common/visually-hidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}}}]);