"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[5370],{"./src/components/common/form/form/Form.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_select__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/react-select/dist/react-select.esm.js"),_rules__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/form/rules.ts"),_form_Form__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/form/form/Form.tsx"),_single_checkbox_SingleCheckbox__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/form/single-checkbox/SingleCheckbox.tsx"),_collection_List__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/form/collection/List.tsx"),_collection_checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/common/form/collection/checkbox/Checkbox.tsx"),_react_select_ReactSelect_styles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/common/form/react-select/ReactSelect.styles.ts"),_heading_Heading__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/common/heading/Heading.tsx"),_button_Button__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/common/button/Button.tsx"),_input_PasswordInput__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/common/form/input/PasswordInput.tsx"),_input_Input__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/common/form/input/Input.tsx"),_form_field_FormField__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/common/form/form-field/FormField.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),_excluded=["id"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var colourOptions=[{value:"ocean",label:"Ocean",color:"#00B8D9",isFixed:!0},{value:"blue",label:"Blue",color:"#0052CC",isDisabled:!0},{value:"purple",label:"Purple",color:"#5243AA"},{value:"red",label:"Red",color:"#FF5630",isFixed:!0},{value:"orange",label:"Orange",color:"#FF8B00"},{value:"yellow",label:"Yellow",color:"#FFC400"},{value:"green",label:"Green",color:"#36B37E"},{value:"forest",label:"Forest",color:"#00875A"},{value:"slate",label:"Slate",color:"#253858"},{value:"silver",label:"Silver",color:"#666666"}];const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Form/Form",component:_form_Form__WEBPACK_IMPORTED_MODULE_3__.Z,tags:["autodocs"]};var Example={render:function render(args){return __jsx(_form_Form__WEBPACK_IMPORTED_MODULE_3__.Z,(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_13__.Z)({},args,{defaultValues:{color:colourOptions[0]},onSubmit:function onSubmit(values){console.log(values)}}),__jsx(_heading_Heading__WEBPACK_IMPORTED_MODULE_8__.Z,null,"Register here"),__jsx("div",{style:{width:"100%",display:"flex",gap:"1.25rem"}},__jsx(_form_field_FormField__WEBPACK_IMPORTED_MODULE_12__.Z,{style:{flexGrow:1},label:"First name",name:"firstName",options:_objectSpread({},_rules__WEBPACK_IMPORTED_MODULE_2__.C1)},__jsx(_input_Input__WEBPACK_IMPORTED_MODULE_11__.Z,null)),__jsx(_form_field_FormField__WEBPACK_IMPORTED_MODULE_12__.Z,{style:{flexGrow:1},label:"Last name",name:"lastName",options:_objectSpread({},_rules__WEBPACK_IMPORTED_MODULE_2__.C1)},__jsx(_input_Input__WEBPACK_IMPORTED_MODULE_11__.Z,null))),__jsx(_form_field_FormField__WEBPACK_IMPORTED_MODULE_12__.Z,{label:"Email address",name:"emailAddress",options:_objectSpread(_objectSpread({},_rules__WEBPACK_IMPORTED_MODULE_2__.C1),_rules__WEBPACK_IMPORTED_MODULE_2__.Do)},__jsx(_input_Input__WEBPACK_IMPORTED_MODULE_11__.Z,{type:"email"})),__jsx(_form_field_FormField__WEBPACK_IMPORTED_MODULE_12__.Z,{label:"Favorite color",name:"color",inputWrapper:_react_select_ReactSelect_styles__WEBPACK_IMPORTED_MODULE_7__.T,options:_objectSpread({},_rules__WEBPACK_IMPORTED_MODULE_2__.C1)},(function(_ref){var field=_ref.field,_ref$props=_ref.props,id=_ref$props.id,props=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_14__.Z)(_ref$props,_excluded);return __jsx(react_select__WEBPACK_IMPORTED_MODULE_15__.ZP,(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_13__.Z)({},field,props,{inputId:id,className:"react-select",classNamePrefix:"react-select",options:colourOptions}))})),__jsx(_form_field_FormField__WEBPACK_IMPORTED_MODULE_12__.Z,{label:"Hobbies",name:"hobbies",inputWrapper:_collection_List__WEBPACK_IMPORTED_MODULE_5__.Z,options:_objectSpread({},_rules__WEBPACK_IMPORTED_MODULE_2__.C1)},__jsx(_collection_checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_6__.Z,{key:"1",inputValue:"value1"},"Value 1"),__jsx(_collection_checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_6__.Z,{key:"2",inputValue:"value2"},"Value 2"),__jsx(_collection_checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_6__.Z,{key:"3",inputValue:"value3"},"Value 3")),__jsx("div",{style:{width:"100%",display:"flex",gap:"1.25rem"}},__jsx(_form_field_FormField__WEBPACK_IMPORTED_MODULE_12__.Z,{style:{flexGrow:1},label:"Password",name:"password",description:"At least 9 chars, lowercase, uppercase, special char and number",options:_objectSpread({},_rules__WEBPACK_IMPORTED_MODULE_2__.Bj)},__jsx(_input_PasswordInput__WEBPACK_IMPORTED_MODULE_10__.Z,null)),__jsx(_form_field_FormField__WEBPACK_IMPORTED_MODULE_12__.Z,{style:{flexGrow:1},label:"Repeat password",name:"passwordRepeat",watchValidate:(0,_rules__WEBPACK_IMPORTED_MODULE_2__.Sd)("password")},__jsx(_input_Input__WEBPACK_IMPORTED_MODULE_11__.Z,{type:"password"}))),__jsx(_form_field_FormField__WEBPACK_IMPORTED_MODULE_12__.Z,{label:"I accept privacy policy",name:"privacy",$isToggle:!0,options:_objectSpread({},_rules__WEBPACK_IMPORTED_MODULE_2__.C1)},__jsx(_single_checkbox_SingleCheckbox__WEBPACK_IMPORTED_MODULE_4__.Z,null)),__jsx(_button_Button__WEBPACK_IMPORTED_MODULE_9__.Z,{type:"submit"},"Submit"))},args:{error:{type:"https://tools.ietf.org/html/rfc2616#section-10",title:"An error occurred",message:"emailAddress: This value is not a valid email address.",error_code:"emailAddress: This value is not a valid email address.",violations:[{propertyPath:"emailAddress",message:"This value is not a valid email address.",code:"bd79c0ab-ddba-46cc-a703-a7a4b08de310"}]}}};Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'{\n  render: args => <Form<SampleFormData> {...args} defaultValues={{\n    color: colourOptions[0]\n  }} onSubmit={values => {\n    console.log(values);\n  }}>\n      <Heading>Register here</Heading>\n      <div style={{\n      width: "100%",\n      display: "flex",\n      gap: "1.25rem"\n    }}>\n        <FormField<SampleFormData> style={{\n        flexGrow: 1\n      }} label="First name" name="firstName" options={{\n        ...required\n      }}>\n          <Input />\n        </FormField>\n        <FormField<SampleFormData> style={{\n        flexGrow: 1\n      }} label="Last name" name="lastName" options={{\n        ...required\n      }}>\n          <Input />\n        </FormField>\n      </div>\n      <FormField<SampleFormData> label="Email address" name="emailAddress" options={{\n      ...required,\n      ...email\n    }}>\n        <Input type="email" />\n      </FormField>\n      <FormField<SampleFormData> label="Favorite color" name="color" inputWrapper={StyledReactSelect} options={{\n      ...required\n    }}>\n        {({\n        field,\n        props: {\n          id,\n          ...props\n        }\n      }) => {\n        return <ReactSelect {...field} {...props} inputId={id} className="react-select" classNamePrefix="react-select" options={colourOptions} />;\n      }}\n      </FormField>\n      <FormField<SampleFormData> label="Hobbies" name="hobbies" inputWrapper={List} options={{\n      ...required\n    }}>\n        <Checkbox key="1" inputValue="value1">\n          Value 1\n        </Checkbox>\n        <Checkbox key="2" inputValue="value2">\n          Value 2\n        </Checkbox>\n        <Checkbox key="3" inputValue="value3">\n          Value 3\n        </Checkbox>\n      </FormField>\n\n      <div style={{\n      width: "100%",\n      display: "flex",\n      gap: "1.25rem"\n    }}>\n        <FormField<SampleFormData> style={{\n        flexGrow: 1\n      }} label="Password" name="password" description="At least 9 chars, lowercase, uppercase, special char and number" options={{\n        ...password\n      }}>\n          <PasswordInput />\n        </FormField>\n        <FormField<SampleFormData> style={{\n        flexGrow: 1\n      }} label="Repeat password" name="passwordRepeat" watchValidate={passwordRepeat("password")}>\n          <Input type="password" />\n        </FormField>\n      </div>\n      <FormField<SampleFormData> label="I accept privacy policy" name="privacy" $isToggle options={{\n      ...required\n    }}>\n        <SingleCheckbox />\n      </FormField>\n      <Button type="submit">Submit</Button>\n    </Form>,\n  args: {\n    error: ExampleApiError\n  }\n}',...Example.parameters?.docs?.source}}};const __namedExportsOrder=["Example"]},"./src/components/common/heading/Heading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>heading_Heading});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,esm_extends=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),dist=__webpack_require__("./node_modules/css-in-js-media/dist/index.js"),dist_default=__webpack_require__.n(dist),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),StyledHeading=styled_components_browser_esm.default.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  font-family: ",";\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin: 0;\n\n  ","\n"])),(function(_ref){return _ref.theme.fonts.familyHeadings}),(function(_ref2){var $size=_ref2.$size;return"display"===$size?(0,styled_components_browser_esm.css)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n          font-size: 1.625rem;\n          line-height: 1.24;\n\n          "," {\n            font-size: 3rem;\n          }\n        "])),dist_default()(">=tablet")):"h1"===$size?(0,styled_components_browser_esm.css)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n          font-size: 1.75rem;\n          line-height: 1.24;\n\n          "," {\n            font-size: 2.25rem;\n          }\n        "])),dist_default()(">=tablet")):"h2"===$size?(0,styled_components_browser_esm.css)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n          font-size: 1.5rem;\n          line-height: 1.24;\n\n          "," {\n            font-size: 2rem;\n          }\n        "])),dist_default()(">=tablet")):"h3"===$size?(0,styled_components_browser_esm.css)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n          font-size: 1.25rem;\n          line-height: 1.5;\n\n          "," {\n            font-size: 1.375rem;\n          }\n        "])),dist_default()(">=tablet")):"h4"===$size?(0,styled_components_browser_esm.css)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n          font-size: 1rem;\n          line-height: 1.5;\n\n          "," {\n            font-size: 1.125rem;\n          }\n        "])),dist_default()(">=tablet")):"h5"===$size?(0,styled_components_browser_esm.css)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n          font-size: 0.875rem;\n          line-height: 1.5;\n\n          "," {\n            font-size: 1rem;\n          }\n        "])),dist_default()(">=tablet")):"h6"===$size?(0,styled_components_browser_esm.css)(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.Z)(["\n          font-size: 0.75rem;\n          line-height: 1.5;\n\n          "," {\n            font-size: 0.875rem;\n          }\n        "])),dist_default()(">=tablet")):""})),_excluded=["type","size","children"],__jsx=react.createElement,Heading=(0,react.forwardRef)((function(_ref,ref){var _ref$type=_ref.type,type=void 0===_ref$type?"h2":_ref$type,_ref$size=_ref.size,size=void 0===_ref$size?type:_ref$size,children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(StyledHeading,(0,esm_extends.Z)({$size:size,as:type},props,{ref}),children)}));const heading_Heading=(0,react.memo)(Heading);try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{size:{defaultValue:{value:"h2"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"display"'}]}},type:{defaultValue:{value:"h2"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/heading/Heading.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/components/common/heading/Heading.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}}}]);