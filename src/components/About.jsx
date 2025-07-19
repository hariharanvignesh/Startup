import React from 'react';
import { Users, Award, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  const partners = [
    {
      initial: 'J',
      name: 'Founding Partner J',
      role: 'Chief AI Strategist',
      expertise: 'Machine Learning & Data Science',
      description: 'Leading AI research and strategy development with over 8 years of experience in enterprise AI solutions.',
      color: 'bg-blue-500'
    },
    {
      initial: 'S',
      name: 'Founding Partner S',
      role: 'Chief Technology Officer',
      expertise: 'AI Engineering & Infrastructure',
      description: 'Specializes in scalable AI architecture and deployment with extensive experience in cloud-based AI systems.',
      color: 'bg-green-500'
    },
    {
      initial: 'H',
      name: 'Founding Partner H',
      role: 'Chief Innovation Officer',
      expertise: 'AI Product Development & UX',
      description: 'Focuses on translating AI capabilities into user-friendly solutions that drive business value.',
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About JSH.AI</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
              We are a team of passionate AI experts dedicated to helping businesses harness the power of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize artificial intelligence by making cutting-edge AI solutions accessible, 
                practical, and transformative for businesses of all sizes. We believe that AI should 
                enhance human capabilities, not replace them.
              </p>
              <p className="text-lg text-gray-600">
                Our vision is to be the leading AI consultancy that bridges the gap between theoretical 
                AI research and real-world business applications, creating sustainable value for our clients 
                and their customers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Globe className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Global Reach</h3>
                <p className="text-gray-600 text-sm">Serving clients worldwide with innovative AI solutions</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <Award className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">Committed to delivering the highest quality AI solutions</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <Lightbulb className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">Constantly pushing the boundaries of what's possible with AI</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <Users className="h-8 w-8 text-orange-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600 text-sm">Working closely with clients to achieve their goals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Founding Partners</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three visionaries united by a shared passion for AI and commitment to excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8 text-center">
                  <div className={`w-20 h-20 ${partner.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl font-bold text-white">{partner.initial}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                  <div className="text-blue-600 font-semibold mb-2">{partner.role}</div>
                  <div className="text-gray-600 font-medium mb-4">{partner.expertise}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Precision</h3>
              <p className="text-gray-600">Every solution is crafted with meticulous attention to detail and accuracy.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-gray-600">Open communication and clear expectations in all our client relationships.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">Continuously exploring new frontiers in AI to deliver cutting-edge solutions.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Impact</h3>
              <p className="text-gray-600">Focused on delivering measurable results that drive real business value.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Learning</h3>
              <p className="text-gray-600">Committed to continuous learning and staying at the forefront of AI advancement.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">Setting the highest standards for quality in every project we undertake.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;