/*! For license information please see components-common-file-progress-FileProgress-stories.cf89ca4d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[3145],{"./src/components/common/file-progress/FileProgress.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Fail:()=>Fail,Idle:()=>Idle,Progress:()=>Progress,Success:()=>Success,WithFileUploaderLogic:()=>WithFileUploaderLogic,default:()=>FileProgress_stories});var defineProperty=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),ButtonGroup=__webpack_require__("./src/components/common/button-group/ButtonGroup.tsx"),Button=__webpack_require__("./src/components/common/button/Button.tsx"),objectWithoutProperties=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");const STRINGS={symbol:{iec:{bits:["bit","Kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["bit","Kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},fullform:{iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]}};function filesize(arg,{bits=!1,pad=!1,base=-1,round=2,locale="",localeOptions={},separator="",spacer=" ",symbols={},standard="",output="string",fullform=!1,fullforms=[],exponent=-1,roundingMethod="round",precision=0}={}){let e=exponent,num=Number(arg),result=[],val=0,u="";-1===base&&0===standard.length?(base=10,standard="jedec"):-1===base&&standard.length>0?base="iec"===(standard="iec"===standard?"iec":"jedec")?2:10:standard=10===(base=2===base?2:10)||"jedec"===standard?"jedec":"iec";const ceil=10===base?1e3:1024,full=!0===fullform,neg=num<0,roundingFunc=Math[roundingMethod];if("bigint"!=typeof arg&&isNaN(arg))throw new TypeError("Invalid number");if("function"!=typeof roundingFunc)throw new TypeError("Invalid rounding method");if(neg&&(num=-num),(-1===e||isNaN(e))&&(e=Math.floor(Math.log(num)/Math.log(ceil)),e<0&&(e=0)),e>8&&(precision>0&&(precision+=8-e),e=8),"exponent"===output)return e;if(0===num)result[0]=0,u=result[1]=STRINGS.symbol[standard][bits?"bits":"bytes"][e];else{val=num/(2===base?Math.pow(2,10*e):Math.pow(1e3,e)),bits&&(val*=8,val>=ceil&&e<8&&(val/=ceil,e++));const p=Math.pow(10,e>0?round:0);result[0]=roundingFunc(val*p)/p,result[0]===ceil&&e<8&&-1===exponent&&(result[0]=1,e++),u=result[1]=10===base&&1===e?bits?"kbit":"kB":STRINGS.symbol[standard][bits?"bits":"bytes"][e]}if(neg&&(result[0]=-result[0]),precision>0&&(result[0]=result[0].toPrecision(precision)),result[1]=symbols[result[1]]||result[1],!0===locale?result[0]=result[0].toLocaleString():locale.length>0?result[0]=result[0].toLocaleString(locale,localeOptions):separator.length>0&&(result[0]=result[0].toString().replace(".",separator)),pad&&!1===Number.isInteger(result[0])&&round>0){const x=separator||".",tmp=result[0].toString().split(x),s=tmp[1]||"",l=s.length,n=round-l;result[0]=`${tmp[0]}${x}${s.padEnd(l+n,"0")}`}return full&&(result[1]=fullforms[e]?fullforms[e]:STRINGS.fullform[standard][e]+(bits?"bit":"byte")+(1===result[0]?"":"s")),"array"===output?result:"object"===output?{value:result[0],symbol:result[1],exponent:e,unit:u}:result.join(spacer)}var browser_symbol=__webpack_require__("./node_modules/svg-baker-runtime/browser-symbol.js"),browser_symbol_default=__webpack_require__.n(browser_symbol),browser_sprite_build=__webpack_require__("./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js"),browser_sprite_build_default=__webpack_require__.n(browser_sprite_build),symbol=new(browser_symbol_default())({id:"check",use:"check-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" id="check"><path stroke="none" d="M0 0h24v24H0z" /><path d="m5 12 5 5L20 7" /></symbol>'});browser_sprite_build_default().add(symbol);const check=symbol;var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,x=__webpack_require__("./node_modules/@tabler/icons/icons/x.svg"),SvgSprite=__webpack_require__("./src/components/common/svg/SvgSprite.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),dist=__webpack_require__("./node_modules/css-in-js-media/dist/index.js"),dist_default=__webpack_require__.n(dist),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),StyledFilePorgressInfo=styled_components_browser_esm.default.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: nowrap;\n  gap: 1rem;\n  width: 100%;\n\n  > span {\n    line-height: 1.25rem;\n    font-size: 1rem;\n\n    &:first-child {\n      ","\n      color: ",";\n      font-weight: 700;\n      flex: 1;\n    }\n\n    &:last-child {\n      color: ",";\n      flex-shrink: 0;\n      white-space: nowrap;\n\n      > svg {\n        width: 1rem;\n        height: 1rem;\n      }\n\n      > span {\n        display: none;\n\n        "," {\n          display: block;\n        }\n      }\n    }\n  }\n"])),(0,polished_esm.LH)(),(function(_ref){return _ref.theme.colors.body}),(function(_ref2){return _ref2.theme.colors.body}),dist_default()(">=tablet")),StyledFileProgressProgressBar=styled_components_browser_esm.default.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  margin-top: auto;\n\n  > div {\n    height: 3px;\n    width: 100%;\n    background-color: ",";\n    border-radius: 1.5px;\n\n    > div {\n      height: 100%;\n    }\n  }\n"])),(function(_ref3){return _ref3.theme.fileProgress.progressBackground})),StyledFileProgressContent=styled_components_browser_esm.default.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  flex-shrink: 1;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: calc(100% - 53px);\n"]))),StyledFileProgressIcon=styled_components_browser_esm.default.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  flex-shrink: 0;\n  flex-grow: 0;\n\n  > svg {\n    width: 33px;\n    height: 41px;\n  }\n"]))),StyledFileProgressError=styled_components_browser_esm.default.div(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n  color: ",";\n"])),(function(_ref4){return _ref4.theme.colors.primary[500]})),StyledFileProgress=styled_components_browser_esm.default.div(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  > div {\n    &:first-child {\n      display: flex;\n      gap: 1.25rem;\n      max-width: 100%;\n    }\n  }\n"]))),_excluded=["status","current","error","total","children"],__jsx=react.createElement,FileUploadStates={idle:{main:"#737575",accent:"#909090"},failed:{main:"#B30000",accent:"#D12626"},loading:{main:"#0059A1",accent:"#0073CF"},succeeded:{main:"#00BE62",accent:"#00E375"}},FileProgress=function FileProgress(_ref){var _error$violations$fin,_error$violations,_error$violations$fin2,status=_ref.status,_ref$current=_ref.current,current=void 0===_ref$current?0:_ref$current,error=_ref.error,_ref$total=_ref.total,total=void 0===_ref$total?0:_ref$total,children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(StyledFileProgress,props,__jsx("div",null,__jsx(StyledFileProgressIcon,null,__jsx("svg",{width:"33",height:"41",viewBox:"0 0 33 41",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("path",{d:"M0 0H24.5L33 9V41H0V0Z",fill:FileUploadStates[status].main}),__jsx("path",{d:"M33 9L24.5 0V9H33Z",fill:FileUploadStates[status].accent}))),__jsx(StyledFileProgressContent,null,__jsx(StyledFilePorgressInfo,null,__jsx("span",null,children),__jsx("span",null,"failed"===status&&__jsx(SvgSprite.Z,{src:x.Z,style:{color:FileUploadStates.failed.main}}),"loading"===status&&__jsx("span",null,__jsx(react.Fragment,null,filesize(current)," / ",filesize(total))),"succeeded"===status&&__jsx(SvgSprite.Z,{src:check,style:{color:FileUploadStates.succeeded.main}}))),__jsx(StyledFileProgressProgressBar,null,__jsx("div",null,__jsx("div",{style:{backgroundColor:FileUploadStates[status].main,width:"".concat(0===total?0:Math.min(current/total*100,100),"%")}}))))),error&&__jsx(StyledFileProgressError,null,null!==(_error$violations$fin=null===(_error$violations=error.violations)||void 0===_error$violations||null===(_error$violations$fin2=_error$violations.find((function(violation){return"file"===violation.propertyPath})))||void 0===_error$violations$fin2?void 0:_error$violations$fin2.message)&&void 0!==_error$violations$fin?_error$violations$fin:error.message))};FileProgress.displayName="FileProgress",FileProgress.__docgenInfo={description:"",methods:[],displayName:"FileProgress",props:{current:{defaultValue:{value:"0",computed:!1},required:!1},total:{defaultValue:{value:"0",computed:!1},required:!1}}};const file_progress_FileProgress=FileProgress;try{FunctionComponent.displayName="FileProgress",FunctionComponent.__docgenInfo={description:"",displayName:"FileProgress",props:{error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ApiError"}},current:{defaultValue:{value:"0"},description:"",name:"current",required:!1,type:{name:"number"}},total:{defaultValue:{value:"0"},description:"",name:"total",required:!1,type:{name:"number"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"loading"'},{value:'"idle"'},{value:'"succeeded"'},{value:'"failed"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/file-progress/FileProgress.tsx#FileProgress"]={docgenInfo:FileProgress.__docgenInfo,name:"FileProgress",path:"src/components/common/file-progress/FileProgress.tsx#FileProgress"})}catch(__react_docgen_typescript_loader_error){}var _Idle$parameters,_Idle$parameters2,_Idle$parameters2$doc,_Success$parameters,_Success$parameters2,_Success$parameters2$,_Fail$parameters,_Fail$parameters2,_Fail$parameters2$doc,_Progress$parameters,_Progress$parameters2,_Progress$parameters3,_WithFileUploaderLogi,_WithFileUploaderLogi2,_WithFileUploaderLogi3,FileProgress_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const FileProgress_stories={title:"UI/Files/File Progress",component:file_progress_FileProgress,tags:["autodocs"],argTypes:{status:{options:["idle","loading","succeeded","failed"],control:{type:"select",labels:["idle","loading","succeeded","failed"]}}}};var Idle={args:{children:"img.jpg",status:"idle"}},Success={args:{children:"img.jpg",status:"succeeded"}},Fail={args:{children:"img.jpg",status:"failed"}},Progress={args:{children:"img.jpg",total:1e5,current:43e3,status:"loading"}},FileItem=function FileItem(){var _useFileUpload=function useFileUpload(url){var _useState=(0,react.useState)(0),uploadBytes=_useState[0],setUploadBytes=_useState[1],_useState2=(0,react.useState)(0),uploadBytesTotal=_useState2[0],setUploadBytesTotal=_useState2[1],_useState3=(0,react.useState)(0),downloadBytes=_useState3[0],setDownloadBytes=_useState3[1],_useState4=(0,react.useState)(0),downloadBytesTotal=_useState4[0],setDownloadBytesTotal=_useState4[1],_useState5=(0,react.useState)("idle"),status=_useState5[0],setStatus=_useState5[1],_useState6=(0,react.useState)(),error=_useState6[0],setError=_useState6[1],xhr=(0,react.useRef)(),upload=(0,react.useCallback)((function(file){xhr.current=new XMLHttpRequest;var formdata=new FormData;return formdata.append("file",file),setStatus("loading"),new Promise((function(resolve,reject){xhr.current&&(xhr.current.upload.addEventListener("progress",(function(event){event.lengthComputable&&(setUploadBytes(event.loaded),setUploadBytesTotal(event.total))})),xhr.current.addEventListener("progress",(function(event){event.lengthComputable&&(setDownloadBytes(event.loaded),setDownloadBytesTotal(event.total))})),xhr.current.addEventListener("load",(function(){xhr.current&&(4===xhr.current.readyState&&xhr.current.status>=200&&xhr.current.status<=299?(setStatus("succeeded"),resolve(JSON.parse(xhr.current.response))):(setStatus("failed"),setError(JSON.parse(xhr.current.response)),reject(new Error)))})),xhr.current.addEventListener("error",(function(){setStatus("failed"),reject(new Error)})),xhr.current.addEventListener("abort",(function(){setStatus("idle"),reject(new Error("Aborted")),setError(void 0)})),setError(void 0),xhr.current.open("PUT",url,!0),xhr.current.setRequestHeader("Content-Type","application/octet-stream"),xhr.current.send(formdata))}))}),[url]),abort=(0,react.useCallback)((function(){var _xhr$current;console.log("aborting"),null===(_xhr$current=xhr.current)||void 0===_xhr$current||_xhr$current.abort()}),[xhr]);return(0,react.useEffect)((function(){return function(){abort()}}),[abort]),{error,uploadBytes,uploadBytesTotal,uploadProgress:0===uploadBytesTotal?0:uploadBytes/uploadBytesTotal,downloadBytes,downloadBytesTotal,downloadProgress:0===downloadBytesTotal?0:downloadBytes/downloadBytesTotal,status,upload,abort}}("https://httpbin.org/put"),uploadBytesTotal=_useFileUpload.uploadBytesTotal,downloadBytesTotal=_useFileUpload.downloadBytesTotal,uploadBytes=_useFileUpload.uploadBytes,downloadBytes=_useFileUpload.downloadBytes,status=_useFileUpload.status,upload=_useFileUpload.upload,abort=_useFileUpload.abort,error=_useFileUpload.error,blob=new Blob([new Uint8Array(10485760)]),file=new File([blob],"test.zip");return(0,react.useEffect)((function(){return function(){abort()}}),[abort]),FileProgress_stories_jsx(react.Fragment,null,FileProgress_stories_jsx(file_progress_FileProgress,{error,status,total:uploadBytesTotal+downloadBytesTotal,current:uploadBytes+downloadBytes},file.name),FileProgress_stories_jsx(ButtonGroup.Z,{style:{marginTop:"1rem"}},FileProgress_stories_jsx(Button.Z,{onClick:function onClick(){upload(file).then((function(){console.log("done")})).catch((function(ex){console.log("failed",ex)}))}},"Upload file"),FileProgress_stories_jsx(Button.Z,{onClick:function onClick(){abort()}},"Abort")))},WithFileUploaderLogic={render:function render(){return FileProgress_stories_jsx(FileItem,null)}};Idle.parameters=_objectSpread(_objectSpread({},Idle.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Idle$parameters=Idle.parameters)||void 0===_Idle$parameters?void 0:_Idle$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    children: "img.jpg",\n    status: "idle"\n  }\n}'},null===(_Idle$parameters2=Idle.parameters)||void 0===_Idle$parameters2||null===(_Idle$parameters2$doc=_Idle$parameters2.docs)||void 0===_Idle$parameters2$doc?void 0:_Idle$parameters2$doc.source)})}),Success.parameters=_objectSpread(_objectSpread({},Success.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Success$parameters=Success.parameters)||void 0===_Success$parameters?void 0:_Success$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    children: "img.jpg",\n    status: "succeeded"\n  }\n}'},null===(_Success$parameters2=Success.parameters)||void 0===_Success$parameters2||null===(_Success$parameters2$=_Success$parameters2.docs)||void 0===_Success$parameters2$?void 0:_Success$parameters2$.source)})}),Fail.parameters=_objectSpread(_objectSpread({},Fail.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Fail$parameters=Fail.parameters)||void 0===_Fail$parameters?void 0:_Fail$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    children: "img.jpg",\n    status: "failed"\n  }\n}'},null===(_Fail$parameters2=Fail.parameters)||void 0===_Fail$parameters2||null===(_Fail$parameters2$doc=_Fail$parameters2.docs)||void 0===_Fail$parameters2$doc?void 0:_Fail$parameters2$doc.source)})}),Progress.parameters=_objectSpread(_objectSpread({},Progress.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Progress$parameters=Progress.parameters)||void 0===_Progress$parameters?void 0:_Progress$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    children: "img.jpg",\n    total: 100000,\n    current: 43000,\n    status: "loading"\n  }\n}'},null===(_Progress$parameters2=Progress.parameters)||void 0===_Progress$parameters2||null===(_Progress$parameters3=_Progress$parameters2.docs)||void 0===_Progress$parameters3?void 0:_Progress$parameters3.source)})}),WithFileUploaderLogic.parameters=_objectSpread(_objectSpread({},WithFileUploaderLogic.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithFileUploaderLogi=WithFileUploaderLogic.parameters)||void 0===_WithFileUploaderLogi?void 0:_WithFileUploaderLogi.docs),{},{source:_objectSpread({originalSource:"{\n  render: () => <FileItem />\n}"},null===(_WithFileUploaderLogi2=WithFileUploaderLogic.parameters)||void 0===_WithFileUploaderLogi2||null===(_WithFileUploaderLogi3=_WithFileUploaderLogi2.docs)||void 0===_WithFileUploaderLogi3?void 0:_WithFileUploaderLogi3.source)})})},"./src/components/common/svg/SvgSprite.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/isEqual.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__),_excluded=["src","children"],_excluded2=["crossOrigin","ref","title"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,SvgSprite=function SvgSprite(_ref){var src=_ref.src,props=(_ref.children,(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded)),title=(props.crossOrigin,props.ref,props.title),typedProps=(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(props,_excluded2),titleId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)();return __jsx("svg",(0,_home_runner_work_next_io_ghent_starter_next_io_ghent_starter_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},typedProps,{viewBox:src.viewBox,role:title?"img":void 0,"aria-hidden":!title||void 0,"aria-labelledby":title&&titleId}),title&&__jsx("title",{id:titleId},title),__jsx("use",{xlinkHref:"#".concat(src.id)}))};SvgSprite.displayName="SvgSprite",SvgSprite.__docgenInfo={description:"",methods:[],displayName:"SvgSprite"};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgSprite,lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default());try{SvgSprite.displayName="SvgSprite",SvgSprite.__docgenInfo={description:"",displayName:"SvgSprite",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/svg/SvgSprite.tsx#SvgSprite"]={docgenInfo:SvgSprite.__docgenInfo,name:"SvgSprite",path:"src/components/common/svg/SvgSprite.tsx#SvgSprite"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/@tabler/icons/icons/x.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/svg-baker-runtime/browser-symbol.js"),_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__),_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js"),_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__),symbol=new(_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({id:"x",use:"x-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" id="x"><path stroke="none" d="M0 0h24v24H0z" /><path d="M18 6 6 18M6 6l12 12" /></symbol>'});_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);const __WEBPACK_DEFAULT_EXPORT__=symbol}}]);