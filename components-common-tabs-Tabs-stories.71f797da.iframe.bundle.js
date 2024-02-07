"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[757],{"./src/components/common/tabs/Tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tabs_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function makeTypeChecker(tabsRole){return element=>!!element.type&&element.type.tabsRole===tabsRole}const elementTypes_isTab=makeTypeChecker("Tab"),elementTypes_isTabList=makeTypeChecker("TabList"),elementTypes_isTabPanel=makeTypeChecker("TabPanel");function deepMap(children,callback){return react.Children.map(children,(child=>null===child?null:function isTabChild(child){return elementTypes_isTab(child)||elementTypes_isTabList(child)||elementTypes_isTabPanel(child)}(child)?callback(child):child.props&&child.props.children&&"object"==typeof child.props.children?(0,react.cloneElement)(child,{...child.props,children:deepMap(child.props.children,callback)}):child))}function childrenDeepMap_deepForEach(children,callback){return react.Children.forEach(children,(child=>{null!==child&&(elementTypes_isTab(child)||elementTypes_isTabPanel(child)?callback(child):child.props&&child.props.children&&"object"==typeof child.props.children&&(elementTypes_isTabList(child)&&callback(child),childrenDeepMap_deepForEach(child.props.children,callback)))}))}function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}const dist_clsx=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n};function count_getTabsCount(children){let tabCount=0;return childrenDeepMap_deepForEach(children,(child=>{elementTypes_isTab(child)&&tabCount++})),tabCount}function isNode(node){return node&&"getAttribute"in node}function isTabNode(node){return isNode(node)&&node.getAttribute("data-rttab")}function isTabDisabled(node){return isNode(node)&&"true"===node.getAttribute("aria-disabled")}let canUseActiveElement;const defaultProps={className:"react-tabs",focus:!1},UncontrolledTabs=props=>{let tabNodes=(0,react.useRef)([]),tabIds=(0,react.useRef)([]);const ref=(0,react.useRef)();function setSelected(index,event){if(index<0||index>=getTabsCount())return;const{onSelect,selectedIndex}=props;onSelect(index,selectedIndex,event)}function getNextTab(index){const count=getTabsCount();for(let i=index+1;i<count;i++)if(!isTabDisabled(getTab(i)))return i;for(let i=0;i<index;i++)if(!isTabDisabled(getTab(i)))return i;return index}function getPrevTab(index){let i=index;for(;i--;)if(!isTabDisabled(getTab(i)))return i;for(i=getTabsCount();i-- >index;)if(!isTabDisabled(getTab(i)))return i;return index}function getTabsCount(){const{children}=props;return count_getTabsCount(children)}function getTab(index){return tabNodes.current[`tabs-${index}`]}function handleClick(e){let node=e.target;do{if(isTabFromContainer(node)){if(isTabDisabled(node))return;return void setSelected([].slice.call(node.parentNode.children).filter(isTabNode).indexOf(node),e)}}while(null!=(node=node.parentNode))}function isTabFromContainer(node){if(!isTabNode(node))return!1;let nodeAncestor=node.parentElement;do{if(nodeAncestor===ref.current)return!0;if(nodeAncestor.getAttribute("data-rttabs"))break;nodeAncestor=nodeAncestor.parentElement}while(nodeAncestor);return!1}const{children,className,disabledTabClassName,domRef,focus,forceRenderTabPanel,onSelect,selectedIndex,selectedTabClassName,selectedTabPanelClassName,environment,disableUpDownKeys,disableLeftRightKeys,...attributes}={...defaultProps,...props};return react.createElement("div",Object.assign({},attributes,{className:dist_clsx(className),onClick:handleClick,onKeyDown:function handleKeyDown(e){const{direction,disableUpDownKeys,disableLeftRightKeys}=props;if(isTabFromContainer(e.target)){let{selectedIndex:index}=props,preventDefault=!1,useSelectedIndex=!1;"Space"!==e.code&&32!==e.keyCode&&"Enter"!==e.code&&13!==e.keyCode||(preventDefault=!0,useSelectedIndex=!1,handleClick(e)),(disableLeftRightKeys||37!==e.keyCode&&"ArrowLeft"!==e.code)&&(disableUpDownKeys||38!==e.keyCode&&"ArrowUp"!==e.code)?(disableLeftRightKeys||39!==e.keyCode&&"ArrowRight"!==e.code)&&(disableUpDownKeys||40!==e.keyCode&&"ArrowDown"!==e.code)?35===e.keyCode||"End"===e.code?(index=function getLastTab(){let i=getTabsCount();for(;i--;)if(!isTabDisabled(getTab(i)))return i;return null}(),preventDefault=!0,useSelectedIndex=!0):36!==e.keyCode&&"Home"!==e.code||(index=function getFirstTab(){const count=getTabsCount();for(let i=0;i<count;i++)if(!isTabDisabled(getTab(i)))return i;return null}(),preventDefault=!0,useSelectedIndex=!0):(index="rtl"===direction?getPrevTab(index):getNextTab(index),preventDefault=!0,useSelectedIndex=!0):(index="rtl"===direction?getNextTab(index):getPrevTab(index),preventDefault=!0,useSelectedIndex=!0),preventDefault&&e.preventDefault(),useSelectedIndex&&setSelected(index,e)}},ref:node=>{ref.current=node,domRef&&domRef(node)},"data-rttabs":!0}),function getChildren(){let index=0;const{children,disabledTabClassName,focus,forceRenderTabPanel,selectedIndex,selectedTabClassName,selectedTabPanelClassName,environment}=props;tabIds.current=tabIds.current||[];let diff=tabIds.current.length-getTabsCount();const id=(0,react.useId)();for(;diff++<0;)tabIds.current.push(`${id}${tabIds.current.length}`);return deepMap(children,(child=>{let result=child;if(elementTypes_isTabList(child)){let listIndex=0,wasTabFocused=!1;null==canUseActiveElement&&function determineCanUseActiveElement(environment){const env=environment||("undefined"!=typeof window?window:void 0);try{canUseActiveElement=!(void 0===env||!env.document||!env.document.activeElement)}catch(e){canUseActiveElement=!1}}(environment);const env=environment||("undefined"!=typeof window?window:void 0);canUseActiveElement&&env&&(wasTabFocused=react.Children.toArray(child.props.children).filter(elementTypes_isTab).some(((tab,i)=>env.document.activeElement===getTab(i)))),result=(0,react.cloneElement)(child,{children:deepMap(child.props.children,(tab=>{const key=`tabs-${listIndex}`,selected=selectedIndex===listIndex,props={tabRef:node=>{tabNodes.current[key]=node},id:tabIds.current[listIndex],selected,focus:selected&&(focus||wasTabFocused)};return selectedTabClassName&&(props.selectedClassName=selectedTabClassName),disabledTabClassName&&(props.disabledClassName=disabledTabClassName),listIndex++,(0,react.cloneElement)(tab,props)}))})}else if(elementTypes_isTabPanel(child)){const props={id:tabIds.current[index],selected:selectedIndex===index};forceRenderTabPanel&&(props.forceRender=forceRenderTabPanel),selectedTabPanelClassName&&(props.selectedClassName=selectedTabPanelClassName),index++,result=(0,react.cloneElement)(child,props)}return result}))}())};UncontrolledTabs.propTypes={};const components_UncontrolledTabs=UncontrolledTabs,Tabs_defaultProps={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},Tabs=props=>{const{children,defaultFocus,defaultIndex,focusTabOnClick,onSelect,...attributes}={...Tabs_defaultProps,...props},[focus,setFocus]=(0,react.useState)(defaultFocus),[mode]=(0,react.useState)((props=>null===props.selectedIndex?1:0)(attributes)),[selectedIndex,setSelectedIndex]=(0,react.useState)(1===mode?defaultIndex||0:null);if((0,react.useEffect)((()=>{setFocus(!1)}),[]),1===mode){const tabsCount=count_getTabsCount(children);(0,react.useEffect)((()=>{if(null!=selectedIndex){const maxTabIndex=Math.max(0,tabsCount-1);setSelectedIndex(Math.min(selectedIndex,maxTabIndex))}}),[tabsCount])}let subProps={...props,...attributes};return subProps.focus=focus,subProps.onSelect=(index,last,event)=>{"function"==typeof onSelect&&!1===onSelect(index,last,event)||(focusTabOnClick&&setFocus(!0),1===mode&&setSelectedIndex(index))},null!=selectedIndex&&(subProps.selectedIndex=selectedIndex),delete subProps.defaultFocus,delete subProps.defaultIndex,delete subProps.focusTabOnClick,react.createElement(components_UncontrolledTabs,subProps,children)};Tabs.propTypes={},Tabs.tabsRole="Tabs";const components_Tabs=Tabs,TabList_defaultProps={className:"react-tabs__tab-list"},TabList=props=>{const{children,className,...attributes}={...TabList_defaultProps,...props};return react.createElement("ul",Object.assign({},attributes,{className:dist_clsx(className),role:"tablist"}),children)};TabList.tabsRole="TabList",TabList.propTypes={};const components_TabList=TabList,Tab_defaultProps={className:"react-tabs__tab",disabledClassName:"react-tabs__tab--disabled",focus:!1,id:null,selected:!1,selectedClassName:"react-tabs__tab--selected"},Tab=props=>{let nodeRef=(0,react.useRef)();const{children,className,disabled,disabledClassName,focus,id,selected,selectedClassName,tabIndex,tabRef,...attributes}={...Tab_defaultProps,...props};return(0,react.useEffect)((()=>{selected&&focus&&nodeRef.current.focus()}),[selected,focus]),react.createElement("li",Object.assign({},attributes,{className:dist_clsx(className,{[selectedClassName]:selected,[disabledClassName]:disabled}),ref:node=>{nodeRef.current=node,tabRef&&tabRef(node)},role:"tab",id:`tab${id}`,"aria-selected":selected?"true":"false","aria-disabled":disabled?"true":"false","aria-controls":`panel${id}`,tabIndex:tabIndex||(selected?"0":null),"data-rttab":!0}),children)};Tab.propTypes={},Tab.tabsRole="Tab";const components_Tab=Tab,TabPanel_defaultProps={className:"react-tabs__tab-panel",forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},TabPanel=props=>{const{children,className,forceRender,id,selected,selectedClassName,...attributes}={...TabPanel_defaultProps,...props};return react.createElement("div",Object.assign({},attributes,{className:dist_clsx(className,{[selectedClassName]:selected}),role:"tabpanel",id:`panel${id}`,"aria-labelledby":`tab${id}`}),forceRender||selected?children:null)};TabPanel.tabsRole="TabPanel",TabPanel.propTypes={};const components_TabPanel=TabPanel;var _templateObject,objectWithoutProperties=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),StyledTabs=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").default.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  -webkit-tap-highlight-color: transparent;\n\n  .react-tabs {\n    &__tab {\n      display: inline-block;\n      position: relative;\n      list-style: none;\n      cursor: pointer;\n      letter-spacing: -0.02em;\n      transition: color ","ms;\n      margin-bottom: -1px;\n\n      &:not(:last-child) {\n        margin-right: 1.75rem;\n      }\n\n      > span {\n        padding-bottom: 0.5rem;\n        display: block;\n      }\n\n      &--selected {\n        > span {\n          border-bottom: 2px solid ",";\n        }\n      }\n\n      &--disabled {\n        opacity: 0.5;\n        cursor: default;\n      }\n    }\n\n    &__tab-panel {\n      &--selected {\n        display: block;\n      }\n\n      > * {\n        margin-top: 1.25rem;\n      }\n    }\n\n    &__tab:focus .react-tabs__tab-panel {\n      display: none;\n    }\n  }\n"])),(function(_ref){return _ref.theme.timings.fast}),(function(_ref2){return _ref2.theme.colors.primary})),_excluded=["children"],__jsx=react.createElement,Tabs_Tabs=function Tabs(_ref){var children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(StyledTabs,null,__jsx(components_Tabs,props,children))};Tabs_Tabs.displayName="Tabs";const tabs_Tabs=(0,react.memo)(Tabs_Tabs);try{Tabs_Tabs.displayName="Tabs",Tabs_Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/tabs/Tabs.tsx#Tabs"]={docgenInfo:Tabs_Tabs.__docgenInfo,name:"Tabs",path:"src/components/common/tabs/Tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}var Tabs_stories_jsx=react.createElement;const Tabs_stories={title:"UI/Tabs",component:tabs_Tabs,tags:["autodocs"]};var Default={args:{children:Tabs_stories_jsx(react.Fragment,null,Tabs_stories_jsx(components_TabList,null,Tabs_stories_jsx(components_Tab,null,Tabs_stories_jsx("span",null,"Characteristics")),Tabs_stories_jsx(components_Tab,null,Tabs_stories_jsx("span",null,"Plans & pictures")),Tabs_stories_jsx(components_Tab,null,Tabs_stories_jsx("span",null,"Moodboard")),Tabs_stories_jsx(components_Tab,null,Tabs_stories_jsx("span",null,"Documentation"))),Tabs_stories_jsx(components_TabPanel,null,Tabs_stories_jsx("h2",null,"Characteristics content")),Tabs_stories_jsx(components_TabPanel,null,Tabs_stories_jsx("h2",null,"Plans & pictures content")),Tabs_stories_jsx(components_TabPanel,null,Tabs_stories_jsx("h2",null,"Moodboard content")),Tabs_stories_jsx(components_TabPanel,null,Tabs_stories_jsx("h2",null,"Documentation content")))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <>\n        <TabList>\n          <Tab>\n            <span>Characteristics</span>\n          </Tab>\n          <Tab>\n            <span>Plans &amp; pictures</span>\n          </Tab>\n          <Tab>\n            <span>Moodboard</span>\n          </Tab>\n          <Tab>\n            <span>Documentation</span>\n          </Tab>\n        </TabList>\n\n        <TabPanel>\n          <h2>Characteristics content</h2>\n        </TabPanel>\n        <TabPanel>\n          <h2>Plans &amp; pictures content</h2>\n        </TabPanel>\n        <TabPanel>\n          <h2>Moodboard content</h2>\n        </TabPanel>\n        <TabPanel>\n          <h2>Documentation content</h2>\n        </TabPanel>\n      </>\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})}}]);