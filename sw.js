if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const d=e=>n(e,t),l={module:{uri:t},exports:o,require:d};i[t]=Promise.all(s.map((e=>l[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-30e9d199"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-0c02ea2e.js",revision:null},{url:"assets/index-596e65bc.css",revision:null},{url:"index.html",revision:"e92c38d6f2b157e2b2540675e8d828e6"},{url:"registerSW.js",revision:"b7831afb0cee59a7618b3f48aeb23fe5"},{url:"favicon.png",revision:"b7454d43b5d204f8c03eadb0a7942903"},{url:"./favicon.png",revision:"b7454d43b5d204f8c03eadb0a7942903"},{url:"manifest.webmanifest",revision:"16bd22a1bd3f6a10bc309c1a6a265d84"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));