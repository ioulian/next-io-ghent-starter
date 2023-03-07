"use strict";(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[133],{"./src/components/common/easing-gradient/EasingGradient.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,default:()=>EasingGradient_stories});var defineProperty=__webpack_require__("./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/easing-coordinates/dist/index.js"),space=__webpack_require__("./node_modules/colorjs.io/src/space.js"),srgb=__webpack_require__("./node_modules/colorjs.io/src/spaces/srgb.js"),lab=__webpack_require__("./node_modules/colorjs.io/src/spaces/lab.js"),serialize=__webpack_require__("./node_modules/colorjs.io/src/serialize.js"),interpolation=__webpack_require__("./node_modules/colorjs.io/src/interpolation.js"),parse=__webpack_require__("./node_modules/colorjs.io/src/parse.js");space.Z.register(srgb.Z),space.Z.register(lab.Z);var _Example$parameters,_Example$parameters2,_Example$parameters2$,createEasingGradient=function createEasingGradient(from,to){var easing=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"cubic-bezier(0.5, 0, 0.5, 1)",stops=arguments.length>3&&void 0!==arguments[3]?arguments[3]:16,coordinates=(0,dist.BE)(easing,stops);return coordinates.map((function(_ref){var x=_ref.x,y=_ref.y;return"".concat((0,serialize.Z)((0,interpolation.CD)((0,parse.Z)(from),(0,parse.Z)(to),y,{space:"lab",outputSpace:"srgb"}))," ").concat(Math.abs(100*x).toFixed(2),"%")})).join(", ")},__jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var EasingGradient=function EasingGradient(_ref){var from=_ref.from,to=_ref.to,_ref$useEasing=_ref.useEasing,useEasing=void 0!==_ref$useEasing&&_ref$useEasing,_ref$stops=_ref.stops,stops=void 0===_ref$stops?16:_ref$stops,_ref$direction=_ref.direction,direction=void 0===_ref$direction?0:_ref$direction,_ref$easing=_ref.easing,easing=void 0===_ref$easing?"cubic-bezier(0.5, 0, 0.5, 1)":_ref$easing;return __jsx("div",{style:{width:"100%",height:"500px",background:"linear-gradient(".concat(direction,"deg, ").concat(useEasing?createEasingGradient(from,to,easing,stops):"".concat(from,", ").concat(to),")")}})};EasingGradient.displayName="EasingGradient";var easings={default:"cubic-bezier(0.5, 0, 0.5, 1)",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)"};const EasingGradient_stories={title:"Tools/Easing Gradient",component:EasingGradient,argTypes:{from:{control:{type:"color"}},to:{control:{type:"color"}},direction:{control:{type:"range",min:0,max:360,step:1}},stops:{control:{type:"range",min:0,max:100,step:1}},easing:{options:Object.keys(easings),mapping:easings,control:{type:"select"}}}};var Example={args:{from:"rgba(129,254,233,1)",to:"rgba(246,110,255,1)",useEasing:!0,direction:0,stops:16,easing:easings.default}};Example.parameters=_objectSpread(_objectSpread({},Example.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Example$parameters=Example.parameters)||void 0===_Example$parameters?void 0:_Example$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    from: "rgba(129,254,233,1)",\n    to: "rgba(246,110,255,1)",\n    useEasing: true,\n    direction: 0,\n    stops: 16,\n    easing: easings.default\n  }\n}'},null===(_Example$parameters2=Example.parameters)||void 0===_Example$parameters2||null===(_Example$parameters2$=_Example$parameters2.docs)||void 0===_Example$parameters2$?void 0:_Example$parameters2$.source)})})}}]);