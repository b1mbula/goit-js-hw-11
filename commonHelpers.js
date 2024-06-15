(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function a(r){const s="https://pixabay.com",o="/api/",i=new URLSearchParams({key:"44400646-52d28046ae8ecec8adffea605",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${s}${o}?${i}`;return fetch(e).then(t=>t.json())}function u(r){return`<li class="gallery-item">
    <img
      class="gallery-image"
      src= 'fdsa'
      alt=""
      data-source=""
    />
    <div class="image-container">
      <ul class="text-list">
        <li>
          <h3>Likes</h3>
          <p class="image-description">lba</p>
        </li>
        <li>
          <h3>Views</h3>
          <p class="image-description">lba</p>
        </li>
        <li>
          <h3>Comments</h3>
          <p class="image-description">lba</p>
        </li>
        <li>
          <h3>Downloads</h3>
          <p class="image-description">lba</p>
        </li>
      </ul>
    </div>
  </li>`}function c(r){return r.map(u).join("")}c();const l=document.querySelector(".form-search"),m=document.querySelector(".gallery");l.addEventListener("submit",r=>{r.preventDefault();const s=l.elements.request.value;a(s).then(o=>{const i=c(o);m.innerHTML(i)})});
//# sourceMappingURL=commonHelpers.js.map
