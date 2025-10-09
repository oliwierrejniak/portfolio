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
//8.10 smooth scroll to ID's
/*document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementsByTagName('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    })
  })
})*/