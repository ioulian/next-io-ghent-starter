(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[806],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/components/common/floating/tooltip/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,CustomElements:()=>CustomElements,Placement:()=>Placement,Uncontrolled:()=>Uncontrolled,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Uncontrolled$paramet,_Uncontrolled$paramet2,_Controlled$parameter,_Controlled$parameter2,_CustomElements$param,_CustomElements$param2,_Placement$parameters,_Placement$parameters2,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_button_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/button/Button.tsx"),_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/floating/tooltip/Tooltip.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Floating UI/Tooltip",component:_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,tags:["autodocs"],decorators:[function(Story){return __jsx("div",{style:{width:"100%",height:"500px",display:"flex",alignItems:"center",justifyContent:"center"}},__jsx(Story,null))}]};var Uncontrolled={render:function render(args){return __jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,args,__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z.Trigger,null,"My trigger"),__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z.Content,null,"My tooltip"))}},ControlledTooltip=function ControlledTooltip(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState[0],setIsOpen=_useState[1];return __jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,{open:isOpen},__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z.Trigger,{onMouseEnter:function onMouseEnter(){setIsOpen(!0)},onMouseLeave:function onMouseLeave(){setIsOpen(!1)}},"My trigger"),__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z.Content,null,"My tooltip"))};ControlledTooltip.displayName="ControlledTooltip";var Controlled={render:function render(){return __jsx(ControlledTooltip,null)},args:{open:!0}},CustomElements={render:function render(args){return __jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,args,__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z.Trigger,null,__jsx(_button_Button__WEBPACK_IMPORTED_MODULE_2__.Z,null,"My trigger")),__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z.Content,null,"My tooltip"))}},Placement={render:function render(args){return __jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,args,__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z.Trigger,null,__jsx(_button_Button__WEBPACK_IMPORTED_MODULE_2__.Z,null,"My trigger")),__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z.Content,null,"My tooltip"))},args:{placement:"right"}};Uncontrolled.parameters=_objectSpread(_objectSpread({},Uncontrolled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Uncontrolled$paramet=Uncontrolled.parameters)||void 0===_Uncontrolled$paramet?void 0:_Uncontrolled$paramet.docs),{},{source:_objectSpread({originalSource:"{\n  render: args => <Tooltip {...args}>\n      <Tooltip.Trigger>My trigger</Tooltip.Trigger>\n      <Tooltip.Content>My tooltip</Tooltip.Content>\n    </Tooltip>\n}"},null===(_Uncontrolled$paramet2=Uncontrolled.parameters)||void 0===_Uncontrolled$paramet2||null===(_Uncontrolled$paramet2=_Uncontrolled$paramet2.docs)||void 0===_Uncontrolled$paramet2?void 0:_Uncontrolled$paramet2.source)})}),Controlled.parameters=_objectSpread(_objectSpread({},Controlled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Controlled$parameter=Controlled.parameters)||void 0===_Controlled$parameter?void 0:_Controlled$parameter.docs),{},{source:_objectSpread({originalSource:"{\n  render: () => <ControlledTooltip />,\n  args: {\n    open: true\n  }\n}"},null===(_Controlled$parameter2=Controlled.parameters)||void 0===_Controlled$parameter2||null===(_Controlled$parameter2=_Controlled$parameter2.docs)||void 0===_Controlled$parameter2?void 0:_Controlled$parameter2.source)})}),CustomElements.parameters=_objectSpread(_objectSpread({},CustomElements.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_CustomElements$param=CustomElements.parameters)||void 0===_CustomElements$param?void 0:_CustomElements$param.docs),{},{source:_objectSpread({originalSource:"{\n  render: args => <Tooltip {...args}>\n      <Tooltip.Trigger>\n        <Button>My trigger</Button>\n      </Tooltip.Trigger>\n      <Tooltip.Content>My tooltip</Tooltip.Content>\n    </Tooltip>\n}"},null===(_CustomElements$param2=CustomElements.parameters)||void 0===_CustomElements$param2||null===(_CustomElements$param2=_CustomElements$param2.docs)||void 0===_CustomElements$param2?void 0:_CustomElements$param2.source)})}),Placement.parameters=_objectSpread(_objectSpread({},Placement.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Placement$parameters=Placement.parameters)||void 0===_Placement$parameters?void 0:_Placement$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  render: args => <Tooltip {...args}>\n      <Tooltip.Trigger>\n        <Button>My trigger</Button>\n      </Tooltip.Trigger>\n      <Tooltip.Content>My tooltip</Tooltip.Content>\n    </Tooltip>,\n  args: {\n    placement: "right"\n  }\n}'},null===(_Placement$parameters2=Placement.parameters)||void 0===_Placement$parameters2||null===(_Placement$parameters2=_Placement$parameters2.docs)||void 0===_Placement$parameters2?void 0:_Placement$parameters2.source)})})},"./src/components/common/floating/tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>tooltip_Tooltip});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),floating_ui_react=__webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Floater=__webpack_require__("./src/components/common/floating/floater/Floater.tsx"),floating_ui_dom=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),floating_ui_core=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),floating_ui_react_dom=__webpack_require__("./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var TooltipContext=(0,react.createContext)(null),useTooltipContext=function useTooltipContext(){var context=(0,react.useContext)(TooltipContext);if(null==context)throw new Error("Tooltip components must be wrapped in <Tooltip />");return context},_excluded=["children"],_excluded2=["children"],__jsx=react.createElement;function Tooltip_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function Tooltip_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Tooltip_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Tooltip_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var TooltipTrigger=(0,react.forwardRef)((function(_ref,propRef){var children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded),context=useTooltipContext(),childrenRef=children.ref,ref=(0,floating_ui_react.qq)([context.refs.setReference,propRef,childrenRef]);return(0,react.isValidElement)(children)?(0,react.cloneElement)(children,context.getReferenceProps(Tooltip_objectSpread(Tooltip_objectSpread(Tooltip_objectSpread({ref},props),children.props),{},{"data-state":context.open?"open":"closed"}))):__jsx("span",(0,esm_extends.Z)({ref,"data-state":context.open?"open":"closed"},context.getReferenceProps(props)),children)})),TooltipContent=(0,react.forwardRef)((function(props,propRef){var _context$x,_context$y,context=useTooltipContext(),ref=(0,floating_ui_react.qq)([context.refs.setFloating,propRef]),theme=(0,styled_components_browser_esm.useTheme)(),_useTransitionStyles=(0,floating_ui_react.Y_)(context.context,{duration:theme.timings.fast}),isMounted=_useTransitionStyles.isMounted,styles=_useTransitionStyles.styles;return __jsx(floating_ui_react.ll,null,isMounted&&__jsx(Floater.Z,(0,esm_extends.Z)({ref,position:{x:null!==(_context$x=context.x)&&void 0!==_context$x?_context$x:0,y:null!==(_context$y=context.y)&&void 0!==_context$y?_context$y:0},arrowPosition:context.middlewareData.arrow,strategy:context.strategy,placement:context.placement,arrowCallback:context.arrowCallback},context.getFloatingProps(props),{style:styles})))})),Tooltip=function Tooltip(_ref2){var children=_ref2.children,tooltip=function useTooltip(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$initialOpen=_ref.initialOpen,initialOpen=void 0!==_ref$initialOpen&&_ref$initialOpen,_ref$placement=_ref.placement,placement=void 0===_ref$placement?"bottom":_ref$placement,controlledOpen=_ref.open,setControlledOpen=_ref.onOpenChange,_useState=(0,react.useState)(initialOpen),uncontrolledOpen=_useState[0],setUncontrolledOpen=_useState[1],open=null!=controlledOpen?controlledOpen:uncontrolledOpen,setOpen=null!=setControlledOpen?setControlledOpen:setUncontrolledOpen,arrowRef=(0,react.useRef)(null),theme=(0,styled_components_browser_esm.useTheme)(),data=(0,floating_ui_react.YF)({placement,open,onOpenChange:setOpen,whileElementsMounted:floating_ui_dom.Me,middleware:[(0,floating_ui_core.cv)(theme.floating.tooltip.offset),(0,floating_ui_core.RR)(),(0,floating_ui_core.uY)({padding:theme.floating.floater.shift}),(0,floating_ui_react_dom.x7)({element:arrowRef})]}),arrowCallback=(0,react.useCallback)((function(node){arrowRef.current=node,data.update()}),[data]),context=data.context,hover=(0,floating_ui_react.XI)(context,{move:!1,enabled:null==controlledOpen}),focus=(0,floating_ui_react.KK)(context,{enabled:null==controlledOpen}),dismiss=(0,floating_ui_react.bQ)(context),role=(0,floating_ui_react.qs)(context,{role:"tooltip"}),interactions=(0,floating_ui_react.NI)([hover,focus,dismiss,role]);return(0,react.useMemo)((function(){return _objectSpread(_objectSpread({open,setOpen,arrowCallback},interactions),data)}),[open,setOpen,arrowCallback,interactions,data])}((0,objectWithoutProperties.Z)(_ref2,_excluded2));return __jsx(TooltipContext.Provider,{value:tooltip},children)};Tooltip.displayName="Tooltip",Tooltip.Trigger=TooltipTrigger,Tooltip.Content=TooltipContent,Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};const tooltip_Tooltip=Tooltip;try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{initialOpen:{defaultValue:null,description:"",name:"initialOpen",required:!1,type:{name:"boolean"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"left-end"'},{value:'"left-start"'},{value:'"right-end"'},{value:'"right-start"'},{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"top-end"'},{value:'"top-start"'}]}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/floating/tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/common/floating/tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/lodash/isEqual.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseIsEqual=__webpack_require__("./node_modules/lodash/_baseIsEqual.js");module.exports=function isEqual(value,other){return baseIsEqual(value,other)}}}]);