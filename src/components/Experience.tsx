import { MapPin, Calendar, Award, Users, Zap, Settings } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    {
      icon: Zap,
      title: 'Power Systems Analysis',
      description:
        'Conducted detailed evaluations of electrical distribution networks, identifying performance bottlenecks and improving power quality metrics.',
    },
    {
      icon: Settings,
      title: 'Equipment Maintenance',
      description:
        'Performed preventive and corrective maintenance on transmission and distribution assets, extending operational lifespan.',
    },
    {
      icon: Users,
      title: 'Field Operations Support',
      description:
        'Collaborated with multidisciplinary teams on the installation and commissioning of large-scale electrical infrastructure.',
    },
    {
      icon: Award,
      title: 'Safety Compliance',
      description:
        'Championed adherence to industry safety protocols, ensuring a zero-incident record during attachment period.',
    },
  ];

  const achievements = [
    'Completed comprehensive power systems training program with distinction',
    'Reduced equipment downtime by 15% via proactive maintenance strategies',
    'Created technical manuals for critical maintenance procedures',
    'Enhanced customer satisfaction through service improvement initiatives',
  ];

  return (
    <section
      id="experience"
      className="relative py-20 bg-gradient-to-br from-dark-navy to-darker-navy overflow-hidden"
    >
      {/* Decorative Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.08),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white relative inline-block">
            Professional Experience
            <span className="block w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            My hands-on experience in the electrical power industry has shaped my technical expertise and problem-solving skills — from high-voltage maintenance to real-time power systems analysis.
          </p>
        </div>

        <div className="bg-dark-navy/60 rounded-2xl border border-gold-500/30 shadow-lg shadow-gold-500/5 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:shadow-gold-500/20">
          <div className="grid md:grid-cols-3">
            {/* Role Overview */}
            <div className="p-8 flex flex-col items-center justify-center bg-gradient-to-br from-dark-navy to-darker-navy border-b md:border-b-0 md:border-r border-gold-500/20">
              <div className="w-20 h-20 bg-gradient-to-br from-electric-blue to-gold-500 rounded-full flex items-center justify-center shadow-lg shadow-gold-500/20 mb-6 animate-fade-in">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Engineering Intern</h3>
              <h4 className="text-lg font-semibold text-gold-500 mb-4 text-center">
                Kenya Power & Lighting Company
              </h4>
              <div className="flex items-center text-gray-400 text-sm mb-1">
                <Calendar size={16} className="mr-2" /> Industrial Attachment
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <MapPin size={16} className="mr-2" /> Nairobi, Kenya
              </div>
            </div>

            {/* Responsibilities */}
            <div className="p-8 md:col-span-2">
              <h4 className="text-xl font-semibold text-white mb-6 border-b border-gold-500/20 pb-2">
                Key Responsibilities
              </h4>
              <div className="grid sm:grid-cols-2 gap-6">
                {responsibilities.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-dark-navy/30 rounded-lg p-5 border border-gray-700 hover:border-gold-400/50 hover:shadow-lg hover:shadow-gold-500/10 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-electric-blue to-gold-500 text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                        <item.icon size={18} />
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">{item.title}</h5>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <h4 className="text-xl font-semibold text-white mt-10 mb-4 border-b border-gold-500/20 pb-2">
                Key Achievements
              </h4>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-300 group hover:text-white transition-colors duration-300"
                  >
                    <span className="text-gold-500 mr-3 mt-1">★</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-gradient-to-r from-electric-blue/10 to-gold-500/10 p-8 border-t border-gold-500/20">
            <p className="text-white leading-relaxed text-center max-w-4xl mx-auto">
              This experience honed my ability to work in high-stakes environments where precision, reliability, and safety are paramount. From diagnosing power system inefficiencies to hands-on field operations, I developed a solid technical foundation that continues to guide my engineering career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
