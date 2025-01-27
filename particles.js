// Initialize canvas and context
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

// Enhanced configuration object
const config = {
    particleCount: 120,
    connectionDistance: 150,
    particleSize: {
        min: 2,
        max: 4
    },
    speed: {
        min: 0.2,
        max: 0.8
    },
    colors: {
        particle: '110, 237, 200',
        connection: '110, 237, 200'
    },
    // Add connection animation settings
    connectionAnimation: {
        duration: 0.5, // seconds
        fadeInSpeed: 0.1,
        fadeOutSpeed: 0.05
    }
};

// Canvas resize function
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Initialize canvas size
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Enhanced Particle class
class Particle {
    constructor() {
        this.connections = new Map(); // Track connections to other particles
        this.init();
    }

    init() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        
        const speed = config.speed.min + Math.random() * (config.speed.max - config.speed.min);
        const angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        
        this.radius = config.particleSize.min + 
            Math.random() * (config.particleSize.max - config.particleSize.min);
        
        this.baseRadius = this.radius;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.connectCount = 0;
        
        // Add connection tracking
        this.connections.clear();
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;

        const targetRadius = this.baseRadius * (1 + this.connectCount * 0.2);
        this.radius += (targetRadius - this.radius) * 0.1;
        this.connectCount = 0;

        // Update connections
        for (let [particle, strength] of this.connections) {
            if (!this.shouldBeConnected(particle)) {
                // Fade out connection
                strength -= config.connectionAnimation.fadeOutSpeed;
                if (strength <= 0) {
                    this.connections.delete(particle);
                } else {
                    this.connections.set(particle, strength);
                }
            } else {
                // Fade in connection
                strength = Math.min(1, strength + config.connectionAnimation.fadeInSpeed);
                this.connections.set(particle, strength);
            }
        }
    }

    shouldBeConnected(particle) {
        const dx = this.x - particle.x;
        const dy = this.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < config.connectionDistance;
    }

    checkConnection(particle) {
        if (this.shouldBeConnected(particle)) {
            if (!this.connections.has(particle)) {
                this.connections.set(particle, 0); // Start with 0 strength
                particle.connections.set(this, 0);
            }
        }
    }

    draw() {
        // Draw particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${config.colors.particle}, ${this.opacity})`;
        ctx.fill();

        // Draw connections
        this.connections.forEach((strength, particle) => {
            if (strength > 0) {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(particle.x, particle.y);
                ctx.strokeStyle = `rgba(${config.colors.connection}, ${strength * 0.2})`;
                ctx.lineWidth = strength;
                ctx.stroke();
            }
        });
    }
}

// Create particles array
const particles = Array.from({ length: config.particleCount }, () => new Particle());

// Update connection checking
function updateConnections() {
    particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
            p1.checkConnection(p2);
        });
    });
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    updateConnections();
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate);
}

// Start animation
animate();

// Mouse interaction
let mouse = { x: null, y: null };
const mouseRadius = 150;

canvas.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

canvas.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
});
