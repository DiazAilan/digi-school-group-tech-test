(this["webpackJsonpdigi-school-group-test-tech"]=this["webpackJsonpdigi-school-group-test-tech"]||[]).push([[0],{112:function(e,t,a){e.exports=a(170)},117:function(e,t,a){},118:function(e,t,a){},169:function(e){e.exports=JSON.parse('{"fr":{"translation":{"Home":"Accueil","Search":"Recherche","detail":{"Released":"Sortie"}}},"es":{"translation":{"Home":"Inicio","Search":"B\xfasqueda"}}}')},170:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),o=(a(117),a(13)),l=a(60),s=(a(118),a(199)),u=a(225),m=a(219),d=a(40),p=a(39),f=a(11),b=a(201),h=a(203),g=a(204),E=a(69),j=a(3),O=a(94),v=a.n(O),x=Object(s.a)((function(e){return Object(u.a)({root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:Object(f.a)({marginLeft:180,width:"calc(100% - ".concat(180,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)")}),menuButton:{marginRight:36},hide:{display:"none"}})}));var C=function(e){var t=x();return r.a.createElement(b.a,{position:"fixed",className:Object(j.a)(t.appBar,Object(f.a)({},t.appBarShift,e.open))},r.a.createElement(h.a,null,r.a.createElement(g.a,{color:"inherit","aria-label":"open drawer",onClick:function(){e.onMenuClick()},edge:"start",className:Object(j.a)(t.menuButton,Object(f.a)({},t.hide,e.open))},r.a.createElement(v.a,null)),r.a.createElement(E.a,{variant:"h6",noWrap:!0},"BlablaMovie")))},w=a(27),S=a(223),y=a(205),N=a(206),k=a(207),A=a(208),I=a(209),B=a(96),D=a.n(B),M=a(95),T=a.n(M),P=Object(s.a)((function(e){return Object(u.a)({toolbar:Object(l.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),drawer:Object(f.a)({width:180,flexShrink:0,whiteSpace:"nowrap"},e.breakpoints.up("sm"),{width:240}),drawerOpen:Object(f.a)({width:180,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},e.breakpoints.up("sm"),{width:240}),drawerClose:Object(f.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:0},e.breakpoints.up("sm"),{width:e.spacing(7)+1}),navbarList:{"& a":{textDecoration:"none",color:"rgba(0,0,0,0.87)"}}})}));var R=function(e){var t,a,n=P(),c=Object(w.a)(),i=function(){e.onCloseMenuClick()};return r.a.createElement(S.a,{variant:"permanent",className:Object(j.a)(n.drawer,(t={},Object(f.a)(t,n.drawerOpen,e.open),Object(f.a)(t,n.drawerClose,!e.open),t)),classes:{paper:Object(j.a)((a={},Object(f.a)(a,n.drawerOpen,e.open),Object(f.a)(a,n.drawerClose,!e.open),a))}},r.a.createElement("div",{className:n.toolbar},r.a.createElement(g.a,{onClick:i},"rtl"===c.direction?r.a.createElement(T.a,null):r.a.createElement(D.a,null))),r.a.createElement(y.a,{className:n.navbarList},e.options.map((function(e){return r.a.createElement(d.b,{to:e.path,key:e.name,onClick:i},r.a.createElement(N.a,{button:!0},r.a.createElement(k.a,null,r.a.createElement(A.a,null,e.icon)),r.a.createElement(I.a,{primary:e.name})))}))))},z=a(104),W=a(216),L=a(224),H=a(98),J=a(99),V=a.n(J).a.create({baseURL:"https://www.omdbapi.com/"}),U="?apikey=".concat(H.a);function Y(e){return q(U+"&s="+e).then((function(e){return e.data.Search})).catch((function(e){return e}))}function q(e){return V.get(e)}var F=a(210),G=a(211),X=a(212),$=a(213),K=a(214),Q=a(215),Z=r.a.createContext({selected:[],toggleMovieSelection:function(e){}}),_=Object(s.a)((function(e){return Object(u.a)({card:Object(f.a)({cursor:"pointer",display:"inline-block",margin:"0 8px 16px",maxWidth:300,textAlign:"left",transition:"all 0.5s",width:"calc(50% - 16px)","&.selected":{background:"#a6f1a6"}},e.breakpoints.down("sm"),{width:"100%"}),media:{height:280},cardContent:{height:120},cardAction:{justifyContent:"center"}})}));var ee=function(e){var t=_(),a=Object(n.useState)(!1),c=Object(o.a)(a,2),i=c[0],l=c[1],s=Object(n.useState)(!1),u=Object(o.a)(s,2),m=u[0],d=u[1],p=Object(n.useContext)(Z);return Object(n.useEffect)((function(){d(p.selected.includes(e.movie.imdbID))}),[p.selected]),r.a.createElement(F.a,{className:m?t.card+" selected":t.card,onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},raised:i||m,onClick:function(){return e.onCardClick(e.movie.imdbID)}},r.a.createElement(G.a,null,r.a.createElement(X.a,{className:t.media,image:e.movie.Poster,title:e.movie.Title}),r.a.createElement($.a,{className:t.cardContent},r.a.createElement(E.a,{gutterBottom:!0,component:"h3"},e.movie.Title),r.a.createElement(E.a,{color:"textSecondary",component:"p"},e.movie.Year))),r.a.createElement(K.a,{className:t.cardAction},r.a.createElement(Q.a,{size:"small"},m?"Selected":"Vote")))},te=a(217),ae=a(41),ne=Object(s.a)((function(e){return Object(u.a)({root:{},cardsContainer:{textAlign:"center",paddingLeft:0,paddingRight:0},loadingContainer:{height:280,display:"flex",alignItems:"center",justifyContent:"center"}})}));var re=function(){var e=ne(),t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)([]),s=Object(o.a)(l,2),u=s[0],m=s[1],d=Object(n.useState)(!1),p=Object(o.a)(d,2),f=p[0],b=p[1],h=Object(n.useState)(!1),E=Object(o.a)(h,2),j=E[0],O=E[1],v=Object(n.useState)(""),x=Object(o.a)(v,2),C=x[0],w=x[1],S=Object(ae.b)(),y=S.t,N=(S.i18n,function(e){var t=Object(z.a)(u),a=u.indexOf(e);u.includes(e)?t.splice(a,1):u.length<3?t.push(e):(O(!0),w("You can only vote up to 3 movies!")),m(t)}),k=function(e,t){"clickaway"!==t&&(O(!1),w(""))};return Object(n.useEffect)((function(){b(!1),Y("elm-street").then((function(e){i(e),setTimeout((function(){return b(!0)}),500)})).catch((function(e){O(!0),w(e.message),setTimeout((function(){return b(!0)}),500)}))}),[]),r.a.createElement(W.a,{fixed:!0,className:e.root},r.a.createElement("h2",null,y("Home")),r.a.createElement(W.a,{fixed:!0,className:e.cardsContainer},r.a.createElement(Z.Provider,{value:{selected:u,toggleMovieSelection:N}},f?c.map((function(e){return r.a.createElement(ee,{key:e.imdbID,movie:e,onCardClick:function(){return N(e.imdbID)}})})):r.a.createElement(W.a,{className:e.loadingContainer},r.a.createElement(te.a,{color:"secondary",size:48})))),r.a.createElement(L.a,{autoHideDuration:6e3,message:C,onClose:k,open:j,action:r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{size:"small","aria-label":"close",color:"inherit",onClick:k},r.a.createElement(A.a,null,"close")))}))},ce=a(221),ie=r.a.createContext({movies:[]}),oe=Object(s.a)((function(e){return Object(u.a)({root:{"& a":{textDecoration:"none",color:"rgba(0,0,0,0.87)"}},resultCard:{marginBottom:16,cursor:"pointer",position:"relative","&:hover":{boxShadow:"0px 5px 5px -3px rgba(0,0,0,0.2),\n                        0px 8px 10px 1px rgba(0,0,0,0.14),\n                        0px 3px 14px 2px rgba(0,0,0,0.12)"}},resultCardContent:{"&:last-child":{paddingBottom:16},"& .material-icons":{position:"absolute",right:16,top:20},"& h2":{width:"calc(100% - 28px)",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}}})}));var le=function(){var e=oe(),t=Object(n.useContext)(ie);return t.movies&&t.movies.length?t.movies.map((function(t){return r.a.createElement("div",{className:e.root,key:t.imdbID},r.a.createElement(d.b,{to:"/detail/"+t.imdbID},r.a.createElement(F.a,{className:e.resultCard},r.a.createElement($.a,{className:e.resultCardContent},r.a.createElement(E.a,{variant:"h5",component:"h2"},t.Title),r.a.createElement(A.a,null,"visibility")))))})):r.a.createElement(E.a,null,"No results")},se=Object(s.a)((function(e){return Object(u.a)({root:{},searchInput:{marginBottom:16},cardsContainer:{textAlign:"center"},loadingContainer:{height:280,display:"flex",alignItems:"center",justifyContent:"center"}})}));var ue=function(){var e=se(),t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)("Pirate"),s=Object(o.a)(l,2),u=s[0],m=s[1],d=Object(n.useState)(!1),p=Object(o.a)(d,2),f=p[0],b=p[1];return Object(n.useEffect)((function(){b(!1),Y(u).then((function(e){i(e),setTimeout((function(){return b(!0)}),500)})).catch((function(){i([]),setTimeout((function(){return b(!0)}),500)}))}),[u]),r.a.createElement(W.a,{fixed:!0,className:e.root},r.a.createElement("div",null,r.a.createElement("h2",null,"Search"),r.a.createElement(W.a,{fixed:!0},r.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},r.a.createElement(ce.a,{id:"outlined-basic",label:"Search",variant:"outlined",value:u,className:e.searchInput,onChange:function(e){m(e.target.value)}})),f?r.a.createElement(ie.Provider,{value:{movies:c}},r.a.createElement(le,null)):r.a.createElement(W.a,{className:e.loadingContainer},r.a.createElement(te.a,{color:"secondary",size:48})))))},me=Object(s.a)((function(e){var t;return Object(u.a)({root:{textAlign:"center"},contentWrapper:Object(f.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{flexDirection:"row"}),posterContainer:(t={textAlign:"center"},Object(f.a)(t,e.breakpoints.up("sm"),{textAlign:"right"}),Object(f.a)(t,"& img",{width:"100%",maxWidth:300,borderRadius:4}),t),infoContainer:{textAlign:"justify"},loadingContainer:{height:280,display:"flex",alignItems:"center",justifyContent:"center"}})}));function de(e){var t=Object(ae.b)("detail"),a=t.t,n=(t.i18n,[]);return["released","rated","runtime","genre","director","writer","actors","language","country","awards"].forEach((function(t){var c=t.charAt(0).toUpperCase()+t.slice(1),i=e.movie[c];i&&"N/A"!==i&&n.push(r.a.createElement("li",null,a(c),": ",i))})),n}var pe=function(){var e=me(),t=Object(n.useState)({}),a=Object(o.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)(!1),s=Object(o.a)(l,2),u=s[0],m=s[1],d=Object(p.f)().movieId,f=Object(ae.b)();return f.t,f.i18n,Object(n.useEffect)((function(){m(!1),function(e){return q(U+"&i="+e).then((function(e){return e.data})).catch((function(e){return e}))}(d).then((function(e){i(e),setTimeout((function(){return m(!0)}),500)})).catch((function(){i({}),setTimeout((function(){return m(!0)}),500)}))}),[]),Object(n.useEffect)((function(){c.Poster&&setTimeout((function(){return m(!0)}),500)}),[c]),r.a.createElement(W.a,{fixed:!0,className:e.root},u?r.a.createElement("div",null,r.a.createElement("h2",null,c.Title),r.a.createElement("div",{className:e.contentWrapper},r.a.createElement(W.a,{className:e.posterContainer},r.a.createElement("img",{src:c.Poster})),r.a.createElement(W.a,{className:e.infoContainer},r.a.createElement("ul",null,r.a.createElement(de,{movie:c}),c.imdbRating&&r.a.createElement("li",null,"IMDB Rating: ",c.imdbRating)),"N/A"!==c.Plot&&r.a.createElement("p",null,r.a.createElement("b",null,"Plot"),r.a.createElement("br",null),c.Plot)))):r.a.createElement(W.a,{className:e.loadingContainer},r.a.createElement(te.a,{color:"secondary",size:48})))},fe=a(220),be=a(103),he=a.n(be)()({palette:{primary:{50:"#e6f0f5",100:"#c0d9e6",200:"#97c0d5",300:"#6da6c4",400:"#4d93b8",500:"#2e80ab",600:"#2978a4",700:"#236d9a",800:"#1d6391",900:"#125080",A100:"#b4dcff",A200:"#81c4ff",A400:"#4eacff",A700:"#35a0ff",contrastDefaultColor:"light"},secondary:{50:"#f6e8f2",100:"#e7c6de",200:"#d8a0c8",300:"#c879b1",400:"#bc5da1",500:"#b04090",600:"#a93a88",700:"#a0327d",800:"#972a73",900:"#871c61",A100:"#ffc1e7",A200:"#ff8ed4",A400:"#ff5bc0",A700:"#ff41b7",contrastDefaultColor:"light"}}}),ge=[{icon:"home",path:"/",name:"Home"},{icon:"search",path:"/search",name:"Search"}],Ee=Object(s.a)((function(e){return Object(u.a)({root:{display:"flex"},hide:{display:"none"},toolbar:Object(l.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3),width:"100%"}})}));var je=function(){var e=Ee(),t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],i=a[1];return r.a.createElement("div",{className:e.root},r.a.createElement(m.a,null),r.a.createElement(fe.a,{theme:he},r.a.createElement(d.a,null,r.a.createElement(C,{onMenuClick:function(){return i(!c)},open:c}),r.a.createElement(R,{onCloseMenuClick:function(){return i(!1)},open:c,options:ge}),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/detail/:movieId",component:pe}),r.a.createElement(p.a,{path:"/search",component:ue}),r.a.createElement(p.a,{path:"/",component:re}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=a(77),ve=a(169);Oe.a.use(ae.a).init({resources:ve,lng:"fr",interpolation:{escapeValue:!1}});Oe.a;i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e){e.exports=JSON.parse('{"a":"19460d96"}')}},[[112,1,2]]]);
//# sourceMappingURL=main.2e8a42af.chunk.js.map