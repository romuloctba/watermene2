(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}})();const E=88,w=document.querySelector("#transparency"),f=document.querySelector("#position-x"),h=document.querySelector("#position-y"),C=document.getElementById("resetButton"),q=document.getElementById("sizeSelect"),x=document.getElementById("closeMain"),M=document.getElementById("how"),p=document.getElementById("how-form"),B=document.querySelector("#imageInput"),S=document.getElementById("backgroundInput"),s=document.querySelector("#menearea"),y=document.getElementById("the-form"),b=document.getElementById("upload-mene"),A=document.getElementById("reset-container"),H=document.getElementById("download");function O(){y.reset(),S.value="",B.value=""}function R(){O(),I(b),d(p),d(y),d(A)}function u(e){if(!e.classList.contains("hidden")){d(e);return}I(e)}function I(e){e.classList.remove("hidden")}function d(e){e.classList.add("hidden")}let L=null,l=E;function U(e){L=e}function z(){return L}function D(e){const t=z();if(t){const c=parseInt(f.value,10),a=parseInt(h.value,10),o=l,n=l/t.width*t.height,i=parseFloat(w.value||"0.5");e.globalAlpha=i,e.drawImage(t,c,a,o,n),e.globalAlpha=1}}function P(){d(p),I(y)}function N(e){const c=e.target.files[0],a=new FileReader;a.onload=function(o){const n=new Image;n.onload=function(){U(n),r()},n.src=o.target.result},a.readAsDataURL(c),P()}function T(e){const t=e.target;l=parseInt(t.value,10),r()}function _(){L=null,l=E}let m=null;function F(e){(e||s.getContext("2d")).clearRect(0,0,s.width,s.height)}function G(e,t){s.width=e,s.height=t}function r(){m!==null&&cancelAnimationFrame(m),m=requestAnimationFrame(()=>{const e=s.getContext("2d");e&&(F(e),$(e),D(e))})}function K(){var e=s.toDataURL("image/png");this.href=e.replace(/^data:image\/[^;]/,"data:application/octet-stream")}let k=null;function V(e){k=e}function W(){return k}function $(e){const t=W();t&&e.drawImage(t,0,0)}function j(){u(b),u(A),u(p)}function J(e){const c=e.target.files[0],a=new FileReader;a.onload=o=>{const n=new Image;n.onload=()=>{V(n),f.setAttribute("max",""+n.width),h.setAttribute("max",""+n.height),G(n.width,n.height),r()},n.src=o.target.result},a.readAsDataURL(c),j()}const g=document.getElementById("main"),v=document.getElementById("closeMain");function Q(){if(!g.classList.contains("closed")){g.classList.add("closed"),v.classList.add("closed");return}v.classList.remove("closed"),g.classList.remove("closed")}function X(e){const t=document.querySelector("#how-form .visible");t==null||t.classList.remove("visible"),t==null||t.classList.add("hidden"),console.log("removed"),document.getElementById(e).classList.add("visible"),document.getElementById(e).classList.remove("hidden")}function Y(e){const t=e.target;X(t.value)}S.addEventListener("change",J);x.addEventListener("click",Q);M.addEventListener("change",Y);B.addEventListener("change",N);q.addEventListener("change",T);w.addEventListener("input",r);C.addEventListener("click",()=>{R(),_(),F()});h.addEventListener("input",r);f.addEventListener("input",r);H.addEventListener("click",K,!1);
