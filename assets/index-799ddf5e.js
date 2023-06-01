(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}})();const k=88,M=document.querySelector("#transparency"),W=document.querySelector("#width"),_=document.querySelector("#currentSize"),L=document.querySelector("#position-x"),B=document.querySelector("#position-y"),$=document.getElementById("resetButton"),j=document.getElementById("closeMain"),G=document.getElementById("how"),h=document.getElementById("how-form"),T=document.querySelector("#imageInput"),H=document.getElementById("backgroundInput"),r=document.querySelector("#menearea"),p=document.getElementById("the-form"),F=document.getElementById("upload-mene"),q=document.getElementById("reset-container"),K=document.getElementById("download"),V=document.getElementById("installButton"),I=document.getElementById("installButtonContainer"),J=document.getElementById("backToSealsButton"),x=document.getElementById("loadingMessage"),f=document.getElementById("instructions-container");function R(){const e=`
    <div class="wordart superhero">
        <div class="logo-ball"></div>
        <h1 class="text">WaterMene</h1>
    </div>
    
    <ol>
        <li>Envie o seu Mene</li>
        <li>Escolha, ou envie, um selo/marca d'água</li>
        <li>Posicione</li>
        <li>Faça download!<span class="news-badge">**</span></li>

        <li class="warning">
        **Atenção: <br>Nem todos os watermenes são compliance com a regras do grupo. Contacte o SAC/Moderação em caso de dúvida.
        </li>
    </ol>
    
    `;f.innerHTML=e,l(f)}function Q(){i(f),f.innerHTML=""}R();const v=document.getElementById("main"),A=document.getElementById("closeMain");function X(){if(!v.classList.contains("closed")){v.classList.add("closed"),A.classList.add("closed");return}A.classList.remove("closed"),v.classList.remove("closed")}function Y(e){const t=document.querySelector("#how-form .visible");t==null||t.classList.remove("visible"),t==null||t.classList.add("hidden"),console.log("removed"),document.getElementById(e).classList.add("visible"),document.getElementById(e).classList.remove("hidden")}function Z(e){const t=e.target;Y(t.value)}function ee(){p.reset(),H.value="",T.value=""}function te(){ee(),R(),l(F),i(h),i(p),i(q)}function y(e){if(!e.classList.contains("hidden")){i(e);return}l(e)}function l(e){e.classList.remove("hidden")}function i(e){e.classList.add("hidden")}function ne(){te(),ue(),O(),U(0,0)}function oe(e){x.innerHTML=`<div class="loadingHeart"><div class="lds-heart"><div></div></div></div> Carregando Selos, aguarde... (#${e}) `}function se(){i(x)}let S=null,g=k;function D(e){S=e}function ce(){return S}function ae(e){const t=ce();if(t){const c=parseInt(L.value,10),s=parseInt(B.value,10),o=g,n=g/t.width*t.height,a=parseFloat(M.value||"0.5");e.globalAlpha=a,e.drawImage(t,c,s,o,n),e.globalAlpha=1}}function P(){i(h),l(p)}function ie(e){e.preventDefault(),l(h),i(p)}function re(e){const c=e.target.files[0],s=new FileReader;s.onload=function(o){const n=new Image;n.onload=function(){D(n),d()},n.src=o.target.result},s.readAsDataURL(c),P()}function de(e){D(e),d(),P()}function le(e){const t=e.target;g=parseInt(t.value,10),_.innerHTML=`${g}px;`,d()}function ue(){S=null,g=k}let w=null;function O(e){(e||r.getContext("2d")).clearRect(0,0,r.width,r.height)}function U(e,t){r.width=e,r.height=t}function d(){w!==null&&cancelAnimationFrame(w),w=requestAnimationFrame(()=>{const e=r.getContext("2d");e&&(O(e),he(e),ae(e))})}function ge(){const e=r.toDataURL("image/png"),t=document.createElement("a");t.href=e,t.download="watermene.png",document.body.appendChild(t),t.click(),document.body.removeChild(t)}let z=null;function me(e){z=e}function fe(){return z}function he(e){const t=fe();if(t){const{width:c,height:s}=N(t);e.drawImage(t,0,0,c,s)}}function N(e){return{width:960,height:960/(e.width/e.height)}}function pe(){Q(),y(F),y(q),y(h)}function ve(e){const c=e.target.files[0],s=new FileReader;s.onload=o=>{const n=new Image;n.onload=()=>{me(n);const{width:a,height:m}=N(n);L.setAttribute("max",""+a),B.setAttribute("max",""+m),U(a,m),d()},n.src=o.target.result},s.readAsDataURL(c),pe()}H.addEventListener("change",ve);j.addEventListener("click",X);K.addEventListener("click",ge,!1);G.addEventListener("change",Z);T.addEventListener("change",re);$.addEventListener("click",ne);W.addEventListener("change",le);M.addEventListener("input",d);L.addEventListener("input",d);B.addEventListener("input",d);J.addEventListener("click",ie);let u;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),u=e,l(I)});V.addEventListener("click",()=>{u&&(u.prompt(),u.userChoice.then(e=>{e.outcome==="accepted"?console.log("App installed successfully!"):console.log("App installation canceled."),u=void 0,i(I)})),i(I)});const C="data-counter",ye=document.getElementById("slider"),E=[];async function we(){let e=0,t=!1;for(;!t;)oe(e),await fetch(`seals/seal_${e}.png`,{method:"HEAD"}).then(c=>{if(c.status===404){t=!0,se();return}E.push(`${e}`),e++});return Promise.resolve()}we().then(()=>{for(let e=0;e<E.length;e++){console.log("creating el ",e);const t=document.createElement("button");t.setAttribute(C,E[e]),t.classList.add("slide"),t.addEventListener("click",function(){const n=this.getElementsByTagName("img")[0];de(n)});const c=n=>{console.log("intercepted"),setTimeout(()=>{n.forEach(a=>{if(a.isIntersecting){const m=a.target.getAttribute(C),b=document.createElement("img");b.setAttribute("src","seals/seal_"+m+".png"),a.target.appendChild(b),s.unobserve(a.target)}})},750)},s=new IntersectionObserver(c),o=t;s.observe(o),ye.appendChild(t)}});
