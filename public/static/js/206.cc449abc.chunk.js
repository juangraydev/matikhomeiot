"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[206,79,92,411],{10079:function(t,n,e){e.r(n),e.d(n,{userLogin:function(){return a},userRegister:function(){return o}});var r=e(6092);function a(t){return function(n){return new Promise((function(n,e){console.log("ddd"),r.default.post("/api/v1/auth/signin",t).then((function(t){console.log("assaaa"),localStorage.setItem("TOKEN",t.data.token);var e={name:t.data.displayName,username:t.data.username};console.log("user_info: ",e),localStorage.setItem("USER_INFO",JSON.stringify(e)),n()})).catch((function(t){})).then((function(){}))}))}}function o(t){return function(n){return new Promise((function(n,e){r.default.post("/api/v1/auth/signup",t).then((function(t){})).catch((function(t){})).then((function(){}))}))}}},70206:function(t,n,e){e.r(n);var r,a,o=e(70885),i=e(4942),s=e(72791),c=(e(10079),e(59434)),u=e(476),d=e(56650),l=e(4565),g=e(29391),h=e(38254),p=e(85545),f=e(17205),m=e(87749),x=e(57689),Z=e(90158),b=e(80184),v=(0,Z.Z)({background:(r={background:"rgb(123,213,245)"},(0,i.Z)(r,"background","linear-gradient(45deg, rgba(123,213,245,1) 0%, rgba(255,167,255,1) 100%)"),(0,i.Z)(r,"height","calc(100vh)"),(0,i.Z)(r,"width","calc(100vw)!important"),(0,i.Z)(r,"maxWidth","none!important"),(0,i.Z)(r,"margin",0),(0,i.Z)(r,"padding",0),(0,i.Z)(r,"paddingTop",50),r),card:{width:"300px",margin:"auto",padding:30,display:"flex",flexDirection:"column",alignItems:"center"},textField:{marginBottom:"15px!important",width:"100%"},rootButton:(a={background:"linear-gradient(45deg, rgba(123,213,245,1) 0%, rgba(255,167,255,1) 70%)",border:0,borderRadius:40,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,width:"100%",paddingInline:10,marginBottom:"15px!important"},(0,i.Z)(a,"color","white!important"),(0,i.Z)(a,"padding","0 30px"),a)});n.default=function(){var t=v(),n=(0,x.s0)(),e=((0,c.I0)(),s.useState("")),r=(0,o.Z)(e,2),a=(r[0],r[1],s.useState("")),i=(0,o.Z)(a,2);return i[0],i[1],(0,b.jsx)(u.Z,{className:t.background,children:(0,b.jsxs)(d.Z,{className:t.card,children:[(0,b.jsx)(l.Z,{variant:"h5",gutterBottom:!0,children:"Sign-In"}),(0,b.jsx)(g.Z,{id:"input-with-icon-textfield",className:t.textField,label:"Username",InputProps:{startAdornment:(0,b.jsx)(h.Z,{position:"start",children:(0,b.jsx)(p.Z,{})})},variant:"standard"}),(0,b.jsx)(g.Z,{id:"input-with-icon-textfield",className:t.textField,label:"Password",InputProps:{startAdornment:(0,b.jsx)(h.Z,{position:"start",children:(0,b.jsx)(m.Z,{})})},variant:"standard"}),(0,b.jsx)(f.Z,{className:t.rootButton,children:"Sign In"}),(0,b.jsx)("span",{onClick:function(){console.log("heeheheh"),n("/auth/signup")},children:"Create your Account \u2192"})]})})}},6092:function(t,n,e){e.r(n);var r=e(74569),a=e.n(r),o=e(82411),i=a().create();i.defaults.baseURL=o.url,i.interceptors.request.use((function(t){var n=localStorage.getItem("TOKEN");return t.headers.authorization=n?"Bearer ".concat(n):"",t}),(function(t){return Promise.reject(t)})),i.interceptors.response.use((function(t){return t}),(function(t){var n=t.response.status;try{n}catch(e){console.error(e),alert("Internal Server Error")}return Promise.reject(t)})),n.default=i},82411:function(t,n,e){e.r(n),e.d(n,{url:function(){return r}});var r="http://127.0.0.1:8000"}}]);
//# sourceMappingURL=206.cc449abc.chunk.js.map