(window.webpackJsonp=window.webpackJsonp||[]).push([[4,20],{122:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(2),s=a(61),r=a.n(s),o=a(115);t.a=e=>{const{to:t,children:a,className:n}=e,s=Object(c.k)();return i.a.createElement("button",{className:Object(o.a)(r.a.ButtonContainer,n),onClick:()=>{t.startsWith("http")?window.open(t,"_blank"):s.push(t)}},a)}},56:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(62),s=a.n(c);t.default=()=>i.a.createElement("div",{className:s.a.MouseContainer},i.a.createElement("div",{className:s.a.Mouse},i.a.createElement("span",{className:s.a.MouseWheel})))},57:function(e,t,a){"use strict";a.r(t);var n=a(115),i=a(0),c=a.n(i),s=a(63),r=a.n(s);t.default=function(){return c.a.createElement("div",{className:Object(n.a)(r.a.Container,r.a.displayOnlyInLargeViewport)},c.a.createElement("img",{className:r.a.Img,src:"img/preview.jpg"}),c.a.createElement("div",{className:r.a.Text},"\u70b9\u51fb \ud83d\udc46 \u5728\u7ebf\u9884\u89c8"))}},66:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(16),s=a(117),r=a(122),o=a(168),l=a(2),d=a(68),m=a.n(d),u=a(115);var w=e=>{const{to:t,className:a}=e,n=Object(l.k)();return i.a.createElement("button",{className:Object(u.a)(m.a.ButtonContainer,a),onClick:()=>{t.startsWith("http")?window.open(t,"_blank"):n.push(t)}},i.a.createElement(o.a,{className:m.a.GithubIcon}),i.a.createElement("div",null,"GITHUB"))},h=a(69),v=a.n(h);var E=a(56),p=a(57);t.default=()=>{const{siteConfig:e}=Object(c.default)(),{windowHeight:t}=function(){const[e,t]=Object(n.useState)({windowWidth:void 0,windowHeight:void 0,scrollHeight:void 0});return Object(n.useEffect)((()=>{function e(){t({windowWidth:window.innerWidth,windowHeight:window.innerHeight,scrollHeight:document.documentElement.scrollHeight})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]),e}();return i.a.createElement("div",{className:v.a.Container,style:{height:t>800?t:void 0}},i.a.createElement("div",{style:{paddingBottom:"5rem"}},i.a.createElement("div",{className:v.a.HeaderTitle},"NPlayer"),i.a.createElement("div",{className:v.a.DescriptionText},"\u53ef\u5b9a\u5236\u3001\u63d2\u4ef6\u5316\u3001\u7f8e\u89c2\u3001\u5b9e\u7528\u7684\u89c6\u9891\u64ad\u653e\u5668"),i.a.createElement("div",{className:v.a.ButtonContainer},i.a.createElement(r.a,{className:v.a.GetStartedButton,to:Object(s.a)("/docs/")},"\u5feb\u901f\u5f00\u59cb"),i.a.createElement(w,{className:v.a.GithubButton,to:"https://github.com/woopen/nplayer"}))),i.a.createElement(p.default,null),t>900&&t<1200&&i.a.createElement(E.default,null))}}}]);