"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(n,t,e){e.r(t),e.d(t,{default:function(){return u}});var a,i,r,o=e(885),c=e(791),p=e(470),s=e(168),d=e(444),m=d.ZP.section(a||(a=(0,s.Z)(["\n  margin-top: 5px;\n  padding: 24px 15px;\n  border: 2px solid #abb4be;\n"]))),h=d.ZP.li(i||(i=(0,s.Z)(["\n  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),\n    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);\n  padding-top: 5px;\n  padding-bottom: 10px;\n  padding-left: 5px;\n  margin-bottom: 15px;\n  &:last-child {\n    margin-bottom: 0px;\n  }\n"]))),g=d.ZP.p(r||(r=(0,s.Z)(["\n  margin-top: 10px;\n"]))),l=e(184),u=function(){var n=(0,c.useState)(null),t=(0,o.Z)(n,2),e=t[0],a=t[1],i=(0,p.UO)().movieId;return(0,c.useEffect)((function(){fetch("".concat("https://api.themoviedb.org/3/","movie/").concat(i,"/credits?api_key=").concat("2aeb67ea92a5fcd35004195f81b34bb6","&language=en-US")).then((function(n){return n.json()})).then((function(n){return a(n.cast)}))}),[i]),(0,l.jsx)(l.Fragment,{children:e&&(0,l.jsx)(m,{children:(0,l.jsx)("ul",{children:e.map((function(n){return(0,l.jsxs)(h,{children:[(0,l.jsx)("img",{src:n.profile_path?"https://image.tmdb.org/t/p/w500".concat(n.profile_path):"https://i.kym-cdn.com/photos/images/original/002/020/910/1b5.jpg",alt:n.name,width:100}),(0,l.jsx)(g,{children:n.name}),(0,l.jsxs)(g,{children:["Character: ",n.character]})]},n.id)}))})})})}}}]);
//# sourceMappingURL=387.8d6c04bc.chunk.js.map