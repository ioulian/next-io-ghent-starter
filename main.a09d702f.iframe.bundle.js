(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[179],{"./node_modules/@storybook/addon-interactions/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/addon-interactions/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/nextjs/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/nextjs/dist sync recursive",module.exports=webpackEmptyContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/nextjs/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.js"),__webpack_require__("./node_modules/@storybook/addon-a11y/dist/preview.js"),__webpack_require__("./.storybook/preview.tsx")])})},"./.storybook/preview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{decorators:()=>decorators,default:()=>_storybook_preview,parameters:()=>parameters});var defineProperty=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),google=__webpack_require__('./node_modules/@storybook/nextjs/dist/font/webpack/loader/storybook-nextjs-font-loader.js?{"source":"next/font/google","props":{"weight":["400","700"],"style":["normal","italic"],"subsets":["latin"]},"fontFamily":"Source_Sans_3","filename":"/home/runner/work/next-io-ghent-starter/next-io-ghent-starter/src/components/styled/Theme.ts"}!./node_modules/next/font/google/index.js');const Theme={name:"Default",allowBlur:!0,colors:{white:"#fff",black:"#000",primary:"#f38a5d",body:"#3C4346"},fonts:{familyRegular:"Arial, sans-serif",familyHeadings:__webpack_require__.n(google)().style.fontFamily},breakpoints:{smallPhone:320,phone:375,tablet:768,desktop:1024,largeDesktop:1440},container:{maxWidth:1200,gap:16},timings:{fast:100,normal:250,slow:400},borderRadius:{normal:4},floating:{tooltip:{offset:10},popover:{offset:10},dropdown:{offset:10},floater:{shift:5,flip:5,arrow:{size:10,padding:10}}},zIndex:{contextMenu:100},form:{input:{color:"#000",border:"rgba(0, 0, 0, 0.6)",background:"rgba(239, 242, 243, 0.2)",shadow:"0px 4px 4px rgba(0, 0, 0, 0.1)"},select:{indicator:"rgba(0, 0, 0, 0.6)"},asterisk:{color:"#b30000"},outline:{color:"#000"},checkbox:{checked:{border:"#f38a5d",background:"#f38a5d",color:"#fff"}},requiredMessage:{color:"#b30000"},error:{color:"#b30000"}},fileProgress:{progressBackground:"#eee",states:{idle:{main:"#737575",accent:"#909090"},failed:{main:"#B30000",accent:"#D12626"},loading:{main:"#0059A1",accent:"#0073CF"},succeeded:{main:"#00BE62",accent:"#00E375"}}}};var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("./node_modules/css-in-js-media/dist/index.js"),dist_default=__webpack_require__.n(dist),GlobalStyle=(0,styled_components_browser_esm.createGlobalStyle)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  ","\n  html,\n  body {\n    -webkit-overflow-scrolling: touch;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: ",";\n    font-size: 1rem;\n    line-height: 1.25rem;\n    color: ",";\n    letter-spacing: 0.01em;\n\n    "," {\n      font-size: 1.125rem;\n      line-height: 1.5rem;\n    }\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  hr {\n    width: 100%;\n    height: 1px;\n    border: 0;\n    background-color: currentColor;\n    margin: 0;\n  }\n\n  ul, ol {\n    margin-top: 0;\n    margin-bottom: 0;\n    list-style: none;\n    padding-left: 0;\n  }\n\n  a {\n    color: ",";\n\n    &:hover {\n      text-decoration: none;\n    }\n  }\n\n  button {\n    border: 0;\n    appearance: none;\n    background: none;\n    cursor: pointer;\n    color: inherit;\n    padding: 0;\n    font-size: inherit;\n  }\n\n  // Remove 300ms delay on buttons:\n  // https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action#manipulation\n  a,\n  button,\n  input[type='button'],\n  input[type='submit'] {\n    touch-action: manipulation;\n  }\n\n  button,\n  input,\n  select,\n  textarea,\n  a {\n    outline-offset: 4px;\n\n    &:focus-visible {\n      outline: 2px solid ",";\n    }\n  }\n\n  // Remove animations and transitions on devices that are low on resources or battery\n  // From: https://hankchizljaw.com/wrote/a-modern-css-reset/\n  @media (prefers-reduced-motion: reduce) {\n    html:focus-within {\n      scroll-behavior: auto;\n    }\n\n    *,\n    *::before,\n    *::after {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01ms !important;\n      scroll-behavior: auto !important;\n    }\n  }\n\n  // Prevent overflow of images and remove spacing at the bottom\n  picture,\n  img,\n  svg,\n  video {\n    display: block;\n    max-width: 100%;\n    height: auto;\n  }\n\n  svg {\n    width: 100%;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 0;\n  }\n"])),(function(_ref){var theme=_ref.theme;return(0,dist.setBreakPoints)(theme.breakpoints),""}),(function(_ref2){return _ref2.theme.fonts.familyRegular}),(function(_ref3){return _ref3.theme.colors.body}),dist_default()(">=tablet"),(function(_ref4){return _ref4.theme.colors.primary}),(function(_ref5){return _ref5.theme.colors.primary}));const GlobalStyles=GlobalStyle;var addon_viewport_dist=__webpack_require__("./node_modules/@storybook/addon-viewport/dist/index.mjs"),i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),next_i18next_config=__webpack_require__("./next-i18next.config.js"),styled_normalize_dist=__webpack_require__("./node_modules/styled-normalize/dist/index.js"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var parameters={viewport:{viewports:addon_viewport_dist.p},actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},decorators=[function(storyFn){return __jsx(react.Fragment,null,__jsx(styled_normalize_dist.Bc,null),__jsx(styled_components_browser_esm.ThemeProvider,{theme:Theme},__jsx(GlobalStyles,null),storyFn()))},function(Story,Context){var ns=["common"],supportedLngs=next_i18next_config.i18n.locales,resources=ns.reduce((function(acc,n){return supportedLngs.forEach((function(lng){acc[lng]||(acc[lng]={}),acc[lng]=_objectSpread(_objectSpread({},acc[lng]),{},(0,defineProperty.Z)({},n,__webpack_require__("./public/locales sync recursive ^\\.\\/.*\\.json$")("./".concat(lng,"/").concat(n,".json"))))})),acc}),{});return i18next.ZP.use(es.Db).init({lng:next_i18next_config.i18n.defaultLocale,fallbackLng:next_i18next_config.i18n.defaultLocale,defaultNS:"common",ns,interpolation:{escapeValue:!1},react:{useSuspense:!1},supportedLngs,resources}),__jsx(Story,null)}];const _storybook_preview={parameters:{layout:"centered"}}},"./next-i18next.config.js":module=>{module.exports={debug:!1,i18n:{locales:["nl-BE","fr-BE","en-GB"],defaultLocale:"nl-BE"},reloadOnPrerender:!1}},"./public/locales sync recursive ^\\.\\/.*\\.json$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./en-GB/app.json":"./public/locales/en-GB/app.json","./en-GB/common.json":"./public/locales/en-GB/common.json","./fr-BE/app.json":"./public/locales/fr-BE/app.json","./fr-BE/common.json":"./public/locales/fr-BE/common.json","./nl-BE/app.json":"./public/locales/nl-BE/app.json","./nl-BE/common.json":"./public/locales/nl-BE/common.json"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./public/locales sync recursive ^\\.\\/.*\\.json$"},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/common/avatar-initials/AvatarInitials.stories":["./src/components/common/avatar-initials/AvatarInitials.stories.tsx",8655],"./components/common/avatar-initials/AvatarInitials.stories.tsx":["./src/components/common/avatar-initials/AvatarInitials.stories.tsx",8655],"./components/common/breadcrumb/Breadcrumb.stories":["./src/components/common/breadcrumb/Breadcrumb.stories.tsx",1609,1664,9244],"./components/common/breadcrumb/Breadcrumb.stories.tsx":["./src/components/common/breadcrumb/Breadcrumb.stories.tsx",1609,1664,9244],"./components/common/button-group/ButtonGroup.stories":["./src/components/common/button-group/ButtonGroup.stories.tsx",1609,4179,8979],"./components/common/button-group/ButtonGroup.stories.tsx":["./src/components/common/button-group/ButtonGroup.stories.tsx",1609,4179,8979],"./components/common/button/Button.stories":["./src/components/common/button/Button.stories.tsx",1609,7153,1566,1664,3389,9275],"./components/common/button/Button.stories.tsx":["./src/components/common/button/Button.stories.tsx",1609,7153,1566,1664,3389,9275],"./components/common/easing-gradient/EasingGradient.stories":["./src/components/common/easing-gradient/EasingGradient.stories.tsx",8242,2133],"./components/common/easing-gradient/EasingGradient.stories.tsx":["./src/components/common/easing-gradient/EasingGradient.stories.tsx",8242,2133],"./components/common/ellipsis/Ellipsis.stories":["./src/components/common/ellipsis/Ellipsis.stories.tsx",1609,6301],"./components/common/ellipsis/Ellipsis.stories.tsx":["./src/components/common/ellipsis/Ellipsis.stories.tsx",1609,6301],"./components/common/expandable/Expandable.stories":["./src/components/common/expandable/Expandable.stories.tsx",7153,3472],"./components/common/expandable/Expandable.stories.tsx":["./src/components/common/expandable/Expandable.stories.tsx",7153,3472],"./components/common/file-progress/FileProgress.stories":["./src/components/common/file-progress/FileProgress.stories.tsx",1609,7153,8529,4179,3145],"./components/common/file-progress/FileProgress.stories.tsx":["./src/components/common/file-progress/FileProgress.stories.tsx",1609,7153,8529,4179,3145],"./components/common/floating/dialog/Dialog.stories":["./src/components/common/floating/dialog/Dialog.stories.tsx",1609,1566,3389,6755],"./components/common/floating/dialog/Dialog.stories.tsx":["./src/components/common/floating/dialog/Dialog.stories.tsx",1609,1566,3389,6755],"./components/common/floating/dropdown/Dropdown.stories":["./src/components/common/floating/dropdown/Dropdown.stories.tsx",1609,7153,1566,3389,403],"./components/common/floating/dropdown/Dropdown.stories.tsx":["./src/components/common/floating/dropdown/Dropdown.stories.tsx",1609,7153,1566,3389,403],"./components/common/floating/popover/Popover.stories":["./src/components/common/floating/popover/Popover.stories.tsx",1609,1566,3389,9105],"./components/common/floating/popover/Popover.stories.tsx":["./src/components/common/floating/popover/Popover.stories.tsx",1609,1566,3389,9105],"./components/common/floating/tooltip/Tooltip.stories":["./src/components/common/floating/tooltip/Tooltip.stories.tsx",1609,1566,3389,806],"./components/common/floating/tooltip/Tooltip.stories.tsx":["./src/components/common/floating/tooltip/Tooltip.stories.tsx",1609,1566,3389,806],"./components/common/form/form-field/FormField.stories":["./src/components/common/form/form-field/FormField.stories.tsx",1609,7153,8529,837,6577,2385],"./components/common/form/form-field/FormField.stories.tsx":["./src/components/common/form/form-field/FormField.stories.tsx",1609,7153,8529,837,6577,2385],"./components/common/form/form/Form.stories":["./src/components/common/form/form/Form.stories.tsx",1609,7153,8529,837,6577,5370],"./components/common/form/form/Form.stories.tsx":["./src/components/common/form/form/Form.stories.tsx",1609,7153,8529,837,6577,5370],"./components/common/heading/Heading.stories":["./src/components/common/heading/Heading.stories.tsx",5330],"./components/common/heading/Heading.stories.tsx":["./src/components/common/heading/Heading.stories.tsx",5330],"./components/common/language-switcher/LanguageSwitcher.stories":["./src/components/common/language-switcher/LanguageSwitcher.stories.tsx",1664,2290,1509],"./components/common/language-switcher/LanguageSwitcher.stories.tsx":["./src/components/common/language-switcher/LanguageSwitcher.stories.tsx",1664,2290,1509],"./components/common/pagination/Pagination.stories":["./src/components/common/pagination/Pagination.stories.tsx",7153,1451],"./components/common/pagination/Pagination.stories.tsx":["./src/components/common/pagination/Pagination.stories.tsx",7153,1451],"./components/common/slider/Slider.stories":["./src/components/common/slider/Slider.stories.tsx",7711,2492],"./components/common/slider/Slider.stories.tsx":["./src/components/common/slider/Slider.stories.tsx",7711,2492],"./components/common/smooth-shadow/SmoothShadow.stories":["./src/components/common/smooth-shadow/SmoothShadow.stories.tsx",8242,2228,9916],"./components/common/smooth-shadow/SmoothShadow.stories.tsx":["./src/components/common/smooth-shadow/SmoothShadow.stories.tsx",8242,2228,9916],"./components/common/spinner/Spinner.stories":["./src/components/common/spinner/Spinner.stories.tsx",9710],"./components/common/spinner/Spinner.stories.tsx":["./src/components/common/spinner/Spinner.stories.tsx",9710],"./components/common/stepper/Stepper.stories":["./src/components/common/stepper/Stepper.stories.tsx",9273],"./components/common/stepper/Stepper.stories.tsx":["./src/components/common/stepper/Stepper.stories.tsx",9273],"./components/common/svg/SvgSprite.stories":["./src/components/common/svg/SvgSprite.stories.tsx",7153,5944],"./components/common/svg/SvgSprite.stories.tsx":["./src/components/common/svg/SvgSprite.stories.tsx",7153,5944],"./components/common/tabs/Tabs.stories":["./src/components/common/tabs/Tabs.stories.tsx",757],"./components/common/tabs/Tabs.stories.tsx":["./src/components/common/tabs/Tabs.stories.tsx",757],"./components/common/tag-list/TagList.stories":["./src/components/common/tag-list/TagList.stories.tsx",1609,3901],"./components/common/tag-list/TagList.stories.tsx":["./src/components/common/tag-list/TagList.stories.tsx",1609,3901],"./components/common/tag/Tag.stories":["./src/components/common/tag/Tag.stories.tsx",1609,2371],"./components/common/tag/Tag.stories.tsx":["./src/components/common/tag/Tag.stories.tsx",1609,2371],"./components/common/text/Text.stories":["./src/components/common/text/Text.stories.tsx",8977],"./components/common/text/Text.stories.tsx":["./src/components/common/text/Text.stories.tsx",8977],"./components/common/toast/Toast.stories":["./src/components/common/toast/Toast.stories.tsx",1609,325],"./components/common/toast/Toast.stories.tsx":["./src/components/common/toast/Toast.stories.tsx",1609,325],"./components/common/visually-hidden/VisuallyHidden.stories":["./src/components/common/visually-hidden/VisuallyHidden.stories.tsx",2891],"./components/common/visually-hidden/VisuallyHidden.stories.tsx":["./src/components/common/visually-hidden/VisuallyHidden.stories.tsx",2891]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__},"./public/locales/en-GB/app.json":module=>{"use strict";module.exports=JSON.parse('{"title":"IO Ghent starter template EN"}')},"./public/locales/en-GB/common.json":module=>{"use strict";module.exports=JSON.parse('{"form":{"description":{"prefix":"Description:"},"error":{"prefix":"Error:"},"label":{"required":"(required)"},"select":{"emptyValue":"Select..."},"passwordInput":{"revealPassword":"Reveal password","hidePassword":"Hide password"},"validationErrors":{"required":"This field is required","email":"This must be a valid email address","password":"Password is not strong enough","passwordMatch":"Passwords do not match"}},"languageSwitcher":{"current":"Selected language: {{ locale }}","locales":{"nl-BE":"Nederlands","fr-BE":"Français","en-GB":"English"}},"breadcrumb":{"label":"Breadcrumb"},"ellipsis":{"expand":"Read more","collapse":"Collapse"}}')},"./public/locales/fr-BE/app.json":module=>{"use strict";module.exports=JSON.parse('{"title":"IO Ghent starter template FR"}')},"./public/locales/fr-BE/common.json":module=>{"use strict";module.exports=JSON.parse('{"form":{"description":{"prefix":"Description:"},"error":{"prefix":"Error:"},"label":{"required":"(required)"},"select":{"emptyValue":"Select..."},"passwordInput":{"revealPassword":"Reveal password","hidePassword":"Hide password"},"validationErrors":{"required":"This field is required","email":"This must be a valid email address","password":"Password is not strong enough","passwordMatch":"Passwords do not match"}},"languageSwitcher":{"current":"Langue courante: {{ locale }}","locales":{"nl-BE":"Nederlands","fr-BE":"Français","en-GB":"English"}},"breadcrumb":{"label":"Breadcrumb"},"ellipsis":{"expand":"Read more","collapse":"Collapse"}}')},"./public/locales/nl-BE/app.json":module=>{"use strict";module.exports=JSON.parse('{"title":"IO Ghent starter template NL"}')},"./public/locales/nl-BE/common.json":module=>{"use strict";module.exports=JSON.parse('{"form":{"description":{"prefix":"Description:"},"error":{"prefix":"Error:"},"label":{"required":"(required)"},"select":{"emptyValue":"Select..."},"passwordInput":{"revealPassword":"Reveal password","hidePassword":"Hide password"},"validationErrors":{"required":"This field is required","email":"This must be a valid email address","password":"Password is not strong enough","passwordMatch":"Passwords do not match"}},"languageSwitcher":{"current":"Huidige taal: {{ locale }}","locales":{"nl-BE":"Nederlands","fr-BE":"Français","en-GB":"English"}},"breadcrumb":{"label":"Breadcrumb"},"ellipsis":{"expand":"Read more","collapse":"Collapse"}}')}},__webpack_require__=>{__webpack_require__.O(0,[4354],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);