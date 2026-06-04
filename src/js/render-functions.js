import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;
const loader = document.querySelector('.loader');

export function createGallery(images) {
  const galleryContainer = document.querySelector('.gallery');

  if (!galleryContainer) return;

  let createdElements = [];
  images.forEach(image => {
    createdElements.push(`<li class="gallery-item">
	<a class="gallery-link" href="${image.largeImageURL}">
  <div class="image-wrapper">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags}"
    />
    
    <div class="overlay-box">
      <div class="in-list-container">
        <h2 class="in-list-title">Likes</h2>
        <p class="in-list-p">${image.likes}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Views</h2>
        <p class="in-list-p">${image.views}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Comments</h2>
        <p class="in-list-p">${image.comments}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Downloads</h2>
        <p class="in-list-p">${image.downloads}</p>
      </div>
    </div>
  </div>
</a>
   
</li>`);
  });
  galleryContainer.innerHTML = createdElements.join('');

  if (lightbox) {
    lightbox.refresh();
  } else {
    // console.log(SimpleLightbox);
    // console.log(SimpleLightbox.default);
    // console.log('SimpleLightbox =', SimpleLightbox);
    lightbox = new SimpleLightbox.default('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    download: true,});
  }
}
export function clearGallery() {
  const galleryContainer = document.querySelector('.gallery');

  if (!galleryContainer) return;

  galleryContainer.innerHTML = '';

  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }
}
export function showLoader() {
  if (!loader) return;

  loader.classList.remove('display-none');
}

export function hideLoader() {
  if (!loader) return;

  loader.classList.add('display-none');
}