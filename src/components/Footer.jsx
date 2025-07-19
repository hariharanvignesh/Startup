import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
  ArrowRight,
  Brain,
  Send
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Machine Learning', href: '/services/ml' },
        { name: 'Natural Language Processing', href: '/services/nlp' },
        { name: 'Computer Vision', href: '/services/cv' },
        { name: 'Business Intelligence', href: '/services/bi' },
        { name: 'Data Engineering', href: '/services/data' },
        { name: 'AI Strategy Consulting', href: '/services/consulting' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Partners', href: '/partners' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Blog', href: '/blog' },
        { name: 'Whitepapers', href: '/resources' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Support Center', href: '/support' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Security', href: '/security' },
        { name: 'Compliance', href: '/compliance' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/jshai', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/jshai', color: 'hover:text-sky-500' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/jshai', color: 'hover:text-blue-700' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/jshai', color: 'hover:text-pink-600' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/jshai', color: 'hover:text-red-600' }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription submitted');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with AI Innovations</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI trends, best practices, and industry updates delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                onClick={handleNewsletterSubmit}
                className="bg-gray-900 text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 transition-colors flex items-center"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-2 rounded-lg mr-3">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold">JS.HAI</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through cutting-edge AI solutions. We specialize in machine learning, 
              natural language processing, and intelligent automation to drive innovation and growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3 text-blue-500" />
                <span>hello@jshai.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3 text-blue-500" />
                <span>123 Innovation Drive, Tech Valley, CA 94043</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications & Awards */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold mb-6">Trusted & Certified</h3>
            <div className="flex justify-center items-center space-x-8 flex-wrap">
              <div className="bg-gray-800 px-4 py-2 rounded-lg mb-4">
                <span className="text-sm font-medium">ISO 27001</span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-lg mb-4">
                <span className="text-sm font-medium">SOC 2 Type II</span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-lg mb-4">
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-lg mb-4">
                <span className="text-sm font-medium">AWS Partner</span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-lg mb-4">
                <span className="text-sm font-medium">Google Cloud Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-gray-400 text-sm">
                © {currentYear} JS.HAI. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Sitemap
                </a>
                <a href="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Accessibility
                </a>
                <a href="/status" className="text-gray-400 hover:text-white text-sm transition-colors">
                  System Status
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors p-2 hover:bg-gray-800 rounded-lg`}
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Back to top"
      >
        <ArrowRight className="h-5 w-5 transform -rotate-90" />
      </button>
    </footer>
  );
};

export default Footer;