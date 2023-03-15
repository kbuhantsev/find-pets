"use strict";(self.webpackChunkfind_pets=self.webpackChunkfind_pets||[]).push([[838],{8431:function(e,r,a){a.d(r,{t:function(){return i}});var n=a(4942),s=a(225),t=a(635),i=(0,s.Z)(t.Z)((function(e){var r,a=e.theme,s=e.error;return r={borderRadius:"30px",height:"40px",border:"".concat(s?"1px solid red":"1px solid rgba(245, 146, 86, 0.5)"),backgroundColor:"#FDF7F2"},(0,n.Z)(r,a.breakpoints.up("tablet"),{height:"52px"}),(0,n.Z)(r,"&:hover,&:focus",{border:"1px solid rgb(245, 146, 86)"}),(0,n.Z)(r,"& > fieldset",{border:"none"}),(0,n.Z)(r,"& + p",{color:"red"}),r}))},3838:function(e,r,a){a.r(r),a.d(r,{default:function(){return S}});var n=a(4165),s=a(5861),t=a(9439),i=a(2791),o=a(4641),d=a(5264),l=a(7689),c=a(6727),u=a(5705),p=a(3239),h=a(890),m=a(8096),x=a(7071),f=a(3466),b=a(3400),Z=a(6151),w=a(9569),g=a(3710),v=(0,a(3814).Z)(),j=a(4942),y=a(225).Z.form((function(e){var r,a=e.theme;return r={display:"flex",flexDirection:"column",gap:"16px",width:"280px",position:"absolute",top:"100px",left:"50%",transform:"translateX(-50%)",textAlign:"center"},(0,j.Z)(r,a.breakpoints.up("tablet"),{width:"608px",top:"calc((100vh - 490px) / 2)",backgroundColor:"white",boxShadow:"7px 4px 14px rgba(0, 0, 0, 0.11)",borderRadius:"40px",padding:"60px 80px"}),(0,j.Z)(r,a.breakpoints.up("desktop"),{width:"618px"}),r})),k=a(8431),C=a(184),A=c.Ry({email:c.Z_().email("Invalid email address").matches(/^([a-zA-Z0-9])+([a-zA-Z0-9._-]+)@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)\.[a-zA-Z]{2,}$/,"Invalid email address").min(10,"Email must include more tnan 10 characters").max(63,"Email must be less tnan 63 characters").required("This is a required field"),password:c.Z_().matches(/^[^\s]+(^\s.*)?$/,"Password can't include whitespace").min(7,"Password must include more tnan 7 characters").max(32,"Password must be less tnan 32 characters").required("This is a required field")}),z=function(){var e=(0,o.cG)(),r=(0,t.Z)(e,2),a=r[0],c=r[1],j=c.isLoading,z=c.isFetching,S=i.useState(!1),B=(0,t.Z)(S,2),F=B[0],_=B[1],q=(0,l.s0)(),D=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(r,s){var t,i,o,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.email,i=r.password,e.prev=1,e.next=4,a({email:t,password:i}).unwrap();case 4:o=e.sent,l=o.user,d.Notify.success("Hello, ".concat(l.name)),q("/user"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),d.Notify.failure(e.t0.data.message);case 14:s.setSubmitting(!1);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(r,a){return e.apply(this,arguments)}}(),P=(0,u.TA)({initialValues:{email:"",password:""},validationSchema:A,onSubmit:D});return(0,C.jsx)(C.Fragment,{children:j||z?(0,C.jsx)(v,{display:"flex",justifyContent:"center",marginTop:"50px",children:(0,C.jsx)(p.Z,{color:"primary",size:75})}):(0,C.jsxs)(y,{onSubmit:P.handleSubmit,children:[(0,C.jsx)(h.Z,{variant:"h3",sx:{mb:"40px"},children:"Login"}),(0,C.jsxs)(m.Z,{variant:"outlined",children:[(0,C.jsx)(k.t,{name:"email",type:"text",placeholder:"Email",value:P.values.email,onChange:P.handleChange,onBlur:P.handleBlur,error:P.touched.email&&Boolean(P.errors.email),"aria-describedby":"component-email-error"}),(0,C.jsx)(x.Z,{id:"component-email-error",children:P.errors.email})]}),(0,C.jsxs)(m.Z,{variant:"outlined",children:[(0,C.jsx)(k.t,{name:"password",type:F?"text":"password",endAdornment:(0,C.jsx)(f.Z,{position:"end",children:(0,C.jsx)(b.Z,{"aria-label":"toggle password visibility",onClick:function(){return _((function(e){return!e}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:F?(0,C.jsx)(w.Z,{}):(0,C.jsx)(g.Z,{})})}),placeholder:"Password",value:P.values.password,onChange:P.handleChange,onBlur:P.handleBlur,error:P.touched.password&&Boolean(P.errors.password),"aria-describedby":"component-password-error"}),(0,C.jsx)(x.Z,{id:"component-password-error",children:P.errors.password})]}),(0,C.jsx)(m.Z,{sx:{m:1,width:"50ch"},children:(0,C.jsx)(Z.Z,{variant:"contained",type:"submit",size:"large",sx:{borderRadius:"20px",width:"100%"},children:"Login"})})]})})},S=function(){return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(z,{})})}}}]);
//# sourceMappingURL=838.b92a24a1.chunk.js.map