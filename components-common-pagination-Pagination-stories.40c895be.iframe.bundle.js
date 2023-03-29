(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[1451],{"./src/components/common/pagination/Pagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>Pagination_stories});var _templateObject,defineProperty=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),chevron_right=__webpack_require__("./node_modules/@tabler/icons/icons/chevron-right.svg"),chevron_left=__webpack_require__("./node_modules/@tabler/icons/icons/chevron-left.svg"),react_paginate=__webpack_require__("./node_modules/react-paginate/dist/react-paginate.js"),react_paginate_default=__webpack_require__.n(react_paginate),isEqual=__webpack_require__("./node_modules/lodash/isEqual.js"),isEqual_default=__webpack_require__.n(isEqual),taggedTemplateLiteral=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),StyledPagination=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").default.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  svg {\n    width: 0.75rem;\n    height: 0.75rem;\n    margin: 0.125rem;\n    display: block;\n  }\n\n  > ul {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.25rem;\n  }\n\n  li {\n    display: block;\n    cursor: pointer;\n\n    &:not(.break):not(.previous):not(.next) {\n      border-radius: 4px;\n      border: 1px solid rgba(115, 117, 117, 0.1);\n      transition: color ","ms,\n        background-color ","ms,\n        border-color ","ms;\n    }\n\n    &.selected,\n    &:not(.break):not(.previous):not(.next):hover {\n      background-color: ",";\n      color: ",";\n    }\n\n    &.disabled {\n      pointer-events: none;\n      opacity: 0.5;\n    }\n  }\n\n  a {\n    display: block;\n    color: inherit;\n    font-size: 0.75rem;\n    line-height: 1rem;\n    padding: 0.375rem 0.75rem;\n    font-weight: 700;\n  }\n"])),(function(_ref){return _ref.theme.timings.fast}),(function(_ref2){return _ref2.theme.timings.fast}),(function(_ref3){return _ref3.theme.timings.fast}),(function(_ref4){return _ref4.theme.colors.primary}),(function(_ref5){return _ref5.theme.colors.white})),__jsx=react.createElement,Pagination=function Pagination(props){return __jsx(StyledPagination,null,__jsx(react_paginate_default(),props))};Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",methods:[],displayName:"Pagination"};const pagination_Pagination=(0,react.memo)(Pagination,isEqual_default());try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/pagination/Pagination.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"src/components/common/pagination/Pagination.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,SvgSprite=__webpack_require__("./src/components/common/svg/SvgSprite.tsx"),Pagination_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Pagination_stories={title:"UI/Pagination",component:pagination_Pagination,tags:["autodocs"]};var Default={render:function render(args){return Pagination_stories_jsx(pagination_Pagination,args)},args:{breakLabel:"...",nextLabel:Pagination_stories_jsx(SvgSprite.Z,{src:chevron_right.Z}),pageRangeDisplayed:5,pageCount:30,previousLabel:Pagination_stories_jsx(SvgSprite.Z,{src:chevron_left.Z})}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  render: args => <Pagination {...args} />,\n  args: {\n    breakLabel: "...",\n    nextLabel: <SvgSprite src={iconChevronRight} />,\n    pageRangeDisplayed: 5,\n    pageCount: 30,\n    previousLabel: <SvgSprite src={iconChevronLeft} />\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./src/components/common/svg/SvgSprite.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/isEqual.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__),_excluded=["src","children"],_excluded2=["crossOrigin","ref","title"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,SvgSprite=function SvgSprite(_ref){var src=_ref.src,props=(_ref.children,(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded)),title=(props.crossOrigin,props.ref,props.title),typedProps=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(props,_excluded2),titleId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();return __jsx("svg",(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},typedProps,{viewBox:src.viewBox,role:title?"img":void 0,"aria-hidden":!title||void 0,"aria-labelledby":title&&titleId}),title&&__jsx("title",{id:titleId},title),__jsx("use",{xlinkHref:"#".concat(src.id)}))};SvgSprite.displayName="SvgSprite",SvgSprite.__docgenInfo={description:"",methods:[],displayName:"SvgSprite"};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgSprite,lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default());try{SvgSprite.displayName="SvgSprite",SvgSprite.__docgenInfo={description:"",displayName:"SvgSprite",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/svg/SvgSprite.tsx#SvgSprite"]={docgenInfo:SvgSprite.__docgenInfo,name:"SvgSprite",path:"src/components/common/svg/SvgSprite.tsx#SvgSprite"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react-paginate/dist/react-paginate.js":function(module,__unused_webpack_exports,__webpack_require__){var t;t=e=>(()=>{var t={703:(e,t,a)=>{"use strict";var r=a(414);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,i,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return a.PropTypes=a,a}},697:(e,t,a)=>{e.exports=a(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:t=>{"use strict";t.exports=e}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";r.r(n),r.d(n,{default:()=>k});var e=r(98),t=r.n(e),a=r(697),i=r.n(a);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}var s=function(e){var a=e.pageClassName,r=e.pageLinkClassName,n=e.page,i=e.selected,s=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,p=e.pageSelectedHandler,u=e.href,g=e.extraAriaContext,d=e.pageLabelBuilder,f=e.rel,v=e.ariaLabel||"Page "+n+(g?" "+g:""),b=null;return i&&(b="page",v=e.ariaLabel||"Page "+n+" is your current page",a=void 0!==a?a+" "+s:s,void 0!==r?void 0!==l&&(r=r+" "+l):r=l),t().createElement("li",{className:a},t().createElement("a",o({rel:f,role:u?void 0:"button",className:r,href:u,tabIndex:i?"-1":"0","aria-label":v,"aria-current":b,onKeyPress:p},c(p)),d(n)))};s.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};const l=s;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},c.apply(this,arguments)}var p=function(e){var a=e.breakLabel,r=e.breakClassName,n=e.breakLinkClassName,i=e.breakHandler,o=e.getEventListener,s=r||"break";return t().createElement("li",{className:s},t().createElement("a",c({className:n,role:"button",tabIndex:"0",onKeyPress:i},o(i)),a))};p.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};const u=p;function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!=e?e:t}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},f.apply(this,arguments)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function h(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(s,e);var a,r,n,i,o=(n=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(n);if(i){var a=y(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return h(this,e)});function s(e){var a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),C(m(a=o.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;a.handleClick(e,null,t>0?t-1:void 0,{isPrevious:!0})})),C(m(a),"handleNextPage",(function(e){var t=a.state.selected,r=a.props.pageCount;a.handleClick(e,null,t<r-1?t+1:void 0,{isNext:!0})})),C(m(a),"handlePageSelected",(function(e,t){if(a.state.selected===e)return a.callActiveCallback(e),void a.handleClick(t,null,void 0,{isActive:!0});a.handleClick(t,null,e)})),C(m(a),"handlePageChange",(function(e){a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))})),C(m(a),"getEventListener",(function(e){return C({},a.props.eventListener,e)})),C(m(a),"handleClick",(function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.isPrevious,o=void 0!==i&&i,s=n.isNext,l=void 0!==s&&s,c=n.isBreak,p=void 0!==c&&c,u=n.isActive,g=void 0!==u&&u;e.preventDefault?e.preventDefault():e.returnValue=!1;var d=a.state.selected,f=a.props.onClick,v=r;if(f){var b=f({index:t,selected:d,nextSelectedPage:r,event:e,isPrevious:o,isNext:l,isBreak:p,isActive:g});if(!1===b)return;Number.isInteger(b)&&(v=b)}void 0!==v&&a.handlePageChange(v)})),C(m(a),"handleBreakClick",(function(e,t){var r=a.state.selected;a.handleClick(t,e,r<e?a.getForwardJump():a.getBackwardJump(),{isBreak:!0})})),C(m(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),C(m(a),"callActiveCallback",(function(e){void 0!==a.props.onPageActive&&"function"==typeof a.props.onPageActive&&a.props.onPageActive({selected:e})})),C(m(a),"getElementPageRel",(function(e){var t=a.state.selected,r=a.props,n=r.nextPageRel,i=r.prevPageRel,o=r.selectedPageRel;return t-1===e?i:t===e?o:t+1===e?n:void 0})),C(m(a),"pagination",(function(){var e=[],r=a.props,n=r.pageRangeDisplayed,i=r.pageCount,o=r.marginPagesDisplayed,s=r.breakLabel,l=r.breakClassName,c=r.breakLinkClassName,p=a.state.selected;if(i<=n)for(var g=0;g<i;g++)e.push(a.getPageElement(g));else{var d=n/2,f=n-d;p>i-n/2?d=n-(f=i-p):p<n/2&&(f=n-(d=p));var v,b,h=function(e){return a.getPageElement(e)},m=[];for(v=0;v<i;v++){var y=v+1;y<=o||y>i-o||v>=p-d&&v<=p+(0===p&&n>1?f-1:f)?m.push({type:"page",index:v,display:h(v)}):s&&m.length>0&&m[m.length-1].display!==b&&(n>0||o>0)&&(b=t().createElement(u,{key:v,breakLabel:s,breakClassName:l,breakLinkClassName:c,breakHandler:a.handleBreakClick.bind(null,v),getEventListener:a.getEventListener}),m.push({type:"break",index:v,display:b}))}m.forEach((function(t,a){var r=t;"break"===t.type&&m[a-1]&&"page"===m[a-1].type&&m[a+1]&&"page"===m[a+1].type&&m[a+1].index-m[a-1].index<=2&&(r={type:"page",index:t.index,display:h(t.index)}),e.push(r.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),r=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:r},a}return a=s,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,r=e.extraAriaContext,n=e.pageCount,i=e.forcePage;void 0===t||a||this.callCallback(t),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(n)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(n,"). Did you forget a Math.ceil()?")),void 0!==t&&t>n-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(t," > ").concat(n-1,").")),void 0!==i&&i>n-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(n-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,r=e+t.pageRangeDisplayed;return r>=a?a-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var t=this.props,a=t.hrefBuilder,r=t.pageCount,n=t.hrefAllControls;if(a)return n||e>=0&&e<r?a(e+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var a=this.state.selected,r=this.props,n=r.pageClassName,i=r.pageLinkClassName,o=r.activeClassName,s=r.activeLinkClassName,c=r.extraAriaContext,p=r.pageLabelBuilder;return t().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,rel:this.getElementPageRel(e),pageClassName:n,pageLinkClassName:i,activeClassName:o,activeLinkClassName:s,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:p,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var a=this.props,r=a.disabledClassName,n=a.disabledLinkClassName,i=a.pageCount,o=a.className,s=a.containerClassName,l=a.previousLabel,c=a.previousClassName,p=a.previousLinkClassName,u=a.previousAriaLabel,d=a.prevRel,v=a.nextLabel,b=a.nextClassName,h=a.nextLinkClassName,m=a.nextAriaLabel,y=a.nextRel,C=this.state.selected,P=0===C,k=C===i-1,x="".concat(g(c)).concat(P?" ".concat(g(r)):""),N="".concat(g(b)).concat(k?" ".concat(g(r)):""),L="".concat(g(p)).concat(P?" ".concat(g(n)):""),O="".concat(g(h)).concat(k?" ".concat(g(n)):""),R=P?"true":"false",E=k?"true":"false";return t().createElement("ul",{className:o||s,role:"navigation","aria-label":"Pagination"},t().createElement("li",{className:x},t().createElement("a",f({className:L,href:this.getElementHref(C-1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":R,"aria-label":u,rel:d},this.getEventListener(this.handlePreviousPage)),l)),this.pagination(),t().createElement("li",{className:N},t().createElement("a",f({className:O,href:this.getElementHref(C+1),tabIndex:k?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":E,"aria-label":m,rel:y},this.getEventListener(this.handleNextPage)),v)))}}])&&function v(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(a.prototype,r),Object.defineProperty(a,"prototype",{writable:!1}),s}(e.Component);C(P,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),C(P,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const k=P})(),n})(),module.exports=t(__webpack_require__("./node_modules/react/index.js"))},"./node_modules/@tabler/icons/icons/chevron-left.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/svg-baker-runtime/browser-symbol.js"),_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__),_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js"),_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__),symbol=new(_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({id:"chevron-left",use:"chevron-left-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" id="chevron-left"><path stroke="none" d="M0 0h24v24H0z" /><path d="m15 6-6 6 6 6" /></symbol>'});_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);const __WEBPACK_DEFAULT_EXPORT__=symbol},"./node_modules/@tabler/icons/icons/chevron-right.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/svg-baker-runtime/browser-symbol.js"),_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__),_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js"),_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__),symbol=new(_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({id:"chevron-right",use:"chevron-right-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" id="chevron-right"><path stroke="none" d="M0 0h24v24H0z" /><path d="m9 6 6 6-6 6" /></symbol>'});_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);const __WEBPACK_DEFAULT_EXPORT__=symbol}}]);