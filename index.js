import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{n as t,r as n,t as r}from"./assets/vendor-Cf-BwAG-.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(n(),1);function a(e){return t({baseURL:`https://pixabay.com/api/`,params:{key:`49660701-34943155f6893778b93ecffed`,q:`${e}`,image_type:`photo`,orientation:`horizontal`,safesearch:`true`}}).then(e=>e.data.hits).catch(e=>i.default.show({message:`Ooops, something went wrong, try again. ${e}`,position:`topRight`,messageColor:`#fff`,backgroundColor:`red`}))}var o=e(r(),1),s=null,c=document.querySelector(`.loader`);function l(e){let t=document.querySelector(`.gallery`),n=[];e.forEach(e=>{n.push(`<li class="gallery-item">
	<a class="gallery-link" href="${e.webformatURL}">
  <div class="image-wrapper">
    <img 
      class="gallery-image" 
      src="${e.largeImageURL}" 
      alt="${e.tags}" 
    />
    
    <div class="overlay-box">
      <div class="in-list-container">
        <h2 class="in-list-title">Likes</h2>
        <p class="in-list-p">${e.likes}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Views</h2>
        <p class="in-list-p">${e.views}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Comments</h2>
        <p class="in-list-p">${e.comments}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Downloads</h2>
        <p class="in-list-p">${e.downloads}</p>
      </div>
    </div>
  </div>
</a>
   
</li>`)}),t.innerHTML=n.join(``),s?s.refresh():s=new o.default(`.gallery a`,{captionsData:`alt`,captionDelay:250,download:!0})}function u(){let e=document.querySelector(`.gallery`);e.innerHTML=``,s&&=(s.destroy(),null)}function d(){c.classList.remove(`display-none`)}function f(){c.classList.add(`display-none`)}var p=document.querySelector(`.form`);p.addEventListener(`submit`,m);function m(e){e.preventDefault(),d(),u();let t=p.elements[`search-text`].value;a(t).then(e=>{e.length===0&&i.default.show({message:`Sorry, there are no images matching your search query. Please try again!`,position:`topRight`,messageColor:`#fff`,backgroundColor:`red`}),l(e)}).catch(e=>{i.default.show({message:`Ooops, something went wrong, try again. ${e}`,position:`topRight`,messageColor:`#fff`,backgroundColor:`red`})}).finally(()=>{f()}),p.reset()}
//# sourceMappingURL=index.js.map