(self.webpackChunknext_io_ghent_starter=self.webpackChunknext_io_ghent_starter||[]).push([[450],{"./node_modules/svg-baker-runtime/browser-symbol.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=function(){"use strict";var SpriteSymbol=function SpriteSymbol(ref){var id=ref.id,viewBox=ref.viewBox,content=ref.content;this.id=id,this.viewBox=viewBox,this.content=content};SpriteSymbol.prototype.stringify=function stringify(){return this.content},SpriteSymbol.prototype.toString=function toString(){return this.stringify()},SpriteSymbol.prototype.destroy=function destroy(){var this$1=this;["id","viewBox","content"].forEach((function(prop){return delete this$1[prop]}))};var parse=function(content){var hasImportNode=!!document.importNode,doc=(new DOMParser).parseFromString(content,"image/svg+xml").documentElement;return hasImportNode?document.importNode(doc,!0):doc};function createCommonjsModule(fn,module){return fn(module={exports:{}},module.exports),module.exports}"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self&&self;var deepmerge=createCommonjsModule((function(module,exports){!function(root,factory){module.exports=factory()}(0,(function(){function isMergeableObject(val){return val&&"object"==typeof val&&"[object RegExp]"!==Object.prototype.toString.call(val)&&"[object Date]"!==Object.prototype.toString.call(val)}function emptyTarget(val){return Array.isArray(val)?[]:{}}function cloneIfNecessary(value,optionsArgument){return optionsArgument&&!0===optionsArgument.clone&&isMergeableObject(value)?deepmerge(emptyTarget(value),value,optionsArgument):value}function defaultArrayMerge(target,source,optionsArgument){var destination=target.slice();return source.forEach((function(e,i){void 0===destination[i]?destination[i]=cloneIfNecessary(e,optionsArgument):isMergeableObject(e)?destination[i]=deepmerge(target[i],e,optionsArgument):-1===target.indexOf(e)&&destination.push(cloneIfNecessary(e,optionsArgument))})),destination}function mergeObject(target,source,optionsArgument){var destination={};return isMergeableObject(target)&&Object.keys(target).forEach((function(key){destination[key]=cloneIfNecessary(target[key],optionsArgument)})),Object.keys(source).forEach((function(key){isMergeableObject(source[key])&&target[key]?destination[key]=deepmerge(target[key],source[key],optionsArgument):destination[key]=cloneIfNecessary(source[key],optionsArgument)})),destination}function deepmerge(target,source,optionsArgument){var array=Array.isArray(source),arrayMerge=(optionsArgument||{arrayMerge:defaultArrayMerge}).arrayMerge||defaultArrayMerge;return array?Array.isArray(target)?arrayMerge(target,source,optionsArgument):cloneIfNecessary(source,optionsArgument):mergeObject(target,source,optionsArgument)}return deepmerge.all=function deepmergeAll(array,optionsArgument){if(!Array.isArray(array)||array.length<2)throw new Error("first argument should be an array with at least two elements");return array.reduce((function(prev,next){return deepmerge(prev,next,optionsArgument)}))},deepmerge}))})),namespaces_1=createCommonjsModule((function(module,exports){var namespaces={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}};exports.default=namespaces,module.exports=exports.default})),objectToAttrsString=function(attrs){return Object.keys(attrs).map((function(attr){return attr+'="'+attrs[attr].toString().replace(/"/g,"&quot;")+'"'})).join(" ")},svg=namespaces_1.svg,xlink=namespaces_1.xlink,defaultAttrs={};defaultAttrs[svg.name]=svg.uri,defaultAttrs[xlink.name]=xlink.uri;var wrapInSvgString=function(content,attributes){void 0===content&&(content="");var attrs=deepmerge(defaultAttrs,attributes||{});return"<svg "+objectToAttrsString(attrs)+">"+content+"</svg>"},BrowserSpriteSymbol=function(SpriteSymbol$$1){function BrowserSpriteSymbol(){SpriteSymbol$$1.apply(this,arguments)}SpriteSymbol$$1&&(BrowserSpriteSymbol.__proto__=SpriteSymbol$$1),BrowserSpriteSymbol.prototype=Object.create(SpriteSymbol$$1&&SpriteSymbol$$1.prototype),BrowserSpriteSymbol.prototype.constructor=BrowserSpriteSymbol;var prototypeAccessors={isMounted:{}};return prototypeAccessors.isMounted.get=function(){return!!this.node},BrowserSpriteSymbol.createFromExistingNode=function createFromExistingNode(node){return new BrowserSpriteSymbol({id:node.getAttribute("id"),viewBox:node.getAttribute("viewBox"),content:node.outerHTML})},BrowserSpriteSymbol.prototype.destroy=function destroy(){this.isMounted&&this.unmount(),SpriteSymbol$$1.prototype.destroy.call(this)},BrowserSpriteSymbol.prototype.mount=function mount(target){if(this.isMounted)return this.node;var mountTarget="string"==typeof target?document.querySelector(target):target,node=this.render();return this.node=node,mountTarget.appendChild(node),node},BrowserSpriteSymbol.prototype.render=function render(){var content=this.stringify();return parse(wrapInSvgString(content)).childNodes[0]},BrowserSpriteSymbol.prototype.unmount=function unmount(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(BrowserSpriteSymbol.prototype,prototypeAccessors),BrowserSpriteSymbol}(SpriteSymbol);return BrowserSpriteSymbol}()},"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=function(){"use strict";function createCommonjsModule(fn,module){return fn(module={exports:{}},module.exports),module.exports}"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self&&self;var deepmerge=createCommonjsModule((function(module,exports){!function(root,factory){module.exports=factory()}(0,(function(){function isMergeableObject(val){return val&&"object"==typeof val&&"[object RegExp]"!==Object.prototype.toString.call(val)&&"[object Date]"!==Object.prototype.toString.call(val)}function emptyTarget(val){return Array.isArray(val)?[]:{}}function cloneIfNecessary(value,optionsArgument){return optionsArgument&&!0===optionsArgument.clone&&isMergeableObject(value)?deepmerge(emptyTarget(value),value,optionsArgument):value}function defaultArrayMerge(target,source,optionsArgument){var destination=target.slice();return source.forEach((function(e,i){void 0===destination[i]?destination[i]=cloneIfNecessary(e,optionsArgument):isMergeableObject(e)?destination[i]=deepmerge(target[i],e,optionsArgument):-1===target.indexOf(e)&&destination.push(cloneIfNecessary(e,optionsArgument))})),destination}function mergeObject(target,source,optionsArgument){var destination={};return isMergeableObject(target)&&Object.keys(target).forEach((function(key){destination[key]=cloneIfNecessary(target[key],optionsArgument)})),Object.keys(source).forEach((function(key){isMergeableObject(source[key])&&target[key]?destination[key]=deepmerge(target[key],source[key],optionsArgument):destination[key]=cloneIfNecessary(source[key],optionsArgument)})),destination}function deepmerge(target,source,optionsArgument){var array=Array.isArray(source),arrayMerge=(optionsArgument||{arrayMerge:defaultArrayMerge}).arrayMerge||defaultArrayMerge;return array?Array.isArray(target)?arrayMerge(target,source,optionsArgument):cloneIfNecessary(source,optionsArgument):mergeObject(target,source,optionsArgument)}return deepmerge.all=function deepmergeAll(array,optionsArgument){if(!Array.isArray(array)||array.length<2)throw new Error("first argument should be an array with at least two elements");return array.reduce((function(prev,next){return deepmerge(prev,next,optionsArgument)}))},deepmerge}))}));function mitt(all){return all=all||Object.create(null),{on:function on(type,handler){(all[type]||(all[type]=[])).push(handler)},off:function off(type,handler){all[type]&&all[type].splice(all[type].indexOf(handler)>>>0,1)},emit:function emit(type,evt){(all[type]||[]).map((function(handler){handler(evt)})),(all["*"]||[]).map((function(handler){handler(type,evt)}))}}}var namespaces_1=createCommonjsModule((function(module,exports){var namespaces={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}};exports.default=namespaces,module.exports=exports.default})),objectToAttrsString=function(attrs){return Object.keys(attrs).map((function(attr){return attr+'="'+attrs[attr].toString().replace(/"/g,"&quot;")+'"'})).join(" ")},svg=namespaces_1.svg,xlink=namespaces_1.xlink,defaultAttrs={};defaultAttrs[svg.name]=svg.uri,defaultAttrs[xlink.name]=xlink.uri;var obj,wrapInSvgString=function(content,attributes){void 0===content&&(content="");var attrs=deepmerge(defaultAttrs,attributes||{});return"<svg "+objectToAttrsString(attrs)+">"+content+"</svg>"},svg$1=namespaces_1.svg,xlink$1=namespaces_1.xlink,defaultConfig={attrs:(obj={style:["position: absolute","width: 0","height: 0"].join("; "),"aria-hidden":"true"},obj[svg$1.name]=svg$1.uri,obj[xlink$1.name]=xlink$1.uri,obj)},Sprite=function Sprite(config){this.config=deepmerge(defaultConfig,config||{}),this.symbols=[]};Sprite.prototype.add=function add(symbol){var symbols=this.symbols,existing=this.find(symbol.id);return existing?(symbols[symbols.indexOf(existing)]=symbol,!1):(symbols.push(symbol),!0)},Sprite.prototype.remove=function remove(id){var symbols=this.symbols,symbol=this.find(id);return!!symbol&&(symbols.splice(symbols.indexOf(symbol),1),symbol.destroy(),!0)},Sprite.prototype.find=function find(id){return this.symbols.filter((function(s){return s.id===id}))[0]||null},Sprite.prototype.has=function has(id){return null!==this.find(id)},Sprite.prototype.stringify=function stringify(){var attrs=this.config.attrs,stringifiedSymbols=this.symbols.map((function(s){return s.stringify()})).join("");return wrapInSvgString(stringifiedSymbols,attrs)},Sprite.prototype.toString=function toString(){return this.stringify()},Sprite.prototype.destroy=function destroy(){this.symbols.forEach((function(s){return s.destroy()}))};var SpriteSymbol=function SpriteSymbol(ref){var id=ref.id,viewBox=ref.viewBox,content=ref.content;this.id=id,this.viewBox=viewBox,this.content=content};SpriteSymbol.prototype.stringify=function stringify(){return this.content},SpriteSymbol.prototype.toString=function toString(){return this.stringify()},SpriteSymbol.prototype.destroy=function destroy(){var this$1=this;["id","viewBox","content"].forEach((function(prop){return delete this$1[prop]}))};var parse=function(content){var hasImportNode=!!document.importNode,doc=(new DOMParser).parseFromString(content,"image/svg+xml").documentElement;return hasImportNode?document.importNode(doc,!0):doc},BrowserSpriteSymbol=function(SpriteSymbol$$1){function BrowserSpriteSymbol(){SpriteSymbol$$1.apply(this,arguments)}SpriteSymbol$$1&&(BrowserSpriteSymbol.__proto__=SpriteSymbol$$1),BrowserSpriteSymbol.prototype=Object.create(SpriteSymbol$$1&&SpriteSymbol$$1.prototype),BrowserSpriteSymbol.prototype.constructor=BrowserSpriteSymbol;var prototypeAccessors={isMounted:{}};return prototypeAccessors.isMounted.get=function(){return!!this.node},BrowserSpriteSymbol.createFromExistingNode=function createFromExistingNode(node){return new BrowserSpriteSymbol({id:node.getAttribute("id"),viewBox:node.getAttribute("viewBox"),content:node.outerHTML})},BrowserSpriteSymbol.prototype.destroy=function destroy(){this.isMounted&&this.unmount(),SpriteSymbol$$1.prototype.destroy.call(this)},BrowserSpriteSymbol.prototype.mount=function mount(target){if(this.isMounted)return this.node;var mountTarget="string"==typeof target?document.querySelector(target):target,node=this.render();return this.node=node,mountTarget.appendChild(node),node},BrowserSpriteSymbol.prototype.render=function render(){var content=this.stringify();return parse(wrapInSvgString(content)).childNodes[0]},BrowserSpriteSymbol.prototype.unmount=function unmount(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(BrowserSpriteSymbol.prototype,prototypeAccessors),BrowserSpriteSymbol}(SpriteSymbol),defaultConfig$1={autoConfigure:!0,mountTo:"body",syncUrlsWithBaseTag:!1,listenLocationChangeEvent:!0,locationChangeEvent:"locationChange",locationChangeAngularEmitter:!1,usagesToUpdate:"use[*|href]",moveGradientsOutsideSymbol:!1},arrayFrom=function(arrayLike){return Array.prototype.slice.call(arrayLike,0)},browser={isChrome:function(){return/chrome/i.test(navigator.userAgent)},isFirefox:function(){return/firefox/i.test(navigator.userAgent)},isIE:function(){return/msie/i.test(navigator.userAgent)||/trident/i.test(navigator.userAgent)},isEdge:function(){return/edge/i.test(navigator.userAgent)}},dispatchEvent=function(name,data){var event=document.createEvent("CustomEvent");event.initCustomEvent(name,!1,!1,data),window.dispatchEvent(event)},evalStylesIEWorkaround=function(node){var updatedNodes=[];return arrayFrom(node.querySelectorAll("style")).forEach((function(style){style.textContent+="",updatedNodes.push(style)})),updatedNodes},getUrlWithoutFragment=function(url){return(url||window.location.href).split("#")[0]},locationChangeAngularEmitter=function(eventName){angular.module("ng").run(["$rootScope",function($rootScope){$rootScope.$on("$locationChangeSuccess",(function(e,newUrl,oldUrl){dispatchEvent(eventName,{oldUrl,newUrl})}))}])},defaultSelector="linearGradient, radialGradient, pattern, mask, clipPath",moveGradientsOutsideSymbol=function(svg,selector){return void 0===selector&&(selector=defaultSelector),arrayFrom(svg.querySelectorAll("symbol")).forEach((function(symbol){arrayFrom(symbol.querySelectorAll(selector)).forEach((function(node){symbol.parentNode.insertBefore(node,symbol)}))})),svg};function selectAttributes(nodes,matcher){return arrayFrom(nodes).reduce((function(acc,node){if(!node.attributes)return acc;var arrayfied=arrayFrom(node.attributes),matched=matcher?arrayfied.filter(matcher):arrayfied;return acc.concat(matched)}),[])}var xLinkNS=namespaces_1.xlink.uri,xLinkAttrName="xlink:href",specialUrlCharsPattern=/[{}|\\\^\[\]`"<>]/g;function encoder(url){return url.replace(specialUrlCharsPattern,(function(match){return"%"+match[0].charCodeAt(0).toString(16).toUpperCase()}))}function escapeRegExp(str){return str.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function updateReferences(nodes,startsWith,replaceWith){return arrayFrom(nodes).forEach((function(node){var href=node.getAttribute(xLinkAttrName);if(href&&0===href.indexOf(startsWith)){var newUrl=href.replace(startsWith,replaceWith);node.setAttributeNS(xLinkNS,xLinkAttrName,newUrl)}})),nodes}var sprite,attList=["clipPath","colorProfile","src","cursor","fill","filter","marker","markerStart","markerMid","markerEnd","mask","stroke","style"],attSelector=attList.map((function(attr){return"["+attr+"]"})).join(","),updateUrls=function(svg,references,startsWith,replaceWith){var startsWithEncoded=encoder(startsWith),replaceWithEncoded=encoder(replaceWith);selectAttributes(svg.querySelectorAll(attSelector),(function(ref){var localName=ref.localName,value=ref.value;return-1!==attList.indexOf(localName)&&-1!==value.indexOf("url("+startsWithEncoded)})).forEach((function(attr){return attr.value=attr.value.replace(new RegExp(escapeRegExp(startsWithEncoded),"g"),replaceWithEncoded)})),updateReferences(references,startsWithEncoded,replaceWithEncoded)},Events={MOUNT:"mount",SYMBOL_MOUNT:"symbol_mount"},BrowserSprite=function(Sprite$$1){function BrowserSprite(cfg){var this$1=this;void 0===cfg&&(cfg={}),Sprite$$1.call(this,deepmerge(defaultConfig$1,cfg));var emitter=mitt();this._emitter=emitter,this.node=null;var config=this.config;if(config.autoConfigure&&this._autoConfigure(cfg),config.syncUrlsWithBaseTag){var baseUrl=document.getElementsByTagName("base")[0].getAttribute("href");emitter.on(Events.MOUNT,(function(){return this$1.updateUrls("#",baseUrl)}))}var handleLocationChange=this._handleLocationChange.bind(this);this._handleLocationChange=handleLocationChange,config.listenLocationChangeEvent&&window.addEventListener(config.locationChangeEvent,handleLocationChange),config.locationChangeAngularEmitter&&locationChangeAngularEmitter(config.locationChangeEvent),emitter.on(Events.MOUNT,(function(spriteNode){config.moveGradientsOutsideSymbol&&moveGradientsOutsideSymbol(spriteNode)})),emitter.on(Events.SYMBOL_MOUNT,(function(symbolNode){config.moveGradientsOutsideSymbol&&moveGradientsOutsideSymbol(symbolNode.parentNode),(browser.isIE()||browser.isEdge())&&evalStylesIEWorkaround(symbolNode)}))}Sprite$$1&&(BrowserSprite.__proto__=Sprite$$1),BrowserSprite.prototype=Object.create(Sprite$$1&&Sprite$$1.prototype),BrowserSprite.prototype.constructor=BrowserSprite;var prototypeAccessors={isMounted:{}};return prototypeAccessors.isMounted.get=function(){return!!this.node},BrowserSprite.prototype._autoConfigure=function _autoConfigure(cfg){var config=this.config;void 0===cfg.syncUrlsWithBaseTag&&(config.syncUrlsWithBaseTag=void 0!==document.getElementsByTagName("base")[0]),void 0===cfg.locationChangeAngularEmitter&&(config.locationChangeAngularEmitter=void 0!==window.angular),void 0===cfg.moveGradientsOutsideSymbol&&(config.moveGradientsOutsideSymbol=browser.isFirefox())},BrowserSprite.prototype._handleLocationChange=function _handleLocationChange(event){var ref=event.detail,oldUrl=ref.oldUrl,newUrl=ref.newUrl;this.updateUrls(oldUrl,newUrl)},BrowserSprite.prototype.add=function add(symbol){var sprite=this,isNewSymbol=Sprite$$1.prototype.add.call(this,symbol);return this.isMounted&&isNewSymbol&&(symbol.mount(sprite.node),this._emitter.emit(Events.SYMBOL_MOUNT,symbol.node)),isNewSymbol},BrowserSprite.prototype.attach=function attach(target){var this$1=this,sprite=this;if(sprite.isMounted)return sprite.node;var node="string"==typeof target?document.querySelector(target):target;return sprite.node=node,this.symbols.forEach((function(symbol){symbol.mount(sprite.node),this$1._emitter.emit(Events.SYMBOL_MOUNT,symbol.node)})),arrayFrom(node.querySelectorAll("symbol")).forEach((function(symbolNode){var symbol=BrowserSpriteSymbol.createFromExistingNode(symbolNode);symbol.node=symbolNode,sprite.add(symbol)})),this._emitter.emit(Events.MOUNT,node),node},BrowserSprite.prototype.destroy=function destroy(){var ref=this,config=ref.config,symbols=ref.symbols,_emitter=ref._emitter;symbols.forEach((function(s){return s.destroy()})),_emitter.off("*"),window.removeEventListener(config.locationChangeEvent,this._handleLocationChange),this.isMounted&&this.unmount()},BrowserSprite.prototype.mount=function mount(target,prepend){void 0===target&&(target=this.config.mountTo),void 0===prepend&&(prepend=!1);var sprite=this;if(sprite.isMounted)return sprite.node;var mountNode="string"==typeof target?document.querySelector(target):target,node=sprite.render();return this.node=node,prepend&&mountNode.childNodes[0]?mountNode.insertBefore(node,mountNode.childNodes[0]):mountNode.appendChild(node),this._emitter.emit(Events.MOUNT,node),node},BrowserSprite.prototype.render=function render(){return parse(this.stringify())},BrowserSprite.prototype.unmount=function unmount(){this.node.parentNode.removeChild(this.node)},BrowserSprite.prototype.updateUrls=function updateUrls$1(oldUrl,newUrl){if(!this.isMounted)return!1;var usages=document.querySelectorAll(this.config.usagesToUpdate);return updateUrls(this.node,usages,getUrlWithoutFragment(oldUrl)+"#",getUrlWithoutFragment(newUrl)+"#"),!0},Object.defineProperties(BrowserSprite.prototype,prototypeAccessors),BrowserSprite}(Sprite),ready$1=createCommonjsModule((function(module){var definition;definition=function(){var listener,fns=[],doc=document,hack=doc.documentElement.doScroll,domContentLoaded="DOMContentLoaded",loaded=(hack?/^loaded|^c/:/^loaded|^i|^c/).test(doc.readyState);return loaded||doc.addEventListener(domContentLoaded,listener=function(){for(doc.removeEventListener(domContentLoaded,listener),loaded=1;listener=fns.shift();)listener()}),function(fn){loaded?setTimeout(fn,0):fns.push(fn)}},module.exports=definition()})),spriteNodeId="__SVG_SPRITE_NODE__",spriteGlobalVarName="__SVG_SPRITE__";window[spriteGlobalVarName]?sprite=window[spriteGlobalVarName]:(sprite=new BrowserSprite({attrs:{id:spriteNodeId,"aria-hidden":"true"}}),window[spriteGlobalVarName]=sprite);var loadSprite=function(){var existing=document.getElementById(spriteNodeId);existing?sprite.attach(existing):sprite.mount(document.body,!0)};return document.body?loadSprite():ready$1(loadSprite),sprite}()}}]);