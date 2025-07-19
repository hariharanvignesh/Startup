import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react';

const NewsUpdates = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'company', 'technology', 'industry', 'research'];

  const newsItems = [
    {
      id: 1,
      title: 'JSH.AI Launches Advanced Computer Vision Platform',
      excerpt: 'Our new computer vision platform helps manufacturers achieve 99.5% accuracy in quality control processes.',
      content: 'We are excited to announce the launch of our revolutionary computer vision platform...',
      category: 'company',
      date: '2025-07-15',
      readTime: 5,
      author: 'JSH.AI Team',
      featured: true,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 2,
      title: 'The Future of Natural Language Processing in Enterprise',
      excerpt: 'Exploring how NLP is transforming business communications and customer service across industries.',
      content: 'Natural Language Processing has evolved rapidly in recent years...',
      category: 'technology',
      date: '2025-07-12',
      readTime: 8,
      author: 'Partner S',
      featured: false,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 3,
      title: 'AI Ethics: Building Responsible AI Solutions',
      excerpt: 'Our approach to ensuring AI systems are fair, transparent, and beneficial for all stakeholders.',
      content: 'At JSH.AI, we believe that responsible AI development is crucial...',
      category: 'research',
      date: '2025-07-10',
      readTime: 6,
      author: 'Partner J',
      featured: false,
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 4,
      title: 'Industry Report: AI Adoption in Healthcare',
      excerpt: 'Latest trends and insights on how healthcare organizations are implementing AI solutions.',
      content: 'The healthcare industry continues to lead in AI adoption...',
      category: 'industry',
      date: '2025-07-08',
      readTime: 12,
      author: 'Partner H',
      featured: false,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 5,
      title: 'JSH.AI Expands Partnership Network',
      excerpt: 'New strategic partnerships with leading tech companies to enhance our AI service offerings.',
      content: 'We are pleased to announce several new strategic partnerships...',
      category: 'company',
      date: '2025-07-05',
      readTime: 4,
      author: 'JSH.AI Team',
      featured: false,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 6,
      title: 'Machine Learning Model Optimization Techniques',
      excerpt: 'Best practices for improving model performance and reducing computational costs.',
      content: 'Optimizing machine learning models is crucial for production deployment...',
      category: 'technology',
      date: '2025-07-03',
      readTime: 10,
      author: 'Partner J',
      featured: false,
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop&crop=center'
    }
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  const featuredNews = newsItems.find(item => item.featured);
  const otherNews = filteredNews.filter(item => !item.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      company: 'bg-blue-100 text-blue-800',
      technology: 'bg-green-100 text-green-800',
      industry: 'bg-purple-100 text-purple-800',
      research: 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Updates</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Stay informed about the latest developments in AI and our company updates.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredNews && activeCategory === 'all' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="lg:grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(featuredNews.category)}`}>
                      Featured
                    </span>
                    <span className={`ml-2 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(featuredNews.category)}`}>
                      {featuredNews.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredNews.title}</h2>
                  <p className="text-gray-600 text-lg mb-6">{featuredNews.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredNews.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{formatDate(featuredNews.date)}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{featuredNews.readTime} min read</span>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
                <div className="lg:aspect-square">
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherNews.map(article => (
              <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{article.readTime} min</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{formatDate(article.date)}</span>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center text-sm">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter to receive the latest AI insights and company updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsUpdates;