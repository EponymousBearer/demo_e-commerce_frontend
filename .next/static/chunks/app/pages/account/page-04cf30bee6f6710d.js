(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[643],{3259:function(e,t,n){Promise.resolve().then(n.bind(n,8397))},8397:function(e,t,n){"use strict";n.r(t);var r=n(7437),c=n(7908),i=n(2265),o=n(146);t.default=()=>{let[e,t]=(0,i.useState)(""),[n,s]=(0,i.useState)();(0,i.useEffect)(()=>{let e=o.Z.get("email");void 0!==e&&t(e)},[]),(0,i.useEffect)(()=>{e&&a()},[e]);let a=async()=>{try{console.log(e);let t=await c.Z.get("http://195.35.7.158:5006/auth/MyAccount/".concat(e));console.log(t.data.user),s(t.data.user)}catch(e){console.error("Error fetching data:",e)}};return(0,r.jsx)("div",{className:"flex flex-col justify-center items-center h-screen",children:(0,r.jsxs)("div",{className:"bg-blue-200 p-10",children:[(0,r.jsx)("h2",{className:"text-xl text-center font-bold",children:"Account Details"}),(0,r.jsx)("div",{className:"py-6",children:n&&(0,r.jsx)("div",{children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["First Name: ",n.firstname]}),(0,r.jsxs)("li",{className:"py-2",children:["Last Name: ",n.lastname]}),(0,r.jsxs)("li",{children:["Email: ",n.email]})]})})})]})})}},146:function(e,t,n){"use strict";/*! js-cookie v3.0.5 | MIT */function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}n.d(t,{Z:function(){return c}});var c=function e(t,n){function c(e,c,i){if("undefined"!=typeof document){"number"==typeof(i=r({},n,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var s in i)i[s]&&(o+="; "+s,!0!==i[s]&&(o+="="+i[s].split(";")[0]));return document.cookie=e+"="+t.write(c,e)+o}}return Object.create({set:c,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},c=0;c<n.length;c++){var i=n[c].split("="),o=i.slice(1).join("=");try{var s=decodeURIComponent(i[0]);if(r[s]=t.read(o,s),e===s)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){c(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}},function(e){e.O(0,[908,971,69,744],function(){return e(e.s=3259)}),_N_E=e.O()}]);