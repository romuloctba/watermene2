(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}})();const S=88,m=document.getElementById("instructions-container");function C(){const e=`<ol>
        <li>Envie o Mene no qual quer adicionar a selo.</li>
        <li>Escolha entre os selos disponíveis ou <span class="news-badge">*</span>envie o seu próprio selo.</li>
        <li>Posicione, escolha o tamanho, e altere a transparência.</li>
        <li>Faça download do seu Mene finalizado</li>
        <li class="warning">
        **Atenção: Nem todos os watermenes são compliance com a regras do grupo. Contacte o SAC/Moderação em caso de dúvida.
        </li>
    </ol>
    
    `;m.innerHTML=e,u(m)}function P(){a(m),m.innerHTML=""}C();const b=document.querySelector("#transparency"),I=document.querySelector("#position-x"),v=document.querySelector("#position-y"),R=document.getElementById("resetButton"),z=document.getElementById("sizeSelect"),D=document.getElementById("closeMain"),O=document.getElementById("how"),E=document.getElementById("how-form"),A=document.querySelector("#imageInput"),k=document.getElementById("backgroundInput"),i=document.querySelector("#menearea"),L=document.getElementById("the-form"),F=document.getElementById("upload-mene"),M=document.getElementById("reset-container"),U=document.getElementById("download"),N=document.getElementById("dontInstallButton"),T=document.getElementById("installButton"),g=document.getElementById("installButtonContainer");function _(){L.reset(),k.value="",A.value=""}function G(){_(),C(),u(F),a(E),a(L),a(M)}function p(e){if(!e.classList.contains("hidden")){a(e);return}u(e)}function u(e){e.classList.remove("hidden")}function a(e){e.classList.add("hidden")}let w=null,f=S;function K(e){w=e}function V(){return w}function W(e){const t=V();if(t){const c=parseInt(I.value,10),s=parseInt(v.value,10),o=f,n=f/t.width*t.height,d=parseFloat(b.value||"0.5");e.globalAlpha=d,e.drawImage(t,c,s,o,n),e.globalAlpha=1}}function $(){a(E),u(L)}function j(e){const c=e.target.files[0],s=new FileReader;s.onload=function(o){const n=new Image;n.onload=function(){K(n),r()},n.src=o.target.result},s.readAsDataURL(c),$()}function J(e){const t=e.target;f=parseInt(t.value,10),r()}function Q(){w=null,f=S}let h=null;function q(e){(e||i.getContext("2d")).clearRect(0,0,i.width,i.height)}function x(e,t){i.width=e,i.height=t}function r(){h!==null&&cancelAnimationFrame(h),h=requestAnimationFrame(()=>{const e=i.getContext("2d");e&&(q(e),ee(e),W(e))})}function X(){const e=i.toDataURL("image/png"),t=document.createElement("a");t.href=e,t.download="watermene.png",document.body.appendChild(t),t.click(),document.body.removeChild(t)}let H=null;function Y(e){H=e}function Z(){return H}function ee(e){const t=Z();t&&e.drawImage(t,0,0)}function te(){P(),p(F),p(M),p(E)}function ne(e){const c=e.target.files[0],s=new FileReader;s.onload=o=>{const n=new Image;n.onload=()=>{Y(n),I.setAttribute("max",""+n.width),v.setAttribute("max",""+n.height),x(n.width,n.height),r()},n.src=o.target.result},s.readAsDataURL(c),te()}const y=document.getElementById("main"),B=document.getElementById("closeMain");function oe(){if(!y.classList.contains("closed")){y.classList.add("closed"),B.classList.add("closed");return}B.classList.remove("closed"),y.classList.remove("closed")}function se(e){const t=document.querySelector("#how-form .visible");t==null||t.classList.remove("visible"),t==null||t.classList.add("hidden"),console.log("removed"),document.getElementById(e).classList.add("visible"),document.getElementById(e).classList.remove("hidden")}function ae(e){const t=e.target;se(t.value)}k.addEventListener("change",ne);D.addEventListener("click",oe);O.addEventListener("change",ae);A.addEventListener("change",j);z.addEventListener("change",J);b.addEventListener("input",r);R.addEventListener("click",()=>{G(),Q(),q(),x(0,0)});v.addEventListener("input",r);I.addEventListener("input",r);U.addEventListener("click",X,!1);let l;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),l=e,u(g)});N.addEventListener("click",()=>{a(g)});T.addEventListener("click",()=>{l&&(l.prompt(),l.userChoice.then(e=>{e.outcome==="accepted"?console.log("App installed successfully!"):console.log("App installation canceled."),l=void 0,a(g)})),a(g)});
