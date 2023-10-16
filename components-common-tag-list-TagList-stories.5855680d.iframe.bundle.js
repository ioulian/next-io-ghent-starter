"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[3901],{"./src/components/common/tag-list/TagList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>TagList_stories});var _templateObject,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Tag=__webpack_require__("./src/components/common/tag/Tag.tsx"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),StyledTagList=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").default.ul(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  gap: 0.5rem;\n"]))),_excluded=["children"],__jsx=react.createElement,TagList=function TagList(_ref){var children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(StyledTagList,props,react.Children.map(children,(function(child){return __jsx("li",null,child)})))};TagList.displayName="TagList",TagList.__docgenInfo={description:"",methods:[],displayName:"TagList"};const tag_list_TagList=(0,react.memo)(TagList);try{TagList.displayName="TagList",TagList.__docgenInfo={description:"",displayName:"TagList",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLUListElement | null) => void) | RefObject<HTMLUListElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/tag-list/TagList.tsx#TagList"]={docgenInfo:TagList.__docgenInfo,name:"TagList",path:"src/components/common/tag-list/TagList.tsx#TagList"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,TagList_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const TagList_stories={title:"UI/Tag/List",component:tag_list_TagList,tags:["autodocs"]};var Default={render:function render(args){return TagList_stories_jsx(tag_list_TagList,args,TagList_stories_jsx(Tag.Z,null,"Tag 1"),TagList_stories_jsx(Tag.Z,null,"Tag 2"),TagList_stories_jsx(Tag.Z,null,"Tag 3"),TagList_stories_jsx(Tag.Z,null,"Tag 4"))}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  render: args => <TagList {...args}>\n      <Tag>Tag 1</Tag>\n      <Tag>Tag 2</Tag>\n      <Tag>Tag 3</Tag>\n      <Tag>Tag 4</Tag>\n    </TagList>\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/components/common/tag/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>tag_Tag});var _templateObject,objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),rgba=__webpack_require__("./node_modules/polished/lib/color/rgba.js"),rgba_default=__webpack_require__.n(rgba),StyledTag=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").default.span(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  font-size: 0.625rem;\n  line-height: calc(1.5rem - 2px);\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  border: 1px solid ",";\n  display: inline-block;\n  font-weight: 700;\n  border-radius: 3px;\n"])),(function(_ref){var theme=_ref.theme;return rgba_default()(theme.colors.body,.5)})),_excluded=["children"],__jsx=react.createElement,Tag=function Tag(_ref){var children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(StyledTag,props,children)};Tag.displayName="Tag",Tag.__docgenInfo={description:"",methods:[],displayName:"Tag"};const tag_Tag=(0,react.memo)(Tag);try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/tag/Tag.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"src/components/common/tag/Tag.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}}}]);