import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darkest-navy text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Emmanuel Kiprono Ngetich</h3>
            <p className="text-gray-400">Electrical & Telecommunications Engineer</p>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 flex items-center justify-center space-x-1">
              <span>&copy; 2024 Emmanuel Kiprono Ngetich. Made with</span>
              <Heart className="text-red-500 fill-current" size={16} />
              <span>and passion for engineering excellence.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;