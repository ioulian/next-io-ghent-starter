"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[2385],{"./src/components/common/form/form-field/FormField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithCheckboxList:()=>WithCheckboxList,WithInput:()=>WithInput,WithMultiReactSelect:()=>WithMultiReactSelect,WithPassword:()=>WithPassword,WithRadioList:()=>WithRadioList,WithReactSelect:()=>WithReactSelect,WithSearch:()=>WithSearch,WithSelect:()=>WithSelect,WithSingleCheckbox:()=>WithSingleCheckbox,WithTextarea:()=>WithTextarea,WithToggle:()=>WithToggle,default:()=>FormField_stories});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),react_select_esm=__webpack_require__("./node_modules/react-select/dist/react-select.esm.js"),browser_symbol=__webpack_require__("./node_modules/svg-baker-runtime/browser-symbol.js"),browser_symbol_default=__webpack_require__.n(browser_symbol),browser_sprite_build=__webpack_require__("./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js"),browser_sprite_build_default=__webpack_require__.n(browser_sprite_build),symbol=new(browser_symbol_default())({id:"at",use:"at-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" id="at"><path stroke="none" d="M0 0h24v24H0z" /><path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" /><path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-5.5 8.28" /></symbol>'});browser_sprite_build_default().add(symbol);const at=symbol;var search_symbol=new(browser_symbol_default())({id:"search",use:"search-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" id="search"><path stroke="none" d="M0 0h24v24H0z" /><path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0M21 21l-6-6" /></symbol>'});browser_sprite_build_default().add(search_symbol);const search=search_symbol;var rules=__webpack_require__("./src/components/common/form/rules.ts"),Form=__webpack_require__("./src/components/common/form/form/Form.tsx"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),Select_styles=__webpack_require__("./src/components/common/form/select/Select.styles.ts"),_excluded=["addEmptyOption","children"],__jsx=react.createElement,Select=(0,react.forwardRef)((function(_ref,ref){var _ref$addEmptyOption=_ref.addEmptyOption,addEmptyOption=void 0!==_ref$addEmptyOption&&_ref$addEmptyOption,children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded),t=(0,es.$G)("common").t;return __jsx(Select_styles.Q,(0,esm_extends.Z)({},props,{ref}),addEmptyOption&&__jsx("option",{value:""},t("form.select.emptyValue")),children)}));Select.__docgenInfo={description:"",methods:[],displayName:"Select",props:{addEmptyOption:{defaultValue:{value:"false",computed:!1},required:!1}}};const select_Select=Select;try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{addEmptyOption:{defaultValue:{value:"false"},description:"",name:"addEmptyOption",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/form/select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/common/form/select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}var objectDestructuringEmpty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),Textarea_styles=__webpack_require__("./src/components/common/form/textarea/Textarea.styles.ts"),TextArea_jsx=react.createElement,TextArea=(0,react.forwardRef)((function(_ref,ref){var props=(0,esm_extends.Z)({},((0,objectDestructuringEmpty.Z)(_ref),_ref));return TextArea_jsx(Textarea_styles.u,(0,esm_extends.Z)({cols:40,rows:5},props,{ref}))}));TextArea.__docgenInfo={description:"",methods:[],displayName:"TextArea"};const textarea_TextArea=TextArea;try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/form/textarea/TextArea.tsx#TextArea"]={docgenInfo:TextArea.__docgenInfo,name:"TextArea",path:"src/components/common/form/textarea/TextArea.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}var _templateObject,SingleCheckbox=__webpack_require__("./src/components/common/form/single-checkbox/SingleCheckbox.tsx"),Label=__webpack_require__("./src/components/common/form/label/Label.tsx"),Input_styles=__webpack_require__("./src/components/common/form/input/Input.styles.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Checkbox_styles=__webpack_require__("./src/components/common/form/collection/checkbox/Checkbox.styles.ts"),StyledRadio=(0,styled_components_browser_esm.default)(Checkbox_styles.P)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)([""]))),Radio_excluded=["id","name","inputValue","children"],Radio_jsx=react.createElement,Radio=(0,react.forwardRef)((function(_ref,ref){_ref.id;var name=_ref.name,inputValue=_ref.inputValue,children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,Radio_excluded),linkedId="".concat(name,"-").concat(inputValue);return Radio_jsx(StyledRadio,null,Radio_jsx(Input_styles.F,(0,esm_extends.Z)({},props,{name,type:"radio",id:linkedId,ref,value:inputValue})),Radio_jsx(Label.Z,{htmlFor:linkedId},children))}));Radio.__docgenInfo={description:"",methods:[],displayName:"Radio"};const radio_Radio=Radio;try{Radio.displayName="Radio",Radio.__docgenInfo={description:"",displayName:"Radio",props:{inputValue:{defaultValue:null,description:"",name:"inputValue",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/form/collection/radio/Radio.tsx#Radio"]={docgenInfo:Radio.__docgenInfo,name:"Radio",path:"src/components/common/form/collection/radio/Radio.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}var List=__webpack_require__("./src/components/common/form/collection/List.tsx"),Checkbox=__webpack_require__("./src/components/common/form/collection/checkbox/Checkbox.tsx"),SvgSprite=__webpack_require__("./src/components/common/svg/SvgSprite.tsx"),Toggle_styles=__webpack_require__("./src/components/common/form/toggle/Toggle.styles.ts"),Toggle_jsx=react.createElement,Toggle=(0,react.forwardRef)((function(_ref,ref){var props=(0,esm_extends.Z)({},((0,objectDestructuringEmpty.Z)(_ref),_ref));return Toggle_jsx(Toggle_styles.l,null,Toggle_jsx(Input_styles.F,(0,esm_extends.Z)({},props,{type:"checkbox",ref})),Toggle_jsx("label",{htmlFor:props.id,"aria-hidden":"true"}))}));Toggle.__docgenInfo={description:"",methods:[],displayName:"Toggle"};const toggle_Toggle=Toggle;try{Toggle.displayName="Toggle",Toggle.__docgenInfo={description:"",displayName:"Toggle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/form/toggle/Toggle.tsx#Toggle"]={docgenInfo:Toggle.__docgenInfo,name:"Toggle",path:"src/components/common/form/toggle/Toggle.tsx#Toggle"})}catch(__react_docgen_typescript_loader_error){}var ReactSelect_styles=__webpack_require__("./src/components/common/form/react-select/ReactSelect.styles.ts"),ReactSelect_jsx=react.createElement,ReactSelectContainer=function ReactSelectContainer(_ref){var children=_ref.children;return ReactSelect_jsx(ReactSelect_styles.T,null,children)};ReactSelectContainer.displayName="ReactSelectContainer",ReactSelectContainer.__docgenInfo={description:"",methods:[],displayName:"ReactSelectContainer"};const react_select_ReactSelect=ReactSelectContainer;try{ReactSelect.displayName="ReactSelect",ReactSelect.__docgenInfo={description:"",displayName:"ReactSelect",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/form/react-select/ReactSelect.tsx#ReactSelect"]={docgenInfo:ReactSelect.__docgenInfo,name:"ReactSelect",path:"src/components/common/form/react-select/ReactSelect.tsx#ReactSelect"})}catch(__react_docgen_typescript_loader_error){}var _WithInput$parameters,_WithInput$parameters2,_WithInput$parameters3,_WithSearch$parameter,_WithSearch$parameter2,_WithSearch$parameter3,_WithPassword$paramet,_WithPassword$paramet2,_WithPassword$paramet3,_WithSelect$parameter,_WithSelect$parameter2,_WithSelect$parameter3,_WithTextarea$paramet,_WithTextarea$paramet2,_WithTextarea$paramet3,_WithSingleCheckbox$p,_WithSingleCheckbox$p2,_WithSingleCheckbox$p3,_WithToggle$parameter,_WithToggle$parameter2,_WithToggle$parameter3,_WithRadioList$parame,_WithRadioList$parame2,_WithRadioList$parame3,_WithCheckboxList$par,_WithCheckboxList$par2,_WithCheckboxList$par3,_WithReactSelect$para,_WithReactSelect$para2,_WithReactSelect$para3,_WithMultiReactSelect,_WithMultiReactSelect2,_WithMultiReactSelect3,PasswordInput=__webpack_require__("./src/components/common/form/input/PasswordInput.tsx"),Input=__webpack_require__("./src/components/common/form/input/Input.tsx"),FormField=__webpack_require__("./src/components/common/form/form-field/FormField.tsx"),FormField_stories_excluded=["id"],_excluded2=["id"],FormField_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var ExampleApiError={type:"https://tools.ietf.org/html/rfc2616#section-10",title:"An error occurred",message:"emailAddress: This value is not a valid email address.",error_code:"emailAddress: This value is not a valid email address.",violations:[{propertyPath:"emailAddress",message:"This value is not a valid email address.",code:"bd79c0ab-ddba-46cc-a703-a7a4b08de310"}]};const FormField_stories={title:"UI/Form/FormField",component:FormField.Z,tags:["autodocs"]};var WithInput={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){},error:ExampleApiError},FormField_stories_jsx(FormField.Z,args))},args:{label:"Email Address",name:"emailAddress",options:_objectSpread(_objectSpread({},rules.C1),rules.Do),description:"Description",children:FormField_stories_jsx(Input.Z,{iconBefore:FormField_stories_jsx(SvgSprite.Z,{src:at})})}},WithSearch={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){}},FormField_stories_jsx(FormField.Z,args))},args:{label:"Search",name:"search",children:FormField_stories_jsx(Input.Z,{type:"search",iconBefore:FormField_stories_jsx(SvgSprite.Z,{src:search})})}},WithPassword={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){}},FormField_stories_jsx(FormField.Z,args))},args:{label:"Password",name:"password",children:FormField_stories_jsx(PasswordInput.Z,null)}},WithSelect={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){}},FormField_stories_jsx(FormField.Z,args))},args:{label:"Role",name:"emailAddress",options:_objectSpread({},rules.C1),description:"Description",children:FormField_stories_jsx(select_Select,{addEmptyOption:!0},FormField_stories_jsx("optgroup",{label:"Swedish Cars"},FormField_stories_jsx("option",{value:"volvo"},"Volvo"),FormField_stories_jsx("option",{value:"saab"},"Saab")),FormField_stories_jsx("optgroup",{label:"German Cars"},FormField_stories_jsx("option",{value:"mercedes"},"Mercedes"),FormField_stories_jsx("option",{value:"audi"},"Audi")))}},WithTextarea={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){}},FormField_stories_jsx(FormField.Z,args))},args:{label:"Textarea",name:"emailAddress",options:_objectSpread({},rules.C1),description:"Description",children:FormField_stories_jsx(textarea_TextArea,null)}},WithSingleCheckbox={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){}},FormField_stories_jsx(FormField.Z,args))},args:{label:"I accept privacy policy",name:"emailAddress",$isToggle:!0,options:_objectSpread({},rules.C1),children:FormField_stories_jsx(SingleCheckbox.Z,null)}},WithToggle={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){}},FormField_stories_jsx(FormField.Z,args))},args:{label:"I accept privacy policy",name:"emailAddress",$isToggle:!0,options:_objectSpread({},rules.C1),children:FormField_stories_jsx(toggle_Toggle,null)}},WithRadioList={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){}},FormField_stories_jsx(FormField.Z,args,FormField_stories_jsx(radio_Radio,{inputValue:"value1"},"Value 1"),FormField_stories_jsx(radio_Radio,{inputValue:"value2"},"Value 2"),FormField_stories_jsx(radio_Radio,{inputValue:"value3"},"Value 3")))},args:{label:"Choose one",name:"emailAddress",options:_objectSpread({},rules.C1),inputWrapper:List.Z,asFieldSet:!0}},WithCheckboxList={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){}},FormField_stories_jsx(FormField.Z,args,FormField_stories_jsx(Checkbox.Z,{inputValue:"value1"},"Value 1"),FormField_stories_jsx(Checkbox.Z,{inputValue:"value2"},"Value 2"),FormField_stories_jsx(Checkbox.Z,{inputValue:"value3"},"Value 3")))},args:{label:"Choose one",name:"emailAddress",options:_objectSpread({},rules.C1),inputWrapper:List.Z,asFieldSet:!0}},colourOptions=[{value:"ocean",label:"Ocean",color:"#00B8D9",isFixed:!0},{value:"blue",label:"Blue",color:"#0052CC",isDisabled:!0},{value:"purple",label:"Purple",color:"#5243AA"},{value:"red",label:"Red",color:"#FF5630",isFixed:!0},{value:"orange",label:"Orange",color:"#FF8B00"},{value:"yellow",label:"Yellow",color:"#FFC400"},{value:"green",label:"Green",color:"#36B37E"},{value:"forest",label:"Forest",color:"#00875A"},{value:"slate",label:"Slate",color:"#253858"},{value:"silver",label:"Silver",color:"#666666"}],WithReactSelect={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){}},FormField_stories_jsx(FormField.Z,args))},args:{label:"Choose",name:"emailAddress",inputWrapper:react_select_ReactSelect,options:_objectSpread({},rules.C1),asFieldSet:!0,children:function children(_ref){var field=_ref.field,_ref$props=_ref.props,id=_ref$props.id,props=(0,objectWithoutProperties.Z)(_ref$props,FormField_stories_excluded);return FormField_stories_jsx(react_select_esm.ZP,(0,esm_extends.Z)({},field,props,{inputId:id,isClearable:!0,defaultValue:colourOptions[0],className:"react-select",classNamePrefix:"react-select",options:colourOptions}))}}},WithMultiReactSelect={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){}},FormField_stories_jsx(FormField.Z,args))},args:{label:"Choose",name:"emailAddress",inputWrapper:react_select_ReactSelect,options:_objectSpread({},rules.C1),asFieldSet:!0,children:function children(_ref2){var field=_ref2.field,_ref2$props=_ref2.props,id=_ref2$props.id,props=(0,objectWithoutProperties.Z)(_ref2$props,_excluded2);return FormField_stories_jsx(react_select_esm.ZP,(0,esm_extends.Z)({},field,props,{isMulti:!0,inputId:id,defaultValue:colourOptions[0],className:"react-select",menuIsOpen:!0,classNamePrefix:"react-select",options:colourOptions}))}}};WithInput.parameters=_objectSpread(_objectSpread({},WithInput.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithInput$parameters=WithInput.parameters)||void 0===_WithInput$parameters?void 0:_WithInput$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  render: args => <Form onSubmit={() => {}} error={ExampleApiError}>\n      <FormField {...args} />\n    </Form>,\n  args: {\n    label: "Email Address",\n    name: "emailAddress",\n    options: {\n      ...required,\n      ...email\n    },\n    description: "Description",\n    children: <Input iconBefore={<SvgSprite src={icon} />} />\n  }\n}'},null===(_WithInput$parameters2=WithInput.parameters)||void 0===_WithInput$parameters2||null===(_WithInput$parameters3=_WithInput$parameters2.docs)||void 0===_WithInput$parameters3?void 0:_WithInput$parameters3.source)})}),WithSearch.parameters=_objectSpread(_objectSpread({},WithSearch.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithSearch$parameter=WithSearch.parameters)||void 0===_WithSearch$parameter?void 0:_WithSearch$parameter.docs),{},{source:_objectSpread({originalSource:'{\n  render: args => <Form onSubmit={() => {}}>\n      <FormField {...args} />\n    </Form>,\n  args: {\n    label: "Search",\n    name: "search",\n    children: <Input type="search" iconBefore={<SvgSprite src={searchIcon} />} />\n  }\n}'},null===(_WithSearch$parameter2=WithSearch.parameters)||void 0===_WithSearch$parameter2||null===(_WithSearch$parameter3=_WithSearch$parameter2.docs)||void 0===_WithSearch$parameter3?void 0:_WithSearch$parameter3.source)})}),WithPassword.parameters=_objectSpread(_objectSpread({},WithPassword.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithPassword$paramet=WithPassword.parameters)||void 0===_WithPassword$paramet?void 0:_WithPassword$paramet.docs),{},{source:_objectSpread({originalSource:'{\n  render: args => <Form onSubmit={() => {}}>\n      <FormField {...args} />\n    </Form>,\n  args: {\n    label: "Password",\n    name: "password",\n    children: <PasswordInput />\n  }\n}'},null===(_WithPassword$paramet2=WithPassword.parameters)||void 0===_WithPassword$paramet2||null===(_WithPassword$paramet3=_WithPassword$paramet2.docs)||void 0===_WithPassword$paramet3?void 0:_WithPassword$paramet3.source)})}),WithSelect.parameters=_objectSpread(_objectSpread({},WithSelect.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithSelect$parameter=WithSelect.parameters)||void 0===_WithSelect$parameter?void 0:_WithSelect$parameter.docs),{},{source:_objectSpread({originalSource:'{\n  render: args => <Form onSubmit={() => {}}>\n      <FormField {...args} />\n    </Form>,\n  args: {\n    label: "Role",\n    name: "emailAddress",\n    options: {\n      ...required\n    },\n    description: "Description",\n    children: <Select addEmptyOption>\n        <optgroup label="Swedish Cars">\n          <option value="volvo">Volvo</option>\n          <option value="saab">Saab</option>\n        </optgroup>\n        <optgroup label="German Cars">\n          <option value="mercedes">Mercedes</option>\n          <option value="audi">Audi</option>\n        </optgroup>\n      </Select>\n  }\n}'},null===(_WithSelect$parameter2=WithSelect.parameters)||void 0===_WithSelect$parameter2||null===(_WithSelect$parameter3=_WithSelect$parameter2.docs)||void 0===_WithSelect$parameter3?void 0:_WithSelect$parameter3.source)})}),WithTextarea.parameters=_objectSpread(_objectSpread({},WithTextarea.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithTextarea$paramet=WithTextarea.parameters)||void 0===_WithTextarea$paramet?void 0:_WithTextarea$paramet.docs),{},{source:_objectSpread({originalSource:'{\n  render: args => <Form onSubmit={() => {}}>\n      <FormField {...args} />\n    </Form>,\n  args: {\n    label: "Textarea",\n    name: "emailAddress",\n    options: {\n      ...required\n    },\n    description: "Description",\n    children: <TextArea />\n  }\n}'},null===(_WithTextarea$paramet2=WithTextarea.parameters)||void 0===_WithTextarea$paramet2||null===(_WithTextarea$paramet3=_WithTextarea$paramet2.docs)||void 0===_WithTextarea$paramet3?void 0:_WithTextarea$paramet3.source)})}),WithSingleCheckbox.parameters=_objectSpread(_objectSpread({},WithSingleCheckbox.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithSingleCheckbox$p=WithSingleCheckbox.parameters)||void 0===_WithSingleCheckbox$p?void 0:_WithSingleCheckbox$p.docs),{},{source:_objectSpread({originalSource:'{\n  render: args => <Form onSubmit={() => {}}>\n      <FormField {...args} />\n    </Form>,\n  args: {\n    label: "I accept privacy policy",\n    name: "emailAddress",\n    $isToggle: true,\n    options: {\n      ...required\n    },\n    children: <SingleCheckbox />\n  }\n}'},null===(_WithSingleCheckbox$p2=WithSingleCheckbox.parameters)||void 0===_WithSingleCheckbox$p2||null===(_WithSingleCheckbox$p3=_WithSingleCheckbox$p2.docs)||void 0===_WithSingleCheckbox$p3?void 0:_WithSingleCheckbox$p3.source)})}),WithToggle.parameters=_objectSpread(_objectSpread({},WithToggle.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithToggle$parameter=WithToggle.parameters)||void 0===_WithToggle$parameter?void 0:_WithToggle$parameter.docs),{},{source:_objectSpread({originalSource:'{\n  render: args => <Form onSubmit={() => {}}>\n      <FormField {...args} />\n    </Form>,\n  args: {\n    label: "I accept privacy policy",\n    name: "emailAddress",\n    $isToggle: true,\n    options: {\n      ...required\n    },\n    children: <Toggle />\n  }\n}'},null===(_WithToggle$parameter2=WithToggle.parameters)||void 0===_WithToggle$parameter2||null===(_WithToggle$parameter3=_WithToggle$parameter2.docs)||void 0===_WithToggle$parameter3?void 0:_WithToggle$parameter3.source)})}),WithRadioList.parameters=_objectSpread(_objectSpread({},WithRadioList.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithRadioList$parame=WithRadioList.parameters)||void 0===_WithRadioList$parame?void 0:_WithRadioList$parame.docs),{},{source:_objectSpread({originalSource:'{\n  render: args => <Form onSubmit={() => {}}>\n      <FormField {...args}>\n        <Radio inputValue="value1">Value 1</Radio>\n        <Radio inputValue="value2">Value 2</Radio>\n        <Radio inputValue="value3">Value 3</Radio>\n      </FormField>\n    </Form>,\n  args: {\n    label: "Choose one",\n    name: "emailAddress",\n    options: {\n      ...required\n    },\n    inputWrapper: List,\n    asFieldSet: true\n  }\n}'},null===(_WithRadioList$parame2=WithRadioList.parameters)||void 0===_WithRadioList$parame2||null===(_WithRadioList$parame3=_WithRadioList$parame2.docs)||void 0===_WithRadioList$parame3?void 0:_WithRadioList$parame3.source)})}),WithCheckboxList.parameters=_objectSpread(_objectSpread({},WithCheckboxList.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithCheckboxList$par=WithCheckboxList.parameters)||void 0===_WithCheckboxList$par?void 0:_WithCheckboxList$par.docs),{},{source:_objectSpread({originalSource:'{\n  render: args => <Form onSubmit={() => {}}>\n      <FormField {...args}>\n        <Checkbox inputValue="value1">Value 1</Checkbox>\n        <Checkbox inputValue="value2">Value 2</Checkbox>\n        <Checkbox inputValue="value3">Value 3</Checkbox>\n      </FormField>\n    </Form>,\n  args: {\n    label: "Choose one",\n    name: "emailAddress",\n    options: {\n      ...required\n    },\n    inputWrapper: List,\n    asFieldSet: true\n  }\n}'},null===(_WithCheckboxList$par2=WithCheckboxList.parameters)||void 0===_WithCheckboxList$par2||null===(_WithCheckboxList$par3=_WithCheckboxList$par2.docs)||void 0===_WithCheckboxList$par3?void 0:_WithCheckboxList$par3.source)})}),WithReactSelect.parameters=_objectSpread(_objectSpread({},WithReactSelect.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithReactSelect$para=WithReactSelect.parameters)||void 0===_WithReactSelect$para?void 0:_WithReactSelect$para.docs),{},{source:_objectSpread({originalSource:'{\n  render: args => <Form onSubmit={() => {}}>\n      <FormField {...args} />\n    </Form>,\n  args: {\n    label: "Choose",\n    name: "emailAddress",\n    inputWrapper: ReactSelectContainer,\n    options: {\n      ...required\n    },\n    asFieldSet: true,\n    children: ({\n      field,\n      props: {\n        id,\n        ...props\n      }\n    }) => <ReactSelect {...field} {...props} inputId={id} isClearable defaultValue={colourOptions[0]} className="react-select" classNamePrefix="react-select" options={colourOptions} />\n  }\n}'},null===(_WithReactSelect$para2=WithReactSelect.parameters)||void 0===_WithReactSelect$para2||null===(_WithReactSelect$para3=_WithReactSelect$para2.docs)||void 0===_WithReactSelect$para3?void 0:_WithReactSelect$para3.source)})}),WithMultiReactSelect.parameters=_objectSpread(_objectSpread({},WithMultiReactSelect.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithMultiReactSelect=WithMultiReactSelect.parameters)||void 0===_WithMultiReactSelect?void 0:_WithMultiReactSelect.docs),{},{source:_objectSpread({originalSource:'{\n  render: args => <Form onSubmit={() => {}}>\n      <FormField {...args} />\n    </Form>,\n  args: {\n    label: "Choose",\n    name: "emailAddress",\n    inputWrapper: ReactSelectContainer,\n    options: {\n      ...required\n    },\n    asFieldSet: true,\n    children: ({\n      field,\n      props: {\n        id,\n        ...props\n      }\n    }) => <ReactSelect {...field} {...props} isMulti inputId={id} defaultValue={colourOptions[0]} className="react-select" menuIsOpen classNamePrefix="react-select" options={colourOptions} />\n  }\n}'},null===(_WithMultiReactSelect2=WithMultiReactSelect.parameters)||void 0===_WithMultiReactSelect2||null===(_WithMultiReactSelect3=_WithMultiReactSelect2.docs)||void 0===_WithMultiReactSelect3?void 0:_WithMultiReactSelect3.source)})})}}]);