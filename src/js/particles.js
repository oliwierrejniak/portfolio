const options = {
    fullScreen: { enable: false },
    background: { color: '#000' },
    particles: {
      number: {
    value: 60
  },
      links: { enable: true, color: "#fff" },
      move: { enable: true },
      size: { value: { min: 5, max: 5 } },
      color: { value: "#fff" }
    }
}
tsParticles.load("particles", options)