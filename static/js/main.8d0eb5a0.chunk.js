(this["webpackJsonpcollaborative-note"]=this["webpackJsonpcollaborative-note"]||[]).push([[0],{186:function(e,t,a){},355:function(e,t){},359:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(19),i=a.n(r),s=a(39),o=a.n(s),l=a(53),j=a(9),d=a(24),b=a(190),u=a.n(b),h=(a(185),a(186),a(147)),O=h.a.initializeApp({apiKey:"AIzaSyAMVQX5KUs7J-GGEKOItKkeLT8J0WS0C6Y",authDomain:"collaborative-doc.firebaseapp.com",projectId:"collaborative-doc",storageBucket:"collaborative-doc.appspot.com",messagingSenderId:"493522432245",appId:"1:493522432245:web:0ab116816f5ba3d74fd5bc"}),m=h.a.auth(),p=a(95),x=a(155),f=a(414),v=a(202),g=a.n(v),y=a(188),N=a(4),S=n.a.createContext();function w(){return Object(c.useContext)(S)}var k=Object(y.a)((function(e){return{center:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"500px",marginTop:"25px"},left:{width:"40%",float:"left",marginTop:"25px"},right:{width:"40%",float:"left",border:"1px solid grey",borderRadius:"25px",marginTop:"25px",marginRight:"25px"},icon:{margin:e.spacing(1),width:60,height:60},form:{width:"60%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},divider:{margin:e.spacing(3)}}}));function C(e){var t=e.children,a=Object(c.useState)(),n=Object(j.a)(a,2),r=n[0],i=n[1],s=Object(c.useState)(!1),o=Object(j.a)(s,2),l=o[0],d=o[1],b=Object(c.useState)(""),u=Object(j.a)(b,2),h=u[0],O=u[1],p=Object(c.useState)(!1),x=Object(j.a)(p,2),f=x[0],v=x[1];var g={user:r,openSnackbar:l,setOpenSnackbar:d,message:h,setMessage:O,timeout:function(e){return new Promise((function(t){return setTimeout(t,e)}))}};return Object(c.useEffect)((function(){return m.onAuthStateChanged((function(e){i(e),v(!0)}))}),[]),Object(N.jsx)(S.Provider,{value:g,children:f&&t})}var I=a(201),E=a.n(I),U=a(23),T=a(405),R=a(406),_=a(84),W=a(198),A=a.n(W),D=a(81),P=a(69),B=a.n(P),M=a(428),z=a(36),L=a(196),F=a.n(L),G=a(117),q=a.n(G),K=a(195),V=a.n(K),J=a(207),Y=a(58),H=a(118),Q=a.n(H),X=a(197),Z=a.n(X),$=a(425),ee=a(412),te=a(408),ae=a(409),ce=a(407),ne=a(57),re=a.n(ne),ie=a(368),se=a(199),oe=Object(y.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),le=[{field:"userEmail",headerName:"Email",width:200}];function je(e){var t=e.inNote,a=e.noteId,n=e.inUser,r=e.canShare,i=e.ownerEmail,s=e.sharedUsers,b=e.setSharedUsers,u=oe(),h=Object(d.g)(),f=Object(c.useState)(null),v=Object(j.a)(f,2),g=v[0],y=v[1],S=Object(c.useState)(!1),k=Object(j.a)(S,2),C=k[0],I=k[1],E=Object(c.useState)(!1),W=Object(j.a)(E,2),P=W[0],L=W[1],G=w(),K=G.openSnackbar,H=G.setOpenSnackbar,X=G.message,ne=G.setMessage,je=G.user,de=G.timeout,be=Object(c.useRef)(),ue=Object(c.useState)([]),he=Object(j.a)(ue,2),Oe=he[0],me=he[1],pe=Object(c.useState)(!1),xe=Object(j.a)(pe,2),fe=xe[0],ve=xe[1],ge=function(){I(!1)},ye=function(){L(!1)},Ne=function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=q()(),e.prev=1,ve(!0),e.next=5,O.database().ref("prod_db").child("/".concat(re()(je.email),"-user")).child(a).update({noteId:a});case 5:return e.next=7,O.database().ref("prod_db").child("/".concat(a,"-misc")).update({createdBy:je.email,createdTime:(new Date).getTime(),title:"Untitled"});case 7:e.next=17;break;case 9:return e.prev=9,e.t0=e.catch(1),e.next=13,de(1500);case 13:return ve(!1),H(!0),ne("Error on creating a new Note"),e.abrupt("return");case 17:return e.next=19,de(500);case 19:ve(!1),h.push("/note/".concat(a));case 21:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)(T.a,{position:"static",color:"primary",children:[Object(N.jsx)(M.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:K,message:X,autoHideDuration:3e3,onClose:function(){H(!1),ne("")}}),Object(N.jsxs)(R.a,{children:[Object(N.jsx)(_.a,{edge:"start",className:u.menuButton,color:"inherit","aria-label":"menu",children:Object(N.jsxs)(D.a,{component:z.b,to:"/home",color:"inherit",children:[" ",Object(N.jsx)(V.a,{})]})}),Object(N.jsx)(p.a,{variant:"h6",className:u.title,children:"Collaborative Note"}),!n&&Object(N.jsxs)(D.a,{component:z.b,to:"/login",color:"inherit",children:[" ",Object(N.jsx)(B.a,{})," Log In"]}),n&&!t&&Object(N.jsxs)(D.a,{onClick:Ne,color:"inherit",children:[" ",Object(N.jsx)(F.a,{}),"   Create A New Note"]}),n&&t&&r&&je.email&&je.email===i&&Object(N.jsxs)(D.a,{onClick:function(){I(!0)},color:"inherit",children:[Object(N.jsx)(Q.a,{}),"   Share With Friend"]}),n&&t&&r&&je.email&&je.email===i&&Object(N.jsxs)(D.a,{onClick:function(){L(!0)},color:"inherit",children:[Object(N.jsx)(Z.a,{}),"   Shared Users"]}),n&&t&&r&&je.email!==i&&Object(N.jsxs)(p.a,{variant:"h6",children:["Shared by: ",i]}),n&&Object(N.jsxs)("div",{children:[Object(N.jsx)(D.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){y(e.currentTarget)},color:"inherit",children:Object(N.jsx)(A.a,{color:"inherit"})}),Object(N.jsxs)(J.a,{id:"simple-menu",anchorEl:g,keepMounted:!0,open:Boolean(g),onClose:function(){y(null)},children:[Object(N.jsx)(Y.a,{onClick:function(){y(null),h.push("/profile")},children:"Profile"}),Object(N.jsx)(Y.a,{onClick:function(){y(null);try{m.signOut(),h.push("/login")}catch(e){ne(e.message),H(!0)}},children:"Logout"})]})]}),Object(N.jsxs)($.a,{open:C,onClose:ge,"aria-labelledby":"form-dialog-title",children:[Object(N.jsx)(ce.a,{id:"form-dialog-title",children:"Share Note"}),Object(N.jsxs)(te.a,{children:[Object(N.jsx)(ae.a,{children:"To share, please enter the email"}),Object(N.jsx)(x.a,{autoFocus:!0,margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0,inputRef:be})]}),Object(N.jsxs)(ee.a,{children:[Object(N.jsx)(D.a,{onClick:ge,color:"primary",children:"Cancel"}),Object(N.jsx)(D.a,{onClick:function(){try{var e=be.current.value;je&&je.email===e?(H(!0),ne("Cannot share with yourself")):e&&!s.includes(e)&&(O.database().ref("prod_db").child("/".concat(re()(be.current.value),"-user")).child(a).update({noteId:a}),O.database().ref("prod_db").child("/".concat(a,"-shared")).update({sharedUsers:[].concat(Object(U.a)(s),[{userEmail:e}])}),L())}catch(t){H(!0),ne(t.message)}I(!1)},color:"primary",children:"Share"})]})]}),Object(N.jsxs)($.a,{open:P,onClose:ye,"aria-labelledby":"form-dialog-title",children:[Object(N.jsx)(ce.a,{id:"form-dialog-title",children:"Shared Users"}),Object(N.jsxs)(te.a,{children:[Object(N.jsx)(ae.a,{children:"     These users have access to this note:          "}),Object(N.jsx)("div",{style:{height:300},children:Object(N.jsx)(se.a,{rows:s?Object(U.a)(s):[],getRowId:function(e){return e.userEmail},columns:le,pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!0,disableSelectionOnClick:!0,hideFooter:!0,onSelectionModelChange:function(e){me(Object(U.a)(e))}})})]}),Object(N.jsxs)(ee.a,{children:[Object(N.jsx)(D.a,{onClick:function(){for(var e=[],t=0;t<s.length;t++)Oe.includes(s[t].userEmail)||e.push(s[t]);O.database().ref("prod_db").child("/".concat(a,"-shared")).update({sharedUsers:e});for(var c=0;c<Oe.length;c++){var n=Oe[c];O.database().ref("prod_db").child("/".concat(re()(n),"-user")).child(a).remove()}0===e.length&&b(e),L(!1)},color:"primary",children:"Remove Selected Users"}),Object(N.jsx)(D.a,{onClick:ye,color:"primary",children:"Close"})]})]}),Object(N.jsxs)($.a,{open:fe,onClose:function(){ve(!1)},"aria-labelledby":"form-dialog-title",children:[Object(N.jsx)(ce.a,{id:"form-dialog-title",children:"Creating Note"}),Object(N.jsx)(te.a,{children:Object(N.jsxs)(ae.a,{className:"center",children:["Creating New Note... Please wait...",Object(N.jsx)(ie.a,{})]})}),Object(N.jsx)(ee.a,{})]})]})]})}var de=a(415);function be(){var e=Object(c.useRef)(),t=Object(c.useState)("Untitled"),a=Object(j.a)(t,2),n=a[0],r=a[1],i=Object(c.useState)([]),s=Object(j.a)(i,2),b=s[0],h=s[1],m=Object(c.useState)("NULL"),v=Object(j.a)(m,2),y=v[0],S=v[1],k=Object(d.h)().noteId,C=Object(c.useState)(q()()),I=Object(j.a)(C,1)[0],U=Object(c.useState)(0),T=Object(j.a)(U,2),R=T[0],_=T[1],W=Object(c.createRef)(),A=Object(c.useState)(!1),D=Object(j.a)(A,2),P=D[0],B=D[1],M=w(),z=M.user,L=M.setOpenSnackbar,F=M.setMessage,G=Object(d.g)(),K=Object(c.useState)(!1),V=Object(j.a)(K,2),J=V[0],Y=V[1];Object(c.useEffect)((function(){z||G.push("/login")}),[z]),Object(c.useEffect)((function(){Y(!0),_(0);try{(function(){var t=Object(l.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=0,t.t0=O.database().ref("prod_db").child("/".concat(re()(z.email),"-user")),t.next=4,function(e){var t=e.val();t&&t.noteId===k&&(a=1)};case 4:return t.t1=t.sent,t.next=7,t.t0.once.call(t.t0,"child_added",t.t1);case 7:if(1!==a&&(a=2),_(a),2!==a){t.next=11;break}return t.abrupt("return");case 11:O.database().ref("prod_db").child("/".concat(k,"-content")).on("child_added",(function(t){var a=t.val();e&&e.current&&a.sessionId!==I&&e.current.getEditor().updateContents(a.delta)})),O.database().ref("prod_db").child("/".concat(k,"-misc")).on("value",(function(e){var t=e.val();t&&(r(t.title),S(t.createdBy))})),O.database().ref("prod_db").child("/".concat(k,"-shared")).on("value",(function(e){var t=e.val();t&&h(t.sharedUsers)}));case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}catch(t){}setTimeout((function(){return Y(!1)}),1e3)}),[]);var H=function(e){e&&0!==e.trim().length&&O.database().ref("prod_db").child("/".concat(k,"-misc")).update({title:e})};return Object(N.jsxs)("div",{children:[Object(N.jsx)(je,{inNote:!0,noteId:k,inUser:!0,canShare:1===R,ownerEmail:y,sharedUsers:b,setSharedUsers:h}),0===R&&Object(N.jsxs)("div",{className:"center",children:[Object(N.jsx)(ie.a,{color:"primary",size:60}),Object(N.jsx)(p.a,{variant:"h5",children:"Loading Notes..."})]}),2===R&&Object(N.jsxs)("div",{className:"center",children:[Object(N.jsx)(E.a,{color:"primary",size:60}),Object(N.jsx)(p.a,{variant:"h5",children:"You cannot view this note"})]}),z&&1===R&&Object(N.jsxs)("div",{children:[Object(N.jsx)(x.a,{id:"standard-full-width",placeholder:"   Note Title",fullWidth:!0,value:n,margin:"normal",InputLabelProps:{shrink:!0},inputRef:W,disabled:P||J,readOnly:!0,onChange:function(e){if(0===e.target.value.trim().length)return L(!0),void F("Title cannot be empty");r(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(W.current.blur(),B(!0),H(W.current.value))},onClick:function(){B(!1)},onFocus:function(){B(!1)},onBlur:function(){B(!0),H(W.current.value)},InputProps:{startAdornment:Object(N.jsx)(f.a,{position:"start",children:Object(N.jsx)(g.a,{})})}}),J&&Object(N.jsx)("div",{children:Object(N.jsx)(de.a,{color:"primary",size:80,thickness:10})}),z&&Object(N.jsx)(u.a,{theme:"snow",onChange:function(e,t,a,c){"user"===a&&O.database().ref("prod_db").child("/".concat(k,"-content")).push({sessionId:I,delta:t})},readOnly:J,ref:e})]})]})}var ue=a(418),he=a(420),Oe=a(419),me=a(416),pe=a(203),xe=a.n(pe),fe=a(122),ve=a.n(fe),ge=a(417);function ye(){var e=k();return Object(N.jsx)("div",{children:Object(N.jsx)(me.a,{component:"main",maxWidth:"lg",children:Object(N.jsxs)("div",{className:e.center,children:[Object(N.jsx)(xe.a,{color:"primary",className:e.icon}),Object(N.jsx)(p.a,{component:"h1",variant:"h5",children:"Create a note"}),Object(N.jsx)(ge.a,{variant:"inset",className:e.divider}),Object(N.jsx)(Q.a,{color:"primary",className:e.icon}),Object(N.jsx)(p.a,{component:"h1",variant:"h5",children:"Share with your friends"}),Object(N.jsx)(ge.a,{variant:"inset",className:e.divider}),Object(N.jsx)(ve.a,{color:"primary",className:e.icon}),Object(N.jsx)(p.a,{component:"h1",variant:"h5",children:"Edit and study together"}),Object(N.jsx)(ge.a,{variant:"inset",className:e.divider})]})})})}function Ne(){var e=k(),t=Object(c.useRef)(),a=Object(c.useRef)(),n=Object(c.useRef)(),r=w(),i=r.setOpenSnackbar,s=r.setMessage,j=r.user,b=Object(d.g)();Object(c.useEffect)((function(){j&&b.push("/home")}),[j]);var u=function(){var e=Object(l.a)(o.a.mark((function e(c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),a.current.value===n.current.value){e.next=5;break}return s("password does not match"),i(!0),e.abrupt("return");case 5:return e.prev=5,e.next=8,m.createUserWithEmailAndPassword(t.current.value,a.current.value);case 8:b.push("/home"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(5),s(e.t0.message),i(!0);case 15:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{children:[Object(N.jsx)(je,{}),Object(N.jsx)("div",{className:e.left,children:Object(N.jsx)(ye,{})}),Object(N.jsx)("div",{className:e.right,children:Object(N.jsxs)(me.a,{component:"main",maxWidth:"lg",children:[Object(N.jsx)(ue.a,{}),Object(N.jsxs)("div",{className:e.center,children:[Object(N.jsx)(B.a,{className:e.icon,color:"primary"}),Object(N.jsx)(p.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(N.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(N.jsxs)(Oe.a,{container:!0,spacing:2,children:[Object(N.jsx)(Oe.a,{item:!0,xs:12,children:Object(N.jsx)(x.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",inputRef:t})}),Object(N.jsx)(Oe.a,{item:!0,xs:12,children:Object(N.jsx)(x.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:a})}),Object(N.jsx)(Oe.a,{item:!0,xs:12,children:Object(N.jsx)(x.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password2",label:"Confirm Password",type:"password",id:"password2",inputRef:n})})]}),Object(N.jsx)(D.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:u,children:"Sign Up"}),Object(N.jsx)(Oe.a,{container:!0,justifyContent:"flex-end",children:Object(N.jsx)(Oe.a,{item:!0,children:Object(N.jsx)(he.a,{href:"#/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})})]})}function Se(){var e=k(),t=Object(c.useRef)(),a=Object(c.useRef)(),n=Object(d.g)(),r=w(),i=r.setOpenSnackbar,s=r.setMessage,j=r.user;Object(c.useEffect)((function(){j&&n.push("/home")}),[j]);var b=function(){var e=Object(l.a)(o.a.mark((function e(c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,e.next=4,m.signInWithEmailAndPassword(t.current.value,a.current.value);case 4:n.push("/home"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),s(e.t0.message),i(!0);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{children:[Object(N.jsx)(je,{}),Object(N.jsx)("div",{className:e.left,children:Object(N.jsx)(ye,{})}),Object(N.jsx)("div",{className:e.right,children:Object(N.jsx)(me.a,{component:"main",maxWidth:"lg",children:Object(N.jsxs)("div",{className:e.center,children:[Object(N.jsx)(B.a,{className:e.icon,color:"primary"}),Object(N.jsx)(p.a,{component:"h1",variant:"h5",children:"Login"}),Object(N.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(N.jsxs)(Oe.a,{container:!0,spacing:2,children:[Object(N.jsx)(Oe.a,{item:!0,xs:12,children:Object(N.jsx)(x.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",inputRef:t})}),Object(N.jsx)(Oe.a,{item:!0,xs:12,children:Object(N.jsx)(x.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:a})})]}),Object(N.jsx)(D.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:b,children:"Log In"}),Object(N.jsx)(Oe.a,{container:!0,justifyContent:"flex-end",children:Object(N.jsx)(Oe.a,{item:!0,children:Object(N.jsx)(he.a,{href:"#/signup",variant:"body2",children:"Don't have an account? Sign up"})})})]})]})})})]})}var we=a(80),ke=a(424),Ce=a(145),Ie=a.n(Ce),Ee=a(421),Ue=a(422),Te=a(94),Re=a.n(Te),_e=a(204),We=a.n(_e),Ae=a(423),De=a(146),Pe=a.n(De),Be=Object(y.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"left",verticalAlign:"middle",color:e.palette.text.secondary,fontSize:"30px"},relativeDiv:{position:"relative"},leftIcon:{flexGrow:1},rightIcon:{display:"block",position:"absolute",top:"-7px",right:"-10px"},icon:{color:"rgb(48, 128, 188)"}}}));var Me=function(){var e=w(),t=e.user,a=e.setMessage,n=e.setOpenSnackbar,r=Be(),i=Object(d.g)(),s=Object(c.useState)([]),b=Object(j.a)(s,2),u=b[0],h=b[1],m=Object(c.useState)(!1),x=Object(j.a)(m,2),f=x[0],v=x[1],g=Object(c.useState)(!1),y=Object(j.a)(g,2),S=y[0],k=y[1],C=Object(c.useState)(""),I=Object(j.a)(C,2),E=I[0],T=I[1],R=Object(c.useState)(""),_=Object(j.a)(R,2),W=_[0],A=_[1],P=Object(c.useState)(!1),B=Object(j.a)(P,2),M=B[0],L=B[1];Object(c.useEffect)((function(){t?(v(!0),O.database().ref("prod_db").child("/".concat(re()(t.email),"-user")).on("child_added",(function(e){var t=e.val();t&&O.database().ref("prod_db").child("/".concat(t.noteId,"-misc")).once("value",(function(e){var a=e.val();u.some((function(e){return e.noteId===t.noteId}))||h((function(e){return[].concat(Object(U.a)(e),[Object(we.a)(Object(we.a)({},a),{},{noteId:t.noteId})]).sort((function(e,t){return e.createdTime<t.createdTime}))}))}))})),setTimeout((function(){return v(!1)}),1e3)):i.push("/login")}),[t]);var F=function(e,t,a){var c=arguments.length>3&&void 0!==arguments[3]&&arguments[3];k(e),T(t),A(a),L(c)},G=function(){var e=Object(l.a)(o.a.mark((function e(c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.database().ref("prod_db").child("/".concat(re()(t.email),"-user")).child(W).remove();case 3:c&&O.database().ref("prod_db").child("/".concat(W,"-shared")).once("value",(function(e){var t=e.val();if(t&&t.sharedUsers)for(var a=0;a<t.sharedUsers.length;a++){var c=t.sharedUsers[a].userEmail;O.database().ref("prod_db").child("/".concat(re()(c),"-user")).child(W).remove()}})),e.next=12;break;case 6:return e.prev=6,e.t0=e.catch(0),n(!0),a(e.t0.message),F(!1,"",""),e.abrupt("return");case 12:h((function(e){return Object(U.a)(e).filter((function(e){return e.noteId!==W})).sort((function(e,t){return e.createdTime<t.createdTime}))})),F(!1,"","");case 14:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{children:[Object(N.jsx)(je,{inUser:!0}),t&&f&&Object(N.jsxs)("div",{className:"center",children:[Object(N.jsx)(ie.a,{color:"primary",size:60}),Object(N.jsx)(p.a,{variant:"h5",children:"Loading Notes..."})]}),t&&!f&&Object(N.jsxs)(ke.a,{m:2,pt:3,children:[Object(N.jsxs)(ke.a,{m:2,pt:3,children:[Object(N.jsx)(p.a,{variant:"h4",className:"center",children:Object(N.jsxs)("div",{children:[Object(N.jsx)(We.a,{style:{fontSize:"32px"},color:"primary"})," My Notes"]})}),Object(N.jsx)(ge.a,{variant:"middle"})]}),0!==u.length&&u.some((function(e){return e.createdBy===t.email}))?Object(N.jsx)(Oe.a,{container:!0,spacing:3,children:Object(U.a)(u).map((function(e,a){return e.createdBy===t.email&&Object(N.jsx)(Oe.a,{item:!0,xs:4,children:Object(N.jsx)(Ee.a,{className:r.root,children:Object(N.jsxs)(Ue.a,{className:r.paper,children:[Object(N.jsxs)(p.a,{className:r.relativeDiv,children:[Object(N.jsx)(Ie.a,{className:r.leftIcon,color:"primary"}),Object(N.jsx)(D.a,{onClick:function(){F(!0,e.title,e.noteId,!0)},className:r.rightIcon,children:Object(N.jsx)(Pe.a,{color:"primary"})})]}),Object(N.jsxs)(Ae.a,{component:z.b,to:"/note/".concat(e.noteId),children:[Object(N.jsxs)(p.a,{variant:"h5",children:[" ",e.title]}),Object(N.jsxs)(p.a,{variant:"body1",children:[" "," "]}),Object(N.jsxs)(p.a,{variant:"caption",children:[" ",new Date(e.createdTime).toString()]})]})]})})},e.noteId)}))}):Object(N.jsxs)("div",{className:"center",children:[Object(N.jsx)(Re.a,{color:"primary"}),Object(N.jsx)(p.a,{variant:"h5",children:Object(N.jsx)("div",{children:"Looks like you haven't added any notes."})})]}),Object(N.jsxs)(ke.a,{m:2,pt:3,marginTop:10,children:[Object(N.jsxs)(p.a,{className:"center",variant:"h4",children:[" ",Object(N.jsxs)("div",{children:[Object(N.jsx)(ve.a,{style:{fontSize:"32px"},color:"primary"}),"  Notes From Friends "]})]}),Object(N.jsx)(ge.a,{variant:"middle"})]}),0!==u.length&&u.some((function(e){return e.createdBy!==t.email}))?Object(N.jsx)(Oe.a,{container:!0,spacing:3,children:Object(U.a)(u).map((function(e,a){return e.createdBy!==t.email&&Object(N.jsx)(Oe.a,{item:!0,xs:4,children:Object(N.jsx)(Ee.a,{className:r.root,children:Object(N.jsxs)(Ue.a,{className:r.paper,children:[Object(N.jsxs)(p.a,{className:r.relativeDiv,children:[Object(N.jsx)(Ie.a,{className:r.leftIcon,color:"primary"}),Object(N.jsx)(D.a,{onClick:function(){F(!0,e.title,e.noteId)},className:r.rightIcon,children:Object(N.jsx)(Pe.a,{color:"primary"})})]}),Object(N.jsxs)(Ae.a,{component:z.b,to:"/note/".concat(e.noteId),children:[Object(N.jsxs)(p.a,{variant:"h5",children:[" ",e.title]}),Object(N.jsxs)(p.a,{variant:"body1",children:[" Shared By: ",e.createdBy]}),Object(N.jsxs)(p.a,{variant:"caption",children:[" ",new Date(e.createdTime).toString()]})]})]})})},e.noteId)}))}):Object(N.jsxs)("div",{className:"center",children:[Object(N.jsx)(Re.a,{color:"primary"}),Object(N.jsx)(p.a,{variant:"h5",children:"Nothing found. Ask your friends to share a note!"})]})]}),Object(N.jsxs)($.a,{open:S,onClose:function(){F(!1,"","")},"aria-labelledby":"form-dialog-title",children:[Object(N.jsx)(ce.a,{id:"form-dialog-title",children:"Deleting Note"}),Object(N.jsx)(te.a,{children:Object(N.jsxs)(ae.a,{className:"center",children:["Delete ",E," ?"]})}),Object(N.jsxs)(ee.a,{children:[Object(N.jsx)(D.a,{onClick:function(){F(!1,"","")},color:"primary",children:"Cancel"}),Object(N.jsx)(D.a,{onClick:function(){G(M)},color:"primary",children:"Delete"})]})]})]})};var ze=a(205),Le=a.n(ze);var Fe=function(){var e=w().user,t=Object(d.g)();return Object(c.useEffect)((function(){e||t.push("/login")}),[e]),Object(N.jsxs)("div",{children:[Object(N.jsx)(je,{inUser:!0}),Object(N.jsx)(Ee.a,{className:"center",children:Object(N.jsxs)(p.a,{className:"center",children:[" ",Object(N.jsx)(B.a,{color:"primary",style:{fontSize:"32px"}})," My Profile"]})}),Object(N.jsx)(ke.a,{m:2,pt:3,children:Object(N.jsxs)(p.a,{className:"center",children:[" ",Object(N.jsxs)("div",{children:[Object(N.jsx)(Le.a,{color:"primary"}),"   ",e.email," "]})]})}),Object(N.jsx)(ke.a,{m:2,pt:3,children:Object(N.jsxs)(p.a,{className:"center",children:[" ",Object(N.jsxs)("div",{children:[" ",Object(N.jsx)(Re.a,{color:"primary"}),"   More to come... "]})]})})]})},Ge=a(206),qe=["comp"];var Ke=function(e){e.comp;var t=Object(Ge.a)(e,qe),a=w().user;return Object(N.jsx)(d.b,Object(we.a)(Object(we.a)({},t),{},{render:function(e){a?Object(we.a)({},e):d.a}}))};var Ve=function(){return console.log("Version 1.1.1"),Object(N.jsx)(C,{children:Object(N.jsx)(z.a,{children:Object(N.jsxs)(d.d,{children:[Object(N.jsx)(Ke,{exact:!0,path:"/",children:Object(N.jsx)(d.a,{to:"/home"})}),Object(N.jsx)(Ke,{exact:!0,path:"/signup",children:Object(N.jsx)(Ne,{})}),Object(N.jsx)(Ke,{exact:!0,path:"/login",children:Object(N.jsx)(Se,{})}),Object(N.jsx)(Ke,{exact:!0,path:"/home",children:Object(N.jsx)(Me,{})}),Object(N.jsx)(Ke,{exact:!0,path:"/profile",children:Object(N.jsx)(Fe,{})}),Object(N.jsx)(Ke,{path:"/note/:noteId",children:Object(N.jsx)(be,{})})]})})})},Je=a(75),Ye=a(413),He="rgb(48, 128, 188)",Qe=Object(Je.b)({palette:{primary:{light:He,main:He,dark:He},secondary:{main:He}},typography:{useNextVariants:!0}});i.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(Ye.a,{theme:Qe,children:Object(N.jsx)(Ve,{})})}),document.getElementById("root"))}},[[359,1,2]]]);
//# sourceMappingURL=main.8d0eb5a0.chunk.js.map