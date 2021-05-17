(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[511],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return s},kt:function(){return f}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return n?t.createElement(d,a(a({ref:r},s),{},{components:n})):t.createElement(d,a({ref:r},s))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8442:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var t=n(2122),o=n(9756),i=(n(7294),n(3905)),a={title:"\u89c6\u9891\u955c\u50cf"},c={unversionedId:"examples/mirroring",id:"examples/mirroring",isDocsHomePage:!1,title:"\u89c6\u9891\u955c\u50cf",description:"\u8fd9\u4e2a\u529f\u80fd\u6211\u4eec\u4f7f\u7528 switch \u7c7b\u578b\u7684 SettingItem \u6765\u7f16\u5199\u3002",source:"@site/docs/examples/mirroring.md",sourceDirName:"examples",slug:"/examples/mirroring",permalink:"/docs/examples/mirroring",editUrl:"https://github.com/woopen/nplayer/edit/main/website/docs/examples/mirroring.md",version:"current",frontMatter:{title:"\u89c6\u9891\u955c\u50cf"},sidebar:"docs",previous:{title:"\u89c6\u9891\u622a\u56fe",permalink:"/docs/examples/screenshot"},next:{title:"\u8ff7\u4f60\u64ad\u653e\u5668",permalink:"/docs/examples/mini"}},l=[],p={toc:l};function s(e){var r=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8fd9\u4e2a\u529f\u80fd\u6211\u4eec\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"switch")," \u7c7b\u578b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"SettingItem")," \u6765\u7f16\u5199\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const Mirroring = {\n  type: 'switch',\n  html: '\u89c6\u9891\u955c\u50cf',\n  checked: false,\n  init(player) {\n    player.video.classList.remove('nplayer_video-mirroring')\n    // \u9ed8\u8ba4\u4e0d\u662f\u955c\u50cf\n  },\n  change(value, player) {\n    player.video.classList.toggle('nplayer_video-mirroring', value)\n    // \u901a\u8fc7\u6dfb\u52a0\u79fb\u9664 class \u6765\u8ba9\u89c6\u9891\u662f\u5426\u662f\u955c\u50cf\n  }\n}\n\nconst player = new Player({\n  settings: [Mirroring, 'speed']\n})\nplayer.mount(document.body)\n")),(0,i.kt)("p",null,"CSS \u4ee3\u7801\u5982\u4e0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".nplayer_video-mirroring {\n  transform: scaleX(-1);\n}\n")))}s.isMDXComponent=!0}}]);