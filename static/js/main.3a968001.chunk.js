(this["webpackJsonpcollaborative-note"]=this["webpackJsonpcollaborative-note"]||[]).push([[0],{186:function(e,t,a){},355:function(e,t){},359:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(19),i=a.n(r),o=a(39),s=a.n(o),l=a(53),d=a(9),j=a(24),O=a(190),b=a.n(O),u=(a(185),a(186),a(147)),h={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTH_DOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APP_ID},_=u.a.initializeApp(h),S=u.a.auth(),v=a(95),m=a(155),p=a(414),x=a(202),E=a.n(x),f=a(188),T=a(4),C=n.a.createContext();function R(){return Object(c.useContext)(C)}var P=Object(f.a)((function(e){return{center:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"500px",marginTop:"25px"},left:{width:"40%",float:"left",marginTop:"25px"},right:{width:"40%",float:"left",border:"1px solid grey",borderRadius:"25px",marginTop:"25px",marginRight:"25px"},icon:{margin:e.spacing(1),width:60,height:60},form:{width:"60%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},divider:{margin:e.spacing(3)}}}));function g(e){var t=e.children,a=Object(c.useState)(),n=Object(d.a)(a,2),r=n[0],i=n[1],o=Object(c.useState)(!1),s=Object(d.a)(o,2),l=s[0],j=s[1],O=Object(c.useState)(""),b=Object(d.a)(O,2),u=b[0],h=b[1],_=Object(c.useState)(!1),v=Object(d.a)(_,2),m=v[0],p=v[1];var x={user:r,openSnackbar:l,setOpenSnackbar:j,message:u,setMessage:h,timeout:function(e){return new Promise((function(t){return setTimeout(t,e)}))}};return Object(c.useEffect)((function(){return console.log("CC"),S.onAuthStateChanged((function(e){i(e),p(!0)}))}),[]),Object(T.jsx)(C.Provider,{value:x,children:m&&t})}var N=a(201),D=a.n(N),A=a(23),y=a(405),W=a(406),K=a(84),H=a(198),U=a.n(H),I=a(81),L=a(69),w=a.n(L),B=a(428),F=a(36),k=a(196),M=a.n(k),V=a(117),z=a.n(V),G=a(195),q=a.n(G),J=a(207),Y=a(58),Q=a(118),X=a.n(Q),Z=a(197),$=a.n(Z),ee=a(425),te=a(412),ae=a(408),ce=a(409),ne=a(407),re=a(57),ie=a.n(re),oe=a(368),se=a(199),le=Object(f.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),de=[{field:"userEmail",headerName:"Email",width:200}];function je(e){var t=e.inNote,a=e.noteId,n=e.inUser,r=e.canShare,i=e.ownerEmail,o=e.sharedUsers,O=e.setSharedUsers,b=le(),u=Object(j.g)(),h=Object(c.useState)(null),p=Object(d.a)(h,2),x=p[0],E=p[1],f=Object(c.useState)(!1),C=Object(d.a)(f,2),P=C[0],g=C[1],N=Object(c.useState)(!1),D=Object(d.a)(N,2),H=D[0],L=D[1],k=R(),V=k.openSnackbar,G=k.setOpenSnackbar,Q=k.message,Z=k.setMessage,re=k.user,je=k.timeout,Oe=Object(c.useRef)(),be=Object(c.useState)([]),ue=Object(d.a)(be,2),he=ue[0],_e=ue[1],Se=Object(c.useState)(!1),ve=Object(d.a)(Se,2),me=ve[0],pe=ve[1],xe=function(){g(!1)},Ee=function(){L(!1)},fe=function(){var e=Object(l.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=z()(),e.prev=1,pe(!0),e.next=5,_.database().ref(Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DB_NAME).child("/".concat(ie()(re.email),"-user")).child(a).update({noteId:a});case 5:return e.next=7,_.database().ref(Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DB_NAME).child("/".concat(a,"-misc")).update({createdBy:re.email,createdTime:(new Date).getTime(),title:"Untitled"});case 7:e.next=17;break;case 9:return e.prev=9,e.t0=e.catch(1),e.next=13,je(1500);case 13:return pe(!1),G(!0),Z("Error on creating a new Note"),e.abrupt("return");case 17:return e.next=19,je(500);case 19:pe(!1),u.push("/note/".concat(a));case 21:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsxs)(y.a,{position:"static",color:"primary",children:[Object(T.jsx)(B.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:V,message:Q,autoHideDuration:3e3,onClose:function(){G(!1),Z("")}}),Object(T.jsxs)(W.a,{children:[Object(T.jsx)(K.a,{edge:"start",className:b.menuButton,color:"inherit","aria-label":"menu",children:Object(T.jsxs)(I.a,{component:F.b,to:"/home",color:"inherit",children:[" ",Object(T.jsx)(q.a,{})]})}),Object(T.jsx)(v.a,{variant:"h6",className:b.title,children:"Collaborative Note"}),!n&&Object(T.jsxs)(I.a,{component:F.b,to:"/login",color:"inherit",children:[" ",Object(T.jsx)(w.a,{})," Log In"]}),n&&!t&&Object(T.jsxs)(I.a,{onClick:fe,color:"inherit",children:[" ",Object(T.jsx)(M.a,{}),"   Create A New Note"]}),n&&t&&r&&re.email&&re.email===i&&Object(T.jsxs)(I.a,{onClick:function(){g(!0)},color:"inherit",children:[Object(T.jsx)(X.a,{}),"   Share With Friend"]}),n&&t&&r&&re.email&&re.email===i&&Object(T.jsxs)(I.a,{onClick:function(){L(!0)},color:"inherit",children:[Object(T.jsx)($.a,{}),"   Shared Users"]}),n&&t&&r&&re.email!==i&&Object(T.jsxs)(v.a,{variant:"h6",children:["Shared by: ",i]}),n&&Object(T.jsxs)("div",{children:[Object(T.jsx)(I.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){E(e.currentTarget)},color:"inherit",children:Object(T.jsx)(U.a,{color:"inherit"})}),Object(T.jsxs)(J.a,{id:"simple-menu",anchorEl:x,keepMounted:!0,open:Boolean(x),onClose:function(){E(null)},children:[Object(T.jsx)(Y.a,{onClick:function(){E(null),u.push("/profile")},children:"Profile"}),Object(T.jsx)(Y.a,{onClick:function(){E(null);try{S.signOut(),u.push("/login")}catch(e){Z(e.message),G(!0)}},children:"Logout"})]})]}),Object(T.jsxs)(ee.a,{open:P,onClose:xe,"aria-labelledby":"form-dialog-title",children:[Object(T.jsx)(ne.a,{id:"form-dialog-title",children:"Share Note"}),Object(T.jsxs)(ae.a,{children:[Object(T.jsx)(ce.a,{children:"To share, please enter the email"}),Object(T.jsx)(m.a,{autoFocus:!0,margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0,inputRef:Oe})]}),Object(T.jsxs)(te.a,{children:[Object(T.jsx)(I.a,{onClick:xe,color:"primary",children:"Cancel"}),Object(T.jsx)(I.a,{onClick:function(){try{var e=Oe.current.value;e&&!o.includes(e)&&(_.database().ref(Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DB_NAME).child("/".concat(ie()(Oe.current.value),"-user")).child(a).update({noteId:a}),_.database().ref(Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DB_NAME).child("/".concat(a,"-shared")).update({sharedUsers:[].concat(Object(A.a)(o),[{userEmail:e}])}),L())}catch(t){G(!0),Z(t.message)}g(!1)},color:"primary",children:"Share"})]})]}),Object(T.jsxs)(ee.a,{open:H,onClose:Ee,"aria-labelledby":"form-dialog-title",children:[Object(T.jsx)(ne.a,{id:"form-dialog-title",children:"Shared Users"}),Object(T.jsxs)(ae.a,{children:[Object(T.jsx)(ce.a,{children:"     These users have access to this note:          "}),Object(T.jsx)("div",{style:{height:300},children:Object(T.jsx)(se.a,{rows:o?Object(A.a)(o):[],getRowId:function(e){return e.userEmail},columns:de,pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!0,disableSelectionOnClick:!0,hideFooter:!0,onSelectionModelChange:function(e){_e(Object(A.a)(e))}})})]}),Object(T.jsxs)(te.a,{children:[Object(T.jsx)(I.a,{onClick:function(){for(var e=[],t=0;t<o.length;t++)he.includes(o[t].userEmail)||e.push(o[t]);_.database().ref(Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DB_NAME).child("/".concat(a,"-shared")).update({sharedUsers:e});for(var c=0;c<he.length;c++){var n=he[c];_.database().ref(Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DB_NAME).child("/".concat(ie()(n),"-user")).child(a).remove()}0===e.length&&O(e),L(!1)},color:"primary",children:"Remove Selected Users"}),Object(T.jsx)(I.a,{onClick:Ee,color:"primary",children:"Close"})]})]}),Object(T.jsxs)(ee.a,{open:me,onClose:function(){pe(!1)},"aria-labelledby":"form-dialog-title",children:[Object(T.jsx)(ne.a,{id:"form-dialog-title",children:"Creating Note"}),Object(T.jsx)(ae.a,{children:Object(T.jsxs)(ce.a,{className:"center",children:["Creating New Note... Please wait...",Object(T.jsx)(oe.a,{})]})}),Object(T.jsx)(te.a,{})]})]})]})}var Oe=a(415);function be(){var e=Object(c.useRef)(),t=Object(c.useState)("Untitled"),a=Object(d.a)(t,2),n=a[0],r=a[1],i=Object(c.useState)([]),o=Object(d.a)(i,2),O=o[0],u=o[1],h=Object(c.useState)("NULL"),S=Object(d.a)(h,2),x=S[0],f=S[1],C=Object(j.h)().noteId,P=Object(c.useState)(z()()),g=Object(d.a)(P,1)[0],N=Object(c.useState)(0),A=Object(d.a)(N,2),y=A[0],W=A[1],K=Object(c.createRef)(),H=Object(c.useState)(!1),U=Object(d.a)(H,2),I=U[0],L=U[1],w=R(),B=w.user,F=w.setOpenSnackbar,k=w.setMessage,M=Object(j.g)(),V=Object(c.useState)(!1),G=Object(d.a)(V,2),q=G[0],J=G[1];Object(c.useEffect)((function(){B||M.push("/login")}),[B]),Object(c.useEffect)((function(){J(!0),W(0);try{(function(){var t=Object(l.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=0,t.t0=_.database().ref(Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DB_NAME).child("/".concat(ie()(B.email),"-user")),t.next=4,function(e){var t=e.val();t&&t.noteId===C&&(a=1)};case 4:return t.t1=t.sent,t.next=7,t.t0.once.call(t.t0,"child_added",t.t1);case 7:if(1!==a&&(a=2),W(a),2!==a){t.next=11;break}return t.abrupt("return");case 11:_.database().ref(Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DB_NAME).child("/".concat(C,"-content")).on("child_added",(function(t){var a=t.val();e&&e.current&&a.sessionId!==g&&e.current.getEditor().updateContents(a.delta)})),_.database().ref(Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DB_NAME).child("/".concat(C,"-misc")).on("value",(function(e){var t=e.val();t&&(r(t.title),f(t.createdBy))})),_.database().ref(Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DB_NAME).child("/".concat(C,"-shared")).on("value",(function(e){var t=e.val();t&&u(t.sharedUsers)}));case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}catch(t){}setTimeout((function(){return J(!1)}),1e3)}),[]);var Y=function(e){e&&0!==e.trim().length&&_.database().ref(Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DB_NAME).child("/".concat(C,"-misc")).update({title:e})};return Object(T.jsxs)("div",{children:[Object(T.jsx)(je,{inNote:!0,noteId:C,inUser:!0,canShare:1===y,ownerEmail:x,sharedUsers:O,setSharedUsers:u}),0===y&&Object(T.jsxs)("div",{className:"center",children:[Object(T.jsx)(oe.a,{color:"primary",size:60}),Object(T.jsx)(v.a,{variant:"h5",children:"Loading Notes..."})]}),2===y&&Object(T.jsxs)("div",{className:"center",children:[Object(T.jsx)(D.a,{color:"primary",size:60}),Object(T.jsx)(v.a,{variant:"h5",children:"You cannot view this note"})]}),B&&1===y&&Object(T.jsxs)("div",{children:[Object(T.jsx)(m.a,{id:"standard-full-width",placeholder:"   Note Title",fullWidth:!0,value:n,margin:"normal",InputLabelProps:{shrink:!0},inputRef:K,disabled:I||q,readOnly:!0,onChange:function(e){if(0===e.target.value.trim().length)return F(!0),void k("Title cannot be empty");r(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(K.current.blur(),L(!0),Y(K.current.value))},onClick:function(){L(!1)},onFocus:function(){L(!1)},onBlur:function(){L(!0),Y(K.current.value)},InputProps:{startAdornment:Object(T.jsx)(p.a,{position:"start",children:Object(T.jsx)(E.a,{})})}}),q&&Object(T.jsx)("div",{children:Object(T.jsx)(Oe.a,{color:"primary",size:80,thickness:10})}),B&&Object(T.jsx)(b.a,{theme:"snow",onChange:function(e,t,a,c){"user"===a&&_.database().ref(Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DB_NAME).child("/".concat(C,"-content")).push({sessionId:g,delta:t})},readOnly:q,ref:e})]})]})}var ue=a(418),he=a(420),_e=a(419),Se=a(416),ve=a(203),me=a.n(ve),pe=a(122),xe=a.n(pe),Ee=a(417);function fe(){var e=P();return Object(T.jsx)("div",{children:Object(T.jsx)(Se.a,{component:"main",maxWidth:"lg",children:Object(T.jsxs)("div",{className:e.center,children:[Object(T.jsx)(me.a,{color:"primary",className:e.icon}),Object(T.jsx)(v.a,{component:"h1",variant:"h5",children:"Create a note"}),Object(T.jsx)(Ee.a,{variant:"inset",className:e.divider}),Object(T.jsx)(X.a,{color:"primary",className:e.icon}),Object(T.jsx)(v.a,{component:"h1",variant:"h5",children:"Share with someone"}),Object(T.jsx)(Ee.a,{variant:"inset",className:e.divider}),Object(T.jsx)(xe.a,{color:"primary",className:e.icon}),Object(T.jsx)(v.a,{component:"h1",variant:"h5",children:"Edit and study together"}),Object(T.jsx)(Ee.a,{variant:"inset",className:e.divider})]})})})}function Te(){var e=P(),t=Object(c.useRef)(),a=Object(c.useRef)(),n=Object(c.useRef)(),r=R(),i=r.setOpenSnackbar,o=r.setMessage,d=r.user,O=Object(j.g)();Object(c.useEffect)((function(){d&&O.push("/home")}),[d]);var b=function(){var e=Object(l.a)(s.a.mark((function e(c){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),a.current.value===n.current.value){e.next=5;break}return o("password does not match"),i(!0),e.abrupt("return");case 5:return e.prev=5,e.next=8,S.createUserWithEmailAndPassword(t.current.value,a.current.value);case 8:O.push("/home"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(5),o(e.t0.message),i(!0);case 15:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsxs)("div",{children:[Object(T.jsx)(je,{}),Object(T.jsx)("div",{className:e.left,children:Object(T.jsx)(fe,{})}),Object(T.jsx)("div",{className:e.right,children:Object(T.jsxs)(Se.a,{component:"main",maxWidth:"lg",children:[Object(T.jsx)(ue.a,{}),Object(T.jsxs)("div",{className:e.center,children:[Object(T.jsx)(w.a,{className:e.icon,color:"primary"}),Object(T.jsx)(v.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(T.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(T.jsxs)(_e.a,{container:!0,spacing:2,children:[Object(T.jsx)(_e.a,{item:!0,xs:12,children:Object(T.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",inputRef:t})}),Object(T.jsx)(_e.a,{item:!0,xs:12,children:Object(T.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:a})}),Object(T.jsx)(_e.a,{item:!0,xs:12,children:Object(T.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password2",label:"Confirm Password",type:"password",id:"password2",inputRef:n})})]}),Object(T.jsx)(I.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:b,children:"Sign Up"}),Object(T.jsx)(_e.a,{container:!0,justifyContent:"flex-end",children:Object(T.jsx)(_e.a,{item:!0,children:Object(T.jsx)(he.a,{href:"#/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})})]})}function Ce(){var e=P(),t=Object(c.useRef)(),a=Object(c.useRef)(),n=Object(j.g)(),r=R(),i=r.setOpenSnackbar,o=r.setMessage,d=r.user;Object(c.useEffect)((function(){d&&n.push("/home")}),[d]);var O=function(){var e=Object(l.a)(s.a.mark((function e(c){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,e.next=4,S.signInWithEmailAndPassword(t.current.value,a.current.value);case 4:n.push("/home"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),o(e.t0.message),i(!0);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsxs)("div",{children:[Object(T.jsx)(je,{}),Object(T.jsx)("div",{className:e.left,children:Object(T.jsx)(fe,{})}),Object(T.jsx)("div",{className:e.right,children:Object(T.jsx)(Se.a,{component:"main",maxWidth:"lg",children:Object(T.jsxs)("div",{className:e.center,children:[Object(T.jsx)(w.a,{className:e.icon,color:"primary"}),Object(T.jsx)(v.a,{component:"h1",variant:"h5",children:"Login"}),Object(T.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(T.jsxs)(_e.a,{container:!0,spacing:2,children:[Object(T.jsx)(_e.a,{item:!0,xs:12,children:Object(T.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",inputRef:t})}),Object(T.jsx)(_e.a,{item:!0,xs:12,children:Object(T.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:a})})]}),Object(T.jsx)(I.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:O,children:"Log In"}),Object(T.jsx)(_e.a,{container:!0,justifyContent:"flex-end",children:Object(T.jsx)(_e.a,{item:!0,children:Object(T.jsx)(he.a,{href:"#/signup",variant:"body2",children:"Don't have an account? Sign up"})})})]})]})})})]})}var Re=a(80),Pe=a(424),ge=a(145),Ne=a.n(ge),De=a(421),Ae=a(422),ye=a(94),We=a.n(ye),Ke=a(204),He=a.n(Ke),Ue=a(423),Ie=a(146),Le=a.n(Ie),we=Object(f.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"left",verticalAlign:"middle",color:e.palette.text.secondary,fontSize:"30px"},relativeDiv:{position:"relative"},leftIcon:{flexGrow:1},rightIcon:{display:"block",position:"absolute",top:"-7px",right:"-10px"},icon:{color:"rgb(48, 128, 188)"}}}));var Be=function(){var e=R(),t=e.user,a=e.setMessage,n=e.setOpenSnackbar,r=we(),i=Object(j.g)(),o=Object(c.useState)([]),O=Object(d.a)(o,2),b=O[0],u=O[1],h=Object(c.useState)(!1),S=Object(d.a)(h,2),m=S[0],p=S[1],x=Object(c.useState)(!1),E=Object(d.a)(x,2),f=E[0],C=E[1],P=Object(c.useState)(""),g=Object(d.a)(P,2),N=g[0],D=g[1],y=Object(c.useState)(""),W=Object(d.a)(y,2),K=W[0],H=W[1],U=Object(c.useState)(!1),L=Object(d.a)(U,2),w=L[0],B=L[1];Object(c.useEffect)((function(){t?(p(!0),_.database().ref(Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DB_NAME).child("/".concat(ie()(t.email),"-user")).on("child_added",(function(e){var t=e.val();t&&_.database().ref(Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DB_NAME).child("/".concat(t.noteId,"-misc")).once("value",(function(e){var a=e.val();b.some((function(e){return e.noteId===t.noteId}))||u((function(e){return[].concat(Object(A.a)(e),[Object(Re.a)(Object(Re.a)({},a),{},{noteId:t.noteId})]).sort((function(e,t){return e.createdTime<t.createdTime}))}))}))})),setTimeout((function(){return p(!1)}),1e3)):i.push("/login")}),[t]);var k=function(e,t,a){var c=arguments.length>3&&void 0!==arguments[3]&&arguments[3];C(e),D(t),H(a),B(c)},M=function(){var e=Object(l.a)(s.a.mark((function e(c){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.database().ref(Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DB_NAME).child("/".concat(ie()(t.email),"-user")).child(K).remove();case 3:c&&_.database().ref(Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DB_NAME).child("/".concat(K,"-shared")).once("value",(function(e){var t=e.val();if(t&&t.sharedUsers)for(var a=0;a<t.sharedUsers.length;a++){var c=t.sharedUsers[a].userEmail;_.database().ref(Object({NODE_ENV:"production",PUBLIC_URL:"/collaborative-note",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DB_NAME).child("/".concat(ie()(c),"-user")).child(K).remove()}})),e.next=12;break;case 6:return e.prev=6,e.t0=e.catch(0),n(!0),a(e.t0.message),k(!1,"",""),e.abrupt("return");case 12:u((function(e){return Object(A.a)(e).filter((function(e){return e.noteId!==K})).sort((function(e,t){return e.createdTime<t.createdTime}))})),k(!1,"","");case 14:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsxs)("div",{children:[Object(T.jsx)(je,{inUser:!0}),t&&m&&Object(T.jsxs)("div",{className:"center",children:[Object(T.jsx)(oe.a,{color:"primary",size:60}),Object(T.jsx)(v.a,{variant:"h5",children:"Loading Notes..."})]}),t&&!m&&Object(T.jsxs)(Pe.a,{m:2,pt:3,children:[Object(T.jsxs)(Pe.a,{m:2,pt:3,children:[Object(T.jsx)(v.a,{variant:"h4",className:"center",children:Object(T.jsxs)("div",{children:[Object(T.jsx)(He.a,{style:{fontSize:"32px"},color:"primary"})," My Notes"]})}),Object(T.jsx)(Ee.a,{variant:"middle"})]}),0!==b.length&&b.some((function(e){return e.createdBy===t.email}))?Object(T.jsx)(_e.a,{container:!0,spacing:3,children:Object(A.a)(b).map((function(e,a){return e.createdBy===t.email&&Object(T.jsx)(_e.a,{item:!0,xs:4,children:Object(T.jsx)(De.a,{className:r.root,children:Object(T.jsxs)(Ae.a,{className:r.paper,children:[Object(T.jsxs)(v.a,{className:r.relativeDiv,children:[Object(T.jsx)(Ne.a,{className:r.leftIcon,color:"primary"}),Object(T.jsx)(I.a,{onClick:function(){k(!0,e.title,e.noteId,!0)},className:r.rightIcon,children:Object(T.jsx)(Le.a,{color:"primary"})})]}),Object(T.jsxs)(Ue.a,{component:F.b,to:"/note/".concat(e.noteId),children:[Object(T.jsxs)(v.a,{variant:"h5",children:[" ",e.title]}),Object(T.jsxs)(v.a,{variant:"body1",children:[" "," "]}),Object(T.jsxs)(v.a,{variant:"caption",children:[" ",new Date(e.createdTime).toString()]})]})]})})},e.noteId)}))}):Object(T.jsxs)("div",{className:"center",children:[Object(T.jsx)(We.a,{color:"primary"}),Object(T.jsx)(v.a,{variant:"h5",children:Object(T.jsx)("div",{children:"Looks like you haven't added any notes."})})]}),Object(T.jsxs)(Pe.a,{m:2,pt:3,marginTop:10,children:[Object(T.jsxs)(v.a,{className:"center",variant:"h4",children:[" ",Object(T.jsxs)("div",{children:[Object(T.jsx)(xe.a,{style:{fontSize:"32px"},color:"primary"}),"  Notes From Friends "]})]}),Object(T.jsx)(Ee.a,{variant:"middle"})]}),0!==b.length&&b.some((function(e){return e.createdBy!==t.email}))?Object(T.jsx)(_e.a,{container:!0,spacing:3,children:Object(A.a)(b).map((function(e,a){return e.createdBy!==t.email&&Object(T.jsx)(_e.a,{item:!0,xs:4,children:Object(T.jsx)(De.a,{className:r.root,children:Object(T.jsxs)(Ae.a,{className:r.paper,children:[Object(T.jsxs)(v.a,{className:r.relativeDiv,children:[Object(T.jsx)(Ne.a,{className:r.leftIcon,color:"primary"}),Object(T.jsx)(I.a,{onClick:function(){k(!0,e.title,e.noteId)},className:r.rightIcon,children:Object(T.jsx)(Le.a,{color:"primary"})})]}),Object(T.jsxs)(Ue.a,{component:F.b,to:"/note/".concat(e.noteId),children:[Object(T.jsxs)(v.a,{variant:"h5",children:[" ",e.title]}),Object(T.jsxs)(v.a,{variant:"body1",children:[" Shared By: ",e.createdBy]}),Object(T.jsxs)(v.a,{variant:"caption",children:[" ",new Date(e.createdTime).toString()]})]})]})})},e.noteId)}))}):Object(T.jsxs)("div",{className:"center",children:[Object(T.jsx)(We.a,{color:"primary"}),Object(T.jsx)(v.a,{variant:"h5",children:"Nothing found. Ask your friends to share a note!"})]})]}),Object(T.jsxs)(ee.a,{open:f,onClose:function(){k(!1,"","")},"aria-labelledby":"form-dialog-title",children:[Object(T.jsx)(ne.a,{id:"form-dialog-title",children:"Deleting Note"}),Object(T.jsx)(ae.a,{children:Object(T.jsxs)(ce.a,{className:"center",children:["Delete ",N," ?"]})}),Object(T.jsxs)(te.a,{children:[Object(T.jsx)(I.a,{onClick:function(){k(!1,"","")},color:"primary",children:"Cancel"}),Object(T.jsx)(I.a,{onClick:function(){M(w)},color:"primary",children:"Delete"})]})]})]})};var Fe=a(205),ke=a.n(Fe);var Me=function(){var e=R().user,t=Object(j.g)();return Object(c.useEffect)((function(){e||t.push("/login")}),[e]),Object(T.jsxs)("div",{children:[Object(T.jsx)(je,{inUser:!0}),Object(T.jsx)(De.a,{className:"center",children:Object(T.jsxs)(v.a,{className:"center",children:[" ",Object(T.jsx)(w.a,{color:"primary",style:{fontSize:"32px"}})," My Profile"]})}),Object(T.jsx)(Pe.a,{m:2,pt:3,children:Object(T.jsxs)(v.a,{className:"center",children:[" ",Object(T.jsxs)("div",{children:[Object(T.jsx)(ke.a,{color:"primary"}),"   ",e.email," "]})]})}),Object(T.jsx)(Pe.a,{m:2,pt:3,children:Object(T.jsxs)(v.a,{className:"center",children:[" ",Object(T.jsxs)("div",{children:[" ",Object(T.jsx)(We.a,{color:"primary"}),"   More to come... "]})]})})]})},Ve=a(206),ze=["comp"];var Ge=function(e){e.comp;var t=Object(Ve.a)(e,ze),a=R().user;return Object(T.jsx)(j.b,Object(Re.a)(Object(Re.a)({},t),{},{render:function(e){a?Object(Re.a)({},e):j.a}}))};var qe=function(){return Object(T.jsx)(g,{children:Object(T.jsx)(F.a,{children:Object(T.jsxs)(j.d,{children:[Object(T.jsx)(Ge,{exact:!0,path:"/",children:Object(T.jsx)(j.a,{to:"/home"})}),Object(T.jsx)(Ge,{exact:!0,path:"/signup",children:Object(T.jsx)(Te,{})}),Object(T.jsx)(Ge,{exact:!0,path:"/login",children:Object(T.jsx)(Ce,{})}),Object(T.jsx)(Ge,{exact:!0,path:"/home",children:Object(T.jsx)(Be,{})}),Object(T.jsx)(Ge,{exact:!0,path:"/profile",children:Object(T.jsx)(Me,{})}),Object(T.jsx)(Ge,{path:"/note/:noteId",children:Object(T.jsx)(be,{})})]})})})},Je=a(75),Ye=a(413),Qe="rgb(48, 128, 188)",Xe=Object(Je.b)({palette:{primary:{light:Qe,main:Qe,dark:Qe},secondary:{main:Qe}},typography:{useNextVariants:!0}});i.a.render(Object(T.jsx)(n.a.StrictMode,{children:Object(T.jsx)(Ye.a,{theme:Xe,children:Object(T.jsx)(qe,{})})}),document.getElementById("root"))}},[[359,1,2]]]);
//# sourceMappingURL=main.3a968001.chunk.js.map