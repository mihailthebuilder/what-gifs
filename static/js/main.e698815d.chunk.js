(this["webpackJsonpwhat-gifs"]=this["webpackJsonpwhat-gifs"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),i=n(4),o=n.n(i),a=(n(10),n(11),n(2));n(12);function l(e,t){this.key=e,this.title=t}var u=[new l("awkward","Awkward Erm"),new l("bored","Bored Cat"),new l("ohgod","Oh God Reaction"),new l("doggystyle","Doggy Style Fail"),new l("rwow","R & R Wow"),new l("failhome","Fail Home Video"),new l("letmein","Let Me In"),new l("icehockey","Ouch Ice Hockey"),new l("bros","Best Bros Friendship"),new l("weekend","Mood Monday"),new l("office","The Office Get Out")],d=function(e){return 2*e+1},j=function(e,t){for(var n=0,c=0;c<=e;)c+=t(++n);return n},h=function(e,t){for(var n=0,c=1;t(c)<=e.length;c++)n+=t(c);return n}(u,d),f=function(e,t){return t.slice().sort((function(){return.5-Math.random()})).slice(0,e)};function b(e,t){this.current=e,this.best=t}n(13);var p=n.p+"static/media/cat.f1560a6c.png",m=function(e){var t=e.togglePopup;return Object(c.jsx)("header",{className:"font-size-regular",children:Object(c.jsxs)("nav",{children:[Object(c.jsxs)("div",{className:"left-nav-wrapper",children:[Object(c.jsx)("img",{src:p,alt:"Cat"}),Object(c.jsx)("span",{children:"What GIFs"})]}),Object(c.jsx)("div",{className:"right-nav-wrapper",onClick:t,children:"How it works"})]})})},w=(n(14),function(e){var t=e.level,n=e.score;return Object(c.jsxs)("div",{className:"game-data-wrapper font-size-regular",children:[Object(c.jsxs)("div",{className:"level",children:["Level: ",t]}),Object(c.jsxs)("div",{className:"score-wrapper",children:[Object(c.jsxs)("span",{className:"current-score",children:["Current score: ",n.current]}),Object(c.jsxs)("span",{className:"best-score",children:["Best score: ",n.best]})]})]})}),g=(n(15),function(e){var t=e.source,n=e.title,s=e.checkAnswer;return Object(r.useEffect)((function(){var e=document.getElementById(t),n=function(){e.querySelector("img").src="".concat("/what-gifs","/gifs/original/").concat(t,".gif"),e.classList.add("yellow-font")},c=function(){e.querySelector("img").src="".concat("/what-gifs","/gifs/images/").concat(t,".jpg"),e.classList.remove("yellow-font")},r=function(){!function(e){var t=e.getBoundingClientRect(),n=t.top,c=t.bottom;return n>=0&&c<=window.innerHeight}(e)?c():n()};return window.innerWidth>768?(e.addEventListener("mouseenter",n),e.addEventListener("mouseleave",c)):window.addEventListener("scroll",r),function(){e.removeEventListener("mouseenter",n),e.removeEventListener("mouseleave",c),e.removeEventListener("scroll",r)}}),[t]),Object(c.jsxs)("div",{className:"card-wrapper",id:t,onClick:s,children:[Object(c.jsx)("img",{src:"".concat("/what-gifs","/gifs/images/").concat(t,".jpg"),alt:n}),Object(c.jsx)("div",{className:"title font-size-regular",children:n})]})}),v=(n(16),function(e){var t=e.popupShow,n=(e.popupMessage,e.togglePopup),r="popup-background";t&&(r+=" show");var s=window.innerWidth>768;return Object(c.jsx)("div",{className:r,children:Object(c.jsxs)("div",{className:"popup-wrapper",children:[Object(c.jsx)("div",{className:"popup-title font-size-large",children:"How it works"}),Object(c.jsxs)("div",{className:"popup-content font-size-regular",children:[Object(c.jsxs)("p",{children:["Welcome to the ",Object(c.jsx)("span",{className:"frostbite-color",children:"What GIFs"})," ","memory game. The aim of the game is to make sure you don't",s?" click":" tap"," the same GIF in a given level."]}),Object(c.jsxs)("p",{children:["You can play the GIF by",s?" hovering over it":" scrolling it into view",". The maximum score you can get is"," ",Object(c.jsx)("span",{className:"frostbite-color",children:h}),"."]})]}),Object(c.jsx)("button",{className:"font-size-regular",onClick:n,children:"Understood, now let me play the damn game!"})]})})}),O=function(){var e=Object(r.useState)(new b(0,0)),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)(j(0,d)),o=Object(a.a)(i,2),l=o[0],p=o[1],O=Object(r.useState)(!1),x=Object(a.a)(O,2),y=x[0],k=x[1];Object(r.useEffect)((function(){n.current===h?(s(new b(0,h-1)),p(j(0,d)),k(!0)):p(j(n.current,d))}),[n]);var N=Object(r.useState)(f(d(l),u)),S=Object(a.a)(N,2),E=S[0],I=S[1];Object(r.useEffect)((function(){I(f(d(l),u)),C([])}),[l]);var L=Object(r.useState)([]),M=Object(a.a)(L,2),F=M[0],C=M[1],G=function(e){var t=e.target.closest(".card-wrapper").id;F.includes(t)?(s((function(e){return new b(0,e.current>e.best?e.current:e.best)})),C([])):(s((function(e){return new b(e.current+1,e.best)})),C((function(e){return e.concat(t)}))),I((function(e){return e.sort((function(){return.5-Math.random()}))}))},z=Object(r.useState)(!0),B=Object(a.a)(z,2),W=B[0],H=B[1],R=Object(r.useState)("how"),P=Object(a.a)(R,2),A=P[0],T=(P[1],function(){return H((function(e){return!e}))});return Object(c.jsxs)("div",{children:[Object(c.jsx)(v,{popupShow:W,popupMessage:A,togglePopup:T}),Object(c.jsx)(m,{togglePopup:T}),Object(c.jsx)(w,{level:l,score:n}),Object(c.jsx)("button",{className:"regular-font-size",onClick:function(e){k(!1)},disabled:!y,children:"Reset maxScoreReached"}),Object(c.jsxs)("div",{children:["Max score: ",h]}),Object(c.jsxs)("div",{children:["Max score reached? ",y?"yes":"no"," "]}),Object(c.jsx)("div",{className:"instructions",children:window.innerWidth>768?"Hover to play the GIF":"Start scrolling to play the GIFs"}),Object(c.jsxs)("div",{children:["Selected cards: ",F.join(", ")]}),Object(c.jsx)("div",{className:"gif-cards-container",children:E.map((function(e){return Object(c.jsx)(g,{source:e.key,title:e.title,checkAnswer:G},e.key)}))})]})};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.e698815d.chunk.js.map