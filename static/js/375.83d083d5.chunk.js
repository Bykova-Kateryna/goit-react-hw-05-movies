"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[375],{245:function(n,e,i){i.d(e,{a:function(){return c}});var t,r=i(243),o=i(168),a=i(444).ZP.div(t||(t=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),s=i(184),c=function(){return(0,s.jsx)(a,{children:(0,s.jsx)(r.ne,{height:"80",width:"80",color:"#2384F5",ariaLabel:"hearts-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},375:function(n,e,i){i.r(e),i.d(e,{default:function(){return U}});var t,r,o,a,s,c,l,d,p,x=i(885),h=i(791),u=i(731),m=i(470),g=i(168),f=i(444),j=(0,f.ZP)(u.OL)(t||(t=(0,g.Z)(["\n  border: 2px solid #abb4be;\n  padding: 5px;\n  text-decoration: none;\n  color: black;\n  font-size: 16px;\n\n  &:hover,\n  &:focus {\n    color: #2384f5;\n  }\n"]))),v=f.ZP.main(r||(r=(0,g.Z)(["\n  margin-top: 24px;\n"]))),b=f.ZP.section(o||(o=(0,g.Z)(["\n  margin-top: 15px;\n  display: flex;\n"]))),Z=f.ZP.div(a||(a=(0,g.Z)(["\n  margin-left: 15px;\n"]))),w=f.ZP.h2(s||(s=(0,g.Z)(["\n  margin-bottom: 15px;\n  margin-top: 15px;\n"]))),_=f.ZP.h3(c||(c=(0,g.Z)(["\n  margin-bottom: 15px;\n  margin-top: 15px;\n"]))),P=f.ZP.h4(l||(l=(0,g.Z)(["\n  margin-bottom: 15px;\n  margin-top: 15px;\n"]))),k=f.ZP.div(d||(d=(0,g.Z)(["\n  margin-top: 5px;\n  padding: 24px 15px;\n  border: 2px solid #abb4be;\n"]))),y=f.ZP.ul(p||(p=(0,g.Z)(["\n  margin-top: 24px;\n  padding-left: 15px;\n"]))),C=i(245),S=i(184),U=function(){var n,e,i=(0,h.useState)(null),t=(0,x.Z)(i,2),r=t[0],o=t[1],a=(0,h.useState)(!1),s=(0,x.Z)(a,2),c=s[0],l=s[1],d=(0,m.UO)().movieId,p=(0,m.TH)(),g=new Date;return(0,h.useEffect)((function(){l(!0),fetch("".concat("https://api.themoviedb.org/3/","movie/").concat(d,"?api_key=").concat("2aeb67ea92a5fcd35004195f81b34bb6")).then((function(n){return n.json()})).then((function(n){return o(n)}),l(!1))}),[d]),(0,S.jsxs)(S.Fragment,{children:[c&&(0,S.jsx)(C.a,{}),r&&(0,S.jsxs)(v,{children:[(0,S.jsxs)(j,{to:null!==(n=null===(e=p.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:[" ","\u27f8 Go back"]}),(0,S.jsxs)(b,{children:[(0,S.jsx)("div",{children:(0,S.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r.poster_path),alt:r.original_title,width:650})}),(0,S.jsxs)(Z,{children:[(0,S.jsxs)(w,{children:[r.original_title," ("," ",g.getFullYear(r.release_date)," )"]}),(0,S.jsxs)("p",{children:["User Score: ",Math.round(10*r.vote_average),"%"]}),(0,S.jsx)(_,{children:"Overview"}),(0,S.jsx)("p",{children:r.overview}),(0,S.jsx)(P,{children:"Genres"}),(0,S.jsx)("p",{children:r.genres.map((function(n){return n.name})).join(", ")})]})]}),(0,S.jsxs)(k,{children:[(0,S.jsx)("p",{children:"Additional Information"}),(0,S.jsxs)(y,{children:[(0,S.jsx)("li",{children:(0,S.jsx)(u.rU,{to:"/movies/".concat(d,"/cast"),children:"Cast"})}),(0,S.jsxs)("li",{children:[" ",(0,S.jsx)(u.rU,{to:"/movies/".concat(d,"/reviews"),children:"Reviews"})]})]})]}),(0,S.jsx)(m.j3,{})]})]})}}}]);
//# sourceMappingURL=375.83d083d5.chunk.js.map