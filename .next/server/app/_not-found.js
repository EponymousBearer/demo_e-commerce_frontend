(()=>{var e={};e.id=165,e.ids=[165],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},8414:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>l});var n=r(482),s=r(9108),o=r(2563),i=r.n(o),a=r(8300),d={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>a[e]);r.d(t,d);let l=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,7689)),"D:\\PIAIC course\\Projects\\demo_e-commerce\\FrontEnd\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],c=[],u="/_not-found",x={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/_not-found",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},7712:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},6157:(e,t,r)=>{Promise.resolve().then(r.bind(r,5064)),Promise.resolve().then(r.bind(r,5544))},5064:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AppContext:()=>o,AppProvider:()=>i});var n=r(5344),s=r(3729);let o=(0,s.createContext)(),i=({children:e})=>{let[t,r]=(0,s.useState)(0),[i,a]=(0,s.useState)([]);return n.jsx(o.Provider,{value:{cart:t,setCart:r,addToCart:e=>{let t=i.findIndex(t=>t.productId===e.productId);if(-1!==t){let r=[...i];r[t].quantity+=e.quantity,a(r)}else a(t=>[...t,e])},cartItems:i},children:e})}},5544:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(5344),s=r(3729),o=r(6506),i=r(5064),a=r(8014),d=r(1652);let l=()=>{let[e,t]=(0,s.useState)(!1),{cart:r,setCart:l}=(0,s.useContext)(i.AppContext);return(0,s.useEffect)(()=>{t("true"===a.Z.get("islogin"))},[]),n.jsx("div",{className:"flex items-center py-8 lg:py-8 px-10",children:(0,n.jsxs)("div",{className:"hidden lg:flex items-center justify-end gap-x-8 flex-auto",children:[n.jsx(o.default,{href:"/",children:"Home"}),!e&&(0,n.jsxs)(n.Fragment,{children:[n.jsx(o.default,{href:"/pages/login",children:"Login"}),n.jsx(o.default,{href:"/pages/register",children:"Register"})]}),e&&(0,n.jsxs)(n.Fragment,{children:[n.jsx(o.default,{href:"/pages/account",children:"Account"}),n.jsx("button",{onClick:()=>{a.Z.set("islogin","false"),a.Z.remove("islogin"),t(!1),a.Z.remove("email"),window.location.href="/"},children:"Logout"})]}),n.jsx(o.default,{href:"/pages/cart",children:(0,n.jsxs)("div",{className:"flex",children:[n.jsx(d.Z,{})," ",n.jsx("span",{className:"-mt-3",children:r})]})})]})})}},7689:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g,metadata:()=>h});var n=r(5036),s=r(3640),o=r.n(s);r(5023);var i=r(6843);let a=(0,i.createProxy)(String.raw`D:\PIAIC course\Projects\demo_e-commerce\FrontEnd\src\app\layout\header.tsx`),{__esModule:d,$$typeof:l}=a,c=a.default,u=(0,i.createProxy)(String.raw`D:\PIAIC course\Projects\demo_e-commerce\FrontEnd\src\app\Context\CartContext.js`),{__esModule:x,$$typeof:p}=u;u.default,(0,i.createProxy)(String.raw`D:\PIAIC course\Projects\demo_e-commerce\FrontEnd\src\app\Context\CartContext.js#AppContext`);let m=(0,i.createProxy)(String.raw`D:\PIAIC course\Projects\demo_e-commerce\FrontEnd\src\app\Context\CartContext.js#AppProvider`),h={title:"Create Next App",description:"Generated by create next app"};function g({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:o().className,children:n.jsx(m,{children:(0,n.jsxs)("div",{children:[n.jsx(c,{}),e]})})})})}},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,531],()=>r(8414));module.exports=n})();