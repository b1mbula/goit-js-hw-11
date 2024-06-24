import{a as m,S as L,i as d}from"./assets/vendor-b0d10f48.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();m.defaults.baseURL="https://pixabay.com/api/";m.defaults.params={key:"44400646-52d28046ae8ecec8adffea605",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15};async function h(r,e){const i=`/?${new URLSearchParams({q:r,page:e})}`;return(await m.get(i)).data}function f(r){return r.hits.map(e=>`<li class="gallery-item">
    <a href=${e.largeImageURL} class="gallery-link">
     <img
      class="gallery-image"
      src= ${e.webformatURL}
      alt=${e.tags}
     />
    </a>
    <div class="image-container">
      <ul class="text-list">
        <li>
          <h3>Likes</h3>
          <p class="image-description">${e.likes}</p>
        </li>
        <li>
          <h3>Views</h3>
          <p class="image-description">${e.views}</p>
        </li>
        <li>
          <h3>Comments</h3>
          <p class="image-description">${e.comments}</p>
        </li>
        <li>
          <h3>Downloads</h3>
          <p class="image-description">${e.downloads}</p>
        </li>
      </ul>
    </div>
  </li>`).join("")}const u=document.querySelector(".loader");u.style.display="none";const b=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,widthRatio:1,height:"500px"}),c=document.querySelector(".form-search"),p=document.querySelector(".gallery"),g=document.querySelector(".load-btn");let o=1,l="",y=1;const v=15;c.addEventListener("submit",async r=>{if(r.preventDefault(),o=1,u.style.display="block",l=c.elements.request.value.trim(),!l)d.show({message:"Please,  enter a picture",messageColor:"white",backgroundColor:"red",progressBarColor:"white"});else try{const e=await h(l,o);y=Math.ceil(e.totalHits/v),u.style.display="none",e.hits.length||d.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",progressBarColor:"white"});const a=f(e);p.innerHTML=a,w(),b.refresh()}catch(e){console.log(e)}c.elements.request.value=""});g.addEventListener("click",async()=>{o++;const r=await h(l,o),e=f(r);p.insertAdjacentHTML("beforeend",e),S(),w()});function w(){o>=y?C():P()}function P(){g.classList.remove("hidden")}function C(){g.classList.add("hidden"),d.show({message:"We are sorry, but you have reached the end of search results",messageColor:"white",backgroundColor:"red",progressBarColor:"white"})}function S(){const e=p.children[0].getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
