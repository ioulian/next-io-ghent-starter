"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[9275],{"./src/components/common/button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AccessibleIconButton:()=>AccessibleIconButton,Default:()=>Default,IconOnly:()=>IconOnly,NextLink:()=>NextLink,NextLinkLegacy:()=>NextLinkLegacy,Text:()=>Text,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});var esm_extends=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),chevron_right=__webpack_require__("./node_modules/@tabler/icons/icons/chevron-right.svg"),chevron_left=__webpack_require__("./node_modules/@tabler/icons/icons/chevron-left.svg"),browser_symbol=__webpack_require__("./node_modules/svg-baker-runtime/browser-symbol.js"),browser_symbol_default=__webpack_require__.n(browser_symbol),browser_sprite_build=__webpack_require__("./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js"),browser_sprite_build_default=__webpack_require__.n(browser_sprite_build),symbol=new(browser_symbol_default())({id:"settings",use:"settings-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" id="settings"><path stroke="none" d="M0 0h24v24H0z" /><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065z" /><path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0" /></symbol>'});browser_sprite_build_default().add(symbol);const settings=symbol;var next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),Tooltip=__webpack_require__("./src/components/common/floating/tooltip/Tooltip.tsx"),Button=__webpack_require__("./src/components/common/button/Button.tsx"),SvgSprite=__webpack_require__("./src/components/common/svg/SvgSprite.tsx"),__jsx=react.createElement;const Button_stories={title:"UI/Buttons/Button",component:Button.Z,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}};var Default={render:function render(args){return __jsx(Button.Z,args)},args:{$type:"primary",children:"Button",disabled:!1,isLoading:!1,iconOnly:!1,$fullWidth:!1,$size:"normal"}},WithIcons={render:function render(args){return __jsx(Button.Z,args)},args:{$type:"primary",children:"Button",disabled:!1,isLoading:!1,iconOnly:!1,$fullWidth:!1,$size:"normal",iconBefore:__jsx(SvgSprite.Z,{src:chevron_left.Z,title:"test-title"}),iconAfter:__jsx(SvgSprite.Z,{src:chevron_right.Z,title:"test-title"})}},IconOnly={render:function render(args){return __jsx(Button.Z,args)},args:{$size:"base",$type:"simple",children:"Settings",disabled:!1,isLoading:!1,$fullWidth:!1,iconBefore:__jsx(SvgSprite.Z,{src:settings}),iconOnly:!0}},Text={render:function render(args){return __jsx(Button.Z,args)},args:{$size:"base",$type:"simple",children:"Settings",disabled:!1,isLoading:!1,$fullWidth:!1}},AccessibleIconButton={render:function render(args){return __jsx(Tooltip.Z,{placement:"bottom"},__jsx(Tooltip.Z.Trigger,null,__jsx(Button.Z,args)),__jsx(Tooltip.Z.Content,null,"Settings"))},args:{$size:"base",$type:"simple",children:"Settings",disabled:!1,isLoading:!1,$fullWidth:!1,iconBefore:__jsx(SvgSprite.Z,{src:settings}),iconOnly:!0}},NextLinkLegacy={render:function render(args){return __jsx(link_default(),{href:"/test",passHref:!0,legacyBehavior:!0,target:"_blank"},__jsx(Button.Z,args))},args:{$type:"primary",as:"a",children:"Navigate to another page",disabled:!1,isLoading:!1,iconOnly:!1,$fullWidth:!1,$size:"normal",iconAfter:__jsx(SvgSprite.Z,{src:chevron_right.Z})}},NextLink={render:function render(args){return __jsx(Button.Z,(0,esm_extends.Z)({as:link_default(),href:"/test",target:"_blank"},args))},args:{$type:"primary",as:"a",children:"Navigate to another page",disabled:!1,isLoading:!1,iconOnly:!1,$fullWidth:!1,$size:"normal",iconAfter:__jsx(SvgSprite.Z,{src:chevron_right.Z})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => <Button {...args} />,\n  args: {\n    $type: "primary",\n    children: "Button",\n    disabled: false,\n    isLoading: false,\n    iconOnly: false,\n    $fullWidth: false,\n    $size: "normal"\n  }\n}',...Default.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:'{\n  render: args => <Button {...args} />,\n  args: {\n    $type: "primary",\n    children: "Button",\n    disabled: false,\n    isLoading: false,\n    iconOnly: false,\n    $fullWidth: false,\n    $size: "normal",\n    iconBefore: <SvgSprite src={iconChevronLeft} title="test-title" />,\n    iconAfter: <SvgSprite src={iconChevronRight} title="test-title" />\n  }\n}',...WithIcons.parameters?.docs?.source}}},IconOnly.parameters={...IconOnly.parameters,docs:{...IconOnly.parameters?.docs,source:{originalSource:'{\n  render: args => <Button {...args} />,\n  args: {\n    $size: "base",\n    $type: "simple",\n    children: "Settings",\n    disabled: false,\n    isLoading: false,\n    $fullWidth: false,\n    iconBefore: <SvgSprite src={iconSettings} />,\n    iconOnly: true\n  }\n}',...IconOnly.parameters?.docs?.source}}},Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:'{\n  render: args => <Button {...args} />,\n  args: {\n    $size: "base",\n    $type: "simple",\n    children: "Settings",\n    disabled: false,\n    isLoading: false,\n    $fullWidth: false\n  }\n}',...Text.parameters?.docs?.source}}},AccessibleIconButton.parameters={...AccessibleIconButton.parameters,docs:{...AccessibleIconButton.parameters?.docs,source:{originalSource:'{\n  render: args => <Tooltip placement="bottom">\n      <Tooltip.Trigger>\n        <Button {...args} />\n      </Tooltip.Trigger>\n      <Tooltip.Content>Settings</Tooltip.Content>\n    </Tooltip>,\n  args: {\n    $size: "base",\n    $type: "simple",\n    children: "Settings",\n    disabled: false,\n    isLoading: false,\n    $fullWidth: false,\n    iconBefore: <SvgSprite src={iconSettings} />,\n    iconOnly: true\n  }\n}',...AccessibleIconButton.parameters?.docs?.source}}},NextLinkLegacy.parameters={...NextLinkLegacy.parameters,docs:{...NextLinkLegacy.parameters?.docs,source:{originalSource:'{\n  render: args => <Link href="/test" passHref legacyBehavior target="_blank">\n      <Button {...args} />\n    </Link>,\n  args: {\n    $type: "primary",\n    as: "a",\n    children: "Navigate to another page",\n    disabled: false,\n    isLoading: false,\n    iconOnly: false,\n    $fullWidth: false,\n    $size: "normal",\n    iconAfter: <SvgSprite src={iconChevronRight} />\n  }\n}',...NextLinkLegacy.parameters?.docs?.source}}},NextLink.parameters={...NextLink.parameters,docs:{...NextLink.parameters?.docs,source:{originalSource:'{\n  render: args => <Button as={Link} href="/test" target="_blank" {...args} />,\n  args: {\n    $type: "primary",\n    as: "a",\n    children: "Navigate to another page",\n    disabled: false,\n    isLoading: false,\n    iconOnly: false,\n    $fullWidth: false,\n    $size: "normal",\n    iconAfter: <SvgSprite src={iconChevronRight} />\n  }\n}',...NextLink.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithIcons","IconOnly","Text","AccessibleIconButton","NextLinkLegacy","NextLink"]},"./src/components/common/floating/tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>tooltip_Tooltip});var esm_extends=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),floating_ui_react=__webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Floater=__webpack_require__("./src/components/common/floating/floater/Floater.tsx"),floating_ui_dom=__webpack_require__("./node_modules/@floating-ui/react-dom/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),floating_ui_core=__webpack_require__("./node_modules/@floating-ui/react-dom/node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),floating_ui_react_dom=__webpack_require__("./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var TooltipContext=(0,react.createContext)(null),useTooltipContext=function useTooltipContext(){var context=(0,react.useContext)(TooltipContext);if(null===context)throw new Error("Tooltip components must be wrapped in <Tooltip />");return context},_excluded=["children"],_excluded2=["children"],__jsx=react.createElement;function Tooltip_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function Tooltip_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Tooltip_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Tooltip_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var TooltipTrigger=(0,react.forwardRef)((function(_ref,propRef){var children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded),context=useTooltipContext(),childrenRef=children.ref,ref=(0,floating_ui_react.qq)([context.refs.setReference,propRef,childrenRef]);return(0,react.isValidElement)(children)?(0,react.cloneElement)(children,context.getReferenceProps(Tooltip_objectSpread(Tooltip_objectSpread(Tooltip_objectSpread({ref},props),children.props),{},{"data-state":context.open?"open":"closed"}))):__jsx("span",(0,esm_extends.Z)({ref,"data-state":context.open?"open":"closed"},context.getReferenceProps(props)),children)})),TooltipContent=(0,react.forwardRef)((function(props,propRef){var context=useTooltipContext(),ref=(0,floating_ui_react.qq)([context.refs.setFloating,propRef]),theme=(0,styled_components_browser_esm.useTheme)(),_useTransitionStyles=(0,floating_ui_react.Y_)(context.context,{duration:{open:theme.timings.normal,close:theme.timings.fast}}),isMounted=_useTransitionStyles.isMounted,styles=_useTransitionStyles.styles,position=(0,react.useMemo)((function(){var _context$x,_context$y;return{x:null!==(_context$x=context.x)&&void 0!==_context$x?_context$x:0,y:null!==(_context$y=context.y)&&void 0!==_context$y?_context$y:0}}),[context.x,context.y]);return isMounted?__jsx(floating_ui_react.ll,null,__jsx(Floater.Z,(0,esm_extends.Z)({ref,position,arrowPosition:context.middlewareData.arrow,strategy:context.strategy,placement:context.placement,arrowCallback:context.arrowCallback},context.getFloatingProps(props),{style:styles}))):null})),Tooltip=function Tooltip(_ref2){var children=_ref2.children,tooltip=function useTooltip(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$initialOpen=_ref.initialOpen,initialOpen=void 0!==_ref$initialOpen&&_ref$initialOpen,_ref$placement=_ref.placement,placement=void 0===_ref$placement?"bottom":_ref$placement,controlledOpen=_ref.open,setControlledOpen=_ref.onOpenChange,_useState=(0,react.useState)(initialOpen),uncontrolledOpen=_useState[0],setUncontrolledOpen=_useState[1],open=null!=controlledOpen?controlledOpen:uncontrolledOpen,setOpen=null!=setControlledOpen?setControlledOpen:setUncontrolledOpen,arrowRef=(0,react.useRef)(null),theme=(0,styled_components_browser_esm.useTheme)(),data=(0,floating_ui_react.YF)({placement,open,onOpenChange:setOpen,whileElementsMounted:floating_ui_dom.Me,middleware:[(0,floating_ui_core.cv)(theme.floating.tooltip.offset),(0,floating_ui_dom.RR)({crossAxis:placement.includes("-"),fallbackAxisSideDirection:"start",padding:theme.floating.floater.flip}),(0,floating_ui_dom.uY)({padding:theme.floating.floater.shift}),(0,floating_ui_react_dom.x7)({element:arrowRef,padding:theme.floating.floater.arrow.padding})]}),arrowCallback=(0,react.useCallback)((function(node){arrowRef.current=node,data.update()}),[data]),context=data.context,hover=(0,floating_ui_react.XI)(context,{move:!1,enabled:void 0===controlledOpen}),focus=(0,floating_ui_react.KK)(context,{enabled:void 0===controlledOpen}),dismiss=(0,floating_ui_react.bQ)(context),role=(0,floating_ui_react.qs)(context,{role:"tooltip"}),interactions=(0,floating_ui_react.NI)([hover,focus,dismiss,role]);return(0,react.useMemo)((function(){return _objectSpread(_objectSpread({open,setOpen,arrowCallback},interactions),data)}),[open,setOpen,arrowCallback,interactions,data])}((0,objectWithoutProperties.Z)(_ref2,_excluded2));return __jsx(TooltipContext.Provider,{value:tooltip},children)};Tooltip.displayName="Tooltip",Tooltip.Trigger=TooltipTrigger,Tooltip.Content=TooltipContent;const tooltip_Tooltip=Tooltip;try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{initialOpen:{defaultValue:null,description:"",name:"initialOpen",required:!1,type:{name:"boolean"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"left-end"'},{value:'"left-start"'},{value:'"right-end"'},{value:'"right-start"'},{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"top-end"'},{value:'"top-start"'}]}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/floating/tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/common/floating/tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/svg/SvgSprite.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_excluded=["src","children"],_excluded2=["crossOrigin","ref","title"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,SvgSprite=function SvgSprite(_ref){var src=_ref.src,props=(_ref.children,(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded)),title=(props.crossOrigin,props.ref,props.title),typedProps=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded2),titleId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();return __jsx("svg",(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},typedProps,{viewBox:src.viewBox,role:title?"img":void 0,"aria-hidden":!title||void 0,"aria-labelledby":title?titleId:void 0}),title?__jsx("title",{id:titleId},title):null,__jsx("use",{xlinkHref:"#".concat(src.id)}))};SvgSprite.displayName="SvgSprite";const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgSprite);try{SvgSprite.displayName="SvgSprite",SvgSprite.__docgenInfo={description:"",displayName:"SvgSprite",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"{ id: string; viewBox: string; } & string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/svg/SvgSprite.tsx#SvgSprite"]={docgenInfo:SvgSprite.__docgenInfo,name:"SvgSprite",path:"src/components/common/svg/SvgSprite.tsx#SvgSprite"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/@tabler/icons/icons/chevron-left.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/svg-baker-runtime/browser-symbol.js"),_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__),_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js"),_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__),symbol=new(_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({id:"chevron-left",use:"chevron-left-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" id="chevron-left"><path stroke="none" d="M0 0h24v24H0z" /><path d="m15 6-6 6 6 6" /></symbol>'});_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);const __WEBPACK_DEFAULT_EXPORT__=symbol},"./node_modules/@tabler/icons/icons/chevron-right.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/svg-baker-runtime/browser-symbol.js"),_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__),_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js"),_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__),symbol=new(_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({id:"chevron-right",use:"chevron-right-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" id="chevron-right"><path stroke="none" d="M0 0h24v24H0z" /><path d="m9 6 6 6-6 6" /></symbol>'});_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);const __WEBPACK_DEFAULT_EXPORT__=symbol}}]);