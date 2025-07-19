import React from 'react';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  TrendingUp, 
  Shield, 
  Cog, 
  Database, 
  Cpu,
  CheckCircle,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models tailored to your specific business needs and data.',
      features: [
        'Predictive Analytics',
        'Recommendation Systems',
        'Fraud Detection',
        'Demand Forecasting'
      ],
      color: 'blue'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced text analysis and conversational AI solutions.',
      features: [
        'Chatbots & Virtual Assistants',
        'Sentiment Analysis',
        'Document Processing',
        'Language Translation'
      ],
      color: 'green'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Visual recognition and analysis powered by deep learning.',
      features: [
        'Object Detection',
        'Image Classification',
        'Facial Recognition',
        'Quality Inspection'
      ],
      color: 'purple'
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence',
      description: 'Transform data into actionable insights with AI-powered analytics.',
      features: [
        'Data Visualization',
        'Performance Dashboards',
        'Automated Reporting',
        'Trend Analysis'
      ],
      color: 'orange'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Build robust data pipelines and infrastructure for AI initiatives.',
      features: [
        'Data Pipeline Design',
        'ETL Processes',
        'Data Lake Architecture',
        'Real-time Processing'
      ],
      color: 'indigo'
    },
    {
      icon: Cog,
      title: 'AI Strategy Consulting',
      description: 'Strategic guidance to integrate AI effectively into your business.',
      features: [
        'AI Readiness Assessment',
        'Implementation Roadmap',
        'ROI Optimization',
        'Change Management'
      ],
      color: 'red'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: '🏥',
      applications: ['Medical Imaging', 'Drug Discovery', 'Patient Care Optimization']
    },
    {
      name: 'Finance',
      icon: '💰',
      applications: ['Risk Assessment', 'Algorithmic Trading', 'Compliance Monitoring']
    },
    {
      name: 'Retail',
      icon: '🛒',
      applications: ['Inventory Management', 'Customer Personalization', 'Price Optimization']
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      applications: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization']
    },
    {
      name: 'Transportation',
      icon: '🚗',
      applications: ['Route Optimization', 'Autonomous Systems', 'Fleet Management']
    },
    {
      name: 'Energy',
      icon: '⚡',
      applications: ['Grid Optimization', 'Renewable Energy Forecasting', 'Energy Efficiency']
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-100',
      green: 'text-green-600 bg-green-100',
      purple: 'text-purple-600 bg-purple-100',
      orange: 'text-orange-600 bg-orange-100',
      indigo: 'text-indigo-600 bg-indigo-100',
      red: 'text-red-600 bg-red-100'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our AI Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Comprehensive AI solutions designed to transform your business operations and drive growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colorClasses = getColorClasses(service.color);
              
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden">
                  <div className="p-8">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClasses}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="mt-6 text-blue-600 font-semibold flex items-center hover:text-blue-700 transition-colors">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI solutions are tailored to meet the unique challenges across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                <div className="space-y-2">
                  {industry.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-600 text-sm">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to delivering successful AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600 text-sm">Understanding your business needs and identifying AI opportunities.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">Developing a comprehensive AI strategy aligned with your goals.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">Building and deploying AI solutions with rigorous testing.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">Continuous monitoring and improvement of AI performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI services can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;