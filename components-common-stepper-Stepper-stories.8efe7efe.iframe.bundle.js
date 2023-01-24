"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[273],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/components/common/stepper/Stepper.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,InlineSteps:()=>InlineSteps,default:()=>Stepper_stories});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),StyledSpacer=styled_components_browser_esm.default.hr(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  flex-grow: 1;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  margin-top: 1rem;\n"]))),StyledStepIndicator=styled_components_browser_esm.default.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  padding: 0.5rem;\n  line-height: 1rem;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  border: 1px solid currentColor;\n  margin-left: auto;\n  margin-right: auto;\n  flex-shrink: 0;\n"]))),StyledStepContent=styled_components_browser_esm.default.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n"]))),StyledStep=styled_components_browser_esm.default.li(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  text-align: center;\n  flex-shrink: 1;\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n"])),(function(_ref){return _ref.$inline?(0,styled_components_browser_esm.css)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n          display: flex;\n          align-items: center;\n          gap: 0.5rem;\n          white-space: nowrap;\n        "]))):(0,styled_components_browser_esm.css)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n          "," {\n            margin-bottom: 0.5rem;\n          }\n        "])),StyledStepIndicator)}),(function(_ref2){return"complete"!==_ref2.$state&&(0,styled_components_browser_esm.css)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n      & + "," {\n        opacity: 0.5;\n      }\n    "])),StyledSpacer)}),(function(_ref3){var $state=_ref3.$state;return["complete","current"].includes($state)&&(0,styled_components_browser_esm.css)(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.Z)(["\n      "," {\n        background-color: ",";\n        color: ",";\n        border-color: ",";\n      }\n    "])),StyledStepIndicator,(function(_ref4){return _ref4.theme.colors.body}),(function(_ref5){return _ref5.theme.colors.white}),(function(_ref6){return _ref6.theme.colors.body}))}),(function(_ref7){return"current"===_ref7.$state&&(0,styled_components_browser_esm.css)(_templateObject9||(_templateObject9=(0,taggedTemplateLiteral.Z)(["\n      "," {\n        font-weight: 700;\n      }\n    "])),StyledStepContent)})),StyledStepper=styled_components_browser_esm.default.ul(_templateObject10||(_templateObject10=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  align-items: top;\n  justify-content: space-between;\n"]))),_excluded=["children"],__jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Stepper=function Stepper(_ref){var children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded),totalChildren=react.Children.count(children);return __jsx(StyledStepper,props,react.Children.map(children,(function(child,index){return(0,react.isValidElement)(child)?__jsx(react.Fragment,null,(0,react.cloneElement)(child,_objectSpread(_objectSpread({},child.props),{},{index})),index!==totalChildren-1&&__jsx(StyledSpacer,null)):null})))};Stepper.displayName="Stepper",Stepper.__docgenInfo={description:"",methods:[],displayName:"Stepper"};const stepper_Stepper=Stepper;try{Stepper.displayName="Stepper",Stepper.__docgenInfo={description:"",displayName:"Stepper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLUListElement | null) => void) | RefObject<HTMLUListElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/stepper/Stepper.tsx#Stepper"]={docgenInfo:Stepper.__docgenInfo,name:"Stepper",path:"src/components/common/stepper/Stepper.tsx#Stepper"})}catch(__react_docgen_typescript_loader_error){}var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),Step_excluded=["index","state","children"],Step_jsx=react.createElement,Step=function Step(_ref){var index=_ref.index,state=_ref.state,children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,Step_excluded);return Step_jsx(StyledStep,(0,esm_extends.Z)({},props,{$state:state,"aria-current":"current"===state?"step":"false"}),Step_jsx(StyledStepIndicator,null,(null!=index?index:0)+1),Step_jsx(StyledStepContent,null,children))};Step.displayName="Step",Step.__docgenInfo={description:"",methods:[],displayName:"Step"};const stepper_Step=Step;try{Step.displayName="Step",Step.__docgenInfo={description:"",displayName:"Step",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}},state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"enum",value:[{value:'"current"'},{value:'"complete"'},{value:'"future"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLIElement | null) => void) | RefObject<HTMLLIElement> | null"}},$state:{defaultValue:null,description:"",name:"$state",required:!1,type:{name:"enum",value:[{value:'"current"'},{value:'"complete"'},{value:'"future"'}]}},$inline:{defaultValue:null,description:"",name:"$inline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/stepper/Step.tsx#Step"]={docgenInfo:Step.__docgenInfo,name:"Step",path:"src/components/common/stepper/Step.tsx#Step"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_InlineSteps$paramete,Stepper_stories_jsx=react.createElement;function Stepper_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function Stepper_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Stepper_stories_ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Stepper_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Stepper_stories={title:"UI/Stepper",component:stepper_Stepper,tags:["autodocs"]};var Default={render:function render(args){return Stepper_stories_jsx(stepper_Stepper,args,Stepper_stories_jsx(stepper_Step,{state:"complete"},"Step 1"),Stepper_stories_jsx(stepper_Step,{state:"current"},"Step 2"),Stepper_stories_jsx(stepper_Step,{state:"future"},"Step 3"))}},InlineSteps={render:function render(args){return Stepper_stories_jsx(stepper_Stepper,args,Stepper_stories_jsx(stepper_Step,{state:"complete",$inline:!0},"Choose materials"),Stepper_stories_jsx(stepper_Step,{state:"current",$inline:!0},"Drag & drop creation mode"),Stepper_stories_jsx(stepper_Step,{state:"future",$inline:!0},"Conversion"))}};Default.parameters=Stepper_stories_objectSpread(Stepper_stories_objectSpread({},Default.parameters),{},{storySource:Stepper_stories_objectSpread({source:'{\n  render: args => <Stepper {...args}>\n      <Step state="complete">Step 1</Step>\n      <Step state="current">Step 2</Step>\n      <Step state="future">Step 3</Step>\n    </Stepper>\n}'},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.storySource)}),InlineSteps.parameters=Stepper_stories_objectSpread(Stepper_stories_objectSpread({},InlineSteps.parameters),{},{storySource:Stepper_stories_objectSpread({source:'{\n  render: args => <Stepper {...args}>\n      <Step state="complete" $inline>\n        Choose materials\n      </Step>\n      <Step state="current" $inline>\n        Drag & drop creation mode\n      </Step>\n      <Step state="future" $inline>\n        Conversion\n      </Step>\n    </Stepper>\n}'},null===(_InlineSteps$paramete=InlineSteps.parameters)||void 0===_InlineSteps$paramete?void 0:_InlineSteps$paramete.storySource)})}}]);