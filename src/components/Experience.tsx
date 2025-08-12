import { MapPin, Calendar, Award, Users, Zap, Settings } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    {
      icon: Zap,
      title: 'Power Systems Analysis',
      description: 'Conducted comprehensive analysis of electrical distribution networks and power quality assessments'
    },
    {
      icon: Settings,
      title: 'Equipment Maintenance',
      description: 'Assisted in preventive and corrective maintenance of transmission and distribution equipment'
    },
    {
      icon: Users,
      title: 'Field Operations Support',
      description: 'Collaborated with field teams on installation and commissioning of electrical infrastructure'
    },
    {
      icon: Award,
      title: 'Safety Compliance',
      description: 'Ensured adherence to safety protocols and industry standards in all operational activities'
    }
  ];

  const achievements = [
    'Successfully completed comprehensive power systems training program',
    'Contributed to reducing equipment downtime by 15% through proactive maintenance',
    'Developed technical documentation for maintenance procedures',
    'Participated in customer service improvement initiatives'
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-dark-navy to-darker-navy">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Professional Experience
          </h2>
          
          <div className="bg-gradient-to-br from-darker-navy/50 to-gold-900/10 rounded-2xl p-8 shadow-lg border border-gold-500/20 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
              <div className="lg:w-1/3 mb-8 lg:mb-0">
                <div className="bg-dark-navy/50 rounded-xl p-6 shadow-md border border-gray-700">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Engineering Intern
                    </h3>
                    <h4 className="text-lg font-semibold text-gold-600 mb-3">
                      Kenya Power & Lighting Company
                    </h4>
                    
                    <div className="flex items-center justify-center text-gray-400 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">Industrial Attachment</span>
                    </div>
                    
                    <div className="flex items-center justify-center text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">Nairobi, Kenya</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3 space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Key Responsibilities</h4>
                  <div className="grid gap-4">
                    {responsibilities.map((item, index) => (
                      <div
                        key={index}
                        className="bg-dark-navy/30 rounded-lg p-4 shadow-sm hover:shadow-md hover:shadow-gold-500/10 transition-all duration-300 border border-gray-700 hover:border-gold-400/50"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="bg-gradient-to-r from-electric-blue to-gold-500 p-2 rounded-lg flex-shrink-0">
                            <item.icon className="text-white" size={16} />
                          </div>
                          <div>
                            <h5 className="font-semibold text-white mb-1">{item.title}</h5>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Key Achievements</h4>
                  <div className="bg-dark-navy/30 rounded-lg p-6 shadow-sm border border-gray-700">
                    <ul className="space-y-3">
                      {achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <span className="text-gold-500 mr-3 mt-1">★</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-electric-blue to-gold-500 rounded-lg p-6 text-white">
                  <h4 className="text-lg font-semibold mb-3">Experience Summary</h4>
                  <p className="leading-relaxed">
                    My internship at Kenya Power & Lighting Company provided invaluable hands-on experience 
                    in the electrical power industry. Working with experienced engineers, I gained deep insights 
                    into power systems operations, maintenance protocols, and the critical role of reliable 
                    electricity infrastructure in national development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;