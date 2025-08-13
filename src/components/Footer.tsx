import { Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darkest-navy text-gray-300 pt-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-gold mb-4">Emmanuel Kiprono Ngetich</h3>
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              Electrical & Telecommunications Engineer with expertise in
              IoT solutions, and advanced engineering projects. Committed to delivering
              high-quality, innovative solutions.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gold hover:text-darkest-navy transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gold hover:text-darkest-navy transition-colors">
                <Github size={16} />
              </a>
              <a href="mailto:email@example.com" className="p-2 bg-gray-800 rounded-lg hover:bg-gold hover:text-darkest-navy transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-gold transition-colors">Projects</a></li>
              <li><a href="#experience" className="hover:text-gold transition-colors">Experience</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Core Values */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Core Values</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-gold transition-colors">• Innovation</li>
              <li className="hover:text-gold transition-colors">• Integrity</li>
              <li className="hover:text-gold transition-colors">• Excellence</li>
              <li className="hover:text-gold transition-colors">• Collaboration</li>
              <li className="hover:text-gold transition-colors">• Sustainability</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={14} className="text-gold" />
                <span>email@example.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={14} className="text-gold" />
                <span>+254 707 321 345</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={14} className="text-gold" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="text-green-400 font-medium">Available for hire</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Emmanuel Kiprono Ngetich. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
