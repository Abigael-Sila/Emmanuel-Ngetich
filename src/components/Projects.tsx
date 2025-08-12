import { ExternalLink, Github, Shield, Zap, Wifi, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'IoT-Based Fire Detection System & Emergency Door',
      description: 'Advanced fire detection system with automated emergency response capabilities, featuring real-time monitoring, smart sensors, and automatic door control for enhanced safety.',
      icon: Shield,
      technologies: ['IoT', 'Sensors', 'Microcontrollers', 'Real-time Systems'],
      features: [
        'Real-time fire detection using multiple sensor types',
        'Automated emergency door control system',
        'Mobile app notifications and alerts',
        'Cloud-based monitoring dashboard',
        'Integration with building management systems'
      ],
      status: 'Capstone Project',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Smart Energy Monitoring System',
      description: 'Comprehensive energy monitoring solution for residential and commercial applications, featuring real-time consumption tracking and optimization recommendations.',
      icon: Zap,
      technologies: ['IoT', 'Machine Learning', 'Data Analytics', 'Mobile App'],
      features: [
        'Real-time energy consumption monitoring',
        'Predictive analytics for usage patterns',
        'Cost optimization recommendations',
        'Integration with renewable energy sources',
        'User-friendly mobile interface'
      ],
      status: 'In Development',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Wireless Sensor Network for Environmental Monitoring',
      description: 'Distributed sensor network for monitoring environmental parameters in industrial and agricultural settings with long-range communication capabilities.',
      icon: Wifi,
      technologies: ['Wireless Networks', 'Sensor Systems', 'Data Processing', 'LoRaWAN'],
      features: [
        'Long-range wireless communication',
        'Multi-parameter environmental sensing',
        'Low-power consumption design',
        'Scalable network architecture',
        'Real-time data visualization'
      ],
      status: 'Research Project',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Machine Learning-Based Fault Detection',
      description: 'AI-powered system for predictive maintenance and fault detection in electrical systems, reducing downtime and maintenance costs.',
      icon: Database,
      technologies: ['Machine Learning', 'Python', 'TensorFlow', 'Data Analysis'],
      features: [
        'Predictive fault detection algorithms',
        'Historical data analysis and pattern recognition',
        'Automated alert system',
        'Integration with existing SCADA systems',
        'Performance optimization recommendations'
      ],
      status: 'Completed',
      color: 'from-indigo-500 to-cyan-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-darker-navy to-darkest-navy">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-dark-navy/50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-gold-400/50 backdrop-blur-sm"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${project.color} p-3 rounded-lg mr-4`}>
                      <project.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <span className="text-sm text-gold-600 font-medium">{project.status}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start">
                          <span className="text-gold-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-electric-blue/20 text-electric-blue px-3 py-1 rounded-full text-sm font-medium border border-electric-blue/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="flex items-center text-gold-400 hover:text-gold-300 transition-colors duration-300">
                      <ExternalLink size={16} className="mr-1" />
                      View Details
                    </button>
                    <button className="flex items-center text-electric-blue hover:text-cyan-400 transition-colors duration-300">
                      <Github size={16} className="mr-1" />
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;