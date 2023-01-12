"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[288],{"./src/components/common/overlay/Overlay.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>Overlay_stories});var _templateObject,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/react-modal/lib/index.js"),lib_default=__webpack_require__.n(lib),bodyScrollLock_esm=__webpack_require__("./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),x=__webpack_require__("./node_modules/@tabler/icons/icons/x.svg"),SvgSprite=__webpack_require__("./src/components/common/svg/SvgSprite.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),StyledOverlayCloseButton=styled_components_browser_esm.ZP.button(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  appearance: none;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  color: ",";\n  border-radius: 50%;\n  position: fixed;\n  top: 1rem;\n  right: 1rem;\n  z-index: 2;\n"])),(function(_ref){return _ref.theme.colors.white})),__jsx=react.createElement,OverlayCloseButton=function OverlayCloseButton(_ref){var props=(0,esm_extends.Z)({},_ref),t=(0,es.$G)("common").t;return __jsx(StyledOverlayCloseButton,(0,esm_extends.Z)({},props,{"aria-label":t("overlay.close-button.label")}),__jsx(SvgSprite.Z,{src:x.Z}))};OverlayCloseButton.displayName="OverlayCloseButton",OverlayCloseButton.__docgenInfo={description:"",methods:[],displayName:"OverlayCloseButton"};const close_button_OverlayCloseButton=OverlayCloseButton;try{OverlayCloseButton.displayName="OverlayCloseButton",OverlayCloseButton.__docgenInfo={description:"",displayName:"OverlayCloseButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/overlay/close-button/OverlayCloseButton.tsx#OverlayCloseButton"]={docgenInfo:OverlayCloseButton.__docgenInfo,name:"OverlayCloseButton",path:"src/components/common/overlay/close-button/OverlayCloseButton.tsx#OverlayCloseButton"})}catch(__react_docgen_typescript_loader_error){}var Overlay_styles_templateObject,StyledOverlayContainer=styled_components_browser_esm.ZP.div(Overlay_styles_templateObject||(Overlay_styles_templateObject=(0,taggedTemplateLiteral.Z)(["\n  padding-top: 3.5rem;\n  padding-bottom: 3.5rem;\n  margin: 0 3.5rem;\n"]))),Overlay_jsx=react.createElement;lib_default().setAppElement("#__next");var Overlay=function Overlay(_ref){var title=_ref.title,_ref$isOpen=_ref.isOpen,isOpen=void 0!==_ref$isOpen&&_ref$isOpen,children=_ref.children,onClose=_ref.onClose,_useState=(0,react.useState)(null),ref=_useState[0],setRef=_useState[1],theme=(0,styled_components_browser_esm.Fg)();return Overlay_jsx(react.Fragment,null,Overlay_jsx(lib_default(),{closeTimeoutMS:250,shouldCloseOnEsc:!0,shouldFocusAfterRender:!0,shouldReturnFocusAfterClose:!0,isOpen,shouldCloseOnOverlayClick:!0,onRequestClose:function onRequestClose(){null==onClose||onClose()},contentLabel:title,style:{overlay:{zIndex:theme.zIndex.overlay}},onAfterOpen:function onAfterOpen(){ref&&(0,bodyScrollLock_esm.Qp)(ref)},onAfterClose:function onAfterClose(){ref&&(0,bodyScrollLock_esm.tG)(ref)},ref:setRef},Overlay_jsx(close_button_OverlayCloseButton,{onClick:onClose}),Overlay_jsx(StyledOverlayContainer,null,children)))};Overlay.__docgenInfo={description:"",methods:[],displayName:"Overlay",props:{isOpen:{defaultValue:{value:"false",computed:!1},required:!1}}};const overlay_Overlay=Overlay;try{Overlay.displayName="Overlay",Overlay.__docgenInfo={description:"",displayName:"Overlay",props:{isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/overlay/Overlay.tsx#Overlay"]={docgenInfo:Overlay.__docgenInfo,name:"Overlay",path:"src/components/common/overlay/Overlay.tsx#Overlay"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,Overlay_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Overlay_stories={title:"UI/Overlay",component:overlay_Overlay,tags:["autodocs"]};var Default={args:{isOpen:!0,children:Overlay_stories_jsx("div",{style:{backgroundColor:"white",padding:"1rem"}},Overlay_stories_jsx("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta dolor mi, at venenatis urna elementum a. Etiam quis diam non massa tempor blandit at nec nibh. Pellentesque non magna ac quam cursus mollis. Nunc urna dui, lobortis non nulla tempus, varius sollicitudin nulla. Aliquam erat volutpat. In elementum arcu diam, nec laoreet ex dignissim blandit. Curabitur ornare rhoncus quam, a semper erat congue quis. Proin facilisis velit sed ante gravida, et condimentum nisl faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse eu lobortis dolor. Aliquam sapien massa, condimentum sed ornare sed, pellentesque sed massa. Fusce quis ipsum scelerisque, condimentum lacus ac, eleifend orci. Pellentesque vehicula diam in malesuada placerat. Fusce congue euismod arcu. Suspendisse molestie id erat vitae pretium."),Overlay_stories_jsx("p",null,"Sed et dui finibus, sodales augue nec, imperdiet augue. Aenean congue sagittis dolor nec semper. Phasellus in interdum nisi. Aliquam sit amet justo nec turpis ultricies ullamcorper ac ut libero. Nulla a neque et erat semper viverra bibendum eu arcu. Integer metus justo, bibendum quis tincidunt semper, faucibus id dolor. Donec pulvinar nec enim ut luctus. Ut cursus tincidunt eleifend. Nulla ante nulla, viverra eget lorem auctor, varius imperdiet lectus. Nulla faucibus arcu pulvinar ipsum tincidunt, quis bibendum massa egestas. Aliquam in mattis diam. Proin ornare ipsum nec diam vehicula dapibus. Maecenas imperdiet velit mauris, quis venenatis eros dignissim in. Duis blandit purus a velit auctor ornare. Nullam dapibus metus id efficitur consequat. Nam eros mi, egestas a urna nec, dictum sodales sem."),Overlay_stories_jsx("p",null,"Sed hendrerit odio eget sem molestie rhoncus. Donec at arcu orci. Fusce sagittis vel tellus vitae viverra. Duis vel faucibus eros. Sed ante erat, vestibulum sed justo sit amet, feugiat dictum dui. Sed at tortor at mauris porttitor maximus. Phasellus posuere scelerisque lorem nec placerat. Donec condimentum turpis eu dolor mollis tempus. Phasellus non neque suscipit, iaculis diam id, maximus arcu. Fusce sed fringilla justo. Phasellus vitae blandit nisl, a pulvinar dui. Etiam facilisis id elit at dignissim. Suspendisse feugiat, ipsum eget volutpat congue, nibh est convallis felis, in egestas risus ex quis turpis. Mauris rhoncus tempor convallis. Vestibulum luctus orci ex, fringilla elementum lacus eleifend sit amet. In hac habitasse platea dictumst."),Overlay_stories_jsx("p",null,"Fusce sit amet nisi lacinia nisi bibendum ullamcorper sed et urna. Donec eu euismod leo, at suscipit arcu. Suspendisse non lacus purus. Donec eu ante volutpat, condimentum tortor eu, laoreet lorem. Praesent tempor, arcu ut facilisis dapibus, nisi magna ullamcorper felis, eu ornare nisl arcu et quam. Nunc dictum luctus ante a viverra. Donec a enim massa. Phasellus tempus quam commodo mollis dapibus. Curabitur eros libero, dapibus a tellus vel, interdum congue diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam vel venenatis massa, eu tristique sapien. Pellentesque volutpat, nunc a interdum faucibus, lorem nibh tristique dolor, tincidunt cursus velit arcu vel lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent vitae dui nec leo elementum tristique. Donec auctor sed dui ut semper."),Overlay_stories_jsx("p",null,"Proin non elit vulputate, malesuada ipsum et, vestibulum lectus. Donec nec est vel nisl ultricies dictum et ac augue. Aliquam nibh mauris, condimentum at felis a, aliquam viverra tellus. Aenean commodo, orci id tristique tempus, magna justo malesuada magna, sit amet hendrerit erat urna dictum justo. Aliquam eu ultricies nibh. Aliquam interdum, arcu id dignissim lobortis, dolor eros efficitur lacus, sed mollis mauris metus eu lectus. Sed sagittis leo non rhoncus pretium. Cras facilisis magna vitae placerat imperdiet. Nunc scelerisque ut turpis vel pharetra. Nunc congue ipsum sem, suscipit condimentum neque dictum faucibus. Duis viverra quam id nibh maximus placerat."),Overlay_stories_jsx("p",null,"Etiam lobortis fringilla elit, a venenatis ex posuere ut. In sed blandit arcu. Sed feugiat iaculis neque, ultrices dictum arcu porttitor et. Phasellus tristique iaculis consectetur. Integer bibendum vulputate enim non eleifend. Proin accumsan aliquam risus non aliquet. In id scelerisque sapien. Nunc tempor, leo ut dapibus venenatis, justo odio blandit tellus, ut imperdiet sapien nisi nec sem. Phasellus finibus arcu at sapien malesuada lobortis. Phasellus pellentesque nulla quam. Fusce feugiat mauris lorem, et rhoncus ante scelerisque nec."),Overlay_stories_jsx("p",null,"Morbi pharetra felis in dui dignissim commodo sed a mi. Etiam odio odio, sollicitudin nec lacus non, rutrum vulputate dui. Nam cursus hendrerit molestie. Aenean eleifend quis tortor ut laoreet. Nunc pellentesque, quam et semper gravida, mauris felis consectetur nisi, et efficitur neque libero quis est. Mauris porttitor tempor urna, et vestibulum tortor mattis a. Nunc mauris mauris, aliquam quis ornare nec, lacinia suscipit orci. Etiam sit amet feugiat mauris, vel mattis metus. Sed vehicula ante id tristique viverra."),Overlay_stories_jsx("p",null,"Nunc sed arcu in nulla rhoncus mollis in ac nisl. Donec varius facilisis metus quis ultrices. Fusce quis tincidunt nisi, nec varius erat. Nunc condimentum odio vitae erat consectetur, eget ornare orci malesuada. Duis pretium felis gravida, efficitur lectus sit amet, congue metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin consequat accumsan nisi, non ornare nisi sollicitudin vitae. Suspendisse lobortis non lacus quis dictum. Vivamus ornare convallis lorem ac consequat. Morbi tristique sapien orci, quis tincidunt risus sagittis semper. Sed tristique venenatis vulputate. Nullam viverra, lacus quis ullamcorper laoreet, eros ante tempor ante, et commodo leo augue at metus. Donec viverra in lorem bibendum laoreet."),Overlay_stories_jsx("p",null,"Fusce pulvinar dignissim odio, vitae egestas ex sodales in. Suspendisse vel maximus neque. Praesent purus risus, fermentum ut felis ut, sollicitudin vehicula odio. Sed sed nulla dictum, porttitor neque a, semper arcu. Maecenas nibh ligula, aliquet sit amet ipsum at, semper cursus quam. In iaculis porttitor erat tincidunt gravida. Duis porta nibh vitae odio placerat vestibulum."),Overlay_stories_jsx("p",null,"Nullam auctor dignissim mattis. Etiam sed augue eleifend, aliquet massa vitae, tincidunt erat. Cras egestas volutpat dignissim. Suspendisse nec ultricies leo. Sed eu purus et erat commodo placerat. Mauris et molestie dolor. Morbi condimentum magna in ultricies lobortis. Vestibulum at scelerisque nunc. Sed luctus sodales enim."))}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{storySource:_objectSpread({source:'{\n  args: {\n    isOpen: true,\n    children: <div style={{\n      backgroundColor: "white",\n      padding: "1rem"\n    }}>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent\n          porta dolor mi, at venenatis urna elementum a. Etiam quis diam non\n          massa tempor blandit at nec nibh. Pellentesque non magna ac quam\n          cursus mollis. Nunc urna dui, lobortis non nulla tempus, varius\n          sollicitudin nulla. Aliquam erat volutpat. In elementum arcu diam, nec\n          laoreet ex dignissim blandit. Curabitur ornare rhoncus quam, a semper\n          erat congue quis. Proin facilisis velit sed ante gravida, et\n          condimentum nisl faucibus. Interdum et malesuada fames ac ante ipsum\n          primis in faucibus. Suspendisse eu lobortis dolor. Aliquam sapien\n          massa, condimentum sed ornare sed, pellentesque sed massa. Fusce quis\n          ipsum scelerisque, condimentum lacus ac, eleifend orci. Pellentesque\n          vehicula diam in malesuada placerat. Fusce congue euismod arcu.\n          Suspendisse molestie id erat vitae pretium.\n        </p>\n        <p>\n          Sed et dui finibus, sodales augue nec, imperdiet augue. Aenean congue\n          sagittis dolor nec semper. Phasellus in interdum nisi. Aliquam sit\n          amet justo nec turpis ultricies ullamcorper ac ut libero. Nulla a\n          neque et erat semper viverra bibendum eu arcu. Integer metus justo,\n          bibendum quis tincidunt semper, faucibus id dolor. Donec pulvinar nec\n          enim ut luctus. Ut cursus tincidunt eleifend. Nulla ante nulla,\n          viverra eget lorem auctor, varius imperdiet lectus. Nulla faucibus\n          arcu pulvinar ipsum tincidunt, quis bibendum massa egestas. Aliquam in\n          mattis diam. Proin ornare ipsum nec diam vehicula dapibus. Maecenas\n          imperdiet velit mauris, quis venenatis eros dignissim in. Duis blandit\n          purus a velit auctor ornare. Nullam dapibus metus id efficitur\n          consequat. Nam eros mi, egestas a urna nec, dictum sodales sem.\n        </p>\n        <p>\n          Sed hendrerit odio eget sem molestie rhoncus. Donec at arcu orci.\n          Fusce sagittis vel tellus vitae viverra. Duis vel faucibus eros. Sed\n          ante erat, vestibulum sed justo sit amet, feugiat dictum dui. Sed at\n          tortor at mauris porttitor maximus. Phasellus posuere scelerisque\n          lorem nec placerat. Donec condimentum turpis eu dolor mollis tempus.\n          Phasellus non neque suscipit, iaculis diam id, maximus arcu. Fusce sed\n          fringilla justo. Phasellus vitae blandit nisl, a pulvinar dui. Etiam\n          facilisis id elit at dignissim. Suspendisse feugiat, ipsum eget\n          volutpat congue, nibh est convallis felis, in egestas risus ex quis\n          turpis. Mauris rhoncus tempor convallis. Vestibulum luctus orci ex,\n          fringilla elementum lacus eleifend sit amet. In hac habitasse platea\n          dictumst.\n        </p>\n        <p>\n          Fusce sit amet nisi lacinia nisi bibendum ullamcorper sed et urna.\n          Donec eu euismod leo, at suscipit arcu. Suspendisse non lacus purus.\n          Donec eu ante volutpat, condimentum tortor eu, laoreet lorem. Praesent\n          tempor, arcu ut facilisis dapibus, nisi magna ullamcorper felis, eu\n          ornare nisl arcu et quam. Nunc dictum luctus ante a viverra. Donec a\n          enim massa. Phasellus tempus quam commodo mollis dapibus. Curabitur\n          eros libero, dapibus a tellus vel, interdum congue diam. Class aptent\n          taciti sociosqu ad litora torquent per conubia nostra, per inceptos\n          himenaeos. Aliquam vel venenatis massa, eu tristique sapien.\n          Pellentesque volutpat, nunc a interdum faucibus, lorem nibh tristique\n          dolor, tincidunt cursus velit arcu vel lectus. Vestibulum ante ipsum\n          primis in faucibus orci luctus et ultrices posuere cubilia curae;\n          Praesent vitae dui nec leo elementum tristique. Donec auctor sed dui\n          ut semper.\n        </p>\n        <p>\n          Proin non elit vulputate, malesuada ipsum et, vestibulum lectus. Donec\n          nec est vel nisl ultricies dictum et ac augue. Aliquam nibh mauris,\n          condimentum at felis a, aliquam viverra tellus. Aenean commodo, orci\n          id tristique tempus, magna justo malesuada magna, sit amet hendrerit\n          erat urna dictum justo. Aliquam eu ultricies nibh. Aliquam interdum,\n          arcu id dignissim lobortis, dolor eros efficitur lacus, sed mollis\n          mauris metus eu lectus. Sed sagittis leo non rhoncus pretium. Cras\n          facilisis magna vitae placerat imperdiet. Nunc scelerisque ut turpis\n          vel pharetra. Nunc congue ipsum sem, suscipit condimentum neque dictum\n          faucibus. Duis viverra quam id nibh maximus placerat.\n        </p>\n        <p>\n          Etiam lobortis fringilla elit, a venenatis ex posuere ut. In sed\n          blandit arcu. Sed feugiat iaculis neque, ultrices dictum arcu\n          porttitor et. Phasellus tristique iaculis consectetur. Integer\n          bibendum vulputate enim non eleifend. Proin accumsan aliquam risus non\n          aliquet. In id scelerisque sapien. Nunc tempor, leo ut dapibus\n          venenatis, justo odio blandit tellus, ut imperdiet sapien nisi nec\n          sem. Phasellus finibus arcu at sapien malesuada lobortis. Phasellus\n          pellentesque nulla quam. Fusce feugiat mauris lorem, et rhoncus ante\n          scelerisque nec.\n        </p>\n        <p>\n          Morbi pharetra felis in dui dignissim commodo sed a mi. Etiam odio\n          odio, sollicitudin nec lacus non, rutrum vulputate dui. Nam cursus\n          hendrerit molestie. Aenean eleifend quis tortor ut laoreet. Nunc\n          pellentesque, quam et semper gravida, mauris felis consectetur nisi,\n          et efficitur neque libero quis est. Mauris porttitor tempor urna, et\n          vestibulum tortor mattis a. Nunc mauris mauris, aliquam quis ornare\n          nec, lacinia suscipit orci. Etiam sit amet feugiat mauris, vel mattis\n          metus. Sed vehicula ante id tristique viverra.\n        </p>\n        <p>\n          Nunc sed arcu in nulla rhoncus mollis in ac nisl. Donec varius\n          facilisis metus quis ultrices. Fusce quis tincidunt nisi, nec varius\n          erat. Nunc condimentum odio vitae erat consectetur, eget ornare orci\n          malesuada. Duis pretium felis gravida, efficitur lectus sit amet,\n          congue metus. Vestibulum ante ipsum primis in faucibus orci luctus et\n          ultrices posuere cubilia curae; Proin consequat accumsan nisi, non\n          ornare nisi sollicitudin vitae. Suspendisse lobortis non lacus quis\n          dictum. Vivamus ornare convallis lorem ac consequat. Morbi tristique\n          sapien orci, quis tincidunt risus sagittis semper. Sed tristique\n          venenatis vulputate. Nullam viverra, lacus quis ullamcorper laoreet,\n          eros ante tempor ante, et commodo leo augue at metus. Donec viverra in\n          lorem bibendum laoreet.\n        </p>\n        <p>\n          Fusce pulvinar dignissim odio, vitae egestas ex sodales in.\n          Suspendisse vel maximus neque. Praesent purus risus, fermentum ut\n          felis ut, sollicitudin vehicula odio. Sed sed nulla dictum, porttitor\n          neque a, semper arcu. Maecenas nibh ligula, aliquet sit amet ipsum at,\n          semper cursus quam. In iaculis porttitor erat tincidunt gravida. Duis\n          porta nibh vitae odio placerat vestibulum.\n        </p>\n        <p>\n          Nullam auctor dignissim mattis. Etiam sed augue eleifend, aliquet\n          massa vitae, tincidunt erat. Cras egestas volutpat dignissim.\n          Suspendisse nec ultricies leo. Sed eu purus et erat commodo placerat.\n          Mauris et molestie dolor. Morbi condimentum magna in ultricies\n          lobortis. Vestibulum at scelerisque nunc. Sed luctus sodales enim.\n        </p>\n      </div>\n  }\n}'},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.storySource)})},"./src/components/common/svg/SvgSprite.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_excluded=["src","children"],_excluded2=["crossOrigin","ref","title"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,SvgSprite=function SvgSprite(_ref){var src=_ref.src,props=(_ref.children,(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded)),title=(props.crossOrigin,props.ref,props.title),typedProps=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded2),titleId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();return __jsx("svg",(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},typedProps,{viewBox:src.viewBox,role:"img","aria-labelledby":title&&titleId}),title&&__jsx("title",{id:titleId},title),__jsx("use",{xlinkHref:"#".concat(src.id)}))};SvgSprite.displayName="SvgSprite",SvgSprite.__docgenInfo={description:"",methods:[],displayName:"SvgSprite"};const __WEBPACK_DEFAULT_EXPORT__=SvgSprite;try{SvgSprite.displayName="SvgSprite",SvgSprite.__docgenInfo={description:"",displayName:"SvgSprite",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/svg/SvgSprite.tsx#SvgSprite"]={docgenInfo:SvgSprite.__docgenInfo,name:"SvgSprite",path:"src/components/common/svg/SvgSprite.tsx#SvgSprite"})}catch(__react_docgen_typescript_loader_error){}}}]);