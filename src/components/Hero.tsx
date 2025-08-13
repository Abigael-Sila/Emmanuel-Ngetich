import { useEffect, useRef } from 'react';
import { ChevronDown, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -200, y: -200 };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }

      update() {
        if (this.x > canvas!.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas!.height || this.y < 0) this.speedY *= -1;
        this.x += this.speedX;
        this.y += this.speedY;
      }

      draw() {
        ctx!.fillStyle = 'rgba(255, 215, 0, 0.6)';
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = (canvas!.width * canvas!.height) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const resizeCanvas = () => {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      init();
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const distance = Math.sqrt(
            (particles[a].x - particles[b].x) ** 2 +
            (particles[a].y - particles[b].y) ** 2
          );

          if (distance < 100) {
            opacityValue = 1 - (distance / 100);
            ctx!.strokeStyle = `rgba(255, 215, 0, ${opacityValue * 0.3})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(particles[a].x, particles[a].y);
            ctx!.lineTo(particles[b].x, particles[b].y);
            ctx!.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-navy text-lightest-slate relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>
      <div className="absolute top-0 left-0 w-full h-full bg-navy opacity-80 z-10"></div>
      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          <style>{`
            @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
            @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
            .fade-in-up-1 { animation: fadeInUp 0.8s ease-out 0.2s both; }
            .fade-in-up-2 { animation: fadeInUp 0.8s ease-out 0.4s both; }
            .fade-in-up-3 { animation: fadeInUp 0.8s ease-out 0.6s both; }
            .fade-in-up-4 { animation: fadeInUp 0.8s ease-out 0.8s both; }
            .fade-in-up-5 { animation: fadeInUp 0.8s ease-out 1.0s both; }
          `}</style>
          
          <h2 className="text-lg md:text-xl text-gold mb-4 font-mono fade-in-up-1">
            Hi, my name is
          </h2>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 text-white fade-in-up-2">
            Emmanuel Kiprono Ngetich.
          </h1>
          
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate mb-8 fade-in-up-3">
            I build things for the web and beyond.
          </h3>

          <p className="text-lg text-light-slate max-w-2xl mx-auto leading-relaxed mb-10 fade-in-up-4">
            I'm an Electrical & Telecommunications Engineer with a passion for creating innovative solutions. 
            My expertise spans from IoT and renewable energy to developing robust full-stack applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in-up-5">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-transparent border-2 border-gold text-gold px-8 py-3 rounded-md font-semibold transition-all duration-300 ease-in-out
              hover:bg-gold hover:text-navy hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transform hover:-translate-y-1"
            >
              Check out my work!
            </button>
          </div>

          <div className="flex justify-center space-x-6 fade-in-up-5">
              <a href="mailto:your-email@example.com" title="Email Me" className="text-light-slate hover:text-gold transition-all duration-300 transform hover:-translate-y-1">
              <Mail size={24} />
            </a>
            <a href="#" title="LinkedIn Profile" className="text-light-slate hover:text-gold transition-all duration-300 transform hover:-translate-y-1">
              <Linkedin size={24} />
            </a>
            <a href="#" title="GitHub Profile" className="text-light-slate hover:text-gold transition-all duration-300 transform hover:-translate-y-1">
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => scrollToSection('about')}
          className="text-light-slate hover:text-gold transition-colors duration-300 animate-bounce p-2"
          title="Scroll to About Section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;