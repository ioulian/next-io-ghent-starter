"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[385],{"./src/components/common/form/form-field/FormField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithCheckboxList:()=>WithCheckboxList,WithInput:()=>WithInput,WithRadioList:()=>WithRadioList,WithReactSelect:()=>WithReactSelect,WithSelect:()=>WithSelect,WithSingleCheckbox:()=>WithSingleCheckbox,WithTextarea:()=>WithTextarea,WithToggle:()=>WithToggle,default:()=>FormField_stories});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),react_select_esm=__webpack_require__("./node_modules/react-select/dist/react-select.esm.js"),browser_symbol=__webpack_require__("./node_modules/svg-baker-runtime/browser-symbol.js"),browser_symbol_default=__webpack_require__.n(browser_symbol),browser_sprite_build=__webpack_require__("./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js"),browser_sprite_build_default=__webpack_require__.n(browser_sprite_build),symbol=new(browser_symbol_default())({id:"at",use:"at-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" id="at"><path d="M0 0h24v24H0z" stroke="none" /><circle cx="12" cy="12" r="4" /><path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-5.5 8.28" /></symbol>'});browser_sprite_build_default().add(symbol);const at=symbol;var rules=__webpack_require__("./src/components/common/form/rules.ts"),Form=__webpack_require__("./src/components/common/form/form/Form.tsx"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),Select_styles=__webpack_require__("./src/components/common/form/select/Select.styles.ts"),_excluded=["addEmptyOption","children"],__jsx=react.createElement,Select=(0,react.forwardRef)((function(_ref,ref){var _ref$addEmptyOption=_ref.addEmptyOption,addEmptyOption=void 0!==_ref$addEmptyOption&&_ref$addEmptyOption,children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded),t=(0,es.$G)("common").t;return __jsx(Select_styles.Q,(0,esm_extends.Z)({},props,{ref}),addEmptyOption&&__jsx("option",{value:""},t("form.select.emptyValue")),children)}));Select.__docgenInfo={description:"",methods:[],displayName:"Select",props:{addEmptyOption:{defaultValue:{value:"false",computed:!1},required:!1}}};const select_Select=Select;try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{addEmptyOption:{defaultValue:{value:"false"},description:"",name:"addEmptyOption",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/form/select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/common/form/select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}var Textarea_styles=__webpack_require__("./src/components/common/form/textarea/Textarea.styles.ts"),TextArea_jsx=react.createElement,TextArea=(0,react.forwardRef)((function(_ref,ref){var props=(0,esm_extends.Z)({},_ref);return TextArea_jsx(Textarea_styles.u,(0,esm_extends.Z)({cols:40,rows:5},props,{ref}))}));TextArea.__docgenInfo={description:"",methods:[],displayName:"TextArea"};const textarea_TextArea=TextArea;try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/form/textarea/TextArea.tsx#TextArea"]={docgenInfo:TextArea.__docgenInfo,name:"TextArea",path:"src/components/common/form/textarea/TextArea.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}var _templateObject,SingleCheckbox=__webpack_require__("./src/components/common/form/single-checkbox/SingleCheckbox.tsx"),Label=__webpack_require__("./src/components/common/form/label/Label.tsx"),Input_styles=__webpack_require__("./src/components/common/form/input/Input.styles.ts"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Checkbox_styles=__webpack_require__("./src/components/common/form/collection/checkbox/Checkbox.styles.ts"),StyledRadio=(0,styled_components_browser_esm.ZP)(Checkbox_styles.P)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)([""]))),Radio_excluded=["id","name","inputValue","children"],Radio_jsx=react.createElement,Radio=(0,react.forwardRef)((function(_ref,ref){_ref.id;var name=_ref.name,inputValue=_ref.inputValue,children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,Radio_excluded),linkedId="".concat(name,"-").concat(inputValue);return Radio_jsx(StyledRadio,null,Radio_jsx(Input_styles.F,(0,esm_extends.Z)({},props,{name,type:"radio",id:linkedId,ref,value:inputValue})),Radio_jsx(Label.Z,{htmlFor:linkedId},children))}));Radio.__docgenInfo={description:"",methods:[],displayName:"Radio"};const radio_Radio=Radio;try{Radio.displayName="Radio",Radio.__docgenInfo={description:"",displayName:"Radio",props:{inputValue:{defaultValue:null,description:"",name:"inputValue",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/form/collection/radio/Radio.tsx#Radio"]={docgenInfo:Radio.__docgenInfo,name:"Radio",path:"src/components/common/form/collection/radio/Radio.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}var List=__webpack_require__("./src/components/common/form/collection/List.tsx"),Checkbox=__webpack_require__("./src/components/common/form/collection/checkbox/Checkbox.tsx"),ReactSelect_styles=__webpack_require__("./src/components/common/form/react-select/ReactSelect.styles.ts"),SvgSprite=__webpack_require__("./src/components/common/svg/SvgSprite.tsx"),Toggle_styles=__webpack_require__("./src/components/common/form/toggle/Toggle.styles.ts"),Toggle_jsx=react.createElement,Toggle=(0,react.forwardRef)((function(_ref,ref){var props=(0,esm_extends.Z)({},_ref);return Toggle_jsx(Toggle_styles.l,null,Toggle_jsx(Input_styles.F,(0,esm_extends.Z)({},props,{type:"checkbox",ref})),Toggle_jsx("div",null))}));Toggle.__docgenInfo={description:"",methods:[],displayName:"Toggle"};const toggle_Toggle=Toggle;try{Toggle.displayName="Toggle",Toggle.__docgenInfo={description:"",displayName:"Toggle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/form/toggle/Toggle.tsx#Toggle"]={docgenInfo:Toggle.__docgenInfo,name:"Toggle",path:"src/components/common/form/toggle/Toggle.tsx#Toggle"})}catch(__react_docgen_typescript_loader_error){}var _WithInput$parameters,_WithSelect$parameter,_WithTextarea$paramet,_WithSingleCheckbox$p,_WithToggle$parameter,_WithRadioList$parame,_WithCheckboxList$par,_WithReactSelect$para,Input=__webpack_require__("./src/components/common/form/input/Input.tsx"),FormField=__webpack_require__("./src/components/common/form/form-field/FormField.tsx"),FormField_stories_excluded=["id"],FormField_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var ExampleApiError={type:"https://tools.ietf.org/html/rfc2616#section-10",title:"An error occurred",message:"emailAddress: This value is not a valid email address.",error_code:"emailAddress: This value is not a valid email address.",violations:[{propertyPath:"emailAddress",message:"This value is not a valid email address.",code:"bd79c0ab-ddba-46cc-a703-a7a4b08de310"}]};const FormField_stories={title:"UI/Form/FormField",component:FormField.Z,tags:["autodocs"]};var WithInput={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){},error:ExampleApiError},FormField_stories_jsx(FormField.Z,args))},args:{label:"Email Address",name:"emailAddress",options:_objectSpread(_objectSpread({},rules.C1),rules.Do),description:"Description",children:FormField_stories_jsx(Input.Z,{iconBefore:FormField_stories_jsx(SvgSprite.Z,{src:at})})}},WithSelect={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){},error:ExampleApiError},FormField_stories_jsx(FormField.Z,args))},args:{label:"Role",name:"emailAddress",options:_objectSpread({},rules.C1),description:"Description",children:FormField_stories_jsx(select_Select,{addEmptyOption:!0},FormField_stories_jsx("option",{value:"1"},"Value 1"),FormField_stories_jsx("option",{value:"2"},"Value 2"),FormField_stories_jsx("option",{value:"3"},"Value 3"))}},WithTextarea={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){},error:ExampleApiError},FormField_stories_jsx(FormField.Z,args))},args:{label:"Textarea",name:"emailAddress",options:_objectSpread({},rules.C1),description:"Description",children:FormField_stories_jsx(textarea_TextArea,null)}},WithSingleCheckbox={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){},error:ExampleApiError},FormField_stories_jsx(FormField.Z,args))},args:{label:"I accept privacy policy",name:"emailAddress",$isToggle:!0,options:_objectSpread({},rules.C1),children:FormField_stories_jsx(SingleCheckbox.Z,null)}},WithToggle={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){},error:ExampleApiError},FormField_stories_jsx(FormField.Z,args))},args:{label:"I accept privacy policy",name:"emailAddress",$isToggle:!0,options:_objectSpread({},rules.C1),children:FormField_stories_jsx(toggle_Toggle,null)}},WithRadioList={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){},error:ExampleApiError},FormField_stories_jsx(FormField.Z,args,FormField_stories_jsx(radio_Radio,{inputValue:"value1"},"Value 1"),FormField_stories_jsx(radio_Radio,{inputValue:"value2"},"Value 2"),FormField_stories_jsx(radio_Radio,{inputValue:"value3"},"Value 3")))},args:{label:"Choose one",name:"emailAddress",options:_objectSpread({},rules.C1),inputWrapper:List.Z,asFieldSet:!0}},WithCheckboxList={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){},error:ExampleApiError},FormField_stories_jsx(FormField.Z,args,FormField_stories_jsx(Checkbox.Z,{inputValue:"value1"},"Value 1"),FormField_stories_jsx(Checkbox.Z,{inputValue:"value2"},"Value 2"),FormField_stories_jsx(Checkbox.Z,{inputValue:"value3"},"Value 3")))},args:{label:"Choose one",name:"emailAddress",options:_objectSpread({},rules.C1),inputWrapper:List.Z,asFieldSet:!0}},colourOptions=[{value:"ocean",label:"Ocean",color:"#00B8D9",isFixed:!0},{value:"blue",label:"Blue",color:"#0052CC",isDisabled:!0},{value:"purple",label:"Purple",color:"#5243AA"},{value:"red",label:"Red",color:"#FF5630",isFixed:!0},{value:"orange",label:"Orange",color:"#FF8B00"},{value:"yellow",label:"Yellow",color:"#FFC400"},{value:"green",label:"Green",color:"#36B37E"},{value:"forest",label:"Forest",color:"#00875A"},{value:"slate",label:"Slate",color:"#253858"},{value:"silver",label:"Silver",color:"#666666"}],WithReactSelect={render:function render(args){return FormField_stories_jsx(Form.Z,{onSubmit:function onSubmit(){},error:ExampleApiError},FormField_stories_jsx(FormField.Z,args))},args:{label:"Choose",name:"emailAddress",inputWrapper:ReactSelect_styles.T,options:_objectSpread({},rules.C1),asFieldSet:!0,children:function children(_ref){var field=_ref.field,_ref$props=_ref.props,id=_ref$props.id,props=(0,objectWithoutProperties.Z)(_ref$props,FormField_stories_excluded);return FormField_stories_jsx(react_select_esm.ZP,(0,esm_extends.Z)({},field,props,{inputId:id,defaultValue:colourOptions[0],className:"react-select",classNamePrefix:"react-select",options:colourOptions}))}}};WithInput.parameters=_objectSpread(_objectSpread({},WithInput.parameters),{},{storySource:_objectSpread({source:'{\n  render: args => <Form onSubmit={() => {}} error={ExampleApiError}>\n      <FormField {...args} />\n    </Form>,\n  args: {\n    label: "Email Address",\n    name: "emailAddress",\n    options: {\n      ...required,\n      ...email\n    },\n    description: "Description",\n    children: <Input iconBefore={<SvgSprite src={icon} />} />\n  }\n}'},null===(_WithInput$parameters=WithInput.parameters)||void 0===_WithInput$parameters?void 0:_WithInput$parameters.storySource)}),WithSelect.parameters=_objectSpread(_objectSpread({},WithSelect.parameters),{},{storySource:_objectSpread({source:'{\n  render: args => <Form onSubmit={() => {}} error={ExampleApiError}>\n      <FormField {...args} />\n    </Form>,\n  args: {\n    label: "Role",\n    name: "emailAddress",\n    options: {\n      ...required\n    },\n    description: "Description",\n    children: <Select addEmptyOption>\n        <option value="1">Value 1</option>\n        <option value="2">Value 2</option>\n        <option value="3">Value 3</option>\n      </Select>\n  }\n}'},null===(_WithSelect$parameter=WithSelect.parameters)||void 0===_WithSelect$parameter?void 0:_WithSelect$parameter.storySource)}),WithTextarea.parameters=_objectSpread(_objectSpread({},WithTextarea.parameters),{},{storySource:_objectSpread({source:'{\n  render: args => <Form onSubmit={() => {}} error={ExampleApiError}>\n      <FormField {...args} />\n    </Form>,\n  args: {\n    label: "Textarea",\n    name: "emailAddress",\n    options: {\n      ...required\n    },\n    description: "Description",\n    children: <TextArea />\n  }\n}'},null===(_WithTextarea$paramet=WithTextarea.parameters)||void 0===_WithTextarea$paramet?void 0:_WithTextarea$paramet.storySource)}),WithSingleCheckbox.parameters=_objectSpread(_objectSpread({},WithSingleCheckbox.parameters),{},{storySource:_objectSpread({source:'{\n  render: args => <Form onSubmit={() => {}} error={ExampleApiError}>\n      <FormField {...args} />\n    </Form>,\n  args: {\n    label: "I accept privacy policy",\n    name: "emailAddress",\n    $isToggle: true,\n    options: {\n      ...required\n    },\n    children: <SingleCheckbox />\n  }\n}'},null===(_WithSingleCheckbox$p=WithSingleCheckbox.parameters)||void 0===_WithSingleCheckbox$p?void 0:_WithSingleCheckbox$p.storySource)}),WithToggle.parameters=_objectSpread(_objectSpread({},WithToggle.parameters),{},{storySource:_objectSpread({source:'{\n  render: args => <Form onSubmit={() => {}} error={ExampleApiError}>\n      <FormField {...args} />\n    </Form>,\n  args: {\n    label: "I accept privacy policy",\n    name: "emailAddress",\n    $isToggle: true,\n    options: {\n      ...required\n    },\n    children: <Toggle />\n  }\n}'},null===(_WithToggle$parameter=WithToggle.parameters)||void 0===_WithToggle$parameter?void 0:_WithToggle$parameter.storySource)}),WithRadioList.parameters=_objectSpread(_objectSpread({},WithRadioList.parameters),{},{storySource:_objectSpread({source:'{\n  render: args => <Form onSubmit={() => {}} error={ExampleApiError}>\n      <FormField {...args}>\n        <Radio inputValue="value1">Value 1</Radio>\n        <Radio inputValue="value2">Value 2</Radio>\n        <Radio inputValue="value3">Value 3</Radio>\n      </FormField>\n    </Form>,\n  args: {\n    label: "Choose one",\n    name: "emailAddress",\n    options: {\n      ...required\n    },\n    inputWrapper: List,\n    asFieldSet: true\n  }\n}'},null===(_WithRadioList$parame=WithRadioList.parameters)||void 0===_WithRadioList$parame?void 0:_WithRadioList$parame.storySource)}),WithCheckboxList.parameters=_objectSpread(_objectSpread({},WithCheckboxList.parameters),{},{storySource:_objectSpread({source:'{\n  render: args => <Form onSubmit={() => {}} error={ExampleApiError}>\n      <FormField {...args}>\n        <Checkbox inputValue="value1">Value 1</Checkbox>\n        <Checkbox inputValue="value2">Value 2</Checkbox>\n        <Checkbox inputValue="value3">Value 3</Checkbox>\n      </FormField>\n    </Form>,\n  args: {\n    label: "Choose one",\n    name: "emailAddress",\n    options: {\n      ...required\n    },\n    inputWrapper: List,\n    asFieldSet: true\n  }\n}'},null===(_WithCheckboxList$par=WithCheckboxList.parameters)||void 0===_WithCheckboxList$par?void 0:_WithCheckboxList$par.storySource)}),WithReactSelect.parameters=_objectSpread(_objectSpread({},WithReactSelect.parameters),{},{storySource:_objectSpread({source:'{\n  render: args => <Form onSubmit={() => {}} error={ExampleApiError}>\n      <FormField {...args} />\n    </Form>,\n  args: {\n    label: "Choose",\n    name: "emailAddress",\n    inputWrapper: StyledReactSelect,\n    options: {\n      ...required\n    },\n    asFieldSet: true,\n    children: ({\n      field,\n      props: {\n        id,\n        ...props\n      }\n    }) => <ReactSelect {...field} {...props} inputId={id} defaultValue={colourOptions[0]} className="react-select" classNamePrefix="react-select" options={colourOptions} />\n  }\n}'},null===(_WithReactSelect$para=WithReactSelect.parameters)||void 0===_WithReactSelect$para?void 0:_WithReactSelect$para.storySource)})},"./src/components/common/svg/SvgSprite.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/isEqual.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__),_excluded=["src","children"],_excluded2=["crossOrigin","ref","title"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,SvgSprite=function SvgSprite(_ref){var src=_ref.src,props=(_ref.children,(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded)),title=(props.crossOrigin,props.ref,props.title),typedProps=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(props,_excluded2),titleId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();return __jsx("svg",(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},typedProps,{viewBox:src.viewBox,role:"img","aria-labelledby":title&&titleId}),title&&__jsx("title",{id:titleId},title),__jsx("use",{xlinkHref:"#".concat(src.id)}))};SvgSprite.displayName="SvgSprite",SvgSprite.__docgenInfo={description:"",methods:[],displayName:"SvgSprite"};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgSprite,lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default());try{SvgSprite.displayName="SvgSprite",SvgSprite.__docgenInfo={description:"",displayName:"SvgSprite",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/svg/SvgSprite.tsx#SvgSprite"]={docgenInfo:SvgSprite.__docgenInfo,name:"SvgSprite",path:"src/components/common/svg/SvgSprite.tsx#SvgSprite"})}catch(__react_docgen_typescript_loader_error){}}}]);