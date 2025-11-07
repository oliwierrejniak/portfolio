//20.10 generating gallery on projects by PhotoSwipe and data attributes by Oliwier Rejniak
document.addEventListener('DOMContentLoaded', (event) => {
    const postGalleryContainer = document.querySelector('.postGalleryContainer');
    const images = postGalleryContainer.dataset.images.split(',');

    images.forEach(el => {

        const imageData = new Image();
        imageData.src = `/media/${el}`;
        const imageWidth = imageData.width/1.2;
        const imageHeight = imageData.height/1.2;

        const imageLink = document.createElement('a');
        imageLink.setAttribute('href', `/media/${el}`)
        imageLink.setAttribute('data-pswp-width', `${imageWidth}`);
        imageLink.setAttribute('data-pswp-height', `${imageHeight}`);
        imageLink.setAttribute('target', '_blank');

        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', `/media/${el}`);
        postGalleryContainer.appendChild(imageLink);
        imageLink.appendChild(imageElement);
    });
})
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
  gallery: '.postGalleryContainer',
  children: 'a',
  pswpModule: () => import('photoswipe')
});
lightbox.init();