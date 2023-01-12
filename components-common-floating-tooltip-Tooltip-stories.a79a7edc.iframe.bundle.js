"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[806],{"./src/components/common/floating/tooltip/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,CustomElements:()=>CustomElements,Placement:()=>Placement,Uncontrolled:()=>Uncontrolled,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Uncontrolled$paramet,_Controlled$parameter,_CustomElements$param,_Placement$parameters,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_button_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/button/Button.tsx"),_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/floating/tooltip/Tooltip.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Floating UI/Tooltip",component:_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,tags:["autodocs"]};var Uncontrolled={render:function render(args){return __jsx("div",{style:{width:"100%",height:"500px",display:"flex",alignItems:"center",justifyContent:"center"}},__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,args,__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z.Trigger,null,"My trigger"),__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z.Content,null,"My tooltip")))}},ControlledTooltip=function ControlledTooltip(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),isOpen=_useState[0],setIsOpen=_useState[1];return __jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,{open:isOpen},__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z.Trigger,{onMouseEnter:function onMouseEnter(){setIsOpen(!0)},onMouseLeave:function onMouseLeave(){setIsOpen(!1)}},"My trigger"),__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z.Content,null,"My tooltip"))};ControlledTooltip.displayName="ControlledTooltip";var Controlled={render:function render(){return __jsx("div",{style:{width:"100%",height:"500px",display:"flex",alignItems:"center",justifyContent:"center"}},__jsx(ControlledTooltip,null))},args:{open:!0}},CustomElements={render:function render(args){return __jsx("div",{style:{width:"100%",height:"500px",display:"flex",alignItems:"center",justifyContent:"center"}},__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,args,__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z.Trigger,null,__jsx(_button_Button__WEBPACK_IMPORTED_MODULE_2__.Z,null,"My trigger")),__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z.Content,null,"My tooltip")))}},Placement={render:function render(args){return __jsx("div",{style:{width:"100%",height:"500px",display:"flex",alignItems:"center",justifyContent:"center"}},__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,args,__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z.Trigger,null,__jsx(_button_Button__WEBPACK_IMPORTED_MODULE_2__.Z,null,"My trigger")),__jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Z.Content,null,"My tooltip")))},args:{placement:"right"}};Uncontrolled.parameters=_objectSpread(_objectSpread({},Uncontrolled.parameters),{},{storySource:_objectSpread({source:'{\n  render: args => <div style={{\n    width: "100%",\n    height: "500px",\n    display: "flex",\n    alignItems: "center",\n    justifyContent: "center"\n  }}>\n      <Tooltip {...args}>\n        <Tooltip.Trigger>My trigger</Tooltip.Trigger>\n        <Tooltip.Content>My tooltip</Tooltip.Content>\n      </Tooltip>\n    </div>\n}'},null===(_Uncontrolled$paramet=Uncontrolled.parameters)||void 0===_Uncontrolled$paramet?void 0:_Uncontrolled$paramet.storySource)}),Controlled.parameters=_objectSpread(_objectSpread({},Controlled.parameters),{},{storySource:_objectSpread({source:'{\n  render: () => <div style={{\n    width: "100%",\n    height: "500px",\n    display: "flex",\n    alignItems: "center",\n    justifyContent: "center"\n  }}>\n      <ControlledTooltip />\n    </div>,\n  args: {\n    open: true\n  }\n}'},null===(_Controlled$parameter=Controlled.parameters)||void 0===_Controlled$parameter?void 0:_Controlled$parameter.storySource)}),CustomElements.parameters=_objectSpread(_objectSpread({},CustomElements.parameters),{},{storySource:_objectSpread({source:'{\n  render: args => <div style={{\n    width: "100%",\n    height: "500px",\n    display: "flex",\n    alignItems: "center",\n    justifyContent: "center"\n  }}>\n      <Tooltip {...args}>\n        <Tooltip.Trigger>\n          <Button>My trigger</Button>\n        </Tooltip.Trigger>\n        <Tooltip.Content>My tooltip</Tooltip.Content>\n      </Tooltip>\n    </div>\n}'},null===(_CustomElements$param=CustomElements.parameters)||void 0===_CustomElements$param?void 0:_CustomElements$param.storySource)}),Placement.parameters=_objectSpread(_objectSpread({},Placement.parameters),{},{storySource:_objectSpread({source:'{\n  render: args => <div style={{\n    width: "100%",\n    height: "500px",\n    display: "flex",\n    alignItems: "center",\n    justifyContent: "center"\n  }}>\n      <Tooltip {...args}>\n        <Tooltip.Trigger>\n          <Button>My trigger</Button>\n        </Tooltip.Trigger>\n        <Tooltip.Content>My tooltip</Tooltip.Content>\n      </Tooltip>\n    </div>,\n  args: {\n    placement: "right"\n  }\n}'},null===(_Placement$parameters=Placement.parameters)||void 0===_Placement$parameters?void 0:_Placement$parameters.storySource)})}}]);