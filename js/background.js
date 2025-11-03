particlesJS("particles-js", {
  "particles": {
    "number": { "value": 40, "density": { "enable": true, "value_area": 700 } },
    "color": { "value": "#00cc55" },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": { "enable": true, "speed": 1, "opacity_min": 0 }
    },
    "size": {
      "value": 60,
      "random": true,
      "anim": { "enable": false }
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "bubble" },
      "onclick": { "enable": true, "mode": "repulse" }
    },
    "modes": {
      "bubble": { "distance": 200, "size": 0 },
      "repulse": { "distance": 200, "duration": 0.4 }
    }
  },
  "retina_detect": true
});