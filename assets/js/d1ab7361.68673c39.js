"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[8724],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),h=i,y=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3130:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],c={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/cryptographic_key_concept.md"},p="Cryptographic Concepts",s={unversionedId:"developer/cryptographic_key_concept",id:"developer/cryptographic_key_concept",title:"Cryptographic Concepts",description:"Edward's Glossary",source:"@site/docs/developer/cryptographic_key_concept.md",sourceDirName:"developer",slug:"/developer/cryptographic_key_concept",permalink:"/docs/developer/cryptographic_key_concept",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/edit/main/docs/cryptographic_key_concept.md",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/cryptographic_key_concept.md"},sidebar:"tutorialSidebar",previous:{title:"Contributing to Pyrsia",permalink:"/docs/developer/contributing"},next:{title:"Code Contribution Workflow",permalink:"/docs/developer/dev_workflow"}},l={},u=[{value:"Edward&#39;s Glossary",id:"edwards-glossary",level:2},{value:"What is Ed25519",id:"what-is-ed25519",level:3},{value:"What is X25519",id:"what-is-x25519",level:3},{value:"What is Curve25519",id:"what-is-curve25519",level:3},{value:"What is Edwards25519",id:"what-is-edwards25519",level:3}],d={toc:u};function h(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cryptographic-concepts"},"Cryptographic Concepts"),(0,o.kt)("h2",{id:"edwards-glossary"},"Edward's Glossary"),(0,o.kt)("h3",{id:"what-is-ed25519"},"What is Ed25519"),(0,o.kt)("p",null,"Ed25519 is a public-key signature scheme built out of edwards25519 curve, using the EdDSA construction. An Ed25519 public key is the encoding of the \ud835\udc65 and \ud835\udc66 coordinates of a point on edwards25519"),(0,o.kt)("p",null,"Reference: ",(0,o.kt)("a",{parentName:"p",href:"https://ed25519.cr.yp.to/"},"https://ed25519.cr.yp.to/")),(0,o.kt)("h3",{id:"what-is-x25519"},"What is X25519"),(0,o.kt)("p",null,"X25519 is an elliptic curve Diffie-Hellman key exchange using Curve25519. It allows two parties to jointly agree on a shared secret using an insecure channel. An X25519 public key is the encoding of the \ud835\udc65 coordinate of a point on Curve25519, hence the name X25519"),(0,o.kt)("p",null,"Reference: ",(0,o.kt)("a",{parentName:"p",href:"https://cryptography.io/en/3.4.3/hazmat/primitives/asymmetric/x25519.html"},"https://cryptography.io/en/3.4.3/hazmat/primitives/asymmetric/x25519.html"),"  "),(0,o.kt)("h3",{id:"what-is-curve25519"},"What is Curve25519"),(0,o.kt)("p",null,"Curve25519 is an elliptic curve over the finite field \ud835\udd3d~\ud835\udc5d~, where \ud835\udc5d=2",(0,o.kt)("sup",null,"255"),"\u221219, whence came the 25519 part of the name. Specifically, it is the Montgomery curve \ud835\udc66",(0,o.kt)("sup",null,"2"),"=\ud835\udc65",(0,o.kt)("sup",null,"3"),"+486662\ud835\udc65",(0,o.kt)("sup",null,"2"),"+\ud835\udc65"),(0,o.kt)("p",null,"Reference: ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Curve25519"},"https://en.wikipedia.org/wiki/Curve25519")," "),(0,o.kt)("h3",{id:"what-is-edwards25519"},"What is Edwards25519"),(0,o.kt)("p",null,"Edwards25519 is an elliptic curve over the finite field \ud835\udd3d~\ud835\udc5d~, where \ud835\udc5d=2",(0,o.kt)("sup",null,"255"),"\u221219, with a different shape, the twisted Edwards shape \u2212\ud835\udc65",(0,o.kt)("sup",null,"2"),"+\ud835\udc66",(0,o.kt)("sup",null,"2"),"=1\u2212(121665/121666)\ud835\udc65",(0,o.kt)("sup",null,"2"),"\ud835\udc66",(0,o.kt)("sup",null,"2"),", which admits fast computation of \ud835\udc43+\ud835\udc44 given the \ud835\udc65 and \ud835\udc66 coordinates of \ud835\udc43 and \ud835\udc44. It is related to Curve25519 by a birational map, so most points on Curve25519 can be mapped to edwards25519 and vice versa"),(0,o.kt)("p",null,"Reference: ",(0,o.kt)("a",{parentName:"p",href:"https://math.stackexchange.com/questions/1392277/point-conversion-between-twisted-edwards-and-montgomery-curves"},"https://math.stackexchange.com/questions/1392277/point-conversion-between-twisted-edwards-and-montgomery-curves")))}h.isMDXComponent=!0}}]);