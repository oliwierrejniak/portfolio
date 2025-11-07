//18.07 import Font Awesome package by Oliwier Rejniak
import '@fortawesome/fontawesome-free/css/all.min.css';
//27.07 adding lazy loading for images
document.addEventListener("DOMContentLoaded", (event) => {
  const loadObserverOptions ={
    rootMargin: '0px 0px 300px 0px',
    threshold: 0
  }

  const lazyLoading = (entries, loadObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const src = entry.target.getAttribute('data-src');
      if (!src) return;

      entry.target.setAttribute('src', src);
      loadObserver.unobserve(entry.target);
    });
  }

  const loadObserver = new IntersectionObserver(lazyLoading, loadObserverOptions);

  const images = document.getElementsByTagName('img');

  Array.from(images).forEach((image) => {
    const hasSrc = image.hasAttribute('src');
    const hasDataSrc = image.hasAttribute('data-src');
    const isNoLazy = image.classList.contains('no-lazy');
    if (!isNoLazy && hasDataSrc) {
      loadObserver.observe(image);
    }
    if (!hasDataSrc && !hasSrc) {
      image.setAttribute('src', '/media/placeholder.png');
    }
    
  });
});
/*8.10 swithcing projects by display none and block*/

document.addEventListener('DOMContentLoaded', (event) => {
  const radios = document.querySelectorAll('input[name="whyMe"]');

  const frontEndContainer = document.querySelector('.frontEndContainer');
  const webDevelopmentContainer = document.querySelector('.webDevelopmentContainer');
  function updateView() {
    if (frontEndContainer) frontEndContainer.style.display = 'none';
    if (webDevelopmentContainer) webDevelopmentContainer.style.display = 'none';

    const checked = document.querySelector('input[name="whyMe"]:checked');
    if (!checked) return;

    if (checked.id === 'whyMeFrontEnd' || checked.value === 'frontEnd') {
      if (frontEndContainer) frontEndContainer.style.display = 'block';
    } else if (checked.id === 'whyMeWebDevelopment' || checked.value === 'webDevelopment') {
      if (webDevelopmentContainer) webDevelopmentContainer.style.display = 'block';
    }
  }
  updateView();
  radios.forEach(r => r.addEventListener('change', updateView));
})

