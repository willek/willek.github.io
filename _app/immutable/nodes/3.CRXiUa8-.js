import{i as p,s as c,n as l,a as h}from"../chunks/scheduler.D9TtqK9I.js";import{S as u,i as d,e as v,c as b,m as g,k as _,v as x,g as y,w as s,d as $,n as w,o as k,p as q,q as S,r as C,u as H}from"../chunks/index.D15VfNsj.js";import{b as m}from"../chunks/paths.CFOBHrbJ.js";function o(i,{delay:t=0,duration:n=400,easing:e=p}={}){const r=+getComputedStyle(i).opacity;return{delay:t,duration:n,easing:e,css:a=>`opacity: ${a*r}`}}function D(i){let t,n=`<div class="hero-overlay bg-opacity-60"></div> <div class="hero-content text-neutral-content text-center"><div class="max-w-md"><h1 class="mb-5 text-5xl font-bold">Hello there</h1> <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.</p> <button class="btn btn-primary">Get Started</button></div></div> <div class="absolute top-4 right-4 z-1000"><a href="${m}/" class="btn btn-sm btn-circle hover:bg-black hover:text-white absolute bg-white right-2 top-2">✕</a></div>`,e,r;return{c(){t=v("div"),t.innerHTML=n,this.h()},l(a){t=b(a,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),g(t)!=="svelte-1x2awvg"&&(t.innerHTML=n),this.h()},h(){_(t,"class","hero min-h-screen relative"),x(t,"background-image","url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)")},m(a,f){y(a,t,f),r=!0},p:l,i(a){r||(a&&h(()=>{r&&(e||(e=s(t,o,{delay:100,duration:300},!0)),e.run(1))}),r=!0)},o(a){a&&(e||(e=s(t,o,{delay:100,duration:300},!1)),e.run(0)),r=!1},d(a){a&&$(t),a&&e&&e.end()}}}function I(i){return console.log(m),[]}class L extends u{constructor(t){super(),d(this,t,I,D,c,{})}}function M(i){let t,n;return t=new L({}),{c(){w(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){q(t,e,r),n=!0},p:l,i(e){n||(S(t.$$.fragment,e),n=!0)},o(e){C(t.$$.fragment,e),n=!1},d(e){H(t,e)}}}class G extends u{constructor(t){super(),d(this,t,null,M,c,{})}}export{G as component};
