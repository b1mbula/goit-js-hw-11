import{i as n,S as c}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function m(o){const t="https://pixabay.com",s="/api/",i=new URLSearchParams({key:"44400646-52d28046ae8ecec8adffea605",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${t}${s}?${i}`;return fetch(e).then(r=>r.json())}function u(o){return o.hits.map(t=>`<li class="gallery-item">
    <a href=${t.largeImageURL}>
     <img
      class="gallery-image"
      src= ${t.webformatURL}
      alt=${t.tags}
     />
    </a>
    <div class="image-container">
      <ul class="text-list">
        <li>
          <h3>Likes</h3>
          <p class="image-description">${t.likes}</p>
        </li>
        <li>
          <h3>Views</h3>
          <p class="image-description">${t.views}</p>
        </li>
        <li>
          <h3>Comments</h3>
          <p class="image-description">${t.comments}</p>
        </li>
        <li>
          <h3>Downloads</h3>
          <p class="image-description">${t.downloads}</p>
        </li>
      </ul>
    </div>
  </li>`)}const l=document.querySelector(".form-search"),p=document.querySelector(".gallery");l.addEventListener("submit",o=>{o.preventDefault();const t=l.elements.request.value;m(t).then(s=>{s.hits.length||n.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",progressBarColor:"white"});const i=u(s);p.innerHTML=i,console.log(s)}).catch(s=>{console.log(s)}),l.reset()});new c(".gallery a",{});
//# sourceMappingURL=commonHelpers.js.map
