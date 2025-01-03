const particles = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  const particlesLength = Math.floor(window.innerWidth / 32);

  for (let i = 0; i < particlesLength; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(32, 32, 32);
  particles.forEach((p, index) => {
    p.update();
    p.move();
    p.checkParticles(particles.slice(index));
  });
}

class Particle {
  constructor() {
    // Position
    this.pos = createVector(random(width), random(height));
    // Velocity
    this.vel = createVector(random(-1, 1), random(-1, 1));
    // Size
    this.size = 10;
  }
  // Update movement
  update() {
    this.pos.add(this.vel);
    this.edges();
  }

  // Move single particle
  move() {
    noStroke();
    fill('rgba(255,255,255,1)');
    circle(this.pos.x, this.pos.y, this.size);
  }

  // Deteect edges
  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }

    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }

  // Connect Particles
  checkParticles(particles) {
    particles.forEach(particle => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

      if (d < 120) {
        stroke('rgba(255,255,255,0.1)');
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    });
  }
}
