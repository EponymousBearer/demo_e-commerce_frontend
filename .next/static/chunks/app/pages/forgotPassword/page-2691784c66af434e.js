(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[506],{5407:function(e,s,t){Promise.resolve().then(t.bind(t,5896))},5896:function(e,s,t){"use strict";t.r(s);var a=t(7437),n=t(7908),i=t(2265);s.default=()=>{let[e,s]=(0,i.useState)(""),[t,l]=(0,i.useState)(""),r=async()=>{await n.Z.put("http://195.35.7.158:5006/auth/ForgotPassword",{email:e,password:t}),window.location.href="/"};return(0,a.jsx)("div",{className:"flex flex-col h-screen w-full justify-center items-center ",children:(0,a.jsxs)("div",{className:" bg-blue-200 p-6 space-y-4",children:[(0,a.jsx)("div",{className:"my-2 text-center font-semibold text-xl",children:"Reset Password"}),(0,a.jsx)("div",{children:"Email"}),(0,a.jsx)("input",{type:"email",value:e,onChange:e=>s(e.target.value),name:"email"}),(0,a.jsx)("div",{children:"Last Password"}),(0,a.jsx)("input",{type:"password",name:"password"}),(0,a.jsx)("div",{children:"New Password"}),(0,a.jsx)("input",{type:"password",value:t,onChange:e=>l(e.target.value),name:"password"}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{onClick:r,className:"p-2 bg-blue-300",children:"Submit"})})]})})}}},function(e){e.O(0,[908,971,69,744],function(){return e(e.s=5407)}),_N_E=e.O()}]);