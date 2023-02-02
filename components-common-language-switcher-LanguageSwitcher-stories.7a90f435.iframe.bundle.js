/*! For license information please see components-common-language-switcher-LanguageSwitcher-stories.7a90f435.iframe.bundle.js.LICENSE.txt */
(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[509],{"./src/components/common/language-switcher/LanguageSwitcher.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>LanguageSwitcher_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),next_router=__webpack_require__("./node_modules/next/router.js"),next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),cookie=__webpack_require__("./node_modules/cookie/index.js");function readCookie(value,options){void 0===options&&(options={});var cleanValue=function cleanupCookieValue(value){if(value&&"j"===value[0]&&":"===value[1])return value.substr(2);return value}(value);if(function isParsingCookie(value,doNotParse){return void 0===doNotParse&&(doNotParse=!value||"{"!==value[0]&&"["!==value[0]&&'"'!==value[0]),!doNotParse}(cleanValue,options.doNotParse))try{return JSON.parse(cleanValue)}catch(e){}return value}var __assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};const react_cookie_es6_Cookies=function(){function Cookies(cookies,options){var _this=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function parseCookies(cookies,options){return"string"==typeof cookies?cookie.Q(cookies,options):"object"==typeof cookies&&null!==cookies?cookies:{}}(cookies,options),new Promise((function(){_this.HAS_DOCUMENT_COOKIE=function hasDocumentCookie(){return"object"==typeof document&&"string"==typeof document.cookie}()})).catch((function(){}))}return Cookies.prototype._updateBrowserValues=function(parseOptions){this.HAS_DOCUMENT_COOKIE&&(this.cookies=cookie.Q(document.cookie,parseOptions))},Cookies.prototype._emitChange=function(params){for(var i=0;i<this.changeListeners.length;++i)this.changeListeners[i](params)},Cookies.prototype.get=function(name,options,parseOptions){return void 0===options&&(options={}),this._updateBrowserValues(parseOptions),readCookie(this.cookies[name],options)},Cookies.prototype.getAll=function(options,parseOptions){void 0===options&&(options={}),this._updateBrowserValues(parseOptions);var result={};for(var name_1 in this.cookies)result[name_1]=readCookie(this.cookies[name_1],options);return result},Cookies.prototype.set=function(name,value,options){var _a;"object"==typeof value&&(value=JSON.stringify(value)),this.cookies=__assign(__assign({},this.cookies),((_a={})[name]=value,_a)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=cookie.q(name,value,options)),this._emitChange({name,value,options})},Cookies.prototype.remove=function(name,options){var finalOptions=options=__assign(__assign({},options),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=__assign({},this.cookies),delete this.cookies[name],this.HAS_DOCUMENT_COOKIE&&(document.cookie=cookie.q(name,"",finalOptions)),this._emitChange({name,value:void 0,options})},Cookies.prototype.addChangeListener=function(callback){this.changeListeners.push(callback)},Cookies.prototype.removeChangeListener=function(callback){var idx=this.changeListeners.indexOf(callback);idx>=0&&this.changeListeners.splice(idx,1)},Cookies}();var CookiesContext=react.createContext(new react_cookie_es6_Cookies);CookiesContext.Provider,CookiesContext.Consumer;const es6_CookiesContext=CookiesContext;function useCookies(dependencies){var cookies=(0,react.useContext)(es6_CookiesContext);if(!cookies)throw new Error("Missing <CookiesProvider>");var initialCookies=cookies.getAll(),_a=(0,react.useState)(initialCookies),allCookies=_a[0],setCookies=_a[1],previousCookiesRef=(0,react.useRef)(allCookies);return function isInBrowser(){return"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement}()&&(0,react.useLayoutEffect)((function(){function onChange(){var newCookies=cookies.getAll();(function shouldUpdate(dependencies,newCookies,oldCookies){if(!dependencies)return!0;for(var _i=0,dependencies_1=dependencies;_i<dependencies_1.length;_i++){var dependency=dependencies_1[_i];if(newCookies[dependency]!==oldCookies[dependency])return!0}return!1})(dependencies||null,newCookies,previousCookiesRef.current)&&setCookies(newCookies),previousCookiesRef.current=newCookies}return cookies.addChangeListener(onChange),function(){cookies.removeChangeListener(onChange)}}),[cookies]),[allCookies,(0,react.useMemo)((function(){return cookies.set.bind(cookies)}),[cookies]),(0,react.useMemo)((function(){return cookies.remove.bind(cookies)}),[cookies])]}var _templateObject,isEqual=__webpack_require__("./node_modules/lodash/isEqual.js"),isEqual_default=__webpack_require__.n(isEqual),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),StyledLanguageSwitcher=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").default.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  > ul {\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    gap: 0.25rem;\n\n    > li {\n      > a {\n        text-decoration: none;\n\n        &:hover,\n        &:focus,\n        &.active {\n          text-decoration: underline;\n        }\n\n        > abbr {\n          text-decoration: none;\n        }\n      }\n    }\n  }\n"]))),__jsx=react.createElement,LanguageSwitcher=function LanguageSwitcher(_ref){var _router$locales,_router$locale,props=(0,esm_extends.Z)({},_ref),t=(0,es.$G)("common").t,router=(0,next_router.useRouter)(),_useCookies=useCookies(["NEXT_LOCALE"]),_useCookies2=(0,slicedToArray.Z)(_useCookies,2),setCookie=(_useCookies2[0],_useCookies2[1]),locales=null!==(_router$locales=null==router?void 0:router.locales)&&void 0!==_router$locales?_router$locales:["nl-BE","fr-BE","en-GB"],currentLocale=null!==(_router$locale=null==router?void 0:router.locale)&&void 0!==_router$locale?_router$locale:"nl-BE",changeLanguage=(0,react.useMemo)((function(){return function(locale){return function(e){e.stopPropagation(),e.preventDefault(),setCookie("NEXT_LOCALE",locale,{maxAge:31536e3,path:"/"}),window.location=e.currentTarget.href}}}),[setCookie]);return __jsx(StyledLanguageSwitcher,props,locales&&__jsx("ul",null,locales.map((function(locale){var isActiveLanguage=currentLocale===locale;return __jsx("li",{key:locale},__jsx(link_default(),{href:{pathname:null==router?void 0:router.pathname,query:null==router?void 0:router.query},locale,lang:locale,hrefLang:locale,className:isActiveLanguage?"active":void 0,"aria-label":isActiveLanguage?t("languageSwitcher.current",{locale:t("languageSwitcher.locales.".concat(locale))}):t("languageSwitcher.locales.".concat(locale)),onClick:changeLanguage(locale)},__jsx("abbr",{title:t("languageSwitcher.locales.".concat(locale))},locale)))}))))};LanguageSwitcher.displayName="LanguageSwitcher",LanguageSwitcher.__docgenInfo={description:"",methods:[],displayName:"LanguageSwitcher"};const language_switcher_LanguageSwitcher=(0,react.memo)(LanguageSwitcher,isEqual_default());try{LanguageSwitcher.displayName="LanguageSwitcher",LanguageSwitcher.__docgenInfo={description:"",displayName:"LanguageSwitcher",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/language-switcher/LanguageSwitcher.tsx#LanguageSwitcher"]={docgenInfo:LanguageSwitcher.__docgenInfo,name:"LanguageSwitcher",path:"src/components/common/language-switcher/LanguageSwitcher.tsx#LanguageSwitcher"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,LanguageSwitcher_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const LanguageSwitcher_stories={title:"UI/Language Switcher",component:language_switcher_LanguageSwitcher,tags:["autodocs"]};var Default={args:{children:LanguageSwitcher_stories_jsx(react.Fragment,null,LanguageSwitcher_stories_jsx("p",null,"Paragraph 1"),LanguageSwitcher_stories_jsx("p",null,"Paragraph 2"))}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: <>\n        <p>Paragraph 1</p>\n        <p>Paragraph 2</p>\n      </>\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./node_modules/cookie/index.js":(__unused_webpack_module,exports)=>{"use strict";exports.Q=function parse(str,options){if("string"!=typeof str)throw new TypeError("argument str must be a string");for(var obj={},opt=options||{},pairs=str.split(";"),dec=opt.decode||decode,i=0;i<pairs.length;i++){var pair=pairs[i],index=pair.indexOf("=");if(!(index<0)){var key=pair.substring(0,index).trim();if(null==obj[key]){var val=pair.substring(index+1,pair.length).trim();'"'===val[0]&&(val=val.slice(1,-1)),obj[key]=tryDecode(val,dec)}}}return obj},exports.q=function serialize(name,val,options){var opt=options||{},enc=opt.encode||encode;if("function"!=typeof enc)throw new TypeError("option encode is invalid");if(!fieldContentRegExp.test(name))throw new TypeError("argument name is invalid");var value=enc(val);if(value&&!fieldContentRegExp.test(value))throw new TypeError("argument val is invalid");var str=name+"="+value;if(null!=opt.maxAge){var maxAge=opt.maxAge-0;if(isNaN(maxAge)||!isFinite(maxAge))throw new TypeError("option maxAge is invalid");str+="; Max-Age="+Math.floor(maxAge)}if(opt.domain){if(!fieldContentRegExp.test(opt.domain))throw new TypeError("option domain is invalid");str+="; Domain="+opt.domain}if(opt.path){if(!fieldContentRegExp.test(opt.path))throw new TypeError("option path is invalid");str+="; Path="+opt.path}if(opt.expires){if("function"!=typeof opt.expires.toUTCString)throw new TypeError("option expires is invalid");str+="; Expires="+opt.expires.toUTCString()}opt.httpOnly&&(str+="; HttpOnly");opt.secure&&(str+="; Secure");if(opt.sameSite){switch("string"==typeof opt.sameSite?opt.sameSite.toLowerCase():opt.sameSite){case!0:str+="; SameSite=Strict";break;case"lax":str+="; SameSite=Lax";break;case"strict":str+="; SameSite=Strict";break;case"none":str+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return str};var decode=decodeURIComponent,encode=encodeURIComponent,fieldContentRegExp=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function tryDecode(str,decode){try{return decode(str)}catch(e){return str}}},"./node_modules/next/dist/client/router.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Router",{enumerable:!0,get:function(){return _router.default}}),Object.defineProperty(exports,"withRouter",{enumerable:!0,get:function(){return _withRouter.default}}),exports.useRouter=function useRouter(){const router=_react.default.useContext(_routerContext.RouterContext);if(!router)throw new Error("NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted");return router},exports.createRouter=function createRouter(...args){return singletonRouter.router=new _router.default(...args),singletonRouter.readyCallbacks.forEach((cb=>cb())),singletonRouter.readyCallbacks=[],singletonRouter.router},exports.makePublicRouterInstance=function makePublicRouterInstance(router){const scopedRouter=router,instance={};for(const property of urlPropertyFields)"object"!=typeof scopedRouter[property]?instance[property]=scopedRouter[property]:instance[property]=Object.assign(Array.isArray(scopedRouter[property])?[]:{},scopedRouter[property]);return instance.events=_router.default.events,coreMethodFields.forEach((field=>{instance[field]=(...args)=>scopedRouter[field](...args)})),instance},exports.default=void 0;var _interop_require_default=__webpack_require__("./node_modules/@swc/helpers/lib/_interop_require_default.js").Z,_react=_interop_require_default(__webpack_require__("./node_modules/react/index.js")),_router=_interop_require_default(__webpack_require__("./node_modules/next/dist/shared/lib/router/router.js")),_routerContext=__webpack_require__("./node_modules/next/dist/shared/lib/router-context.js"),_isError=_interop_require_default(__webpack_require__("./node_modules/next/dist/lib/is-error.js")),_withRouter=_interop_require_default(__webpack_require__("./node_modules/next/dist/client/with-router.js"));const singletonRouter={router:null,readyCallbacks:[],ready(cb){if(this.router)return cb();"undefined"!=typeof window&&this.readyCallbacks.push(cb)}},urlPropertyFields=["pathname","route","query","asPath","components","isFallback","basePath","locale","locales","defaultLocale","isReady","isPreview","isLocaleDomain","domainLocales"],coreMethodFields=["push","replace","reload","back","prefetch","beforePopState"];function getRouter(){if(!singletonRouter.router){throw new Error('No router instance found.\nYou should only use "next/router" on the client side of your app.\n')}return singletonRouter.router}Object.defineProperty(singletonRouter,"events",{get:()=>_router.default.events}),urlPropertyFields.forEach((field=>{Object.defineProperty(singletonRouter,field,{get:()=>getRouter()[field]})})),coreMethodFields.forEach((field=>{singletonRouter[field]=(...args)=>getRouter()[field](...args)})),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach((event=>{singletonRouter.ready((()=>{_router.default.events.on(event,((...args)=>{const eventField=`on${event.charAt(0).toUpperCase()}${event.substring(1)}`,_singletonRouter=singletonRouter;if(_singletonRouter[eventField])try{_singletonRouter[eventField](...args)}catch(err){console.error(`Error when running the Router event: ${eventField}`),console.error(_isError.default(err)?`${err.message}\n${err.stack}`:err+"")}}))}))}));var _default=singletonRouter;exports.default=_default,("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/client/with-router.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function withRouter(ComposedComponent){function WithRouterWrapper(props){return _react.default.createElement(ComposedComponent,Object.assign({router:_router.useRouter()},props))}WithRouterWrapper.getInitialProps=ComposedComponent.getInitialProps,WithRouterWrapper.origGetInitialProps=ComposedComponent.origGetInitialProps,!1;return WithRouterWrapper};var _react=(0,__webpack_require__("./node_modules/@swc/helpers/lib/_interop_require_default.js").Z)(__webpack_require__("./node_modules/react/index.js")),_router=__webpack_require__("./node_modules/next/dist/client/router.js");("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/router.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/client/router.js")}}]);