(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{242:function(e,t,n){var r={"./de/common":[1545,545],"./de/common.json":[1545,545],"./en/common":[464,464],"./en/common.json":[464,464],"./it/common":[9486,486],"./it/common.json":[9486,486]};function o(e){if(!n.o(r,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[e],o=t[0];return n.e(t[1]).then(function(){return n.t(o,19)})}o.keys=function(){return Object.keys(r)},o.id=242,e.exports=o},3442:function(e,t,n){"use strict";var r,o=n(1776);"function"==typeof o.createContext&&(r=(0,o.createContext)({t:function(e){return Array.isArray(e)?e[0]:e},lang:""})),t.Z=r},6153:function(e,t,n){"use strict";n(3906)},1730:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e){var t=e.config,n=e.allNamespaces,o=e.pluralRules,u=e.lang,c=t.logger,s=void 0===c?l:c,f=t.allowEmptyStrings,d=void 0===f||f,p=function(e,n){return Array.isArray(e)?e.map(function(e){return p(e,n)}):e instanceof Object?function e(t){var n=t.obj,r=t.query,o=t.config,i=t.lang;return r&&0!==Object.keys(r).length&&Object.keys(n).forEach(function(t){n[t]instanceof Object&&e({obj:n[t],query:r,config:o,lang:i}),"string"==typeof n[t]&&(n[t]=a({text:n[t],query:r,config:o,lang:i}))}),n}({obj:e,query:n,config:t,lang:u}):a({text:e,query:n,config:t,lang:u})},g=function(e,a,l){void 0===e&&(e="");var u,c=Array.isArray(e)?e[0]:e,f=t.nsSeparator,h=t.loggerEnvironment,v=void 0===h?"browser":h,y=function(e,t){if(!t)return{i18nKey:e};var n=e.indexOf(t);return n<0?{i18nKey:e}:{namespace:e.slice(0,n),i18nKey:e.slice(n+t.length)}}(c,void 0===f?":":f),m=y.i18nKey,b=y.namespace,w=void 0===b?null!==(u=null==l?void 0:l.ns)&&void 0!==u?u:t.defaultNS:b,x=w&&n[w]||{},_=function(e,t,n,r,o){if(!o||"number"!=typeof o.count)return n;var a="".concat(n,"_").concat(o.count);if(void 0!==i(t,a,r))return a;var l="".concat(n,"_").concat(e.select(o.count));if(void 0!==i(t,l,r))return l;var u="".concat(n,".").concat(o.count);if(void 0!==i(t,u,r))return u;var c="".concat(n,".").concat(e.select(o.count));return void 0!==i(t,c,r)?c:n}(o,x,m,t,a),j=i(x,_,t,l),O="object"==typeof j?JSON.parse(JSON.stringify(j)):j,E=void 0===O||"object"==typeof O&&!Object.keys(O).length||""===O&&!d,P="string"==typeof(null==l?void 0:l.fallback)?[l.fallback]:(null==l?void 0:l.fallback)||[];if(E&&("both"===v||v===("undefined"==typeof window?"node":"browser"))&&s({namespace:w,i18nKey:m}),E&&Array.isArray(P)&&P.length){var C=P[0],k=P.slice(1);if("string"==typeof C)return g(C,a,r(r({},l),{fallback:k}))}return E&&l&&l.hasOwnProperty("default")&&!(null==P?void 0:P.length)?l.default?p(l.default,a):l.default:E?c:p(O,a)};return g}function i(e,t,n,r){void 0===t&&(t=""),void 0===r&&(r={returnObjects:!1});var o=(n||{}).keySeparator,i=void 0===o?".":o,a=i?t.split(i):[t];if(t===i&&r.returnObjects)return e;var l=a.reduce(function(e,t){if("string"==typeof e)return{};var n=e[t];return n||("string"==typeof n?n:{})},e);if("string"==typeof l||l instanceof Object&&r.returnObjects)return l}function a(e){var t=e.text,n=e.query,r=e.config,o=e.lang;if(!t||!n)return t||"";var i=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},a=r.interpolation||{},l=a.format,u=void 0===l?null:l,c=a.prefix,s=void 0===c?"{{":c,f=a.suffix,d=void 0===f?"}}":f,p=""===d?"":"(?:[\\s,]+([\\w-]*))?\\s*".concat(i(d));return Object.keys(n).reduce(function(e,t){var r=RegExp("".concat(i(s),"\\s*").concat(t).concat(p),"gm");return e.replace(r,function(e,r){return r&&u?u(n[t],r,o):n[t]})},t)}function l(e){e.namespace,e.i18nKey}},8757:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(1776),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e,t){return"string"!=typeof t?e:function(n,r,i){return e(n,r,o({ns:t},i))}}var a=n(3442),l=n(1730),u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function c(e){var t=(0,r.useContext)(a.Z);return(0,r.useMemo)(function(){return u(u({},t),{t:i(t.t,e)})},[t,e])}function s(e){var t=globalThis.__NEXT_TRANSLATE__||{},n=t.lang,r=t.namespaces,o=(globalThis.i18nConfig.localesToIgnore||["default"]).includes(n);return{t:i((0,l.Z)({config:globalThis.i18nConfig,allNamespaces:r,pluralRules:new Intl.PluralRules(o?void 0:n),lang:n}),e),lang:n}}function f(e){return(globalThis.__NEXT_TRANSLATE__?s:c)(e)}},6407:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(6046)},6046:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var u=[],c=!1,s=-1;function f(){c&&r&&(c=!1,r.length?u=r.concat(u):s=-1,u.length&&d())}function d(){if(!c){var e=l(f);c=!0;for(var t=u.length;t;){for(r=u,u=[];++s<t;)r&&r[s].run();s=-1,t=u.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||c||l(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},7832:function(e,t,n){e.exports=n(3327)},6562:function(e,t,n){e.exports=n(7876)},3906:function(e,t,n){e.exports=n(8058)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4273)}])},5608:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return u},ACTION_FAST_REFRESH:function(){return c}});let o="refresh",i="navigate",a="restore",l="server-patch",u="prefetch",c="fast-refresh";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6631:function(e,t,n){"use strict";function r(e,t,r,o){{let i=n(720).normalizeLocalePath,a=n(8790).detectDomainLocale,l=t||i(e,r).detectedLocale,u=a(o,void 0,l);if(u){let t="http"+(u.http?"":"s")+"://",n=l===u.defaultLocale?"":"/"+l;return""+t+u.domain+n+e}return!1}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3327:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let r=n(8223),o=n(6074),i=o._(n(1776)),a=r._(n(2267)),l=n(6369),u=n(7958),c=n(1201);n(4469);let s=r._(n(6e3)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function d(e){return void 0!==e.default}function p(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,n,r,o,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==o?void 0:o.current)&&o.current(e)}})}function h(e){let[t,n]=i.version.split("."),r=parseInt(t,10),o=parseInt(n,10);return r>18||18===r&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let v=(0,i.forwardRef)((e,t)=>{let{imgAttributes:n,heightInt:r,widthInt:o,qualityInt:a,className:l,imgStyle:u,blurStyle:c,isLazy:s,fetchPriority:f,fill:d,placeholder:p,loading:v,srcString:y,config:m,unoptimized:b,loader:w,onLoadRef:x,onLoadingCompleteRef:_,setBlurComplete:j,setShowAltText:O,onLoad:E,onError:P,...C}=e;return v=s?"lazy":v,i.default.createElement(i.default.Fragment,null,i.default.createElement("img",{...C,...h(f),loading:v,width:o,height:r,decoding:"async","data-nimg":d?"fill":"1",className:l,style:{...u,...c},...n,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(P&&(e.src=e.src),e.complete&&g(e,y,p,x,_,j,b))},[y,p,x,_,j,P,b,t]),onLoad:e=>{let t=e.currentTarget;g(t,y,p,x,_,j,b)},onError:e=>{O(!0),"blur"===p&&j(!0),P&&P(e)}}))}),y=(0,i.forwardRef)((e,t)=>{var n;let r,o,{src:g,sizes:y,unoptimized:m=!1,priority:b=!1,loading:w,className:x,quality:_,width:j,height:O,fill:E,style:P,onLoad:C,onLoadingComplete:k,placeholder:T="empty",blurDataURL:N,fetchPriority:S,layout:R,objectFit:L,objectPosition:A,lazyBoundary:M,lazyRoot:I,...F}=e,z=(0,i.useContext)(c.ImageConfigContext),D=(0,i.useMemo)(()=>{let e=f||z||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[z]),K=F.loader||s.default;delete F.loader;let U="__next_img_default"in K;if(U){if("custom"===D.loader)throw Error('Image with src "'+g+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=K;K=t=>{let{config:n,...r}=t;return e(r)}}if(R){"fill"===R&&(E=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(P={...P,...e});let t={responsive:"100vw",fill:"100vw"}[R];t&&!y&&(y=t)}let q="",H=p(j),B=p(O);if("object"==typeof(n=g)&&(d(n)||void 0!==n.src)){let e=d(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(r=e.blurWidth,o=e.blurHeight,N=N||e.blurDataURL,q=e.src,!E){if(H||B){if(H&&!B){let t=H/e.width;B=Math.round(e.height*t)}else if(!H&&B){let t=B/e.height;H=Math.round(e.width*t)}}else H=e.width,B=e.height}}let W=!b&&("lazy"===w||void 0===w);(!(g="string"==typeof g?g:q)||g.startsWith("data:")||g.startsWith("blob:"))&&(m=!0,W=!1),D.unoptimized&&(m=!0),U&&g.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(m=!0),b&&(S="high");let[Z,G]=(0,i.useState)(!1),[Y,J]=(0,i.useState)(!1),V=p(_),X=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:L,objectPosition:A}:{},Y?{}:{color:"transparent"},P),$="blur"===T&&N&&!Z?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,l.getImageBlurSvg)({widthInt:H,heightInt:B,blurWidth:r,blurHeight:o,blurDataURL:N,objectFit:X.objectFit})+'")'}:{},Q=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:i,sizes:a,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,a),s=u.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:u.map((e,r)=>l({config:t,src:n,quality:i,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:l({config:t,src:n,quality:i,width:u[s]})}}({config:D,src:g,unoptimized:m,width:H,quality:V,sizes:y,loader:K}),ee=g,et=(0,i.useRef)(C);(0,i.useEffect)(()=>{et.current=C},[C]);let en=(0,i.useRef)(k);(0,i.useEffect)(()=>{en.current=k},[k]);let er={isLazy:W,imgAttributes:Q,heightInt:B,widthInt:H,qualityInt:V,className:x,imgStyle:X,blurStyle:$,loading:w,config:D,fetchPriority:S,fill:E,unoptimized:m,placeholder:T,loader:K,srcString:ee,onLoadRef:et,onLoadingCompleteRef:en,setBlurComplete:G,setShowAltText:J,...F};return i.default.createElement(i.default.Fragment,null,i.default.createElement(v,{...er,ref:t}),b?i.default.createElement(a.default,null,i.default.createElement("link",{key:"__nimg-"+Q.src+Q.srcSet+Q.sizes,rel:"preload",as:"image",href:Q.srcSet?void 0:Q.src,imageSrcSet:Q.srcSet,imageSizes:Q.sizes,crossOrigin:F.crossOrigin,...h(S)})):null)}),m=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7876:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return w}});let r=n(8223),o=r._(n(1776)),i=n(846),a=n(2655),l=n(2563),u=n(632),c=n(2122),s=n(9481),f=n(946),d=n(2883),p=n(6631),g=n(5827),h=n(5608),v=new Set;function y(e,t,n,r,o,i){if(!i&&!(0,a.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,i=t+"%"+n+"%"+o;if(v.has(i))return;v.add(i)}let l=i?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(l).catch(e=>{})}function m(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let b=o.default.forwardRef(function(e,t){let n,r;let{href:l,as:v,children:b,prefetch:w=null,passHref:x,replace:_,shallow:j,scroll:O,locale:E,onClick:P,onMouseEnter:C,onTouchStart:k,legacyBehavior:T=!1,...N}=e;n=b,T&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let S=!1!==w,R=null===w?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,L=o.default.useContext(s.RouterContext),A=o.default.useContext(f.AppRouterContext),M=null!=L?L:A,I=!L,{href:F,as:z}=o.default.useMemo(()=>{if(!L){let e=m(l);return{href:e,as:v?m(v):e}}let[e,t]=(0,i.resolveHref)(L,l,!0);return{href:e,as:v?(0,i.resolveHref)(L,v):t||e}},[L,l,v]),D=o.default.useRef(F),K=o.default.useRef(z);T&&(r=o.default.Children.only(n));let U=T?r&&"object"==typeof r&&r.ref:t,[q,H,B]=(0,d.useIntersection)({rootMargin:"200px"}),W=o.default.useCallback(e=>{(K.current!==z||D.current!==F)&&(B(),K.current=z,D.current=F),q(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[z,U,F,B,q]);o.default.useEffect(()=>{M&&H&&S&&y(M,F,z,{locale:E},{kind:R},I)},[z,F,H,E,S,null==L?void 0:L.locale,M,I,R]);let Z={ref:W,onClick(e){T||"function"!=typeof P||P(e),T&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),M&&!e.defaultPrevented&&function(e,t,n,r,i,l,u,c,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,a.isLocalURL)(n)))return;e.preventDefault();let g=()=>{"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:l,locale:c,scroll:u}):t[i?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};s?o.default.startTransition(g):g()}(e,M,F,z,_,j,O,E,I,S)},onMouseEnter(e){T||"function"!=typeof C||C(e),T&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),M&&(S||!I)&&y(M,F,z,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:R},I)},onTouchStart(e){T||"function"!=typeof k||k(e),T&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),M&&(S||!I)&&y(M,F,z,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:R},I)}};if((0,u.isAbsoluteUrl)(z))Z.href=z;else if(!T||x||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&(0,p.getDomainLocale)(z,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);Z.href=t||(0,g.addBasePath)((0,c.addLocale)(z,e,null==L?void 0:L.defaultLocale))}return T?o.default.cloneElement(r,Z):o.default.createElement("a",{...N,...Z},n)}),w=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},720:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizeLocalePath",{enumerable:!0,get:function(){return r}});let r=(e,t)=>n(4861).normalizeLocalePath(e,t);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2883:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let r=n(1776),o=n(6947),i="function"==typeof IntersectionObserver,a=new Map,l=[];function u(e){let{rootRef:t,rootMargin:n,disabled:u}=e,c=u||!i,[s,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(i){if(c||s)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:i,elements:o},l.push(n),a.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,s,d.current]);let g=(0,r.useCallback)(()=>{f(!1)},[]);return[p,s,g]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6369:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:i,objectFit:a}=e,l=r||t,u=o||n,c=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&u?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+u+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(r&&o?"1":"20")+"'/%3E"+c+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},6e3:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:o}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},4273:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(6734),o=JSON.parse('{"locales":["it","en","de"],"defaultLocale":"it","pages":{"*":["common"]}}'),i=n(1776),a=n(3906),l=n(3442),u=n(1730),c=n(8757),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},f=(0,i.createContext)({ns:{},config:{}});function d(e){var t,n,r=e.lang,o=e.namespaces,d=e.children,p=e.config,g=(0,c.Z)().lang,h=(0,a.useRouter)()||{},v=h.locale,y=h.defaultLocale,m=(0,i.useContext)(f),b=s(s(s({},"undefined"==typeof window?{}:(null===(n=null===(t=window.__NEXT_DATA__)||void 0===t?void 0:t.props)||void 0===n?void 0:n.__namespaces)||{}),m.ns),void 0===o?{}:o),w=r||g||v||y||"",x=s(s({},m.config),void 0===p?{}:p),_=(x.localesToIgnore||["default"]).includes(w),j=new Intl.PluralRules(_?void 0:w),O=(0,u.Z)({config:x,allNamespaces:b,pluralRules:j,lang:w});return i.createElement(l.Z.Provider,{value:{lang:w,t:O}},i.createElement(f.Provider,{value:{ns:b,config:x}},d))}var p=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function l(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,l)}u((r=r.apply(e,t||[])).next())})},g=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(u){return function(l){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){a=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(6===l[0]&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(e,a)}catch(e){l=[6,e],r=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}},h=function(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};function v(e){return e.reduce(function(e,t){return e.concat(t)},[])}var y=n(6407),m=function(){return(m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},b=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(u){return function(l){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){a=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(6===l[0]&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(e,a)}catch(e){l=[6,e],r=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}},w=function(){return(w=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},x=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(u){return function(l){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){a=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(6===l[0]&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(e,a)}catch(e){l=[6,e],r=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}},_=n(6562),j=n.n(_),O=n(7832),E=n.n(O);n(7952),n(6776);let P=i.forwardRef(function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"}))});n(6153);var C=function(){let{t:e,lang:t}=(0,c.Z)("common"),n=(0,a.useRouter)();return(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("button",{onClick:()=>n.back(),className:"mr-2 p-1 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400",children:(0,r.jsx)(P,{className:"h-6 w-6 text-gray-500"})}),(0,r.jsx)("button",{onClick:()=>n.back(),children:(0,r.jsxs)("span",{className:"text-gray-500 hover:text-gray-700",children:[e("indietro")," "]})})]})},k=function(e,t){var r=this;function o(n){var r,o,a=t.defaultLocale;return i.createElement(d,{lang:(null===(r=n.pageProps)||void 0===r?void 0:r.__lang)||n.__lang||a,namespaces:(null===(o=n.pageProps)||void 0===o?void 0:o.__namespaces)||n.__namespaces,config:t},i.createElement(e,w({},n)))}return void 0===t&&(t={}),t.isLoader||!1===t.loader||console.warn('\uD83D\uDEA8 [next-translate] You can remove the "appWithI18n" HoC on the _app.js, unless you set "loader: false" in your i18n config file.'),"function"==typeof t.staticsHoc&&t.staticsHoc(o,e),"undefined"==typeof window?n.g.i18nConfig=t:window.i18nConfig=t,t.skipInitialProps||(o.getInitialProps=function(o){var i,a,l;return i=void 0,a=void 0,l=function(){var r,i,a;return x(this,function(l){switch(l.label){case 0:if(r=w(w({},o.ctx||{}),o||{}),i={pageProps:{}},!e.getInitialProps)return[3,2];return[4,e.getInitialProps(o)];case 1:i=l.sent()||{},l.label=2;case 2:return a=[w({},i)],[4,function(e){var t,r,o,i,a,l;return void 0===e&&(e={}),o=this,i=void 0,a=void 0,l=function(){var o,i,a,l,u,c;return b(this,function(s){switch(s.label){case 0:var f;if(i=(o=m(m({},("undefined"==typeof window?n.g:window).i18nConfig),e)).localesToIgnore||["default"],a=(null===(t=o.req)||void 0===t?void 0:t.locale)||o.locale||(null===(r=o.router)||void 0===r?void 0:r.locale)||o.defaultLocale||"",!o.pathname)return console.warn('\uD83D\uDEA8 [next-translate] You forgot to pass the "pathname" inside "loadNamespaces" configuration'),[2,{__lang:a}];if(i.includes(a))return[2,{__lang:a}];return o.loaderName||!1===o.loader||console.warn('\uD83D\uDEA8 [next-translate] You can remove the "loadNamespaces" helper, unless you set "loader: false" in your i18n config file.'),void 0===(f=o.pathname.replace(/\/index$/,""))&&(f=""),[4,function(e,t,n){var r=e.pages,o=void 0===r?{}:r;return p(this,void 0,void 0,function(){var e,r,i,a,l,u,c,s=this;return g(this,function(f){switch(f.label){case 0:return e="rgx:",r=function(e){return p(s,void 0,void 0,function(){return g(this,function(t){return[2,"function"==typeof e?e(n):e||[]]})})},i=Object.keys(o).reduce(function(n,i){return i.substring(0,e.length)===e&&new RegExp(i.replace(e,"")).test(t)&&n.push(r(o[i])),n},[]),a=[[]],[4,r(o["*"])];case 1:return l=[h.apply(void 0,a.concat([f.sent(),!0]))],[4,r(o[t])];case 2:return u=[h.apply(void 0,l.concat([f.sent(),!0]))],c=v,[4,Promise.all(i)];case 3:return[2,h.apply(void 0,u.concat([c.apply(void 0,[f.sent()]),!0]))]}})})}(o,l=(f.length>1&&f.endsWith("/")?f.slice(0,-1):f)||"/",o)];case 1:return[4,Promise.all((u=s.sent()).map(function(e){return"function"==typeof o.loadLocaleFrom?o.loadLocaleFrom(a,e).catch(function(){return{}}):Promise.resolve({})}))];case 2:return c=s.sent()||[],function(e,t){var n=t.page,r=t.lang,o=t.namespaces;if(!1!==e.logBuild&&"undefined"==typeof window){var i=null==y.env.NODE_DISABLE_COLORS&&null==y.env.NO_COLOR&&"dumb"!==y.env.TERM&&"0"!==y.env.FORCE_COLOR,a=function(e){return i?"\x1b[36m".concat(e,"\x1b[0m"):e};console.log(a("next-translate"),"- compiled page:",a(n),"- locale:",a(r),"- namespaces:",a(o.join(", ")),"- used loader:",a(e.loaderName||"-"))}}(o,{page:l,lang:a,namespaces:u}),[2,{__lang:a,__namespaces:u.reduce(function(e,t,n){return e[t]=c[n]||null,e},{})}]}})},new(a||(a=Promise))(function(e,t){function n(e){try{u(l.next(e))}catch(e){t(e)}}function r(e){try{u(l.throw(e))}catch(e){t(e)}}function u(t){var o;t.done?e(t.value):((o=t.value)instanceof a?o:new a(function(e){e(o)})).then(n,r)}u((l=l.apply(o,i||[])).next())})}(w(w(w({},r),t),{loaderName:"getInitialProps"}))];case 3:return[2,w.apply(void 0,a.concat([l.sent()]))]}})},new(a||(a=Promise))(function(e,t){function n(e){try{u(l.next(e))}catch(e){t(e)}}function o(e){try{u(l.throw(e))}catch(e){t(e)}}function u(t){var r;t.done?e(t.value):((r=t.value)instanceof a?r:new a(function(e){e(r)})).then(n,o)}u((l=l.apply(r,i||[])).next())})}),o}(function(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)("div",{className:"bg-white shadow",children:[(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-3 lg:px-4",children:(0,r.jsxs)("div",{className:"flex justify-between items-center py-0 md:justify-start md:space-x-10",children:[(0,r.jsx)("div",{className:"flex justify-start lg:w-0 lg:flex-1",children:(0,r.jsx)(j(),{href:"/",children:(0,r.jsx)("span",{className:"flex items-center",children:(0,r.jsx)(E(),{className:"h-14 w-auto sm:h-14",src:"/images/logo-villa-selvatico-scuro.png",width:300,height:100,alt:"Logo"})})})}),(0,r.jsx)("div",{className:"-mr-2 -my-2",children:(0,r.jsx)("button",{type:"button",className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500","aria-expanded":"false",children:(0,r.jsx)("span",{className:"sr-only",children:"Open menu"})})}),(0,r.jsx)("nav",{className:"hidden md:flex space-x-10"}),(0,r.jsx)("div",{className:"md:flex items-center justify-end md:flex-1 lg:w-0",children:(0,r.jsx)(C,{})})]})}),(0,r.jsx)(t,{...n})]})},{...o,isLoader:!0,skipInitialProps:!0,loadLocaleFrom:"function"==typeof o.loadLocaleFrom?o.loadLocaleFrom:(e,t)=>n(242)("./".concat(e,"/").concat(t)).then(e=>e.default)})},7952:function(){},6776:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(8058)}),_N_E=e.O()}]);