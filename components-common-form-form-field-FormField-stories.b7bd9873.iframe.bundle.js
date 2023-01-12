"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[385],{"./src/components/common/form/form-field/FormField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithCheckboxList:()=>WithCheckboxList,WithRadioList:()=>WithRadioList,WithReactSelect:()=>WithReactSelect,WithSelect:()=>WithSelect,WithSingleCheckbox:()=>WithSingleCheckbox,WithTextarea:()=>WithTextarea,default:()=>FormField_stories});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),react_select_esm=__webpack_require__("./node_modules/react-select/dist/react-select.esm.js"),rules=__webpack_require__("./src/components/common/form/rules.ts"),Form=__webpack_require__("./src/components/common/form/form/Form.tsx"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),Select_styles=__webpack_require__("./src/components/common/form/select/Select.styles.ts"),_excluded=["addEmptyOption","children"],__jsx=react.createElement,Select=(0,react.forwardRef)((function(_ref,ref){var _ref$addEmptyOption=_ref.addEmptyOption,addEmptyOption=void 0!==_ref$addEmptyOption&&_ref$addEmptyOption,children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded),t=(0,es.$G)("common").t;return __jsx(Select_styles.Q,(0,esm_extends.Z)({},props,{ref}),addEmptyOption&&__jsx("option",{value:""},t("form.select.emptyValue")),children)}));Select.__docgenInfo={description:"",methods:[],displayName:"Select",props:{addEmptyOption:{defaultValue:{value:"false",computed:!1},required:!1}}};const select_Select=Select;try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{addEmptyOption:{defaultValue:{value:"false"},description:"",name:"addEmptyOption",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/form/select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/common/form/select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}var Textarea_styles=__webpack_require__("./src/components/common/form/textarea/Textarea.styles.ts"),TextArea_jsx=react.createElement,TextArea=(0,react.forwardRef)((function(_ref,ref){var props=(0,esm_extends.Z)({},_ref);return TextArea_jsx(Textarea_styles.u,(0,esm_extends.Z)({cols:40,rows:5},props,{ref}))}));TextArea.__docgenInfo={description:"",methods:[],displayName:"TextArea"};const textarea_TextArea=TextArea;try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/form/textarea/TextArea.tsx#TextArea"]={docgenInfo:TextArea.__docgenInfo,name:"TextArea",path:"src/components/common/form/textarea/TextArea.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}var _templateObject,SingleCheckbox=__webpack_require__("./src/components/common/form/single-checkbox/SingleCheckbox.tsx"),Label=__webpack_require__("./src/components/common/form/label/Label.tsx"),Input_styles=__webpack_require__("./src/components/common/form/input/Input.styles.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Checkbox_styles=__webpack_require__("./src/components/common/form/collection/checkbox/Checkbox.styles.ts"),StyledRadio=(0,styled_components_browser_esm.ZP)(Checkbox_styles.P)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)([""]))),Radio_excluded=["id","name","inputValue","children"],Radio_jsx=react.createElement,Radio=(0,react.forwardRef)((function(_ref,ref){_ref.id;var name=_ref.name,inputValue=_ref.inputValue,children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,Radio_excluded),linkedId="".concat(name,"-").concat(inputValue);return Radio_jsx(StyledRadio,null,Radio_jsx(Input_styles.F,(0,esm_extends.Z)({},props,{name,type:"radio",id:linkedId,ref,value:inputValue})),Radio_jsx(Label.Z,{htmlFor:linkedId},children))}));Radio.__docgenInfo={description:"",methods:[],displayName:"Radio"};const radio_Radio=Radio;try{Radio.displayName="Radio",Radio.__docgenInfo={description:"",displayName:"Radio",props:{inputValue:{defaultValue:null,description:"",name:"inputValue",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/form/collection/radio/Radio.tsx#Radio"]={docgenInfo:Radio.__docgenInfo,name:"Radio",path:"src/components/common/form/collection/radio/Radio.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_WithSelect$parameter,_WithTextarea$paramet,_WithSingleCheckbox$p,_WithRadioList$parame,_WithCheckboxList$par,_WithReactSelect$para,List=__webpack_require__("./src/components/common/form/collection/List.tsx"),Checkbox=__webpack_require__("./src/components/common/form/collection/checkbox/Checkbox.tsx"),ReactSelect_styles=__webpack_require__("./src/components/common/form/react-select/ReactSelect.styles.ts"),Input=__webpack_require__("./src/components/common/form/input/Input.tsx"),FormField=__webpack_require__("./src/components/common/form/form-field/FormField.tsx"),FormField_stories_excluded=["id"],FormField_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var ExampleApiError={type:"https://tools.ietf.org/html/rfc2616#section-10",title:"An error occurred",message:"emailAddress: This value is not a valid email address.",error_code:"emailAddress: This value is not a valid email address.",violations:[{propertyPath:"emailAddress",message:"This value is not a valid email address.",code:"bd79c0ab-ddba-46cc-a703-a7a4b08de310"}]};const FormField_stories={title:"UI/Form/FormField",component:FormField.Z,tags:["autodocs"]};var Default={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){},error:ExampleApiError},FormField_stories_jsx(FormField.Z,args))},args:{label:"Email Address",name:"emailAddress",options:_objectSpread(_objectSpread({},rules.C1),rules.Do),description:"Description",children:FormField_stories_jsx(Input.Z,null)}},WithSelect={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){},error:ExampleApiError},FormField_stories_jsx(FormField.Z,args))},args:{label:"Role",name:"emailAddress",options:_objectSpread({},rules.C1),description:"Description",children:FormField_stories_jsx(select_Select,{addEmptyOption:!0},FormField_stories_jsx("option",{value:"1"},"Value 1"),FormField_stories_jsx("option",{value:"2"},"Value 2"),FormField_stories_jsx("option",{value:"3"},"Value 3"))}},WithTextarea={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){},error:ExampleApiError},FormField_stories_jsx(FormField.Z,args))},args:{label:"Textarea",name:"emailAddress",options:_objectSpread({},rules.C1),description:"Description",children:FormField_stories_jsx(textarea_TextArea,null)}},WithSingleCheckbox={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){},error:ExampleApiError},FormField_stories_jsx(FormField.Z,args))},args:{label:"I accept privacy policy",name:"emailAddress",$isToggle:!0,options:_objectSpread({},rules.C1),children:FormField_stories_jsx(SingleCheckbox.Z,null)}},WithRadioList={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){},error:ExampleApiError},FormField_stories_jsx(FormField.Z,args,FormField_stories_jsx(radio_Radio,{inputValue:"value1"},"Value 1"),FormField_stories_jsx(radio_Radio,{inputValue:"value2"},"Value 2"),FormField_stories_jsx(radio_Radio,{inputValue:"value3"},"Value 3")))},args:{label:"Choose one",name:"emailAddress",options:_objectSpread({},rules.C1),inputWrapper:List.Z,asFieldSet:!0}},WithCheckboxList={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){},error:ExampleApiError},FormField_stories_jsx(FormField.Z,args,FormField_stories_jsx(Checkbox.Z,{inputValue:"value1"},"Value 1"),FormField_stories_jsx(Checkbox.Z,{inputValue:"value2"},"Value 2"),FormField_stories_jsx(Checkbox.Z,{inputValue:"value3"},"Value 3")))},args:{label:"Choose one",name:"emailAddress",options:_objectSpread({},rules.C1),inputWrapper:List.Z,asFieldSet:!0}},colourOptions=[{value:"ocean",label:"Ocean",color:"#00B8D9",isFixed:!0},{value:"blue",label:"Blue",color:"#0052CC",isDisabled:!0},{value:"purple",label:"Purple",color:"#5243AA"},{value:"red",label:"Red",color:"#FF5630",isFixed:!0},{value:"orange",label:"Orange",color:"#FF8B00"},{value:"yellow",label:"Yellow",color:"#FFC400"},{value:"green",label:"Green",color:"#36B37E"},{value:"forest",label:"Forest",color:"#00875A"},{value:"slate",label:"Slate",color:"#253858"},{value:"silver",label:"Silver",color:"#666666"}],WithReactSelect={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){},error:ExampleApiError},FormField_stories_jsx(FormField.Z,args))},args:{label:"Choose",name:"emailAddress",inputWrapper:ReactSelect_styles.T,options:_objectSpread({},rules.C1),asFieldSet:!0,children:function children(_ref){var field=_ref.field,_ref$props=_ref.props,id=_ref$props.id,props=(0,objectWithoutProperties.Z)(_ref$props,FormField_stories_excluded);return FormField_stories_jsx(react_select_esm.ZP,(0,esm_extends.Z)({},field,props,{inputId:id,defaultValue:colourOptions[0],className:"react-select",classNamePrefix:"react-select",options:colourOptions}))}}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{storySource:_objectSpread({source:'{\n  render: args => <Form onSubmit={() => {}} error={ExampleApiError}>\n      <FormField {...args} />\n    </Form>,\n  args: {\n    label: "Email Address",\n    name: "emailAddress",\n    options: {\n      ...required,\n      ...email\n    },\n    description: "Description",\n    children: <Input />\n  }\n}'},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.storySource)}),WithSelect.parameters=_objectSpread(_objectSpread({},WithSelect.parameters),{},{storySource:_objectSpread({source:'{\n  render: args => <Form onSubmit={() => {}} error={ExampleApiError}>\n      <FormField {...args} />\n    </Form>,\n  args: {\n    label: "Role",\n    name: "emailAddress",\n    options: {\n      ...required\n    },\n    description: "Description",\n    children: <Select addEmptyOption>\n        <option value="1">Value 1</option>\n        <option value="2">Value 2</option>\n        <option value="3">Value 3</option>\n      </Select>\n  }\n}'},null===(_WithSelect$parameter=WithSelect.parameters)||void 0===_WithSelect$parameter?void 0:_WithSelect$parameter.storySource)}),WithTextarea.parameters=_objectSpread(_objectSpread({},WithTextarea.parameters),{},{storySource:_objectSpread({source:'{\n  render: args => <Form onSubmit={() => {}} error={ExampleApiError}>\n      <FormField {...args} />\n    </Form>,\n  args: {\n    label: "Textarea",\n    name: "emailAddress",\n    options: {\n      ...required\n    },\n    description: "Description",\n    children: <TextArea />\n  }\n}'},null===(_WithTextarea$paramet=WithTextarea.parameters)||void 0===_WithTextarea$paramet?void 0:_WithTextarea$paramet.storySource)}),WithSingleCheckbox.parameters=_objectSpread(_objectSpread({},WithSingleCheckbox.parameters),{},{storySource:_objectSpread({source:'{\n  render: args => <Form onSubmit={() => {}} error={ExampleApiError}>\n      <FormField {...args} />\n    </Form>,\n  args: {\n    label: "I accept privacy policy",\n    name: "emailAddress",\n    $isToggle: true,\n    options: {\n      ...required\n    },\n    children: <SingleCheckbox />\n  }\n}'},null===(_WithSingleCheckbox$p=WithSingleCheckbox.parameters)||void 0===_WithSingleCheckbox$p?void 0:_WithSingleCheckbox$p.storySource)}),WithRadioList.parameters=_objectSpread(_objectSpread({},WithRadioList.parameters),{},{storySource:_objectSpread({source:'{\n  render: args => <Form onSubmit={() => {}} error={ExampleApiError}>\n      <FormField {...args}>\n        <Radio inputValue="value1">Value 1</Radio>\n        <Radio inputValue="value2">Value 2</Radio>\n        <Radio inputValue="value3">Value 3</Radio>\n      </FormField>\n    </Form>,\n  args: {\n    label: "Choose one",\n    name: "emailAddress",\n    options: {\n      ...required\n    },\n    inputWrapper: List,\n    asFieldSet: true\n  }\n}'},null===(_WithRadioList$parame=WithRadioList.parameters)||void 0===_WithRadioList$parame?void 0:_WithRadioList$parame.storySource)}),WithCheckboxList.parameters=_objectSpread(_objectSpread({},WithCheckboxList.parameters),{},{storySource:_objectSpread({source:'{\n  render: args => <Form onSubmit={() => {}} error={ExampleApiError}>\n      <FormField {...args}>\n        <Checkbox inputValue="value1">Value 1</Checkbox>\n        <Checkbox inputValue="value2">Value 2</Checkbox>\n        <Checkbox inputValue="value3">Value 3</Checkbox>\n      </FormField>\n    </Form>,\n  args: {\n    label: "Choose one",\n    name: "emailAddress",\n    options: {\n      ...required\n    },\n    inputWrapper: List,\n    asFieldSet: true\n  }\n}'},null===(_WithCheckboxList$par=WithCheckboxList.parameters)||void 0===_WithCheckboxList$par?void 0:_WithCheckboxList$par.storySource)}),WithReactSelect.parameters=_objectSpread(_objectSpread({},WithReactSelect.parameters),{},{storySource:_objectSpread({source:'{\n  render: args => <Form onSubmit={() => {}} error={ExampleApiError}>\n      <FormField {...args} />\n    </Form>,\n  args: {\n    label: "Choose",\n    name: "emailAddress",\n    inputWrapper: StyledReactSelect,\n    options: {\n      ...required\n    },\n    asFieldSet: true,\n    children: ({\n      field,\n      props: {\n        id,\n        ...props\n      }\n    }) => <ReactSelect {...field} {...props} inputId={id} defaultValue={colourOptions[0]} className="react-select" classNamePrefix="react-select" options={colourOptions} />\n  }\n}'},null===(_WithReactSelect$para=WithReactSelect.parameters)||void 0===_WithReactSelect$para?void 0:_WithReactSelect$para.storySource)})}}]);