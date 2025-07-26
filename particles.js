/* particles.js - Particle Background Effect */
class ParticleBackground {
    constructor() {
        this.canvas = document.getElementById('particles-js');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 90; // More particles for richer effect
        this.mouseX = 0;
        this.mouseY = 0;
        this.frameCount = 0;
        this.hue = 200; // For animated color cycling
        this.isLightTheme = document.body.classList.contains('light-theme');
        this.init();
    }

    init() {
        this.resizeCanvas();
        this.createParticles();
        this.animate();
        this.bindEvents();
        this.observeTheme();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                depth: Math.random(), // For parallax
                color: this.getParticleColor(),
                opacity: Math.random() * 0.5 + 0.5
            });
        }
    }

    getParticleColor() {
        // Adapt color to theme
        if (document.body.classList.contains('light-theme')) {
            return `hsl(${this.hue}, 80%, 55%)`;
        } else {
            return `hsl(${this.hue}, 80%, 70%)`;
        }
    }

    drawParticle(particle) {
        const gradient = this.ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.radius * 3
        );
        gradient.addColorStop(0, `rgba(56, 189, 248, ${particle.opacity})`);
        gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        this.ctx.fill();
    }

    updateParticle(particle) {
        // Parallax/depth effect
        particle.x += particle.vx * (0.7 + particle.depth * 0.6);
        particle.y += particle.vy * (0.7 + particle.depth * 0.6);

        // Boundary check
        if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

        // Mouse interaction
        const dx = this.mouseX - particle.x;
        const dy = this.mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) {
            particle.x += dx * 0.015;
            particle.y += dy * 0.015;
        }
    }

    drawConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 110) {
                    // Animated color cycling
                    const color = `hsl(${(this.hue + distance) % 360}, 80%, ${this.isLightTheme ? 55 : 70}% )`;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = color;
                    this.ctx.globalAlpha = 0.18 * (1 - distance / 110);
                    this.ctx.lineWidth = 1.2;
                    this.ctx.stroke();
                    this.ctx.globalAlpha = 1;
                }
            }
        }
    }

    animate() {
        this.hue = (this.hue + 0.3) % 360;
        this.isLightTheme = document.body.classList.contains('light-theme');
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles.forEach(particle => {
            particle.color = this.getParticleColor();
            this.updateParticle(particle);
            this.drawParticle(particle);
        });
        this.drawConnections();
        requestAnimationFrame(() => this.animate());
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.createParticles();
        });
        this.canvas.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
        // Interactive burst on click
        this.canvas.addEventListener('click', (e) => {
            for (let i = 0; i < 12; i++) {
                const angle = (Math.PI * 2 * i) / 12;
                this.particles.push({
                    x: e.clientX,
                    y: e.clientY,
                    vx: Math.cos(angle) * 2.5 * Math.random(),
                    vy: Math.sin(angle) * 2.5 * Math.random(),
                    radius: Math.random() * 2 + 1.5,
                    depth: Math.random(),
                    color: this.getParticleColor(),
                    opacity: 1
                });
            }
            // Limit total particles for performance
            if (this.particles.length > 150) this.particles.splice(0, this.particles.length - 150);
        });
    }

    observeTheme() {
        // Listen for theme changes
        const observer = new MutationObserver(() => {
            this.isLightTheme = document.body.classList.contains('light-theme');
            this.particles.forEach(p => p.color = this.getParticleColor());
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    }
}

// Initialize particle background
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-js';
    document.body.insertBefore(canvas, document.body.firstChild);
    new ParticleBackground();
});
