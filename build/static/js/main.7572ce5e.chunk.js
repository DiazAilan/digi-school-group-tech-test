(this["webpackJsonpdigi-school-group-test-tech"]=this["webpackJsonpdigi-school-group-test-tech"]||[]).push([[0],{101:function(e){e.exports=JSON.parse('{"a":"19460d96"}')},112:function(e,t,a){e.exports=a(170)},117:function(e,t,a){},118:function(e,t,a){},169:function(e){e.exports=JSON.parse('{"fr":{"translation":{"common":{"home":"Accueil","search":"Rechercher"},"home":{"vote":"Voter","selected":"S\xe9lectionn\xe9","maxMoviesError":"Vous ne pouvez voter que jusqu\'\xe0 3 films !","info":"Info"},"search":{"noResults":"Aucun r\xe9sultat","noSearch":"Utiliser l\'entr\xe9e de recherche pour commencer"},"detail":{"Released":"Sortie","Rated":"Classification","Runtime":"Dur\xe9e","Genre":"Genre","Director":"R\xe9alisateur/R\xe9alisatrice","Writer":"\xc9crivain","Actors":"Acteurs","Language":"Langue","Country":"Pays","Awards":"Prix","Plot":"Synopsis"}}},"es":{"translation":{"common":{"home":"Inicio","search":"B\xfasqueda"},"home":{"vote":"Votar","selected":"Seleccionada","maxMoviesError":"\xa1Solo puedes votar por hasta 3 pel\xedculas!","info":"Info"},"search":{"noResults":"Sin resultados","noSearch":"Usa la caja de b\xfasqueda para comenzar"},"detail":{"Released":"Lanzamiento","Rated":"Clasificada","Runtime":"Duraci\xf3n","Genre":"G\xe9nero","Director":"Director/a","Writer":"Escritor/a","Actors":"Actores","Language":"Idioma","Country":"Pa\xeds","Awards":"Premios","Plot":"Sinopsis"}}},"en":{"translation":{"common":{"home":"Home","search":"Search"},"home":{"vote":"Vote","selected":"Selected","maxMoviesError":"You can only vote up to 3 movies!","info":"Info"},"search":{"noResults":"No results","noSearch":"Use the search input to start"},"detail":{"Released":"Released","Rated":"Rated","Runtime":"Runtime","Genre":"Genre","Director":"Director","Writer":"Writer","Actors":"Actors","Language":"Language","Country":"Country","Awards":"Awards","Plot":"Plot"}}}}')},170:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=(a(117),a(12)),l=a(60),s=(a(118),a(199)),u=a(225),m=a(219),d=a(36),f=a(41),b=a(11),p=a(201),h=a(203),g=a(204),E=a(69),j=a(3),v=a(94),O=a.n(v),x=Object(s.a)((function(e){return Object(u.a)({root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:Object(b.a)({marginLeft:180,width:"calc(100% - ".concat(180,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)")}),menuButton:{marginRight:36},hide:{display:"none"}})}));var C=function(e){var t=x();return r.a.createElement(p.a,{position:"fixed",className:Object(j.a)(t.appBar,Object(b.a)({},t.appBarShift,e.open))},r.a.createElement(h.a,null,r.a.createElement(g.a,{color:"inherit","aria-label":"open drawer",onClick:function(){e.onMenuClick()},edge:"start",className:Object(j.a)(t.menuButton,Object(b.a)({},t.hide,e.open))},r.a.createElement(O.a,null)),r.a.createElement(E.a,{variant:"h6",noWrap:!0},"BlablaMovie")))},w=a(28),S=a(223),y=a(205),k=a(206),N=a(207),A=a(208),R=a(209),I=a(99),D=a.n(I),P=a(98),B=a.n(P),M=a(18),L=Object(s.a)((function(e){return Object(u.a)({toolbar:Object(l.a)({alignItems:"center",display:"flex",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),drawer:Object(b.a)({flexShrink:0,whiteSpace:"nowrap",width:180},e.breakpoints.up("sm"),{width:240}),drawerOpen:Object(b.a)({width:180,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},e.breakpoints.up("sm"),{width:240}),drawerClose:Object(b.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:0},e.breakpoints.up("sm"),{width:e.spacing(7)+1}),navbarList:{"& a":{textDecoration:"none",color:"rgba(0,0,0,0.87)"}}})}));var z=function(e){var t,a,n=L(),o=Object(w.a)(),c=Object(M.b)().t,i=function(){e.onCloseMenuClick()};return r.a.createElement(S.a,{variant:"permanent",className:Object(j.a)(n.drawer,(t={},Object(b.a)(t,n.drawerOpen,e.open),Object(b.a)(t,n.drawerClose,!e.open),t)),classes:{paper:Object(j.a)((a={},Object(b.a)(a,n.drawerOpen,e.open),Object(b.a)(a,n.drawerClose,!e.open),a))}},r.a.createElement("div",{className:n.toolbar},r.a.createElement(g.a,{onClick:i},"rtl"===o.direction?r.a.createElement(B.a,null):r.a.createElement(D.a,null))),r.a.createElement(y.a,{className:n.navbarList},e.options.map((function(e){return r.a.createElement(d.b,{to:e.path,key:e.id,onClick:i},r.a.createElement(k.a,{button:!0},r.a.createElement(N.a,null,r.a.createElement(A.a,null,e.icon)),r.a.createElement(R.a,{primary:c("common."+e.id)})))}))))},W=a(104),T=a(216),V=a(224),G=a(101),U=a(102),q=a.n(U).a.create({baseURL:"https://www.omdbapi.com/"}),J="?apikey=".concat(G.a);function H(e){return Y(J+"&s="+e).then((function(e){return e.data})).catch((function(e){return e}))}function Y(e){return q.get(e)}var F=a(210),X=a(211),$=a(212),K=a(213),Q=a(214),Z=a(215),_=r.a.createContext({selected:[],toggleMovieSelection:function(e){}}),ee=Object(s.a)((function(e){var t;return Object(u.a)({card:(t={display:"inline-block",margin:"0 8px 16px",width:"100%",textAlign:"left",transition:"all 0.5s",maxWidth:240},Object(b.a)(t,e.breakpoints.up("sm"),{maxWidth:240,width:"calc(50% - 16px)"}),Object(b.a)(t,"& > button",{cursor:"default"}),t),media:{height:280,backgroundSize:"contain",backgroundColor:"#fff"},cardContent:{height:120,transition:"background 0.5s","&.selected":{background:"#5ae080"}},cardAction:{justifyContent:"space-around","& a":{textDecoration:"none",color:"rgba(0,0,0,0.87)"},"& button":{transition:"all 0.5s","&:hover":{background:"#ccc"}}},selected:{color:"#289045"}})}));var te=function(e){var t=ee(),a=Object(n.useState)(!1),o=Object(i.a)(a,2),c=o[0],l=o[1],s=Object(n.useState)(!1),u=Object(i.a)(s,2),m=u[0],f=u[1],b=Object(n.useContext)(_),p=Object(M.b)().t;return Object(n.useEffect)((function(){f(b.selected.includes(e.movie.imdbID))}),[b.selected]),r.a.createElement(F.a,{className:t.card,onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},raised:c||m},r.a.createElement(X.a,null,r.a.createElement($.a,{className:t.media,image:e.movie.Poster,title:e.movie.Title}),r.a.createElement(K.a,{className:m?t.cardContent+" selected":t.cardContent},r.a.createElement(E.a,{gutterBottom:!0,component:"h3"},e.movie.Title),r.a.createElement(E.a,{color:"textSecondary",component:"p"},e.movie.Year))),r.a.createElement(Q.a,{className:t.cardAction},r.a.createElement(Z.a,{size:"small",className:m?t.selected:"",onClick:function(){return e.onVoteClick(e.movie.imdbID)}},p(m?"home.selected":"home.vote")),r.a.createElement(d.b,{to:"/detail/"+e.movie.imdbID},r.a.createElement(Z.a,{size:"small"},p("home.info")))))},ae=a(217),ne=Object(s.a)((function(e){return Object(u.a)({root:{},cardsContainer:{textAlign:"center",paddingLeft:0,paddingRight:0},loadingContainer:{height:280,display:"flex",alignItems:"center",justifyContent:"center"}})}));var re=function(){var e=ne(),t=Object(n.useState)([]),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)([]),s=Object(i.a)(l,2),u=s[0],m=s[1],d=Object(n.useState)(!1),f=Object(i.a)(d,2),b=f[0],p=f[1],h=Object(n.useState)(!1),E=Object(i.a)(h,2),j=E[0],v=E[1],O=Object(n.useState)(""),x=Object(i.a)(O,2),C=x[0],w=x[1],S=Object(M.b)().t,y=function(e){var t=Object(W.a)(u),a=u.indexOf(e);u.includes(e)?t.splice(a,1):u.length<3?t.push(e):(v(!0),w(S("home.maxMoviesError"))),m(t)},k=function(e,t){"clickaway"!==t&&(v(!1),w(""))};return Object(n.useEffect)((function(){p(!1),H("elm-street").then((function(e){c(e.Search),setTimeout((function(){return p(!0)}),500)})).catch((function(e){v(!0),w(e.message),setTimeout((function(){return p(!0)}),500)}))}),[]),r.a.createElement(T.a,{fixed:!0,className:e.root},r.a.createElement("h2",null,S("common.home")),r.a.createElement(T.a,{fixed:!0,className:e.cardsContainer},r.a.createElement(_.Provider,{value:{selected:u,toggleMovieSelection:y}},b?o.map((function(e){return r.a.createElement(te,{key:e.imdbID,movie:e,onVoteClick:function(){return y(e.imdbID)}})})):r.a.createElement(T.a,{className:e.loadingContainer},r.a.createElement(ae.a,{color:"secondary",size:48})))),r.a.createElement(V.a,{autoHideDuration:6e3,message:C,onClose:k,open:j,action:r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{size:"small","aria-label":"close",color:"inherit",onClick:k},r.a.createElement(A.a,null,"close")))}))},oe=a(221),ce=r.a.createContext({movies:[],error:""}),ie=Object(s.a)((function(e){return Object(u.a)({root:{"& a":{textDecoration:"none",color:"rgba(0,0,0,0.87)"}},resultCard:{marginBottom:16,cursor:"pointer",position:"relative","&:hover":{boxShadow:"0px 5px 5px -3px rgba(0,0,0,0.2),\n                        0px 8px 10px 1px rgba(0,0,0,0.14),\n                        0px 3px 14px 2px rgba(0,0,0,0.12)"}},resultCardContent:{"&:last-child":{paddingBottom:16},"& .material-icons":{position:"absolute",right:16,top:20},"& h2":{width:"calc(100% - 28px)",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}}})}));var le=function(){var e=ie(),t=Object(n.useContext)(ce),a=Object(M.b)().t;return t.movies&&t.movies.length?t.movies.map((function(t){return r.a.createElement("div",{className:e.root,key:t.imdbID},r.a.createElement(d.b,{to:"/detail/"+t.imdbID},r.a.createElement(F.a,{className:e.resultCard},r.a.createElement(K.a,{className:e.resultCardContent},r.a.createElement(E.a,{variant:"h5",component:"h2"},t.Title),r.a.createElement(A.a,null,"visibility")))))})):r.a.createElement(E.a,null,t.error||a("search.noResults"))},se=Object(s.a)((function(e){return Object(u.a)({root:{},searchInput:{marginBottom:16},cardsContainer:{textAlign:"center"},loadingContainer:{height:280,display:"flex",alignItems:"center",justifyContent:"center"}})}));var ue=function(){var e=se(),t=Object(n.useState)([]),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)("Pirate"),s=Object(i.a)(l,2),u=s[0],m=s[1],d=Object(n.useState)(!1),f=Object(i.a)(d,2),b=f[0],p=f[1],h=Object(n.useState)(""),g=Object(i.a)(h,2),E=g[0],j=g[1],v=Object(n.useState)("Pirate"),O=Object(i.a)(v,2),x=O[0],C=O[1],w=Object(M.b)().t;return Object(n.useEffect)((function(){x&&H(x).then((function(e){e.Error&&j(e.Error),c(e.Search),p(!0)})).catch((function(e){j(e.message),c([]),p(!0)}))}),[x]),Object(n.useEffect)((function(){if(u){p(!1);var e=setTimeout((function(){C(u)}),1e3);return function(){clearTimeout(e)}}j(w("search.noSearch")),c([]),p(!0)}),[u]),r.a.createElement(T.a,{fixed:!0,className:e.root},r.a.createElement("div",null,r.a.createElement("h2",null,w("common.search")),r.a.createElement(T.a,{fixed:!0},r.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},r.a.createElement(oe.a,{id:"outlined-basic",variant:"outlined",className:e.searchInput,label:w("common.search"),onChange:function(e){m(e.target.value)},value:u})),b?r.a.createElement(ce.Provider,{value:{movies:o,error:E}},r.a.createElement(le,null)):r.a.createElement(T.a,{className:e.loadingContainer},r.a.createElement(ae.a,{color:"secondary",size:48})))))},me=Object(s.a)((function(e){var t;return Object(u.a)({root:{textAlign:"center"},contentWrapper:Object(b.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{flexDirection:"row"}),posterContainer:(t={textAlign:"center"},Object(b.a)(t,e.breakpoints.up("sm"),{textAlign:"right"}),Object(b.a)(t,"& img",{width:"100%",maxWidth:300,borderRadius:4}),t),infoContainer:{textAlign:"justify"},loadingContainer:{height:280,display:"flex",alignItems:"center",justifyContent:"center"}})}));function de(e){var t=Object(M.b)().t,a=[];return["released","rated","runtime","genre","director","writer","actors","language","country","awards"].forEach((function(n){var o=n.charAt(0).toUpperCase()+n.slice(1),c=e.movie[o];c&&"N/A"!==c&&a.push(r.a.createElement("li",null,t("detail."+o),": ",c))})),a}var fe=function(){var e=me(),t=Object(n.useState)({}),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(!1),s=Object(i.a)(l,2),u=s[0],m=s[1],d=Object(f.f)().movieId,b=Object(M.b)().t;return Object(n.useEffect)((function(){m(!1),function(e){return Y(J+"&i="+e).then((function(e){return e.data})).catch((function(e){return e}))}(d).then((function(e){c(e),setTimeout((function(){return m(!0)}),500)})).catch((function(){c({}),setTimeout((function(){return m(!0)}),500)}))}),[]),Object(n.useEffect)((function(){o.Poster&&setTimeout((function(){return m(!0)}),500)}),[o]),r.a.createElement(T.a,{fixed:!0,className:e.root},u?r.a.createElement("div",null,r.a.createElement("h2",null,o.Title),r.a.createElement("div",{className:e.contentWrapper},r.a.createElement(T.a,{className:e.posterContainer},r.a.createElement("img",{src:o.Poster})),r.a.createElement(T.a,{className:e.infoContainer},r.a.createElement("ul",null,r.a.createElement(de,{movie:o}),o.imdbRating&&r.a.createElement("li",null,"IMDB Rating: ",o.imdbRating)),"N/A"!==o.Plot&&r.a.createElement("p",null,r.a.createElement("b",null,b("detail.Plot")),r.a.createElement("br",null),o.Plot)))):r.a.createElement(T.a,{className:e.loadingContainer},r.a.createElement(ae.a,{color:"secondary",size:48})))},be=a(220),pe=a(103),he=a.n(pe)()({palette:{primary:{50:"#e6f0f5",100:"#c0d9e6",200:"#97c0d5",300:"#6da6c4",400:"#4d93b8",500:"#2e80ab",600:"#2978a4",700:"#236d9a",800:"#1d6391",900:"#125080",A100:"#b4dcff",A200:"#81c4ff",A400:"#4eacff",A700:"#35a0ff",contrastDefaultColor:"light"},secondary:{50:"#f6e8f2",100:"#e7c6de",200:"#d8a0c8",300:"#c879b1",400:"#bc5da1",500:"#b04090",600:"#a93a88",700:"#a0327d",800:"#972a73",900:"#871c61",A100:"#ffc1e7",A200:"#ff8ed4",A400:"#ff5bc0",A700:"#ff41b7",contrastDefaultColor:"light"}}}),ge=[{icon:"home",path:"/",id:"home"},{icon:"search",path:"/search",id:"search"}],Ee=Object(s.a)((function(e){return Object(u.a)({root:{display:"flex"},hide:{display:"none"},toolbar:Object(l.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3),width:"100%"}})}));var je=function(){var e=Ee(),t=Object(n.useState)(!1),a=Object(i.a)(t,2),o=a[0],c=a[1];return r.a.createElement("div",{className:e.root},r.a.createElement(m.a,null),r.a.createElement(be.a,{theme:he},r.a.createElement(d.a,{basename:"/digi-school-group-test-tech"},r.a.createElement(C,{onMenuClick:function(){return c(!o)},open:o}),r.a.createElement(z,{onCloseMenuClick:function(){return c(!1)},open:o,options:ge}),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/detail/:movieId",component:fe}),r.a.createElement(f.a,{path:"/search",component:ue}),r.a.createElement(f.a,{path:"/",component:re}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=a(77),Oe=a(169);ve.a.use(M.a).init({resources:Oe,lng:"fr",fallbackLng:"en",interpolation:{escapeValue:!1}});ve.a;c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[112,1,2]]]);
//# sourceMappingURL=main.7572ce5e.chunk.js.map