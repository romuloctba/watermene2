if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const d=e=>n(e,t),c={module:{uri:t},exports:o,require:d};i[t]=Promise.all(s.map((e=>c[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-30e9d199"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-50b83a3c.css",revision:null},{url:"assets/index-9e24dc4c.js",revision:null},{url:"index.html",revision:"87941143bbbb8cc9706962dd5f338527"},{url:"registerSW.js",revision:"b7831afb0cee59a7618b3f48aeb23fe5"},{url:"favicon.png",revision:"b7454d43b5d204f8c03eadb0a7942903"},{url:"./favicon.png",revision:"b7454d43b5d204f8c03eadb0a7942903"},{url:"manifest.webmanifest",revision:"16bd22a1bd3f6a10bc309c1a6a265d84"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
