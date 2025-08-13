import { ExternalLink, Github, Shield, Zap, Wifi, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'IoT-Based Fire Detection System & Emergency Door',
      description:
        'An advanced IoT safety system combining multi-sensor fire detection, automated emergency door control, and real-time alerts for faster, smarter emergency responses.',
      icon: Shield,
      technologies: ['IoT', 'Sensors', 'Microcontrollers', 'Real-time Systems'],
      features: [
        'Multi-sensor real-time fire detection',
        'Automated emergency door control',
        'Instant mobile notifications',
        'Cloud-based monitoring dashboard',
        'Integration with building management systems',
      ],
      status: 'Capstone Project',
      color: 'from-red-500 to-orange-500',
    }
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-darker-navy to-darkest-navy relative overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-electric-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-down">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-electric-blue mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my most impactful engineering projects, blending technical precision
            with innovation to solve real-world challenges.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-dark-navy/50 rounded-xl shadow-lg border border-gray-700 
                         backdrop-blur-sm overflow-hidden relative hover:shadow-2xl 
                         hover:shadow-gold-500/10 hover:border-gold-400/50 transition-all duration-500
                         transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient accent line */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

              {/* Card content */}
              <div className="p-8">
                {/* Icon + title */}
                <div className="flex items-center mb-6">
                  <div
                    className={`bg-gradient-to-r ${project.color} p-3 rounded-lg mr-4 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <project.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gold-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gold-500 font-medium">{project.status}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-gray-400 text-sm flex items-start group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <span className="text-gold-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-electric-blue/20 text-electric-blue px-3 py-1 rounded-full 
                                 text-sm font-medium border border-electric-blue/30
                                 hover:bg-electric-blue/30 hover:border-electric-blue/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
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

              {/* Hover highlight effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-400/20 rounded-xl transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
