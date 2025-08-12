import { ChevronDown, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-dark-navy via-darker-navy to-darkest-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-gold-400 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-electric-blue blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-cyan-400 blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gold-400 bg-clip-text text-transparent">
              Emmanuel Kiprono Ngetich
            </h1>
            <h2 className="text-2xl md:text-3xl text-electric-blue mb-6 font-semibold">
              Electrical & Telecommunications Engineer
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Passionate about innovative solutions in electrical systems, telecommunications, 
              and emerging technologies. Specializing in IoT, renewable energy, and smart systems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up-delay">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-dark-navy px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gold-500/25"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-dark-navy px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gold-500/25"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up-delay-2">
            <a href="#" title="Email Me" className="text-gray-400 hover:text-gold-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 p-3 rounded-full hover:bg-white/10">
              <Mail size={24} />
            </a>
            <a href="#" title="LinkedIn Profile" className="text-gray-400 hover:text-electric-blue transition-all duration-300 transform hover:scale-110 hover:rotate-12 p-3 rounded-full hover:bg-white/10">
              <Linkedin size={24} />
            </a>
            <a href="#" title="GitHub Profile" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 p-3 rounded-full hover:bg-white/10">
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-white/60 hover:text-gold-400 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
          title="Scroll to About Section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;