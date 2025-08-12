import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    alert('Message sent successfully! I\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'emmanuel.ngetich@email.com',
      link: 'mailto:emmanuel.ngetich@email.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+254 700 123 456',
      link: 'tel:+254700123456'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Nairobi, Kenya',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', link: '#', color: 'hover:text-blue-600' },
    { icon: Github, name: 'GitHub', link: '#', color: 'hover:text-gray-800' },
    { icon: Mail, name: 'Email', link: 'mailto:emmanuel.ngetich@email.com', color: 'hover:text-red-600' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-darkest-navy via-darker-navy to-dark-navy text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Let's Work Together
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gold-400">Get in Touch</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and collaborations in the field of electrical and telecommunications engineering. 
                  Let's connect and explore how we can work together.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-gold-400/50"
                  >
                    <div className="bg-gold-500 p-3 rounded-lg">
                      <item.icon className="text-dark-navy" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-gray-300">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gold-400">Connect on Social</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className={`bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-gold-400/50 ${social.color}`}
                      title={social.name}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold mb-6 text-gold-400">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 text-white placeholder-gray-400 resize-none transition-all duration-300"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-dark-navy font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gold-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;