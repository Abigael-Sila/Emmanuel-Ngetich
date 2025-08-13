import { Zap, Radio, Cpu, Brain, Globe, Leaf } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Zap, title: 'Control Systems', description: 'Designing intelligent feedback systems for precision and efficiency.' },
    { icon: Globe, title: 'Satellite Technology', description: 'Building and optimizing communication systems beyond the atmosphere.' },
    { icon: Brain, title: 'AI & Neural Networks', description: 'Applying fuzzy logic and neural networks to real-world engineering challenges.' },
    { icon: Cpu, title: 'Electronics', description: 'Creating reliable digital and analogue circuits for diverse applications.' },
    { icon: Radio, title: 'Radio Engineering', description: 'Designing robust RF systems for telecommunications and data transfer.' },
    { icon: Leaf, title: 'Renewable Energy', description: 'Delivering sustainable energy audits and green technology solutions.' },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-dark-navy to-darker-navy relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-electric-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-down">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-electric-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio section */}
          <div className="space-y-6 animate-fade-in-left">
            <p className="text-lg leading-relaxed text-gray-300">
              I’m an <span className="text-gold-400 font-semibold">Electrical & Telecommunications Engineer</span> 
              driven by a mission to connect innovation with purpose. My expertise spans control systems, satellite 
              technology, and advanced electronics — blending academic rigor with a creative problem-solving mindset.
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
              Beyond formal training, I’ve mastered <span className="text-gold-400 font-semibold">machine learning</span> 
              and AI applications, enabling me to merge traditional engineering with data-driven intelligence. From 
              IoT-based safety systems to renewable energy audits, I thrive on projects where technology meets human impact.
            </p>

            <p className="text-lg leading-relaxed text-gray-300">
              I believe the future belongs to <span className="text-gold-400 font-semibold">interdisciplinary innovation</span>. 
              Every project is an opportunity to create systems that are smarter, safer, and more sustainable — 
              designed with precision and powered by passion.
            </p>

            {/* Interests box */}
            <div className="bg-gradient-to-r from-dark-navy/60 to-gold-900/10 p-6 rounded-xl border border-gold-500/30 backdrop-blur-sm hover:border-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20">
              <h3 className="text-xl font-semibold text-gold-400 mb-4">Core Interests</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-gold-300 transition-colors duration-200">• IoT & Smart Systems Development</li>
                <li className="hover:text-gold-300 transition-colors duration-200">• Renewable Energy Solutions</li>
                <li className="hover:text-gold-300 transition-colors duration-200">• AI in Engineering Applications</li>
                <li className="hover:text-gold-300 transition-colors duration-200">• Telecommunications Infrastructure</li>
                <li className="hover:text-gold-300 transition-colors duration-200">• Safety & Emergency Response Systems</li>
              </ul>
            </div>
          </div>

          {/* Skills section */}
          <div className="space-y-6 animate-fade-in-right">
            <h3 className="text-2xl font-semibold text-white mb-6 border-b border-gold-500/30 pb-2">Technical Expertise</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-darker-navy/60 border border-gray-700 rounded-xl p-5 
                             hover:shadow-xl hover:shadow-gold-500/10 hover:border-gold-400 
                             transition-all duration-300 transform hover:-translate-y-1 
                             backdrop-blur-sm group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-electric-blue to-gold-500 p-3 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="text-white" size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{skill.title}</h4>
                      <p className="text-gray-400 text-sm">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
