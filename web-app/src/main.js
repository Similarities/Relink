
const parent = document.getElementById("particles");
const size = 30;
const particles = Array.from({ length: size }, () => new Particle(parent, Math.random() * 500));

function update() {
    particles.forEach(particle => {
        particle.update();
    });
}

setInterval(update, 10);
