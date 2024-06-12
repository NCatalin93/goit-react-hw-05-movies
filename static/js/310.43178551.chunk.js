"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[310],{687:function(n,t,e){e.d(t,{Hq:function(){return s},Hx:function(){return d},Tg:function(){return u},Y5:function(){return p},xc:function(){return l}});var r=e(861),o=e(757),i=e.n(o),a=e(16);a.Z.defaults.baseURL="https://api.themoviedb.org/3",a.Z.defaults.params={api_key:"b84e9c161b0f5b3faa952c3a5a13ff25",include_adult:!1};var c="https://image.tmdb.org/t/p/w500",u=function(){var n=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",a.Z.get("/trending/all/day?").then((function(n){return n.data.results.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return{id:t,title:e,poster:c+r}}))})).catch((function(n){console.log(n.message)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",a.Z.get("/search/movie?query=".concat(t)).then((function(n){return n.data.results.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return{id:t,title:e,poster:c+r}}))})).catch((function(n){console.log(n.message)})));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(n){return a.Z.get("/movie/".concat(n,"?")).then((function(n){var t=n.data,e=t.id,r=t.poster_path,o=t.title,i=t.release_date,a=t.vote_average,u=t.overview,s=t.genres;return{id:e,poster:c+r,title:o,releaseYear:new Date(i).getFullYear(),userScore:Math.round(10*a),overview:u,genres:s}})).catch((function(n){console.log(n.message)}))},l=function(n){return a.Z.get("/movie/".concat(n,"/credits?")).then((function(n){return n.data.cast.map((function(n){var t=n.id,e=n.name,r=n.character;n.profile_path;return{id:t,name:e,character:r}}))})).catch((function(n){console.log(n.message)}))},d=function(n){return a.Z.get("/movie/".concat(n,"/reviews?")).then((function(n){return n.data.results.map((function(n){return{id:n.id,author:n.author,content:n.content}}))})).catch((function(n){console.log(n.message)}))}},310:function(n,t,e){e.r(t),e.d(t,{default:function(){return Y}});var r,o,i,a,c,u,s,p,l,d=e(861),f=e(439),x=e(757),h=e.n(x),g=e(791),m=e(87),b=e(689),v=e(687),Z=e(168),w=e(867),y=w.ZP.div(r||(r=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),k=w.ZP.form(o||(o=(0,Z.Z)(["\n    margin-top: 5px;\n    max-width: 600px;\n    display: flex;\n    jastyfy-contenr: center\n    max-width: 600px;;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n}"]))),_=w.ZP.input(i||(i=(0,Z.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    color: #3f51b550;\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),j=w.ZP.button(a||(a=(0,Z.Z)(["\n  display: inline-block;\n  border: 0;\n  //   background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  color: #3f51b5;\n  &:hover {\n    opacity: 1;\n  }\n"]))),P=w.ZP.ul(c||(c=(0,Z.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100%;\n  margin-top: 0;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  padding: 0;\n"]))),q=w.ZP.li(u||(u=(0,Z.Z)(["\n  background: rgb(255, 255, 255);\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  width: 100%;\n  max-width: 200px;\n  margin: 10px;\n  border-radius: 5px;\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  transition-duration: 300ms;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.03);\n    box-shadow: rgb(0 0 0 / 8%) 0px 10px 25px;\n  }\n"]))),z=(0,w.ZP)(m.rU)(s||(s=(0,Z.Z)(["\n  text-decoration: none;\n"]))),H=w.ZP.img(p||(p=(0,Z.Z)(["\n  padding: 0px;\n  margin: 0px;\n  height: 260px;\n  width: 100%;\n  display: block;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n"]))),S=w.ZP.div(l||(l=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 5px;\n  margin: 0px;\n  font-size: 10px;\n  color: #3f51b5;\n"]))),C=e(184),Y=function(){var n=(0,g.useState)(""),t=(0,f.Z)(n,2),e=t[0],r=t[1],o=(0,g.useState)([]),i=(0,f.Z)(o,2),a=i[0],c=i[1],u=(0,m.lr)(""),s=(0,f.Z)(u,2),p=s[0],l=s[1],x=(0,b.TH)(),Z=p.get("query");(0,g.useEffect)((function(){Z&&(0,v.Hq)(Z).then(c)}),[Z]);var w=function(){var n=(0,d.Z)(h().mark((function n(t){var o;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,(0,v.Hq)(e);case 3:o=n.sent,c(o),l({query:e}),r("");case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(y,{children:(0,C.jsxs)(k,{onSubmit:w,children:[(0,C.jsx)(_,{type:"text",value:e,onChange:function(n){r(n.target.value)}}),(0,C.jsx)(j,{type:"submit",children:"search"})]})}),a.length>0&&(0,C.jsx)(P,{children:a.map((function(n){var t=n.id,e=n.title,r=n.poster;return(0,C.jsx)(q,{children:(0,C.jsxs)(z,{to:"/movies/".concat(t),state:{from:x},children:[(0,C.jsx)(H,{src:r,alt:e}),(0,C.jsx)(S,{children:(0,C.jsx)("h3",{children:e})})]})},t)}))})]})}}}]);
//# sourceMappingURL=310.43178551.chunk.js.map