"use strict";(self.webpackChunkfind_pets=self.webpackChunkfind_pets||[]).push([[771],{9771:function(e,n,t){t.r(n),t.d(n,{default:function(){return fe}});var r,i,a,o,s,u,c,l,d,p,f=t(890),x=t(2791),m=t(168),h=t(225),Z=h.Z.div(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 60px;\n"]))),b=t(184),y=function(){return(0,b.jsx)(Z,{children:(0,b.jsx)(f.Z,{variant:"h6",children:"My pets:"})})},v=t(1413),g=t(4165),j=t(5861),w=t(9439),k=t(8147),M=h.Z.div(i||(i=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),S=h.Z.form(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),C=t(5705),N=t(6727),D=t(4641),I=t(3400),L=(0,h.Z)(I.Z)(o||(o=(0,m.Z)(["\n  width: fit-content;\n  color: ",";\n"])),(function(e){return e.theme.palette.primary.light})),z=h.Z.span(s||(s=(0,m.Z)(["\n  font-size: 12px;\n  letter-spacing: 0.04em;\n  color: rgba(17, 17, 17, 0.6);\n  font-size: 16px;\n  font-weight: 500;\n"]))),A=t(1686),B=t(6488),Y=function(){var e=(0,D.d3)(),n=(0,w.Z)(e,1)[0],t=(0,x.useCallback)((0,j.Z)((0,g.Z)().mark((function e(){return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n().unwrap();case 3:A.Notify.success("Success"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),A.Notify.error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),[n]);return(0,b.jsxs)(L,{onClick:t,children:[(0,b.jsx)(B.Z,{}),(0,b.jsx)(z,{children:"Log Out"})]})},_=t(5264),O=t(1286),$=t(872),R=t(9276),F=t(4227),T=(0,h.Z)(F.Z)((function(){return{".MuiInput-root":{height:"100%"},".MuiInput-root:before, .Mui-disabled:before":{borderBottomStyle:"none"},".MuiInput-root:after":{borderBottomStyle:"none"},".MuiInput-root.Mui-disabled:before":{borderBottomStyle:"none"}}})),U=t(4925),E=function(e){var n=e.formik,t=e.fieldName,r=e.isLoading,i=(0,x.useState)(!1),a=(0,w.Z)(i,2),o=a[0],s=a[1],u=(0,x.useMemo)((function(){return n.errors[t]}),[n.errors,t]),c=function(){var e=(0,j.Z)((0,g.Z)().mark((function e(){return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||!Boolean(u)){e.next=3;break}return _.Notify.failure(u),e.abrupt("return");case 3:s((function(e){return!e})),o&&n.handleSubmit();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,b.jsxs)(R.Z,{display:"flex",justifyContent:"space-between",children:[(0,b.jsx)(U.Z,{sx:{display:"flex",alignItems:"center"},children:t.charAt(0).toUpperCase()+t.substr(1)}),(0,b.jsx)(T,{variant:"standard",name:t,type:"text",disabled:!o,value:n.values[t],onChange:n.handleChange,onBlur:n.handleBlur,error:n.touched[t]&&Boolean(n.errors[t]),helperText:n.errors[t]}),(0,b.jsx)(I.Z,{onClick:c,disabled:r,children:o?(0,b.jsx)($.Z,{color:"primary"}):(0,b.jsx)(O.Z,{color:"primary"})})]})},V=t(6571),q=t(7792),J=t(7892),G=t.n(J),H=t(8870),K=t(5132),P=(0,h.Z)(K.M)((function(){return{".MuiOutlinedInput-notchedOutline":{border:"none"},".MuiTextField-root":{display:"flex",justifyContent:"center"},".MuiOutlinedInput-root":{width:"200px",borderRadius:"0px"}}})),Q=function(e){var n=e.formik,t=e.fieldName,r=e.isLoading,i=(0,x.useState)(!1),a=(0,w.Z)(i,2),o=a[0],s=a[1],u=x.useState(G()(new Date(n.values[t]))),c=(0,w.Z)(u,2),l=c[0],d=c[1],p=(0,x.useMemo)((function(){return n.errors[t]}),[n.errors,t]),f=function(){var e=(0,j.Z)((0,g.Z)().mark((function e(){return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||!Boolean(p)){e.next=3;break}return _.Notify.failure(p),e.abrupt("return");case 3:s((function(e){return!e})),o&&n.handleSubmit();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,b.jsxs)(H.Z,{display:"flex",justifyContent:"space-between",children:[(0,b.jsx)(U.Z,{sx:{display:"flex",alignItems:"center"},children:t.charAt(0).toUpperCase()+t.substr(1)}),(0,b.jsx)(V._,{dateAdapter:q.y,children:(0,b.jsx)(P,{inputFormat:"DD.MM.YYYY",value:l,onChange:function(e){d(e),n.values[t]=G()(e).format("YYYY-MM-DD")},disabled:!o,renderInput:function(e){return(0,b.jsx)(F.Z,(0,v.Z)({},e))}})}),(0,b.jsx)(I.Z,{onClick:f,disabled:r,children:o?(0,b.jsx)($.Z,{color:"primary"}):(0,b.jsx)(O.Z,{color:"primary"})})]})},W=N.Ry({name:N.Z_().min(1,"Name is too short!").max(70,"Name is too long!").matches(/^[a-zA-Z]+$/,"Only letters!"),email:N.Z_().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Incorrect email address!"),birthdate:N.Z_().matches(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/),phone:N.Z_().matches(/^\+380\d{9}$/,"must have +380 format"),city:N.Z_().matches(/[A-Za-z]+, [A-Za-z]+/,'Format is "region, city"')}),X=function(){var e=(0,k.a)().user,n=(0,D.kD)(),t=(0,w.Z)(n,2),r=t[0],i=t[1],a=i.isLoading,o=i.isError,s=i.error,u=function(e){if(!e)return"0000-00-00";var n=new Date(e);return[n.toLocaleString("default",{year:"numeric"}),n.toLocaleString("default",{month:"2-digit"}),n.toLocaleString("default",{day:"2-digit"})].join("-")},c=(0,x.useMemo)((function(){var n=e.name,t=void 0===n?"":n,r=e.email,i=void 0===r?"":r,a=e.birthday,o=void 0===a?"0000-00-00":a,s=e.phone,c=void 0===s?"":s,l=e.city,d=void 0===l?"":l;return{name:t,email:i,birthday:u(o),phone:c,city:d}}),[e]),l=function(){var e=(0,j.Z)((0,g.Z)().mark((function e(n,t){var i;return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.setSubmitting,e.next=3,r(n).unwrap();case 3:i(!1),o&&(console.log(s),_.Notify.failure(JSON.stringify(s.data)));case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),d=(0,C.TA)({initialValues:(0,v.Z)({},c),enableReinitialize:!0,validationSchema:W,onSubmit:l});return(0,b.jsxs)(M,{children:[(0,b.jsx)(S,{onSubmit:d.handleSubmit,children:Object.entries(d.initialValues).map((function(e){return"birthday"===e[0]?(0,b.jsx)(Q,{formik:d,fieldName:e[0],isLoading:a},e[0]):(0,b.jsx)(E,{formik:d,fieldName:e[0],isLoading:a},e[0])}))}),(0,b.jsx)(Y,{})]})},ee=t(4942),ne=t(5527),te=h.Z.div(u||(u=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 60px;\n"]))),re=(0,h.Z)(ne.Z)((function(e){var n,t=e.theme;return n={display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 16px 10px 16px"},(0,ee.Z)(n,t.breakpoints.up("tablet"),{flexDirection:"row-reverse"}),(0,ee.Z)(n,t.breakpoints.up("desktop"),{flexDirection:"column",width:"410px"}),n})),ie=t(1720),ae=t(3044),oe=h.Z.div(c||(c=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  position: relative;\n  width: 100%;\n"]))),se=(0,h.Z)(ae.Z)(l||(l=(0,m.Z)(["\n  width: 230px;\n  height: 230px;\n  margin-bottom: 30px;\n  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));\n"]))),ue=(0,h.Z)(I.Z)(d||(d=(0,m.Z)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  color: ",";\n"])),(function(e){return e.theme.palette.primary.light})),ce=h.Z.span(p||(p=(0,m.Z)(["\n  font-size: 12px;\n  letter-spacing: 0.04em;\n  color: ",";\n"])),(function(e){return e.theme.palette.common.black})),le=function(){var e=(0,k.a)().user,n=(0,D.lq)(),t=(0,w.Z)(n,2),r=t[0],i=t[1].isLoading,a=function(){var e=(0,j.Z)((0,g.Z)().mark((function e(n){var t;return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.target.files[0],e.next=4,r(t).unwrap();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),A.Notify.failure(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}();return(0,b.jsxs)(oe,{children:[(0,b.jsx)(se,{alt:e.name,src:e.avatarURL}),(0,b.jsxs)(ue,{"aria-label":"upload picture",component:"label",disabled:i,children:[(0,b.jsx)(ie.Z,{}),(0,b.jsx)(ce,{children:"Edit photo"}),(0,b.jsx)("input",{hidden:!0,accept:"image/*",type:"file",onChange:a})]})]})},de=function(){return(0,b.jsxs)(te,{children:[(0,b.jsx)(f.Z,{variant:"h6",marginBottom:"25px",children:"My information:"}),(0,b.jsxs)(re,{children:[(0,b.jsx)(le,{}),(0,b.jsx)(X,{})]})]})},pe=h.Z.div((function(e){var n=e.theme;return(0,ee.Z)({display:"flex",flexDirection:"column",alignItems:"center"},n.breakpoints.up("desktop"),{flexDirection:"row"})})),fe=function(){return(0,b.jsxs)(pe,{children:[(0,b.jsx)(de,{}),(0,b.jsx)(y,{})]})}}}]);
//# sourceMappingURL=771.8fe14e24.chunk.js.map