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
}
document.addEventListener("DOMContentLoaded", () => {
  tsParticles.load("particles", options);
});