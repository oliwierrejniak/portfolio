//18.07 configuration of tsParticles on hero section home by Oliwier Rejniak
import { tsParticles } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const options = {
  fullScreen: { enable: false },
  background: { color: '#131419' },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: "bubble"
      }
    },
    modes: {
      grab: {
        distance: 100,
        links: {
          opacity: 0.5
        }
      }
    }
  },
  particles: {
    number: { value: 100},
    links: { enable: true, color: "#F5F4F6", opacity: 0.3, width: 1, distance: 120 },
    move: { enable: true, speed: 0.3, outModes: "bounce" },
    size: { value: 2 },
    color: { value: "#F5F4F6" },
    opacity: { value: 0.3}
  }
};

loadSlim(tsParticles).then(() => {
  tsParticles.load("particles", options);
});
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