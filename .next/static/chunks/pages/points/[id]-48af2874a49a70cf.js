(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[438],{8425:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/points/[id]",function(){return n(5703)}])},5703:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSG:function(){return N},default:function(){return S}});var t=n(6734),l=n(6075),a=n.n(l),o=n(3906),r=n(7601),i=n(8951);n(3420);var c=n(1776),d=n(9636),u=n(3916),p=n(6027),m=n(7950),x=n(8757);function h(e){let{src:s}=e,[n,l]=(0,c.useState)(!1),[a,o]=(0,c.useState)(!1),[r,{pause:i,duration:x,sound:h}]=(0,d.Z)(s,{onend:()=>l(!1)}),v=()=>{n?(i(),l(!1)):(r(),l(!0))},j=e=>{if(h){let s=h.seek()+e;h.seek(s),g({min:Math.floor(s/60),sec:Math.floor(s%60)})}},[f,N]=(0,c.useState)({min:0,sec:0}),[S,g]=(0,c.useState)({min:0,sec:0}),[b,_]=(0,c.useState)();return(0,c.useEffect)(()=>{},[n]),(0,c.useEffect)(()=>{let e=setInterval(()=>{if(h){_(h.seek([]));let s=Math.floor(h.seek([])/60),n=Math.floor(h.seek([])%60);g({min:s,sec:n});let t=x/1e3;var e=Math.floor(t%60-n);e<0&&(e=59-n);let l={min:Math.floor(t/60-s),sec:e};console.log(l),N(l)}},100);return()=>clearInterval(e)},[h]),(0,t.jsxs)("div",{className:"playerComponent",children:[(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsxs)("div",{className:"time",children:[(0,t.jsxs)("span",{children:[S.min.toString().padStart(2,"0"),":",S.sec.toString().padStart(2,"0")]}),"\xa0/\xa0",(0,t.jsxs)("span",{children:[f.min.toString().padStart(2,"0"),":",f.sec.toString().padStart(2,"0")]})]}),(0,t.jsx)("input",{type:"range",min:"0",max:x/1e3,default:"0",value:b,className:"timeline py-5",onChange:e=>{h.seek([e.target.value])},onMouseDown:()=>{n?(o(!0),v()):o(!1)},onMouseUp:()=>{a&&v()}})]}),(0,t.jsxs)("div",{className:"playerControllers",children:[(0,t.jsx)("button",{className:"prevTenSecondsButton",onClick:()=>j(-20),children:(0,t.jsx)(m.Pd.Provider,{value:{size:"3em",color:"var(--main-color)"},children:(0,t.jsx)(p.RRT,{})})}),n?(0,t.jsx)("button",{className:"playButton",onClick:v,children:(0,t.jsx)(m.Pd.Provider,{value:{size:"3em",color:"var(--main-color)"},children:(0,t.jsx)(u.civ,{})})}):(0,t.jsx)("button",{className:"playButton",onClick:v,children:(0,t.jsx)(m.Pd.Provider,{value:{size:"3em",color:"var(--main-color)"},children:(0,t.jsx)(u.sT9,{})})}),(0,t.jsx)("button",{className:"nextTenSecondsButton",onClick:()=>j(20),children:(0,t.jsx)(m.Pd.Provider,{value:{size:"3em",color:"var(--main-color)"},children:(0,t.jsx)(p.Aro,{})})})]})]})}var v=n(7832),j=n.n(v);n(9008),n(4256),n(5397),n(6153);let f=e=>{(0,o.useRouter)();let{t:s,lang:n}=(0,x.Z)("common"),l=e.post,c=l.gallery.split(",");return(0,t.jsxs)("main",{className:"px-6 py-6 sm:px-12 md:px-24",children:[(0,t.jsx)(r.tq,{spaceBetween:20,slidesPerView:1,centeredSlides:!0,breakpoints:{480:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:30},1080:{slidesPerView:3,spaceBetween:40}},navigation:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{clickable:!0},loop:!0,scrollbar:{draggable:!0},onSlideChange:()=>console.log("slide change"),onSwiper:e=>console.log(e),modules:[i.tl],className:" mb-10",children:c.map((e,s)=>(0,t.jsxs)(r.o5,{children:[" ",(0,t.jsx)("div",{className:"",children:(0,t.jsx)(j(),{src:e,alt:l.titolo+"-"+s,width:480,height:480,className:"rounded-2xl object-cover aspect-square"})})]},"swiper-slide-"+s))},"player-{ pr._ID }"),(0,t.jsx)(h,{src:l.audio}),(0,t.jsxs)("div",{className:"single-point point-"+l._ID,children:[(0,t.jsx)("h1",{className:"text-4xl pb-6 pt-6 font-bold ".concat(a().variable," font-sans"),children:l.titolo}),(0,t.jsx)("div",{dangerouslySetInnerHTML:{__html:l.descrizione.split(". ").join(".<br /><br />")},className:"pb-12"})]})]})};var N=!0,S=f}},function(e){e.O(0,[874,617,397,637,774,888,179],function(){return e(e.s=8425)}),_N_E=e.O()}]);