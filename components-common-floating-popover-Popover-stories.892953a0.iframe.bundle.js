"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[9105],{"./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/components/common/floating/popover/Popover.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,CustomElements:()=>CustomElements,Placement:()=>Placement,Uncontrolled:()=>Uncontrolled,default:()=>Popover_stories});var defineProperty=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/common/button/Button.tsx"),Heading=__webpack_require__("./src/components/common/heading/Heading.tsx"),Text=__webpack_require__("./src/components/common/text/Text.tsx"),esm_extends=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),floating_ui_react_esm=__webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.esm.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Floater=__webpack_require__("./src/components/common/floating/floater/Floater.tsx"),floating_ui_dom_browser_min=__webpack_require__("./node_modules/@floating-ui/react-dom/node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs"),floating_ui_core_browser_min=__webpack_require__("./node_modules/@floating-ui/react-dom/node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs"),floating_ui_react_dom_esm=__webpack_require__("./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var PopoverContext=(0,react.createContext)(null),usePopoverContext=function usePopoverContext(){var context=(0,react.useContext)(PopoverContext);if(null==context)throw new Error("Popover components must be wrapped in <Popover />");return context},_excluded=["children"],_excluded2=["children"],_excluded3=["children"],_excluded4=["children"],_excluded5=["children","modal"],__jsx=react.createElement;function Popover_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function Popover_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Popover_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Popover_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var PopoverTrigger=(0,react.forwardRef)((function(_ref,propRef){var children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded),context=usePopoverContext(),childrenRef=children.ref,ref=(0,floating_ui_react_esm.qq)([context.refs.setReference,propRef,childrenRef]);return(0,react.isValidElement)(children)?(0,react.cloneElement)(children,context.getReferenceProps(Popover_objectSpread(Popover_objectSpread(Popover_objectSpread({ref},props),children.props),{},{"data-state":context.open?"open":"closed"}))):__jsx("button",(0,esm_extends.Z)({ref,"data-state":context.open?"open":"closed"},context.getReferenceProps(props)),children)})),PopoverContent=(0,react.forwardRef)((function(props,propRef){var _context$x,_context$y,context=usePopoverContext(),ref=(0,floating_ui_react_esm.qq)([context.refs.setFloating,propRef]),theme=(0,styled_components_browser_esm.useTheme)(),_useTransitionStyles=(0,floating_ui_react_esm.Y_)(context.context,{duration:theme.timings.fast}),isMounted=_useTransitionStyles.isMounted,styles=_useTransitionStyles.styles;return __jsx(floating_ui_react_esm.ll,null,isMounted&&__jsx(floating_ui_react_esm.wD,{context:context.context,modal:context.modal},__jsx(Floater.Z,(0,esm_extends.Z)({ref,position:{x:null!==(_context$x=context.x)&&void 0!==_context$x?_context$x:0,y:null!==(_context$y=context.y)&&void 0!==_context$y?_context$y:0},arrowPosition:context.middlewareData.arrow,strategy:context.strategy,placement:context.placement,arrowCallback:context.arrowCallback,"aria-labelledby":context.labelId,"aria-describedby":context.descriptionId},context.getFloatingProps(props),{style:styles}),props.children)))})),PopoverHeading=(0,react.forwardRef)((function(_ref2,ref){var children=_ref2.children,props=(0,objectWithoutProperties.Z)(_ref2,_excluded2),setLabelId=usePopoverContext().setLabelId,id=(0,floating_ui_react_esm.PC)();return(0,react.useLayoutEffect)((function(){return setLabelId(id),function(){return setLabelId(void 0)}}),[id,setLabelId]),(0,react.isValidElement)(children)?(0,react.cloneElement)(children,Popover_objectSpread({ref,id},props)):__jsx("h2",(0,esm_extends.Z)({},props,{ref,id}),children)})),PopoverDescription=(0,react.forwardRef)((function(_ref3,ref){var children=_ref3.children,props=(0,objectWithoutProperties.Z)(_ref3,_excluded3),setDescriptionId=usePopoverContext().setDescriptionId,id=(0,floating_ui_react_esm.PC)();return(0,react.useLayoutEffect)((function(){return setDescriptionId(id),function(){return setDescriptionId(void 0)}}),[id,setDescriptionId]),(0,react.isValidElement)(children)?(0,react.cloneElement)(children,Popover_objectSpread({ref,id},props)):__jsx("p",(0,esm_extends.Z)({},props,{ref,id}),children)})),PopoverClose=(0,react.forwardRef)((function(_ref4,ref){var children=_ref4.children,props=(0,objectWithoutProperties.Z)(_ref4,_excluded4),state=usePopoverContext(),onClick=(0,react.useCallback)((function(){state.setOpen(!1)}),[state]);return(0,react.isValidElement)(children)?(0,react.cloneElement)(children,Popover_objectSpread({ref,onClick},props)):__jsx("button",(0,esm_extends.Z)({onClick},props,{ref}),children)})),Popover=function Popover(_ref5){var children=_ref5.children,_ref5$modal=_ref5.modal,popover=function usePopover(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$initialOpen=_ref.initialOpen,initialOpen=void 0!==_ref$initialOpen&&_ref$initialOpen,placement=_ref.placement,_ref$modal=_ref.modal,modal=void 0===_ref$modal||_ref$modal,controlledOpen=_ref.open,setControlledOpen=_ref.onOpenChange,_useState=(0,react.useState)(initialOpen),uncontrolledOpen=_useState[0],setUncontrolledOpen=_useState[1],_useState2=(0,react.useState)(),labelId=_useState2[0],setLabelId=_useState2[1],_useState3=(0,react.useState)(),descriptionId=_useState3[0],setDescriptionId=_useState3[1],open=null!=controlledOpen?controlledOpen:uncontrolledOpen,setOpen=null!=setControlledOpen?setControlledOpen:setUncontrolledOpen,arrowRef=(0,react.useRef)(null),theme=(0,styled_components_browser_esm.useTheme)(),data=(0,floating_ui_react_esm.YF)({placement,open,onOpenChange:setOpen,whileElementsMounted:floating_ui_dom_browser_min.Me,middleware:[(0,floating_ui_core_browser_min.cv)(theme.floating.popover.offset),(0,floating_ui_core_browser_min.RR)(),(0,floating_ui_core_browser_min.uY)({padding:theme.floating.floater.shift}),(0,floating_ui_react_dom_esm.x7)({element:arrowRef})]}),arrowCallback=(0,react.useCallback)((function(node){arrowRef.current=node,data.update()}),[data]),context=data.context,click=(0,floating_ui_react_esm.eS)(context,{enabled:null==controlledOpen}),dismiss=(0,floating_ui_react_esm.bQ)(context),role=(0,floating_ui_react_esm.qs)(context),interactions=(0,floating_ui_react_esm.NI)([click,dismiss,role]);return(0,react.useMemo)((function(){return _objectSpread(_objectSpread(_objectSpread({open,setOpen},interactions),data),{},{modal,arrowCallback,labelId,descriptionId,setLabelId,setDescriptionId})}),[open,setOpen,interactions,arrowCallback,data,modal,labelId,descriptionId])}(Popover_objectSpread({modal:void 0!==_ref5$modal&&_ref5$modal},(0,objectWithoutProperties.Z)(_ref5,_excluded5)));return __jsx(PopoverContext.Provider,{value:popover},children)};Popover.displayName="Popover",Popover.Trigger=PopoverTrigger,Popover.Close=PopoverClose,Popover.Content=PopoverContent,Popover.Heading=PopoverHeading,Popover.Description=PopoverDescription,Popover.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{modal:{defaultValue:{value:"false",computed:!1},required:!1}}};const popover_Popover=Popover;try{Popover.displayName="Popover",Popover.__docgenInfo={description:"",displayName:"Popover",props:{initialOpen:{defaultValue:null,description:"",name:"initialOpen",required:!1,type:{name:"boolean"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"left-end"'},{value:'"left-start"'},{value:'"right-end"'},{value:'"right-start"'},{value:'"top-end"'},{value:'"top-start"'},{value:'"bottom-end"'},{value:'"bottom-start"'}]}},modal:{defaultValue:{value:"false"},description:"",name:"modal",required:!1,type:{name:"boolean"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/floating/popover/Popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"src/components/common/floating/popover/Popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}var _Uncontrolled$paramet,_Uncontrolled$paramet2,_Uncontrolled$paramet3,_Controlled$parameter,_Controlled$parameter2,_Controlled$parameter3,_CustomElements$param,_CustomElements$param2,_CustomElements$param3,_Placement$parameters,_Placement$parameters2,_Placement$parameters3,Popover_stories_jsx=react.createElement;function Popover_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function Popover_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Popover_stories_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Popover_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Popover_stories={title:"UI/Floating UI/Popover",component:popover_Popover,tags:["autodocs"],decorators:[function(Story){return Popover_stories_jsx("div",{style:{width:"100%",height:"500px",display:"flex",alignItems:"center",justifyContent:"center"}},Popover_stories_jsx(Story,null))}]};var Uncontrolled={render:function render(args){return Popover_stories_jsx(popover_Popover,args,Popover_stories_jsx(popover_Popover.Trigger,null,"My trigger"),Popover_stories_jsx(popover_Popover.Content,null,Popover_stories_jsx(popover_Popover.Heading,null,"My popover heading"),Popover_stories_jsx(popover_Popover.Description,null,"My popover description"),Popover_stories_jsx(popover_Popover.Close,null,"Close")))}},ControlledPopover=function ControlledPopover(){var _useState=(0,react.useState)(!0),isOpen=_useState[0],setIsOpen=_useState[1];return Popover_stories_jsx(popover_Popover,{open:isOpen},Popover_stories_jsx(popover_Popover.Trigger,{onClick:function onClick(){setIsOpen(!isOpen)}},"My trigger"),Popover_stories_jsx(popover_Popover.Content,null,Popover_stories_jsx(popover_Popover.Heading,null,"My popover heading"),Popover_stories_jsx(popover_Popover.Description,null,"My popover description"),Popover_stories_jsx(popover_Popover.Close,{onClick:function onClick(){setIsOpen(!1)}},"Close")))};ControlledPopover.displayName="ControlledPopover";var Controlled={render:function render(){return Popover_stories_jsx(ControlledPopover,null)}},CustomElements={render:function render(args){return Popover_stories_jsx(popover_Popover,args,Popover_stories_jsx(popover_Popover.Trigger,null,Popover_stories_jsx(Button.Z,null,"My trigger")),Popover_stories_jsx(popover_Popover.Content,null,Popover_stories_jsx(popover_Popover.Heading,null,Popover_stories_jsx(Heading.Z,null,"My popover heading")),Popover_stories_jsx(popover_Popover.Description,null,Popover_stories_jsx(Text.Z,null,Popover_stories_jsx("p",null,"My popover description"))),Popover_stories_jsx(popover_Popover.Close,null,Popover_stories_jsx(Button.Z,null,"Close"))))}},Placement={render:function render(args){return Popover_stories_jsx(popover_Popover,args,Popover_stories_jsx(popover_Popover.Trigger,null,Popover_stories_jsx(Button.Z,null,"My trigger")),Popover_stories_jsx(popover_Popover.Content,null,Popover_stories_jsx(popover_Popover.Heading,null,"My popover heading"),Popover_stories_jsx(popover_Popover.Description,null,"My popover description"),Popover_stories_jsx(popover_Popover.Close,null,"Close")))},args:{placement:"right"}};Uncontrolled.parameters=Popover_stories_objectSpread(Popover_stories_objectSpread({},Uncontrolled.parameters),{},{docs:Popover_stories_objectSpread(Popover_stories_objectSpread({},null===(_Uncontrolled$paramet=Uncontrolled.parameters)||void 0===_Uncontrolled$paramet?void 0:_Uncontrolled$paramet.docs),{},{source:Popover_stories_objectSpread({originalSource:"{\n  render: args => <Popover {...args}>\n      <Popover.Trigger>My trigger</Popover.Trigger>\n      <Popover.Content>\n        <Popover.Heading>My popover heading</Popover.Heading>\n        <Popover.Description>My popover description</Popover.Description>\n        <Popover.Close>Close</Popover.Close>\n      </Popover.Content>\n    </Popover>\n}"},null===(_Uncontrolled$paramet2=Uncontrolled.parameters)||void 0===_Uncontrolled$paramet2||null===(_Uncontrolled$paramet3=_Uncontrolled$paramet2.docs)||void 0===_Uncontrolled$paramet3?void 0:_Uncontrolled$paramet3.source)})}),Controlled.parameters=Popover_stories_objectSpread(Popover_stories_objectSpread({},Controlled.parameters),{},{docs:Popover_stories_objectSpread(Popover_stories_objectSpread({},null===(_Controlled$parameter=Controlled.parameters)||void 0===_Controlled$parameter?void 0:_Controlled$parameter.docs),{},{source:Popover_stories_objectSpread({originalSource:"{\n  render: () => <ControlledPopover />\n}"},null===(_Controlled$parameter2=Controlled.parameters)||void 0===_Controlled$parameter2||null===(_Controlled$parameter3=_Controlled$parameter2.docs)||void 0===_Controlled$parameter3?void 0:_Controlled$parameter3.source)})}),CustomElements.parameters=Popover_stories_objectSpread(Popover_stories_objectSpread({},CustomElements.parameters),{},{docs:Popover_stories_objectSpread(Popover_stories_objectSpread({},null===(_CustomElements$param=CustomElements.parameters)||void 0===_CustomElements$param?void 0:_CustomElements$param.docs),{},{source:Popover_stories_objectSpread({originalSource:"{\n  render: args => <Popover {...args}>\n      <Popover.Trigger>\n        <Button>My trigger</Button>\n      </Popover.Trigger>\n      <Popover.Content>\n        <Popover.Heading>\n          <Heading>My popover heading</Heading>\n        </Popover.Heading>\n        <Popover.Description>\n          <Text>\n            <p>My popover description</p>\n          </Text>\n        </Popover.Description>\n        <Popover.Close>\n          <Button>Close</Button>\n        </Popover.Close>\n      </Popover.Content>\n    </Popover>\n}"},null===(_CustomElements$param2=CustomElements.parameters)||void 0===_CustomElements$param2||null===(_CustomElements$param3=_CustomElements$param2.docs)||void 0===_CustomElements$param3?void 0:_CustomElements$param3.source)})}),Placement.parameters=Popover_stories_objectSpread(Popover_stories_objectSpread({},Placement.parameters),{},{docs:Popover_stories_objectSpread(Popover_stories_objectSpread({},null===(_Placement$parameters=Placement.parameters)||void 0===_Placement$parameters?void 0:_Placement$parameters.docs),{},{source:Popover_stories_objectSpread({originalSource:'{\n  render: args => <Popover {...args}>\n      <Popover.Trigger>\n        <Button>My trigger</Button>\n      </Popover.Trigger>\n      <Popover.Content>\n        <Popover.Heading>My popover heading</Popover.Heading>\n        <Popover.Description>My popover description</Popover.Description>\n        <Popover.Close>Close</Popover.Close>\n      </Popover.Content>\n    </Popover>,\n  args: {\n    placement: "right"\n  }\n}'},null===(_Placement$parameters2=Placement.parameters)||void 0===_Placement$parameters2||null===(_Placement$parameters3=_Placement$parameters2.docs)||void 0===_Placement$parameters3?void 0:_Placement$parameters3.source)})})},"./src/components/common/heading/Heading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>heading_Heading});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,esm_extends=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),dist=__webpack_require__("./node_modules/css-in-js-media/dist/index.js"),dist_default=__webpack_require__.n(dist),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),StyledHeading=styled_components_browser_esm.default.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  font-family: ",";\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin: 0;\n\n  ","\n"])),(function(_ref){return _ref.theme.fonts.familyHeadings}),(function(_ref2){var $size=_ref2.$size;return"display"===$size?(0,styled_components_browser_esm.css)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n          font-size: 1.625rem;\n          line-height: 1.24;\n\n          "," {\n            font-size: 3rem;\n          }\n        "])),dist_default()(">=tablet")):"h1"===$size?(0,styled_components_browser_esm.css)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n          font-size: 1.75rem;\n          line-height: 1.24;\n\n          "," {\n            font-size: 2.25rem;\n          }\n        "])),dist_default()(">=tablet")):"h2"===$size?(0,styled_components_browser_esm.css)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n          font-size: 1.5rem;\n          line-height: 1.24;\n\n          "," {\n            font-size: 2rem;\n          }\n        "])),dist_default()(">=tablet")):"h3"===$size?(0,styled_components_browser_esm.css)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n          font-size: 1.25rem;\n          line-height: 1.5;\n\n          "," {\n            font-size: 1.375rem;\n          }\n        "])),dist_default()(">=tablet")):"h4"===$size?(0,styled_components_browser_esm.css)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n          font-size: 1rem;\n          line-height: 1.5;\n\n          "," {\n            font-size: 1.125rem;\n          }\n        "])),dist_default()(">=tablet")):"h5"===$size?(0,styled_components_browser_esm.css)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n          font-size: 0.875rem;\n          line-height: 1.5;\n\n          "," {\n            font-size: 1rem;\n          }\n        "])),dist_default()(">=tablet")):"h6"===$size?(0,styled_components_browser_esm.css)(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.Z)(["\n          font-size: 0.75rem;\n          line-height: 1.5;\n\n          "," {\n            font-size: 0.875rem;\n          }\n        "])),dist_default()(">=tablet")):""})),_excluded=["type","size","$size","children"],__jsx=react.createElement,Heading=(0,react.forwardRef)((function(_ref,ref){var _ref$type=_ref.type,type=void 0===_ref$type?"h2":_ref$type,_ref$size=_ref.size,size=void 0===_ref$size?type:_ref$size,children=(_ref.$size,_ref.children),props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(StyledHeading,(0,esm_extends.Z)({$size:size,as:type},props,{ref}),children)}));Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{type:{defaultValue:{value:'"h2"',computed:!1},required:!1},size:{defaultValue:{value:"type",computed:!0},required:!1}}};const heading_Heading=(0,react.memo)(Heading);try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{type:{defaultValue:{value:"h2"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},size:{defaultValue:{value:"h2"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"display"'}]}},$size:{defaultValue:null,description:"",name:"$size",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"display"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/heading/Heading.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/components/common/heading/Heading.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>text_Text});var _templateObject,objectWithoutProperties=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),StyledText=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").default.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(['\n  font-size: 1rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n\n  p {\n    + p,\n    + ul {\n      margin-top: 1.5rem;\n    }\n  }\n\n  ul {\n    li {\n      &::before {\n        content: "-";\n        margin-right: 0.5rem;\n      }\n    }\n  }\n']))),_excluded=["children"],__jsx=react.createElement,Text=function Text(_ref){var children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(StyledText,props,children)};Text.displayName="Text",Text.__docgenInfo={description:"",methods:[],displayName:"Text"};const text_Text=Text;try{FunctionComponent.displayName="Text",FunctionComponent.__docgenInfo={description:"",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/common/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}}}]);