(this["webpackJsonpcollaborative-note"]=this["webpackJsonpcollaborative-note"]||[]).push([[0],{186:function(e,t,a){},355:function(e,t){},359:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(19),s=a.n(r),i=a(39),o=a.n(i),l=a(53),j=a(9),d=a(24),b=a(190),u=a.n(b),h=(a(185),a(186),a(147)),O=h.a.initializeApp({apiKey:"AIzaSyAMVQX5KUs7J-GGEKOItKkeLT8J0WS0C6Y",authDomain:"collaborative-doc.firebaseapp.com",projectId:"collaborative-doc",storageBucket:"collaborative-doc.appspot.com",messagingSenderId:"493522432245",appId:"1:493522432245:web:0ab116816f5ba3d74fd5bc"}),m=h.a.auth(),x=a(95),p=a(155),f=a(414),v=a(202),g=a.n(v),y=a(188),N=a(4),S=n.a.createContext();function w(){return Object(c.useContext)(S)}var k=Object(y.a)((function(e){return{center:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"500px",marginTop:"25px"},left:{width:"40%",float:"left",marginTop:"25px"},right:{width:"40%",float:"left",border:"1px solid grey",borderRadius:"25px",marginTop:"25px",marginRight:"25px"},icon:{margin:e.spacing(1),width:60,height:60},form:{width:"60%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},divider:{margin:e.spacing(3)}}}));function C(e){var t=e.children,a=Object(c.useState)(),n=Object(j.a)(a,2),r=n[0],s=n[1],i=Object(c.useState)(!1),o=Object(j.a)(i,2),l=o[0],d=o[1],b=Object(c.useState)(""),u=Object(j.a)(b,2),h=u[0],O=u[1],x=Object(c.useState)(!1),p=Object(j.a)(x,2),f=p[0],v=p[1];var g={user:r,openSnackbar:l,setOpenSnackbar:d,message:h,setMessage:O,timeout:function(e){return new Promise((function(t){return setTimeout(t,e)}))}};return Object(c.useEffect)((function(){return console.log("CC"),m.onAuthStateChanged((function(e){s(e),v(!0)}))}),[]),Object(N.jsx)(S.Provider,{value:g,children:f&&t})}var I=a(201),E=a.n(I),U=a(23),T=a(405),R=a(406),W=a(84),A=a(198),D=a.n(A),P=a(81),B=a(69),M=a.n(B),z=a(428),L=a(36),F=a(196),G=a.n(F),q=a(117),K=a.n(q),J=a(195),V=a.n(J),_=a(207),Y=a(58),H=a(118),Q=a.n(H),X=a(197),Z=a.n(X),$=a(425),ee=a(412),te=a(408),ae=a(409),ce=a(407),ne=a(57),re=a.n(ne),se=a(368),ie=a(199),oe=Object(y.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),le=[{field:"userEmail",headerName:"Email",width:200}];function je(e){var t=e.inNote,a=e.noteId,n=e.inUser,r=e.canShare,s=e.ownerEmail,i=e.sharedUsers,b=e.setSharedUsers,u=oe(),h=Object(d.g)(),f=Object(c.useState)(null),v=Object(j.a)(f,2),g=v[0],y=v[1],S=Object(c.useState)(!1),k=Object(j.a)(S,2),C=k[0],I=k[1],E=Object(c.useState)(!1),A=Object(j.a)(E,2),B=A[0],F=A[1],q=w(),J=q.openSnackbar,H=q.setOpenSnackbar,X=q.message,ne=q.setMessage,je=q.user,de=q.timeout,be=Object(c.useRef)(),ue=Object(c.useState)([]),he=Object(j.a)(ue,2),Oe=he[0],me=he[1],xe=Object(c.useState)(!1),pe=Object(j.a)(xe,2),fe=pe[0],ve=pe[1],ge=function(){I(!1)},ye=function(){F(!1)},Ne=function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=K()(),e.prev=1,ve(!0),e.next=5,O.database().ref("testdb1").child("/".concat(re()(je.email),"-user")).child(a).update({noteId:a});case 5:return e.next=7,O.database().ref("testdb1").child("/".concat(a,"-misc")).update({createdBy:je.email,createdTime:(new Date).getTime(),title:"Untitled"});case 7:e.next=17;break;case 9:return e.prev=9,e.t0=e.catch(1),e.next=13,de(1500);case 13:return ve(!1),H(!0),ne("Error on creating a new Note"),e.abrupt("return");case 17:return e.next=19,de(500);case 19:ve(!1),h.push("/note/".concat(a));case 21:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)(T.a,{position:"static",color:"primary",children:[Object(N.jsx)(z.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:J,message:X,autoHideDuration:3e3,onClose:function(){H(!1),ne("")}}),Object(N.jsxs)(R.a,{children:[Object(N.jsx)(W.a,{edge:"start",className:u.menuButton,color:"inherit","aria-label":"menu",children:Object(N.jsxs)(P.a,{component:L.b,to:"/home",color:"inherit",children:[" ",Object(N.jsx)(V.a,{})]})}),Object(N.jsx)(x.a,{variant:"h6",className:u.title,children:"Collaborative Note"}),!n&&Object(N.jsxs)(P.a,{component:L.b,to:"/login",color:"inherit",children:[" ",Object(N.jsx)(M.a,{})," Log In"]}),n&&!t&&Object(N.jsxs)(P.a,{onClick:Ne,color:"inherit",children:[" ",Object(N.jsx)(G.a,{}),"   Create A New Note"]}),n&&t&&r&&je.email&&je.email===s&&Object(N.jsxs)(P.a,{onClick:function(){I(!0)},color:"inherit",children:[Object(N.jsx)(Q.a,{}),"   Share With Friend"]}),n&&t&&r&&je.email&&je.email===s&&Object(N.jsxs)(P.a,{onClick:function(){F(!0)},color:"inherit",children:[Object(N.jsx)(Z.a,{}),"   Shared Users"]}),n&&t&&r&&je.email!==s&&Object(N.jsxs)(x.a,{variant:"h6",children:["Shared by: ",s]}),n&&Object(N.jsxs)("div",{children:[Object(N.jsx)(P.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){y(e.currentTarget)},color:"inherit",children:Object(N.jsx)(D.a,{color:"inherit"})}),Object(N.jsxs)(_.a,{id:"simple-menu",anchorEl:g,keepMounted:!0,open:Boolean(g),onClose:function(){y(null)},children:[Object(N.jsx)(Y.a,{onClick:function(){y(null),h.push("/profile")},children:"Profile"}),Object(N.jsx)(Y.a,{onClick:function(){y(null);try{m.signOut(),h.push("/login")}catch(e){ne(e.message),H(!0)}},children:"Logout"})]})]}),Object(N.jsxs)($.a,{open:C,onClose:ge,"aria-labelledby":"form-dialog-title",children:[Object(N.jsx)(ce.a,{id:"form-dialog-title",children:"Share Note"}),Object(N.jsxs)(te.a,{children:[Object(N.jsx)(ae.a,{children:"To share, please enter the email"}),Object(N.jsx)(p.a,{autoFocus:!0,margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0,inputRef:be})]}),Object(N.jsxs)(ee.a,{children:[Object(N.jsx)(P.a,{onClick:ge,color:"primary",children:"Cancel"}),Object(N.jsx)(P.a,{onClick:function(){try{var e=be.current.value;e&&!i.includes(e)&&(O.database().ref("testdb1").child("/".concat(re()(be.current.value),"-user")).child(a).update({noteId:a}),O.database().ref("testdb1").child("/".concat(a,"-shared")).update({sharedUsers:[].concat(Object(U.a)(i),[{userEmail:e}])}),F())}catch(t){H(!0),ne(t.message)}I(!1)},color:"primary",children:"Share"})]})]}),Object(N.jsxs)($.a,{open:B,onClose:ye,"aria-labelledby":"form-dialog-title",children:[Object(N.jsx)(ce.a,{id:"form-dialog-title",children:"Shared Users"}),Object(N.jsxs)(te.a,{children:[Object(N.jsx)(ae.a,{children:"     These users have access to this note:          "}),Object(N.jsx)("div",{style:{height:300},children:Object(N.jsx)(ie.a,{rows:i?Object(U.a)(i):[],getRowId:function(e){return e.userEmail},columns:le,pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!0,disableSelectionOnClick:!0,hideFooter:!0,onSelectionModelChange:function(e){me(Object(U.a)(e))}})})]}),Object(N.jsxs)(ee.a,{children:[Object(N.jsx)(P.a,{onClick:function(){for(var e=[],t=0;t<i.length;t++)Oe.includes(i[t].userEmail)||e.push(i[t]);O.database().ref("testdb1").child("/".concat(a,"-shared")).update({sharedUsers:e});for(var c=0;c<Oe.length;c++){var n=Oe[c];O.database().ref("testdb1").child("/".concat(re()(n),"-user")).child(a).remove()}0===e.length&&b(e),F(!1)},color:"primary",children:"Remove Selected Users"}),Object(N.jsx)(P.a,{onClick:ye,color:"primary",children:"Close"})]})]}),Object(N.jsxs)($.a,{open:fe,onClose:function(){ve(!1)},"aria-labelledby":"form-dialog-title",children:[Object(N.jsx)(ce.a,{id:"form-dialog-title",children:"Creating Note"}),Object(N.jsx)(te.a,{children:Object(N.jsxs)(ae.a,{className:"center",children:["Creating New Note... Please wait...",Object(N.jsx)(se.a,{})]})}),Object(N.jsx)(ee.a,{})]})]})]})}var de=a(415);function be(){var e=Object(c.useRef)(),t=Object(c.useState)("Untitled"),a=Object(j.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)([]),i=Object(j.a)(s,2),b=i[0],h=i[1],m=Object(c.useState)("NULL"),v=Object(j.a)(m,2),y=v[0],S=v[1],k=Object(d.h)().noteId,C=Object(c.useState)(K()()),I=Object(j.a)(C,1)[0],U=Object(c.useState)(0),T=Object(j.a)(U,2),R=T[0],W=T[1],A=Object(c.createRef)(),D=Object(c.useState)(!1),P=Object(j.a)(D,2),B=P[0],M=P[1],z=w(),L=z.user,F=z.setOpenSnackbar,G=z.setMessage,q=Object(d.g)(),J=Object(c.useState)(!1),V=Object(j.a)(J,2),_=V[0],Y=V[1];Object(c.useEffect)((function(){L||q.push("/login")}),[L]),Object(c.useEffect)((function(){Y(!0),W(0);try{(function(){var t=Object(l.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=0,t.t0=O.database().ref("testdb1").child("/".concat(re()(L.email),"-user")),t.next=4,function(e){var t=e.val();t&&t.noteId===k&&(a=1)};case 4:return t.t1=t.sent,t.next=7,t.t0.once.call(t.t0,"child_added",t.t1);case 7:if(1!==a&&(a=2),W(a),2!==a){t.next=11;break}return t.abrupt("return");case 11:O.database().ref("testdb1").child("/".concat(k,"-content")).on("child_added",(function(t){var a=t.val();e&&e.current&&a.sessionId!==I&&e.current.getEditor().updateContents(a.delta)})),O.database().ref("testdb1").child("/".concat(k,"-misc")).on("value",(function(e){var t=e.val();t&&(r(t.title),S(t.createdBy))})),O.database().ref("testdb1").child("/".concat(k,"-shared")).on("value",(function(e){var t=e.val();t&&h(t.sharedUsers)}));case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}catch(t){}setTimeout((function(){return Y(!1)}),1e3)}),[]);var H=function(e){e&&0!==e.trim().length&&O.database().ref("testdb1").child("/".concat(k,"-misc")).update({title:e})};return Object(N.jsxs)("div",{children:[Object(N.jsx)(je,{inNote:!0,noteId:k,inUser:!0,canShare:1===R,ownerEmail:y,sharedUsers:b,setSharedUsers:h}),0===R&&Object(N.jsxs)("div",{className:"center",children:[Object(N.jsx)(se.a,{color:"primary",size:60}),Object(N.jsx)(x.a,{variant:"h5",children:"Loading Notes..."})]}),2===R&&Object(N.jsxs)("div",{className:"center",children:[Object(N.jsx)(E.a,{color:"primary",size:60}),Object(N.jsx)(x.a,{variant:"h5",children:"You cannot view this note"})]}),L&&1===R&&Object(N.jsxs)("div",{children:[Object(N.jsx)(p.a,{id:"standard-full-width",placeholder:"   Note Title",fullWidth:!0,value:n,margin:"normal",InputLabelProps:{shrink:!0},inputRef:A,disabled:B||_,readOnly:!0,onChange:function(e){if(0===e.target.value.trim().length)return F(!0),void G("Title cannot be empty");r(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(A.current.blur(),M(!0),H(A.current.value))},onClick:function(){M(!1)},onFocus:function(){M(!1)},onBlur:function(){M(!0),H(A.current.value)},InputProps:{startAdornment:Object(N.jsx)(f.a,{position:"start",children:Object(N.jsx)(g.a,{})})}}),_&&Object(N.jsx)("div",{children:Object(N.jsx)(de.a,{color:"primary",size:80,thickness:10})}),L&&Object(N.jsx)(u.a,{theme:"snow",onChange:function(e,t,a,c){"user"===a&&O.database().ref("testdb1").child("/".concat(k,"-content")).push({sessionId:I,delta:t})},readOnly:_,ref:e})]})]})}var ue=a(418),he=a(420),Oe=a(419),me=a(416),xe=a(203),pe=a.n(xe),fe=a(122),ve=a.n(fe),ge=a(417);function ye(){var e=k();return Object(N.jsx)("div",{children:Object(N.jsx)(me.a,{component:"main",maxWidth:"lg",children:Object(N.jsxs)("div",{className:e.center,children:[Object(N.jsx)(pe.a,{color:"primary",className:e.icon}),Object(N.jsx)(x.a,{component:"h1",variant:"h5",children:"Create a note"}),Object(N.jsx)(ge.a,{variant:"inset",className:e.divider}),Object(N.jsx)(Q.a,{color:"primary",className:e.icon}),Object(N.jsx)(x.a,{component:"h1",variant:"h5",children:"Share with someone"}),Object(N.jsx)(ge.a,{variant:"inset",className:e.divider}),Object(N.jsx)(ve.a,{color:"primary",className:e.icon}),Object(N.jsx)(x.a,{component:"h1",variant:"h5",children:"Edit and study together"}),Object(N.jsx)(ge.a,{variant:"inset",className:e.divider})]})})})}function Ne(){var e=k(),t=Object(c.useRef)(),a=Object(c.useRef)(),n=Object(c.useRef)(),r=w(),s=r.setOpenSnackbar,i=r.setMessage,j=r.user,b=Object(d.g)();Object(c.useEffect)((function(){j&&b.push("/home")}),[j]);var u=function(){var e=Object(l.a)(o.a.mark((function e(c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),a.current.value===n.current.value){e.next=5;break}return i("password does not match"),s(!0),e.abrupt("return");case 5:return e.prev=5,e.next=8,m.createUserWithEmailAndPassword(t.current.value,a.current.value);case 8:b.push("/home"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(5),i(e.t0.message),s(!0);case 15:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{children:[Object(N.jsx)(je,{}),Object(N.jsx)("div",{className:e.left,children:Object(N.jsx)(ye,{})}),Object(N.jsx)("div",{className:e.right,children:Object(N.jsxs)(me.a,{component:"main",maxWidth:"lg",children:[Object(N.jsx)(ue.a,{}),Object(N.jsxs)("div",{className:e.center,children:[Object(N.jsx)(M.a,{className:e.icon,color:"primary"}),Object(N.jsx)(x.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(N.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(N.jsxs)(Oe.a,{container:!0,spacing:2,children:[Object(N.jsx)(Oe.a,{item:!0,xs:12,children:Object(N.jsx)(p.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",inputRef:t})}),Object(N.jsx)(Oe.a,{item:!0,xs:12,children:Object(N.jsx)(p.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:a})}),Object(N.jsx)(Oe.a,{item:!0,xs:12,children:Object(N.jsx)(p.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password2",label:"Confirm Password",type:"password",id:"password2",inputRef:n})})]}),Object(N.jsx)(P.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:u,children:"Sign Up"}),Object(N.jsx)(Oe.a,{container:!0,justifyContent:"flex-end",children:Object(N.jsx)(Oe.a,{item:!0,children:Object(N.jsx)(he.a,{href:"#/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})})]})}function Se(){var e=k(),t=Object(c.useRef)(),a=Object(c.useRef)(),n=Object(d.g)(),r=w(),s=r.setOpenSnackbar,i=r.setMessage,j=r.user;Object(c.useEffect)((function(){j&&n.push("/home")}),[j]);var b=function(){var e=Object(l.a)(o.a.mark((function e(c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,e.next=4,m.signInWithEmailAndPassword(t.current.value,a.current.value);case 4:n.push("/home"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),i(e.t0.message),s(!0);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{children:[Object(N.jsx)(je,{}),Object(N.jsx)("div",{className:e.left,children:Object(N.jsx)(ye,{})}),Object(N.jsx)("div",{className:e.right,children:Object(N.jsx)(me.a,{component:"main",maxWidth:"lg",children:Object(N.jsxs)("div",{className:e.center,children:[Object(N.jsx)(M.a,{className:e.icon,color:"primary"}),Object(N.jsx)(x.a,{component:"h1",variant:"h5",children:"Login"}),Object(N.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(N.jsxs)(Oe.a,{container:!0,spacing:2,children:[Object(N.jsx)(Oe.a,{item:!0,xs:12,children:Object(N.jsx)(p.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",inputRef:t})}),Object(N.jsx)(Oe.a,{item:!0,xs:12,children:Object(N.jsx)(p.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:a})})]}),Object(N.jsx)(P.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:b,children:"Log In"}),Object(N.jsx)(Oe.a,{container:!0,justifyContent:"flex-end",children:Object(N.jsx)(Oe.a,{item:!0,children:Object(N.jsx)(he.a,{href:"#/signup",variant:"body2",children:"Don't have an account? Sign up"})})})]})]})})})]})}var we=a(80),ke=a(424),Ce=a(145),Ie=a.n(Ce),Ee=a(421),Ue=a(422),Te=a(94),Re=a.n(Te),We=a(204),Ae=a.n(We),De=a(423),Pe=a(146),Be=a.n(Pe),Me=Object(y.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"left",verticalAlign:"middle",color:e.palette.text.secondary,fontSize:"30px"},relativeDiv:{position:"relative"},leftIcon:{flexGrow:1},rightIcon:{display:"block",position:"absolute",top:"-7px",right:"-10px"},icon:{color:"rgb(48, 128, 188)"}}}));var ze=function(){var e=w(),t=e.user,a=e.setMessage,n=e.setOpenSnackbar,r=Me(),s=Object(d.g)(),i=Object(c.useState)([]),b=Object(j.a)(i,2),u=b[0],h=b[1],m=Object(c.useState)(!1),p=Object(j.a)(m,2),f=p[0],v=p[1],g=Object(c.useState)(!1),y=Object(j.a)(g,2),S=y[0],k=y[1],C=Object(c.useState)(""),I=Object(j.a)(C,2),E=I[0],T=I[1],R=Object(c.useState)(""),W=Object(j.a)(R,2),A=W[0],D=W[1],B=Object(c.useState)(!1),M=Object(j.a)(B,2),z=M[0],F=M[1];Object(c.useEffect)((function(){t?(v(!0),O.database().ref("testdb1").child("/".concat(re()(t.email),"-user")).on("child_added",(function(e){var t=e.val();t&&O.database().ref("testdb1").child("/".concat(t.noteId,"-misc")).once("value",(function(e){var a=e.val();u.some((function(e){return e.noteId===t.noteId}))||h((function(e){return[].concat(Object(U.a)(e),[Object(we.a)(Object(we.a)({},a),{},{noteId:t.noteId})]).sort((function(e,t){return e.createdTime<t.createdTime}))}))}))})),setTimeout((function(){return v(!1)}),1e3)):s.push("/login")}),[t]);var G=function(e,t,a){var c=arguments.length>3&&void 0!==arguments[3]&&arguments[3];k(e),T(t),D(a),F(c)},q=function(){var e=Object(l.a)(o.a.mark((function e(c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.database().ref("testdb1").child("/".concat(re()(t.email),"-user")).child(A).remove();case 3:c&&O.database().ref("testdb1").child("/".concat(A,"-shared")).once("value",(function(e){var t=e.val();if(t&&t.sharedUsers)for(var a=0;a<t.sharedUsers.length;a++){var c=t.sharedUsers[a].userEmail;O.database().ref("testdb1").child("/".concat(re()(c),"-user")).child(A).remove()}})),e.next=12;break;case 6:return e.prev=6,e.t0=e.catch(0),n(!0),a(e.t0.message),G(!1,"",""),e.abrupt("return");case 12:h((function(e){return Object(U.a)(e).filter((function(e){return e.noteId!==A})).sort((function(e,t){return e.createdTime<t.createdTime}))})),G(!1,"","");case 14:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{children:[Object(N.jsx)(je,{inUser:!0}),t&&f&&Object(N.jsxs)("div",{className:"center",children:[Object(N.jsx)(se.a,{color:"primary",size:60}),Object(N.jsx)(x.a,{variant:"h5",children:"Loading Notes..."})]}),t&&!f&&Object(N.jsxs)(ke.a,{m:2,pt:3,children:[Object(N.jsxs)(ke.a,{m:2,pt:3,children:[Object(N.jsx)(x.a,{variant:"h4",className:"center",children:Object(N.jsxs)("div",{children:[Object(N.jsx)(Ae.a,{style:{fontSize:"32px"},color:"primary"})," My Notes"]})}),Object(N.jsx)(ge.a,{variant:"middle"})]}),0!==u.length&&u.some((function(e){return e.createdBy===t.email}))?Object(N.jsx)(Oe.a,{container:!0,spacing:3,children:Object(U.a)(u).map((function(e,a){return e.createdBy===t.email&&Object(N.jsx)(Oe.a,{item:!0,xs:4,children:Object(N.jsx)(Ee.a,{className:r.root,children:Object(N.jsxs)(Ue.a,{className:r.paper,children:[Object(N.jsxs)(x.a,{className:r.relativeDiv,children:[Object(N.jsx)(Ie.a,{className:r.leftIcon,color:"primary"}),Object(N.jsx)(P.a,{onClick:function(){G(!0,e.title,e.noteId,!0)},className:r.rightIcon,children:Object(N.jsx)(Be.a,{color:"primary"})})]}),Object(N.jsxs)(De.a,{component:L.b,to:"/note/".concat(e.noteId),children:[Object(N.jsxs)(x.a,{variant:"h5",children:[" ",e.title]}),Object(N.jsxs)(x.a,{variant:"body1",children:[" "," "]}),Object(N.jsxs)(x.a,{variant:"caption",children:[" ",new Date(e.createdTime).toString()]})]})]})})},e.noteId)}))}):Object(N.jsxs)("div",{className:"center",children:[Object(N.jsx)(Re.a,{color:"primary"}),Object(N.jsx)(x.a,{variant:"h5",children:Object(N.jsx)("div",{children:"Looks like you haven't added any notes."})})]}),Object(N.jsxs)(ke.a,{m:2,pt:3,marginTop:10,children:[Object(N.jsxs)(x.a,{className:"center",variant:"h4",children:[" ",Object(N.jsxs)("div",{children:[Object(N.jsx)(ve.a,{style:{fontSize:"32px"},color:"primary"}),"  Notes From Friends "]})]}),Object(N.jsx)(ge.a,{variant:"middle"})]}),0!==u.length&&u.some((function(e){return e.createdBy!==t.email}))?Object(N.jsx)(Oe.a,{container:!0,spacing:3,children:Object(U.a)(u).map((function(e,a){return e.createdBy!==t.email&&Object(N.jsx)(Oe.a,{item:!0,xs:4,children:Object(N.jsx)(Ee.a,{className:r.root,children:Object(N.jsxs)(Ue.a,{className:r.paper,children:[Object(N.jsxs)(x.a,{className:r.relativeDiv,children:[Object(N.jsx)(Ie.a,{className:r.leftIcon,color:"primary"}),Object(N.jsx)(P.a,{onClick:function(){G(!0,e.title,e.noteId)},className:r.rightIcon,children:Object(N.jsx)(Be.a,{color:"primary"})})]}),Object(N.jsxs)(De.a,{component:L.b,to:"/note/".concat(e.noteId),children:[Object(N.jsxs)(x.a,{variant:"h5",children:[" ",e.title]}),Object(N.jsxs)(x.a,{variant:"body1",children:[" Shared By: ",e.createdBy]}),Object(N.jsxs)(x.a,{variant:"caption",children:[" ",new Date(e.createdTime).toString()]})]})]})})},e.noteId)}))}):Object(N.jsxs)("div",{className:"center",children:[Object(N.jsx)(Re.a,{color:"primary"}),Object(N.jsx)(x.a,{variant:"h5",children:"Nothing found. Ask your friends to share a note!"})]})]}),Object(N.jsxs)($.a,{open:S,onClose:function(){G(!1,"","")},"aria-labelledby":"form-dialog-title",children:[Object(N.jsx)(ce.a,{id:"form-dialog-title",children:"Deleting Note"}),Object(N.jsx)(te.a,{children:Object(N.jsxs)(ae.a,{className:"center",children:["Delete ",E," ?"]})}),Object(N.jsxs)(ee.a,{children:[Object(N.jsx)(P.a,{onClick:function(){G(!1,"","")},color:"primary",children:"Cancel"}),Object(N.jsx)(P.a,{onClick:function(){q(z)},color:"primary",children:"Delete"})]})]})]})};var Le=a(205),Fe=a.n(Le);var Ge=function(){var e=w().user,t=Object(d.g)();return Object(c.useEffect)((function(){e||t.push("/login")}),[e]),Object(N.jsxs)("div",{children:[Object(N.jsx)(je,{inUser:!0}),Object(N.jsx)(Ee.a,{className:"center",children:Object(N.jsxs)(x.a,{className:"center",children:[" ",Object(N.jsx)(M.a,{color:"primary",style:{fontSize:"32px"}})," My Profile"]})}),Object(N.jsx)(ke.a,{m:2,pt:3,children:Object(N.jsxs)(x.a,{className:"center",children:[" ",Object(N.jsxs)("div",{children:[Object(N.jsx)(Fe.a,{color:"primary"}),"   ",e.email," "]})]})}),Object(N.jsx)(ke.a,{m:2,pt:3,children:Object(N.jsxs)(x.a,{className:"center",children:[" ",Object(N.jsxs)("div",{children:[" ",Object(N.jsx)(Re.a,{color:"primary"}),"   More to come... "]})]})})]})},qe=a(206),Ke=["comp"];var Je=function(e){e.comp;var t=Object(qe.a)(e,Ke),a=w().user;return Object(N.jsx)(d.b,Object(we.a)(Object(we.a)({},t),{},{render:function(e){a?Object(we.a)({},e):d.a}}))};var Ve=function(){return Object(N.jsx)(C,{children:Object(N.jsx)(L.a,{children:Object(N.jsxs)(d.d,{children:[Object(N.jsx)(Je,{exact:!0,path:"/",children:Object(N.jsx)(d.a,{to:"/home"})}),Object(N.jsx)(Je,{exact:!0,path:"/signup",children:Object(N.jsx)(Ne,{})}),Object(N.jsx)(Je,{exact:!0,path:"/login",children:Object(N.jsx)(Se,{})}),Object(N.jsx)(Je,{exact:!0,path:"/home",children:Object(N.jsx)(ze,{})}),Object(N.jsx)(Je,{exact:!0,path:"/profile",children:Object(N.jsx)(Ge,{})}),Object(N.jsx)(Je,{path:"/note/:noteId",children:Object(N.jsx)(be,{})})]})})})},_e=a(75),Ye=a(413),He="rgb(48, 128, 188)",Qe=Object(_e.b)({palette:{primary:{light:He,main:He,dark:He},secondary:{main:He}},typography:{useNextVariants:!0}});s.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(Ye.a,{theme:Qe,children:Object(N.jsx)(Ve,{})})}),document.getElementById("root"))}},[[359,1,2]]]);
//# sourceMappingURL=main.270fa566.chunk.js.map