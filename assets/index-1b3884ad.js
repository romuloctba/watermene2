(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(o){if(o.ep)return;o.ep=!0;const t=s(o);fetch(o.href,t)}})();const L=88,h=document.querySelector("#transparency"),g=document.querySelector("#position-x"),m=document.querySelector("#position-y"),v=document.getElementById("resetButton"),E=document.getElementById("sizeSelect"),w=document.getElementById("closeMain"),S=document.getElementById("how"),B=document.querySelector("#imageInput"),b=document.getElementById("backgroundInput"),i=document.querySelector("#menearea"),A=document.getElementById("the-form");function q(){A.reset()}let p=null,l=L;function F(n){p=n}function M(){return p}function C(n){const e=M();if(e){const s=parseInt(g.value,10),c=parseInt(m.value,10),o=l,t=l/e.width*e.height,a=parseFloat(h.value||"0.5");n.globalAlpha=a,n.drawImage(e,s,c,o,t),n.globalAlpha=1}}function O(n){const s=n.target.files[0],c=new FileReader;c.onload=function(o){const t=new Image;t.onload=function(){F(t),r()},t.src=o.target.result},c.readAsDataURL(s)}function k(n){const e=n.target;l=parseInt(e.value,10),r()}const u=i.getContext("2d");function y(){u.clearRect(0,0,i.width,i.height)}function x(n,e){i.width=n,i.height=e}function r(){y(),D(u),C(u)}let I=null;function z(n){I=n}function R(){return I}function D(n){const e=R();e&&n.drawImage(e,0,0)}function P(n){const s=n.target.files[0],c=new FileReader;c.onload=o=>{const t=new Image;t.onload=()=>{z(t),g.setAttribute("max",""+t.width),m.setAttribute("max",""+t.height),x(t.width,t.height),r()},t.src=o.target.result},c.readAsDataURL(s)}const d=document.getElementById("main"),f=document.getElementById("closeMain");function N(){if(!d.classList.contains("closed")){d.classList.add("closed"),f.classList.add("closed");return}f.classList.remove("closed"),d.classList.remove("closed")}function U(n){const e=document.querySelector("#how-form .visible");e==null||e.classList.remove("visible"),e==null||e.classList.add("hidden"),console.log("removed"),document.getElementById(n).classList.add("visible"),document.getElementById(n).classList.remove("hidden")}function H(n){const e=n.target;U(e.value)}b.addEventListener("change",P);w.addEventListener("click",N);S.addEventListener("change",H);B.addEventListener("change",O);E.addEventListener("change",k);h.addEventListener("input",r);v.addEventListener("click",()=>{q(),y()});m.addEventListener("input",r);g.addEventListener("input",r);
