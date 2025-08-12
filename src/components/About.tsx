import { Zap, Radio, Cpu, Brain, Globe, Leaf } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Zap, title: 'Control Systems', description: 'Advanced control theory and system design' },
    { icon: Globe, title: 'Satellite Technology', description: 'Satellite communications and systems' },
    { icon: Brain, title: 'AI & Neural Networks', description: 'Fuzzy logic and neural network applications' },
    { icon: Cpu, title: 'Electronics', description: 'Digital and analogue circuit design' },
    { icon: Radio, title: 'Radio Engineering', description: 'RF systems and telecommunications' },
    { icon: Leaf, title: 'Renewable Energy', description: 'Energy audits and sustainable solutions' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-dark-navy to-darker-navy">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-300">
                <p className="text-lg leading-relaxed text-gray-300">
                  As an Electrical and Telecommunications Engineer, I am passionate about leveraging 
                  cutting-edge technology to solve real-world problems. My academic journey has equipped 
                  me with deep expertise in control systems, satellite technology, and advanced electronics.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-300">
                  Beyond formal education, I have cultivated self-taught expertise in machine learning 
                  and artificial intelligence, allowing me to bridge traditional engineering with modern 
                  data-driven solutions. My work focuses on creating intelligent systems that enhance 
                  safety, efficiency, and sustainability.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-300">
                  I believe in the power of interdisciplinary collaboration and continuous learning. 
                  Whether it's developing IoT-based safety systems or conducting energy audits for 
                  renewable energy implementations, I approach each project with innovation and precision.
                </p>
              </div>

              <div className="bg-gradient-to-r from-dark-navy/50 to-gold-900/20 p-6 rounded-lg border border-gold-500/20 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-gold-400 mb-3">Core Interests</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• IoT and Smart Systems Development</li>
                  <li>• Renewable Energy Solutions</li>
                  <li>• Machine Learning Applications in Engineering</li>
                  <li>• Telecommunications Infrastructure</li>
                  <li>• Safety and Emergency Response Systems</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Technical Expertise</h3>
              
              <div className="grid gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-darker-navy/50 border border-gray-700 rounded-lg p-4 hover:shadow-lg hover:shadow-gold-500/10 hover:border-gold-400 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-r from-electric-blue to-gold-500 p-2 rounded-lg">
                        <skill.icon className="text-white" size={20} />
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
      </div>
    </section>
  );
};

export default About;