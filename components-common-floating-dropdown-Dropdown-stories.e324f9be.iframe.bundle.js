"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[403],{"./src/components/common/floating/dropdown/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,CustomElements:()=>CustomElements,WithOverlay:()=>WithOverlay,default:()=>Dropdown_stories});var _templateObject,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),chevron_right=__webpack_require__("./node_modules/@tabler/icons/icons/chevron-right.svg"),Button=__webpack_require__("./src/components/common/button/Button.tsx"),Overlay=__webpack_require__("./src/components/common/overlay/Overlay.tsx"),SvgSprite=__webpack_require__("./src/components/common/svg/SvgSprite.tsx"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),floating_ui_react_esm=__webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.esm.js"),floating_ui_core_browser_min=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs"),floating_ui_react_dom_esm=__webpack_require__("./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js"),floating_ui_dom_browser_min=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Floater=__webpack_require__("./src/components/common/floating/floater/Floater.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),StyledMenuWrapper=styled_components_browser_esm.default.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  > button {\n    width: 100%;\n    display: block;\n\n    &:not(:first-child) {\n      margin-top: 5px;\n    }\n  }\n\n  > span {\n    position: absolute;\n  }\n"]))),_excluded=["children"],_excluded2=["children","trigger"],__jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var makeMenuItem=function makeMenuItem(children,props,ref){return(0,react.isValidElement)(children)?(0,react.cloneElement)(children,_objectSpread({ref},props)):__jsx("button",(0,esm_extends.Z)({ref},props),children)};makeMenuItem.displayName="makeMenuItem";var DropdownMenuItem=(0,react.forwardRef)((function(_ref,ref){var children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return makeMenuItem(children,props,ref)})),DropdownMenu=(0,react.forwardRef)((function(_ref2,forwardedRef){var children=_ref2.children,trigger=_ref2.trigger,props=(0,objectWithoutProperties.Z)(_ref2,_excluded2),_useState=(0,react.useState)(!1),open=_useState[0],setOpen=_useState[1],_useState2=(0,react.useState)(null),activeIndex=_useState2[0],setActiveIndex=_useState2[1],_useState3=(0,react.useState)(!1),allowHover=_useState3[0],setAllowHover=_useState3[1],listItemsRef=(0,react.useRef)([]),listContentRef=(0,react.useRef)(react.Children.map(children,(function(child){return(0,react.isValidElement)(child)?child.props.typeaheadKey:null}))),tree=(0,floating_ui_react_esm.ay)(),nodeId=(0,floating_ui_react_esm.jV)(),nested=null!==(0,floating_ui_react_esm.Zm)(),theme=(0,styled_components_browser_esm.useTheme)(),arrowRef=(0,react.useRef)(null),_useFloating=(0,floating_ui_react_esm.YF)({open,nodeId,onOpenChange:setOpen,placement:nested?"right-start":"bottom-start",middleware:[(0,floating_ui_core_browser_min.cv)(theme.floating.popover.offset),(0,floating_ui_core_browser_min.RR)(),(0,floating_ui_core_browser_min.uY)({padding:theme.floating.floater.shift}),(0,floating_ui_react_dom_esm.x7)({element:arrowRef})],whileElementsMounted:floating_ui_dom_browser_min.Me}),x=_useFloating.x,y=_useFloating.y,refs=_useFloating.refs,floating=_useFloating.floating,strategy=_useFloating.strategy,context=_useFloating.context,placement=_useFloating.placement,update=_useFloating.update,middlewareData=_useFloating.middlewareData,arrowCallback=(0,react.useCallback)((function(node){arrowRef.current=node,update()}),[update]),_useInteractions=(0,floating_ui_react_esm.NI)([(0,floating_ui_react_esm.XI)(context,{handleClose:(0,floating_ui_react_esm.xp)({restMs:25}),enabled:nested&&allowHover,delay:{open:75}}),(0,floating_ui_react_esm.eS)(context,{toggle:!nested||!allowHover,event:"mousedown",ignoreMouse:nested}),(0,floating_ui_react_esm.qs)(context,{role:"menu"}),(0,floating_ui_react_esm.bQ)(context),(0,floating_ui_react_esm.c0)(context,{listRef:listItemsRef,activeIndex,nested,onNavigate:setActiveIndex}),(0,floating_ui_react_esm.ox)(context,{listRef:listContentRef,onMatch:open?setActiveIndex:void 0,activeIndex})]),getReferenceProps=_useInteractions.getReferenceProps,getFloatingProps=_useInteractions.getFloatingProps,getItemProps=_useInteractions.getItemProps;(0,react.useEffect)((function(){var handleTreeClick=function handleTreeClick(){setOpen(!1)};return null==tree||tree.events.on("click",handleTreeClick),function(){null==tree||tree.events.off("click",handleTreeClick)}}),[tree]),(0,react.useEffect)((function(){var onPointerMove=function onPointerMove(_ref3){"mouse"===_ref3.pointerType&&setAllowHover(!0)},onKeyDown=function onKeyDown(){setAllowHover(!1)};return window.addEventListener("pointermove",onPointerMove,{once:!0,capture:!0}),window.addEventListener("keydown",onKeyDown,!0),function(){window.removeEventListener("pointermove",onPointerMove,{capture:!0}),window.removeEventListener("keydown",onKeyDown,!0)}}),[allowHover]);var referenceRef=(0,floating_ui_react_esm.qq)([refs.setReference,forwardedRef]),_useTransitionStyles=(0,floating_ui_react_esm.Y_)(context,{duration:theme.timings.fast}),isMounted=_useTransitionStyles.isMounted,styles=_useTransitionStyles.styles;return __jsx(floating_ui_react_esm.mN,{id:nodeId},makeMenuItem(trigger,_objectSpread({},getReferenceProps(_objectSpread(_objectSpread({},props),{},{className:"".concat(open?"open":""),onClick:function onClick(event){event.stopPropagation()}},nested&&{role:"menuitem"}))),referenceRef),__jsx(floating_ui_react_esm.ll,null,isMounted&&__jsx(floating_ui_react_esm.wD,{context,modal:!nested,initialFocus:nested?-1:0,returnFocus:!nested,visuallyHiddenDismiss:!0},__jsx(Floater.Z,(0,esm_extends.Z)({ref:floating,position:{x,y},arrowPosition:middlewareData.arrow,strategy,placement,arrowCallback},getFloatingProps({onKeyDown:function onKeyDown(event){"Tab"===event.key&&setOpen(!1)}}),{style:styles}),__jsx(StyledMenuWrapper,null,react.Children.map(children,(function(child,index){return(0,react.isValidElement)(child)&&(0,react.cloneElement)(child,getItemProps({tabIndex:activeIndex===index?0:-1,role:"menuitem",ref:function ref(node){listItemsRef.current[index]=node},onClick:function onClick(e){var _child$props$onClick,_child$props;null===(_child$props$onClick=(_child$props=child.props).onClick)||void 0===_child$props$onClick||_child$props$onClick.call(_child$props,e),e.defaultPrevented||null==tree||tree.events.emit("click")},onPointerEnter:function onPointerEnter(){allowHover&&setActiveIndex(index)}}))})))))))})),Dropdown=(0,react.forwardRef)((function(props,ref){return null==(0,floating_ui_react_esm.Zm)()?__jsx(floating_ui_react_esm.RB,null,__jsx(DropdownMenu,(0,esm_extends.Z)({},props,{ref}))):__jsx(DropdownMenu,(0,esm_extends.Z)({},props,{ref}))}));Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown"};const dropdown_Dropdown=Dropdown;DropdownMenuItem.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuItem"};try{DropdownMenuItem.displayName="DropdownMenuItem",DropdownMenuItem.__docgenInfo={description:"",displayName:"DropdownMenuItem",props:{typeaheadKey:{defaultValue:null,description:"",name:"typeaheadKey",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/floating/dropdown/Dropdown.tsx#DropdownMenuItem"]={docgenInfo:DropdownMenuItem.__docgenInfo,name:"DropdownMenuItem",path:"src/components/common/floating/dropdown/Dropdown.tsx#DropdownMenuItem"})}catch(__react_docgen_typescript_loader_error){}try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{nested:{defaultValue:null,description:"",name:"nested",required:!1,type:{name:"boolean"}},trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},typeaheadKey:{defaultValue:null,description:"",name:"typeaheadKey",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/floating/dropdown/Dropdown.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"src/components/common/floating/dropdown/Dropdown.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}var _Basic$parameters,_CustomElements$param,_WithOverlay$paramete,Dropdown_stories_jsx=react.createElement;function Dropdown_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function Dropdown_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Dropdown_stories_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Dropdown_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Dropdown_stories={title:"UI/Floating UI/Dropdown",component:dropdown_Dropdown,tags:["autodocs"],decorators:[function(Story){return Dropdown_stories_jsx("div",{style:{width:"100%",height:"500px",display:"flex",alignItems:"center",justifyContent:"center"}},Dropdown_stories_jsx(Story,null))}]};var Basic={render:function render(args){return Dropdown_stories_jsx(dropdown_Dropdown,args,Dropdown_stories_jsx(DropdownMenuItem,{onClick:function onClick(){return console.log("Undo")},typeaheadKey:"Undo"},"Undo"),Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:"Redo"},"Redo"),Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:"Cut",disabled:!0},"Cut"),Dropdown_stories_jsx(dropdown_Dropdown,{trigger:"Copy as >",typeaheadKey:"Copy as"},Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:"Text"},"Text"),Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:"Video"},"Video"),Dropdown_stories_jsx(dropdown_Dropdown,{trigger:"Image >",typeaheadKey:"Image"},Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:".png"},".png"),Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:".jpg"},".jpg"),Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:".svg"},".svg"),Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:".gif"},".gif")),Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:"Audio"},"Audio")),Dropdown_stories_jsx(dropdown_Dropdown,{trigger:"Share >",typeaheadKey:"Share"},Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:"Mail"},"Mail"),Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:"Instagram"},"Instagram")))},args:{trigger:"Menu"}},CustomElements={render:function render(args){return Dropdown_stories_jsx(dropdown_Dropdown,args,Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:"Undo"},Dropdown_stories_jsx(Button.Z,{$type:"secondary"},"Undo")),Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:"Redo"},Dropdown_stories_jsx(Button.Z,{$type:"secondary"},"Redo")),Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:"Cut",disabled:!0},Dropdown_stories_jsx(Button.Z,null,"Cut")),Dropdown_stories_jsx(dropdown_Dropdown,{trigger:Dropdown_stories_jsx(Button.Z,{iconAfter:Dropdown_stories_jsx(SvgSprite.Z,{src:chevron_right.Z})},"Copy as"),typeaheadKey:"Copy as"},Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:"Text"},Dropdown_stories_jsx(Button.Z,null,"Text")),Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:"Video"},Dropdown_stories_jsx(Button.Z,null,"Video")),Dropdown_stories_jsx(dropdown_Dropdown,{trigger:Dropdown_stories_jsx(Button.Z,{iconAfter:Dropdown_stories_jsx(SvgSprite.Z,{src:chevron_right.Z})},"Image"),typeaheadKey:"Image"},Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:".png"},Dropdown_stories_jsx(Button.Z,null,".png")),Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:".jpg"},Dropdown_stories_jsx(Button.Z,null,".jpg")),Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:".svg"},Dropdown_stories_jsx(Button.Z,null,".svg")),Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:".gif"},Dropdown_stories_jsx(Button.Z,null,".gif"))),Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:"Audio"},Dropdown_stories_jsx(Button.Z,null,"Audio"))),Dropdown_stories_jsx(dropdown_Dropdown,{trigger:Dropdown_stories_jsx(Button.Z,{iconAfter:Dropdown_stories_jsx(SvgSprite.Z,{src:chevron_right.Z})},"Share"),typeaheadKey:"Share"},Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:"Mail"},Dropdown_stories_jsx(Button.Z,null,"Mail")),Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:"Instagram"},Dropdown_stories_jsx(Button.Z,null,"Instagram"))))},args:{trigger:Dropdown_stories_jsx(Button.Z,null,"Menu")}},WithOverlayComponent=function WithOverlayComponent(){var _useState=(0,react.useState)(!1),isOpen=_useState[0],setIsOpen=_useState[1];return Dropdown_stories_jsx(react.Fragment,null,Dropdown_stories_jsx(dropdown_Dropdown,{trigger:Dropdown_stories_jsx(Button.Z,null,"Open")},Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:"Copy"},Dropdown_stories_jsx(Button.Z,null,"Copy")),Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:"Edit"},Dropdown_stories_jsx(Button.Z,null,"Edit")),Dropdown_stories_jsx(DropdownMenuItem,{typeaheadKey:"Delete",onClick:function onClick(){setIsOpen(!isOpen)}},Dropdown_stories_jsx(Button.Z,null,"Delete"))),Dropdown_stories_jsx(Overlay.Z,{isOpen,contentLabel:"Example",onClose:function onClose(){setIsOpen(!1)}},Dropdown_stories_jsx("div",{style:{backgroundColor:"white",padding:"1rem"}},"Delete this item?",Dropdown_stories_jsx(Button.Z,{onClick:function onClick(){setIsOpen(!1)}},"Cancel"),Dropdown_stories_jsx(Button.Z,{onClick:function onClick(){setIsOpen(!1)}},"Ok"))))},WithOverlay={render:function render(){return Dropdown_stories_jsx(WithOverlayComponent,null)}};Basic.parameters=Dropdown_stories_objectSpread(Dropdown_stories_objectSpread({},Basic.parameters),{},{storySource:Dropdown_stories_objectSpread({source:'{\n  render: args => <Dropdown {...args}>\n      <DropdownMenuItem onClick={() => console.log("Undo")} typeaheadKey="Undo">\n        Undo\n      </DropdownMenuItem>\n      <DropdownMenuItem typeaheadKey="Redo">Redo</DropdownMenuItem>\n      <DropdownMenuItem typeaheadKey="Cut" disabled>\n        Cut\n      </DropdownMenuItem>\n      <Dropdown trigger="Copy as >" typeaheadKey="Copy as">\n        <DropdownMenuItem typeaheadKey="Text">Text</DropdownMenuItem>\n        <DropdownMenuItem typeaheadKey="Video">Video</DropdownMenuItem>\n        <Dropdown trigger="Image >" typeaheadKey="Image">\n          <DropdownMenuItem typeaheadKey=".png">.png</DropdownMenuItem>\n          <DropdownMenuItem typeaheadKey=".jpg">.jpg</DropdownMenuItem>\n          <DropdownMenuItem typeaheadKey=".svg">.svg</DropdownMenuItem>\n          <DropdownMenuItem typeaheadKey=".gif">.gif</DropdownMenuItem>\n        </Dropdown>\n        <DropdownMenuItem typeaheadKey="Audio">Audio</DropdownMenuItem>\n      </Dropdown>\n      <Dropdown trigger="Share >" typeaheadKey="Share">\n        <DropdownMenuItem typeaheadKey="Mail">Mail</DropdownMenuItem>\n        <DropdownMenuItem typeaheadKey="Instagram">Instagram</DropdownMenuItem>\n      </Dropdown>\n    </Dropdown>,\n  args: {\n    trigger: "Menu"\n  }\n}'},null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.storySource)}),CustomElements.parameters=Dropdown_stories_objectSpread(Dropdown_stories_objectSpread({},CustomElements.parameters),{},{storySource:Dropdown_stories_objectSpread({source:'{\n  render: args => <Dropdown {...args}>\n      <DropdownMenuItem typeaheadKey="Undo">\n        <Button $type="secondary">Undo</Button>\n      </DropdownMenuItem>\n      <DropdownMenuItem typeaheadKey="Redo">\n        <Button $type="secondary">Redo</Button>\n      </DropdownMenuItem>\n      <DropdownMenuItem typeaheadKey="Cut" disabled>\n        <Button>Cut</Button>\n      </DropdownMenuItem>\n      <Dropdown trigger={<Button iconAfter={<SvgSprite src={iconChevron} />}>Copy as</Button>} typeaheadKey="Copy as">\n        <DropdownMenuItem typeaheadKey="Text">\n          <Button>Text</Button>\n        </DropdownMenuItem>\n        <DropdownMenuItem typeaheadKey="Video">\n          <Button>Video</Button>\n        </DropdownMenuItem>\n        <Dropdown trigger={<Button iconAfter={<SvgSprite src={iconChevron} />}>Image</Button>} typeaheadKey="Image">\n          <DropdownMenuItem typeaheadKey=".png">\n            <Button>.png</Button>\n          </DropdownMenuItem>\n          <DropdownMenuItem typeaheadKey=".jpg">\n            <Button>.jpg</Button>\n          </DropdownMenuItem>\n          <DropdownMenuItem typeaheadKey=".svg">\n            <Button>.svg</Button>\n          </DropdownMenuItem>\n          <DropdownMenuItem typeaheadKey=".gif">\n            <Button>.gif</Button>\n          </DropdownMenuItem>\n        </Dropdown>\n        <DropdownMenuItem typeaheadKey="Audio">\n          <Button>Audio</Button>\n        </DropdownMenuItem>\n      </Dropdown>\n      <Dropdown trigger={<Button iconAfter={<SvgSprite src={iconChevron} />}>Share</Button>} typeaheadKey="Share">\n        <DropdownMenuItem typeaheadKey="Mail">\n          <Button>Mail</Button>\n        </DropdownMenuItem>\n        <DropdownMenuItem typeaheadKey="Instagram">\n          <Button>Instagram</Button>\n        </DropdownMenuItem>\n      </Dropdown>\n    </Dropdown>,\n  args: {\n    trigger: <Button>Menu</Button>\n  }\n}'},null===(_CustomElements$param=CustomElements.parameters)||void 0===_CustomElements$param?void 0:_CustomElements$param.storySource)}),WithOverlay.parameters=Dropdown_stories_objectSpread(Dropdown_stories_objectSpread({},WithOverlay.parameters),{},{storySource:Dropdown_stories_objectSpread({source:"{\n  render: () => <WithOverlayComponent />\n}"},null===(_WithOverlay$paramete=WithOverlay.parameters)||void 0===_WithOverlay$paramete?void 0:_WithOverlay$paramete.storySource)})},"./src/components/common/overlay/Overlay.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>overlay_Overlay});var _templateObject,esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/react-modal/lib/index.js"),lib_default=__webpack_require__.n(lib),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),x=__webpack_require__("./node_modules/@tabler/icons/icons/x.svg"),isEqual=__webpack_require__("./node_modules/lodash/isEqual.js"),isEqual_default=__webpack_require__.n(isEqual),SvgSprite=__webpack_require__("./src/components/common/svg/SvgSprite.tsx"),OverlayContext=(0,react.createContext)(null),useOverlayContext=function useOverlayContext(){var context=(0,react.useContext)(OverlayContext);if(null==context)throw new Error("Overlay components must be wrapped in <Overlay />");return context},taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),StyledOverlayCloseButton=styled_components_browser_esm.default.button(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  appearance: none;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  color: ",";\n  border-radius: 50%;\n  position: fixed;\n  top: 1rem;\n  right: 2rem;\n  z-index: 2;\n"])),(function(_ref){return _ref.theme.colors.white})),__jsx=react.createElement,OverlayCloseButton=function OverlayCloseButton(_ref){var props=(0,esm_extends.Z)({},_ref),t=(0,es.$G)("common").t,onClose=useOverlayContext().onClose;return __jsx(StyledOverlayCloseButton,(0,esm_extends.Z)({},props,{onClick:onClose,"aria-label":t("overlay.close-button.label")}),__jsx(SvgSprite.Z,{src:x.Z}))};OverlayCloseButton.displayName="OverlayCloseButton",OverlayCloseButton.__docgenInfo={description:"",methods:[],displayName:"OverlayCloseButton"};const close_button_OverlayCloseButton=(0,react.memo)(OverlayCloseButton,isEqual_default());try{OverlayCloseButton.displayName="OverlayCloseButton",OverlayCloseButton.__docgenInfo={description:"",displayName:"OverlayCloseButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/overlay/close-button/OverlayCloseButton.tsx#OverlayCloseButton"]={docgenInfo:OverlayCloseButton.__docgenInfo,name:"OverlayCloseButton",path:"src/components/common/overlay/close-button/OverlayCloseButton.tsx#OverlayCloseButton"})}catch(__react_docgen_typescript_loader_error){}var Overlay_styles_templateObject,StyledOverlayContainer=styled_components_browser_esm.default.div(Overlay_styles_templateObject||(Overlay_styles_templateObject=(0,taggedTemplateLiteral.Z)(["\n  padding-top: 3.5rem;\n  padding-bottom: 3.5rem;\n  margin: 0 3.5rem;\n"]))),_excluded=["children"],Overlay_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}lib_default().setAppElement("#__next");var Overlay=function Overlay(_ref2){var contentLabel=_ref2.contentLabel,_ref2$isOpen=_ref2.isOpen,isOpen=void 0!==_ref2$isOpen&&_ref2$isOpen,children=_ref2.children,onClose=_ref2.onClose,theme=(0,styled_components_browser_esm.useTheme)(),contentId=(0,react.useId)(),overlay=function useOverlay(_ref){var onClose=_ref.onClose,_useState=(0,react.useState)(),headingId=_useState[0],setHeadingId=_useState[1];return(0,react.useMemo)((function(){return{onClose,headingId,setHeadingId}}),[onClose,headingId])}({onClose}),onRequestClose=(0,react.useCallback)((function(){null==onClose||onClose()}),[onClose]);return Overlay_jsx(react.Fragment,null,Overlay_jsx(lib_default(),{closeTimeoutMS:250,shouldCloseOnEsc:!0,shouldFocusAfterRender:!0,shouldReturnFocusAfterClose:!0,isOpen,shouldCloseOnOverlayClick:!0,contentLabel,htmlOpenClassName:"ReactModal__Html--open",style:{overlay:{zIndex:theme.zIndex.overlay}},aria:_objectSpread(_objectSpread({},overlay.headingId?{labelledby:overlay.headingId}:{}),{},{describedby:contentId}),onRequestClose},Overlay_jsx(OverlayContext.Provider,{value:overlay},Overlay_jsx(close_button_OverlayCloseButton,null),Overlay_jsx(StyledOverlayContainer,{id:contentId,tabIndex:0,role:"document"},children))))};Overlay.Heading=(0,react.forwardRef)((function(_ref,ref){var children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded),setHeadingId=useOverlayContext().setHeadingId,id=(0,react.useId)();return(0,react.useLayoutEffect)((function(){return setHeadingId(id),function(){return setHeadingId(void 0)}}),[id,setHeadingId]),(0,react.isValidElement)(children)?(0,react.cloneElement)(children,_objectSpread({ref,id},props)):Overlay_jsx("h2",(0,esm_extends.Z)({},props,{ref,id}),children)})),Overlay.__docgenInfo={description:"",methods:[],displayName:"Overlay",props:{isOpen:{defaultValue:{value:"false",computed:!1},required:!1}}};const overlay_Overlay=Overlay;try{Overlay.displayName="Overlay",Overlay.__docgenInfo={description:"",displayName:"Overlay",props:{isOpen:{defaultValue:{value:"false"},description:"Control overlay visibility",name:"isOpen",required:!1,type:{name:"boolean"}},contentLabel:{defaultValue:null,description:"Content label of the overlay for accessibility reasons",name:"contentLabel",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"Callback when user wants to close the overlay (escape button, outside\nclick, close button click)",name:"onClose",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/overlay/Overlay.tsx#Overlay"]={docgenInfo:Overlay.__docgenInfo,name:"Overlay",path:"src/components/common/overlay/Overlay.tsx#Overlay"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/svg/SvgSprite.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/isEqual.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__),_excluded=["src","children"],_excluded2=["crossOrigin","ref","title"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,SvgSprite=function SvgSprite(_ref){var src=_ref.src,props=(_ref.children,(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded)),title=(props.crossOrigin,props.ref,props.title),typedProps=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(props,_excluded2),titleId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();return __jsx("svg",(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},typedProps,{viewBox:src.viewBox,role:"img","aria-labelledby":title&&titleId}),title&&__jsx("title",{id:titleId},title),__jsx("use",{xlinkHref:"#".concat(src.id)}))};SvgSprite.displayName="SvgSprite",SvgSprite.__docgenInfo={description:"",methods:[],displayName:"SvgSprite"};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgSprite,lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default());try{SvgSprite.displayName="SvgSprite",SvgSprite.__docgenInfo={description:"",displayName:"SvgSprite",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/svg/SvgSprite.tsx#SvgSprite"]={docgenInfo:SvgSprite.__docgenInfo,name:"SvgSprite",path:"src/components/common/svg/SvgSprite.tsx#SvgSprite"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/@tabler/icons/icons/chevron-right.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/svg-baker-runtime/browser-symbol.js"),_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__),_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js"),_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__),symbol=new(_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({id:"chevron-right",use:"chevron-right-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" id="chevron-right"><path d="M0 0h24v24H0z" stroke="none" /><path d="m9 6 6 6-6 6" /></symbol>'});_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);const __WEBPACK_DEFAULT_EXPORT__=symbol}}]);